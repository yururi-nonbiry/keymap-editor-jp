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
import SavedSessions from './SavedSessions';
import { generateKeymap } from './keymapGenerator';
import { Keymap } from './shared/keymapUtils';
import pkg from '../package.json';

interface Session {
  source: string | null;
  sourceOther: any | null;
  layout: any[] | null;
  keymap: Keymap | null;
  editingKeymap: Keymap | null;
}

function App() {
  const [definitions, setDefinitions] = useState<any>(null);

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
  const [saving, setSaving] = useState(false);
  const [keyboardLayout, setKeyboardLayout] = useState(localStorage.getItem('keyboardLayout') || 'US');

  // Autosave session to localStorage
  useEffect(() => {
    if (source || layout || keymap || editingKeymap) {
      const session = {
        source,
        sourceOther,
        layout,
        keymap,
        editingKeymap
      };
      localStorage.setItem('keymap-editor:last-session', JSON.stringify(session));
    } else {
      localStorage.removeItem('keymap-editor:last-session');
    }
  }, [source, sourceOther, layout, keymap, editingKeymap]);

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

  const handleKeyboardSelected = useCallback((event: any) => {
    if (typeof event === 'string') {
      setSource(event);
      setLayout(null);
      setKeymap(null);
      setEditingKeymap(null);
      return;
    }
    const { source, layout: selectedLayout, keymap: selectedKeymap, ...other } = event;

    setSource(source);
    setSourceOther(other);
    setLayout(selectedLayout);
    setKeymap(selectedKeymap);
    setEditingKeymap(null);
  }, [
    setSource,
    setSourceOther,
    setLayout,
    setKeymap,
    setEditingKeymap
  ]);

  const handleLoadSession = useCallback((session: Session) => {
    setSource(session.source);
    setSourceOther(session.sourceOther);
    setLayout(session.layout);
    setKeymap(session.keymap);
    setEditingKeymap(session.editingKeymap);
  }, [setSource, setSourceOther, setLayout, setKeymap, setEditingKeymap]);

  const initialize = useCallback(async () => {
    const [keycodes, behaviours] = await Promise.all([
      loadKeycodes(),
      loadBehaviours()
    ]);

    (keycodes as any).indexed = keyBy(keycodes, 'code');
    (behaviours as any).indexed = keyBy(behaviours, 'code');

    setDefinitions({ keycodes, behaviours });
  }, [setDefinitions]);

  const handleUpdateKeymap = useCallback((updatedKeymap: Keymap) => {
    setEditingKeymap(updatedKeymap);
  }, [setEditingKeymap]);

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
            <KeyboardPicker onSelect={handleKeyboardSelected} hasKeyboardLoaded={hasKeyboardLoaded} />
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
            <SavedSessions
              currentSession={{ source, sourceOther, layout, keymap, editingKeymap }}
              onLoadSession={handleLoadSession}
            />
          </div>

          <div id="actions" style={{ display: 'flex', gap: '10px' }}>
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
        <DefinitionsContext.Provider value={translatedDefinitions}>
          {layout && (editingKeymap || keymap) && (
            <Keyboard
              layout={layout}
              keymap={(editingKeymap || keymap) as Keymap}
              onUpdate={handleUpdateKeymap}
              keyboardLayoutType={keyboardLayout}
            />
          )}
        </DefinitionsContext.Provider>
      </Loader>
      <div className="footer">
        <GitHubLink className="github-link" />
        <span className="version">v{pkg.version}</span>
      </div>
    </>
  );
}

export default App;
