import '@fortawesome/fontawesome-free/css/all.css';
import keyBy from 'lodash/keyBy';
import React, { useCallback, useMemo, useState, useEffect } from 'react';

import * as config from './config';
import './App.css';
import { DefinitionsContext } from './providers';
import { loadKeycodes } from './keycodes';
import { loadBehaviours } from './api';
// @ts-ignore
import KeyboardPicker from './Pickers/KeyboardPicker';
import Spinner from './Common/Spinner';
import Keyboard from './Keyboard/Keyboard';
import GitHubLink from './GitHubLink';
import Loader from './Common/Loader';
// @ts-ignore
import github from './Pickers/Github/api';
// @ts-ignore
import Selector from './Common/Selector';
import { getJpDefinitions } from './jpLayout';
// @ts-ignore
import FileAndSessionModal from './Pickers/FileAndSessionModal';
import { generateKeymap } from './keymapGenerator';
import { Keymap } from './shared/keymapUtils';
import pkg from '../package.json';

interface Session {
  source: string | null;
  sourceOther: any | null;
  layout: any[] | null;
  keymap: Keymap | null;
  editingKeymap: Keymap | null;
  layoutFileName?: string | null;
  keymapFileName?: string | null;
}

const isSameKeymap = (a: Keymap | null, b: Keymap | null) => {
  if (a === b) return true;
  if (!a || !b) return false;
  return JSON.stringify(a) === JSON.stringify(b);
};

function App() {
  const [definitions, setDefinitions] = useState<any>(null);
  const [past, setPast] = useState<Keymap[]>([]);
  const [future, setFuture] = useState<Keymap[]>([]);

  // Retrieve saved session on initial render
  const savedSession = useMemo<Session | null>(() => {
    const saved = localStorage.getItem('keymap-editor:last-session');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse last session from storage', e);
      }
    }
    return null;
  }, []);

  const [source, setSource] = useState<string | null>(savedSession?.source || null);
  const [sourceOther, setSourceOther] = useState<any | null>(savedSession?.sourceOther || null);
  const [layout, setLayout] = useState<any[] | null>(savedSession?.layout || null);
  const [keymap, setKeymap] = useState<Keymap | null>(savedSession?.keymap || null);
  const [editingKeymap, setEditingKeymap] = useState<Keymap | null>(savedSession?.editingKeymap || null);
  const [layoutFileName, setLayoutFileName] = useState<string | null>(savedSession?.layoutFileName || null);
  const [keymapFileName, setKeymapFileName] = useState<string | null>(savedSession?.keymapFileName || null);
  const [saving, setSaving] = useState(false);
  const [keyboardLayout, setKeyboardLayout] = useState(localStorage.getItem('keyboardLayout') || 'US');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Autosave session to localStorage
  useEffect(() => {
    if (source || layout || keymap || editingKeymap) {
      // Strip conn from sourceOther to prevent serialization error
      const cleanSourceOther = sourceOther ? { ...sourceOther } : null;
      if (cleanSourceOther && cleanSourceOther.conn) {
        delete cleanSourceOther.conn;
      }
      const session = {
        source,
        sourceOther: cleanSourceOther,
        layout,
        keymap,
        editingKeymap,
        layoutFileName,
        keymapFileName
      };
      try {
        localStorage.setItem('keymap-editor:last-session', JSON.stringify(session));
      } catch (e) {
        console.error('Failed to serialize session', e);
      }
    } else {
      localStorage.removeItem('keymap-editor:last-session');
    }
  }, [source, sourceOther, layout, keymap, editingKeymap, layoutFileName, keymapFileName]);

  const handleLayoutChange = useCallback((newLayout: string) => {
    setKeyboardLayout(newLayout);
    localStorage.setItem('keyboardLayout', newLayout);
  }, [setKeyboardLayout]);

  const translatedDefinitions = useMemo(() => {
    if (!definitions) return null;
    if (keyboardLayout === 'JP') {
      return getJpDefinitions(definitions);
    }
    return definitions;
  }, [definitions, keyboardLayout]);

  const contextValue = useMemo(() => {
    if (!translatedDefinitions) return { keycodes: { indexed: {} }, behaviours: { indexed: {} } };
    return {
      ...translatedDefinitions,
      rawDefinitions: definitions
    };
  }, [translatedDefinitions, definitions]);

  function handleCompile() {
    fetch(`${config.apiBaseUrl}/keymap`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editingKeymap || keymap)
    });
  }

  const handleCommitChanges = useCallback(() => {
    if (!sourceOther?.github) return;
    const { repository, branch } = sourceOther.github;

    (async function () {
      setSaving(true);
      await github.commitChanges(repository, branch, layout, editingKeymap);
      setSaving(false);

      setKeymap(editingKeymap);
      setEditingKeymap(null);
    })();
  }, [
    layout,
    editingKeymap,
    sourceOther,
    setSaving,
    setKeymap,
    setEditingKeymap
  ]);

  const handleWriteToKeyboard = useCallback(async () => {
    const conn = sourceOther?.conn;
    const currentKeymap = editingKeymap;
    const originalKeymap = keymap;
    
    if (!conn || !currentKeymap || !originalKeymap || !layout) return;

    setSaving(true);
    try {
      const { callRpc, encodeParameter, saveChanges } = await import('./api/zmkStudioService');
      const { zmk } = await import('./proto/proto');

      for (let layerIndex = 0; layerIndex < currentKeymap.layers.length; layerIndex++) {
        const originalLayer = originalKeymap.layers[layerIndex] || [];
        const currentLayer = currentKeymap.layers[layerIndex] || [];
        
        for (let keyIndex = 0; keyIndex < currentLayer.length; keyIndex++) {
          const originalBind = originalLayer[keyIndex];
          const currentBind = currentLayer[keyIndex];
          
          if (JSON.stringify(originalBind) !== JSON.stringify(currentBind)) {
            const behaviorName = currentBind.value;
            const behaviorId = conn.behaviorNameToId[behaviorName];
            
            if (behaviorId === undefined) {
              console.warn(`Behavior ${behaviorName} is not registered on the keyboard. Skipping.`);
              continue;
            }

            const param1Str = currentBind.params[0]?.value || '';
            const param2Str = currentBind.params[1]?.value || '';
            const param1 = param1Str ? encodeParameter(behaviorName, 1, param1Str) : 0;
            const param2 = param2Str ? encodeParameter(behaviorName, 2, param2Str) : 0;

            console.log(`Writing change: Layer ${layerIndex}, Key ${keyIndex}, Behavior ${behaviorName} (${behaviorId}), Params: ${param1}, ${param2}`);
            
            await callRpc(conn, {
              keymap: zmk.keymap.Request.create({
                setLayerBinding: {
                  layerId: layerIndex,
                  keyPosition: keyIndex,
                  binding: {
                    behaviorId,
                    param1,
                    param2
                  }
                }
              })
            });
          }
        }
      }

      await saveChanges(conn);
      
      setKeymap(editingKeymap);
      setEditingKeymap(null);
    } catch (e: any) {
      console.error('Failed to write changes to keyboard', e);
      alert(`書き込みに失敗しました: ${e.message || e}`);
    } finally {
      setSaving(false);
    }
  }, [layout, keymap, editingKeymap, sourceOther, setSaving, setKeymap, setEditingKeymap]);

  const handleDownloadKeymapJSON = useCallback(() => {
    const currentKeymap = editingKeymap || keymap;
    if (!currentKeymap || !layout) return;

    const generated = generateKeymap(layout, currentKeymap);
    const blob = new Blob([generated.json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'keymap.json';
    link.click();
    URL.revokeObjectURL(url);
  }, [layout, keymap, editingKeymap]);

  const handleDownloadKeymapDTS = useCallback(() => {
    const currentKeymap = editingKeymap || keymap;
    if (!currentKeymap || !layout) return;

    const generated = generateKeymap(layout, currentKeymap);
    const blob = new Blob([generated.code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'keymap.keymap';
    link.click();
    URL.revokeObjectURL(url);
  }, [layout, keymap, editingKeymap]);

  const normalizeKeymap = useCallback((layout: any[] | null, keymap: Keymap | null): Keymap | null => {
    if (!layout || !keymap) return keymap;
    const isEncoder = (key: any) => !!(key.isEncoder || key.encoder || key.type === 'encoder' || key.variant === 'encoder');
    
    // Determine encoder count by taking the maximum of:
    // 1. Encoders defined in the layout array
    // 2. The maximum number of sensor bindings configured in any keymap layer
    const maxSensorsInBindings = keymap.sensor_bindings
      ? Math.max(0, ...keymap.sensor_bindings.map(layer => layer?.length || 0))
      : 0;
    const encoderCount = Math.max(layout.filter(isEncoder).length, maxSensorsInBindings);
    
    const defaultNames = ['JIS', 'US', 'Fn', 'Bluetooth'];
    const layerNames = keymap.layer_names || keymap.layers.map((_, i) => defaultNames[i] || `Layer ${i}`);
    
    let sensor_bindings = keymap.sensor_bindings || [];
    if (encoderCount > 0) {
      sensor_bindings = keymap.layers.map((_, i) => {
        const layerSensors = sensor_bindings[i] || [];
        const paddedLayer = [...layerSensors];
        while (paddedLayer.length < encoderCount) {
          paddedLayer.push({ value: i === 0 ? '&none' : '&trans', params: [] });
        }
        return paddedLayer.slice(0, encoderCount);
      });
    } else {
      sensor_bindings = [];
    }

    return {
      ...keymap,
      layer_names: layerNames,
      sensor_bindings
    };
  }, []);

  const handleKeyboardSelected = useCallback((event: any) => {
    if (typeof event === 'string') {
      setSource(event);
      setLayout(null);
      setKeymap(null);
      setEditingKeymap(null);
      setLayoutFileName(null);
      setKeymapFileName(null);
      setPast([]);
      setFuture([]);
      return;
    }
    const { source, layout: selectedLayout, keymap: selectedKeymap, layoutFileName, keymapFileName, ...other } = event;

    const normalizedKeymap = normalizeKeymap(selectedLayout, selectedKeymap);

    setSource(source);
    setSourceOther(other);
    setLayout(selectedLayout);
    setKeymap(normalizedKeymap);
    setEditingKeymap(null);
    if (source === 'upload') {
      setLayoutFileName(layoutFileName || null);
      setKeymapFileName(keymapFileName || null);
    } else {
      setLayoutFileName(null);
      setKeymapFileName(null);
    }
    setPast([]);
    setFuture([]);
  }, [
    setSource,
    setSourceOther,
    setLayout,
    setKeymap,
    setEditingKeymap,
    setLayoutFileName,
    setKeymapFileName,
    setPast,
    setFuture,
    normalizeKeymap
  ]);

  const handleLoadSession = useCallback((session: Session) => {
    const normalizedKeymap = session.keymap ? normalizeKeymap(session.layout || [], session.keymap) : null;
    const normalizedEditingKeymap = session.editingKeymap ? normalizeKeymap(session.layout || [], session.editingKeymap) : null;

    setSource(session.source);
    setSourceOther(session.sourceOther);
    setLayout(session.layout);
    setKeymap(normalizedKeymap);
    setEditingKeymap(normalizedEditingKeymap);
    setLayoutFileName(session.layoutFileName || null);
    setKeymapFileName(session.keymapFileName || null);
    setPast([]);
    setFuture([]);
  }, [setSource, setSourceOther, setLayout, setKeymap, setEditingKeymap, setLayoutFileName, setKeymapFileName, setPast, setFuture, normalizeKeymap]);

  const getDisplayCode = useCallback((code: string) => {
    if (!code) return code;
    let clean = code.startsWith('&') ? code.slice(1) : code;
    clean = clean.toUpperCase();
    if (clean === 'SL') return 'OSL';
    if (clean === 'TOG') return 'TG';
    return clean;
  }, []);

  const initialize = useCallback(async () => {
    const [keycodes, behaviours] = await Promise.all([
      loadKeycodes(),
      loadBehaviours()
    ]);

    behaviours.forEach((b: any) => {
      b.displayName = getDisplayCode(b.code);
    });

    (keycodes as any).indexed = keyBy(keycodes, 'code');
    (behaviours as any).indexed = keyBy(behaviours, 'code');

    setDefinitions({ keycodes, behaviours });
  }, [setDefinitions, getDisplayCode]);

  const handleUpdateKeymap = useCallback((updatedKeymap: Keymap) => {
    const currentState = editingKeymap || keymap;
    const normalized = normalizeKeymap(layout, updatedKeymap) || updatedKeymap;
    if (currentState && !isSameKeymap(currentState, normalized)) {
      setPast(prev => [...prev, currentState]);
      setFuture([]);
    }
    setEditingKeymap(normalized);
  }, [editingKeymap, keymap, layout, normalizeKeymap, setPast, setFuture]);

  const handleUndo = useCallback(() => {
    if (past.length === 0) return;
    const previous = past[past.length - 1];
    const newPast = past.slice(0, past.length - 1);

    const current = editingKeymap || keymap;
    if (current) {
      setFuture(prev => [current, ...prev]);
    }

    setPast(newPast);
    setEditingKeymap(previous);
  }, [past, editingKeymap, keymap, setPast, setFuture, setEditingKeymap]);

  const handleRedo = useCallback(() => {
    if (future.length === 0) return;
    const next = future[0];
    const newFuture = future.slice(1);

    const current = editingKeymap || keymap;
    if (current) {
      setPast(prev => [...prev, current]);
    }

    setFuture(newFuture);
    setEditingKeymap(next);
  }, [future, editingKeymap, keymap, setPast, setFuture, setEditingKeymap]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const isCmdOrCtrl = isMac ? event.metaKey : event.ctrlKey;

      if (isCmdOrCtrl) {
        if (event.key.toLowerCase() === 'z') {
          event.preventDefault();
          if (event.shiftKey) {
            handleRedo();
          } else {
            handleUndo();
          }
        } else if (event.key.toLowerCase() === 'y') {
          event.preventDefault();
          handleRedo();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleUndo, handleRedo]);

  const hasKeyboardLoaded = useMemo(() => {
    return !!layout && (!!keymap || !!editingKeymap);
  }, [layout, keymap, editingKeymap]);

  return (
    <>
      <Loader load={initialize}>
        <div className="top-nav" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: '20px', 
          padding: '10px 20px',
          backgroundColor: '#f8f9fa',
          borderBottom: '1px solid #dee2e6',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <KeyboardPicker
              onSelect={handleKeyboardSelected}
              hasKeyboardLoaded={hasKeyboardLoaded}
              layoutFileName={layoutFileName}
              keymapFileName={keymapFileName}
              onOpenFileModal={() => setIsModalOpen(true)}
            />
            <Selector
              id="keyboard-layout"
              label="Layout Type"
              value={keyboardLayout}
              choices={[
                { id: 'US', name: 'US' },
                { id: 'JP', name: 'JIS' }
              ]}
              onUpdate={handleLayoutChange}
            />
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-saved-sessions-toggle"
              title="セーブデータの保存と読み込み"
            >
              <i className="fas fa-history"></i> セーブデータ管理 (Snapshots)
            </button>
            {hasKeyboardLoaded && (
              <div className="undo-redo-group">
                <button
                  className="btn-undo"
                  onClick={handleUndo}
                  disabled={past.length === 0}
                  title="Undo (Ctrl+Z)"
                >
                  <i className="fas fa-undo"></i> 元に戻す
                </button>
                <button
                  className="btn-redo"
                  onClick={handleRedo}
                  disabled={future.length === 0}
                  title="Redo (Ctrl+Y / Ctrl+Shift+Z)"
                >
                  <i className="fas fa-redo"></i> やり直す
                </button>
              </div>
            )}
          </div>

          <div id="actions" style={{ display: 'flex', gap: '10px' }}>
            {hasKeyboardLoaded && (
              <button
                onClick={() => window.print()}
                className="btn-export-pdf"
                title="各レイヤーの配置をPDFに書き出す"
              >
                <i className="fas fa-file-pdf"></i> PDF書き出し
              </button>
            )}
            {source === 'local' && (
              <button disabled={!editingKeymap} onClick={handleCompile}>
                Save Local
              </button>
            )}
            {source === 'github' && (
              <button
                title="Commit keymap changes to GitHub repository"
                disabled={!editingKeymap}
                onClick={handleCommitChanges}
              >
                {saving ? 'Saving' : 'Commit Changes'}
                {saving && <Spinner />}
              </button>
            )}
            {(source === 'usb' || source === 'ble') && (
              <button
                title="Write keymap changes directly to the keyboard"
                disabled={!editingKeymap || saving}
                onClick={handleWriteToKeyboard}
                style={{
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                {saving ? (
                  <>
                    <i className="fas fa-spinner fa-spin" style={{ marginRight: '8px' }} />
                    書き込み中...
                  </>
                ) : (
                  <>
                    <i className="fas fa-keyboard" style={{ marginRight: '8px' }} />
                    キーボードに保存
                  </>
                )}
              </button>
            )}
            {source === 'upload' && (
              <>
                <button disabled={!(editingKeymap || keymap)} onClick={handleDownloadKeymapJSON}>
                  JSON
                </button>
                <button disabled={!(editingKeymap || keymap)} onClick={handleDownloadKeymapDTS}>
                  .keymap
                </button>
              </>
            )}
          </div>
        </div>
        <DefinitionsContext.Provider value={contextValue}>
          {layout && (editingKeymap || keymap) && (
            <Keyboard
              layout={layout}
              keymap={(editingKeymap || keymap) as Keymap}
              onUpdate={handleUpdateKeymap}
              keyboardLayoutType={keyboardLayout}
            />
          )}
        </DefinitionsContext.Provider>
        <FileAndSessionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          layoutFileName={layoutFileName}
          keymapFileName={keymapFileName}
          onSelectFiles={handleKeyboardSelected}
          currentSession={{ source, sourceOther, layout, keymap, editingKeymap }}
          onLoadSession={handleLoadSession}
        />
      </Loader>
      <div className="footer">
        <GitHubLink className="github-link" />
        <span className="version">v{pkg.version}</span>
      </div>
    </>
  );
}

export default App;
