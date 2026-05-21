import React, { useState, useEffect, useCallback, useRef } from 'react';
import Modal from '../Common/Modal';
import DialogBox from '../Common/DialogBox';
import ValidationErrors from './Github/ValidationErrors';
import { parseKeymap, parseKeymapDts } from '../keymapGenerator';

interface SavedSessionData {
  id: string;
  name: string;
  timestamp: string;
  source: string | null;
  sourceOther: any | null;
  layout: any[] | null;
  keymap: any | null;
  editingKeymap: any | null;
}

interface FileAndSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  layoutFileName: string | null;
  keymapFileName: string | null;
  onSelectFiles: (data: any) => void;
  currentSession: {
    source: string | null;
    sourceOther: any | null;
    layout: any[] | null;
    keymap: any | null;
    editingKeymap: any | null;
  };
  onLoadSession: (session: any) => void;
}

export default function FileAndSessionModal({
  isOpen,
  onClose,
  layoutFileName,
  keymapFileName,
  onSelectFiles,
  currentSession,
  onLoadSession
}: FileAndSessionModalProps) {
  // --- Offline Picker State ---
  const [localLayoutData, setLocalLayoutData] = useState<any[] | null>(null);
  const [localKeymapData, setLocalKeymapData] = useState<any | null>(null);
  const [localLayoutFileName, setLocalLayoutFileName] = useState<string | null>(layoutFileName);
  const [localKeymapFileName, setLocalKeymapFileName] = useState<string | null>(keymapFileName);
  const [fileError, setFileError] = useState<{ name: string; errors: string[] } | null>(null);

  const layoutInputRef = useRef<HTMLInputElement>(null);
  const keymapInputRef = useRef<HTMLInputElement>(null);

  // Reset local state when modal opens
  useEffect(() => {
    if (isOpen) {
      setLocalLayoutData(null);
      setLocalKeymapData(null);
      setLocalLayoutFileName(layoutFileName);
      setLocalKeymapFileName(keymapFileName);
      setFileError(null);
    }
  }, [isOpen, layoutFileName, keymapFileName]);

  const handleLayoutChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLocalLayoutFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      try {
        const result = event.target?.result as string;
        const json = JSON.parse(result);
        let layout = null;
        if (json.layouts) {
          const firstLayoutKey = Object.keys(json.layouts)[0];
          layout = json.layouts[firstLayoutKey].layout;
        } else if (Array.isArray(json)) {
          layout = json;
        } else if (json.layout) {
          layout = json.layout;
        }

        if (!layout || !Array.isArray(layout)) {
          throw new Error('Invalid layout JSON. Must define a "layouts" object or be a layouts array.');
        }

        setLocalLayoutData(layout);
        setFileError(null);
      } catch (err: any) {
        setFileError({ name: 'Layout File Error', errors: [err.message] });
        setLocalLayoutData(null);
        setLocalLayoutFileName(null);
      }
    };
    reader.readAsText(file);
  }, []);

  const handleKeymapChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLocalKeymapFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      try {
        const content = event.target?.result as string;
        let json;
        if (file.name.toLowerCase().endsWith('.keymap')) {
          json = parseKeymapDts(content);
        } else {
          json = JSON.parse(content);
        }

        if (!json.layers || !Array.isArray(json.layers) || json.layers.length === 0) {
          throw new Error('Invalid keymap file. Must contain a "layers" array or ZMK bindings. (No layers found)');
        }

        const parsed = parseKeymap(json);
        setLocalKeymapData(parsed);
        setFileError(null);
      } catch (err: any) {
        setFileError({ name: 'Keymap File Error', errors: [err.message] });
        setLocalKeymapData(null);
        setLocalKeymapFileName(null);
      }
    };
    reader.readAsText(file);
  }, []);

  const handleLoadFiles = useCallback(() => {
    if (localLayoutData && localKeymapData && localLayoutFileName && localKeymapFileName) {
      onSelectFiles({
        layout: localLayoutData,
        keymap: localKeymapData,
        source: 'upload',
        layoutFileName: localLayoutFileName,
        keymapFileName: localKeymapFileName
      });
      onClose();
    }
  }, [localLayoutData, localKeymapData, localLayoutFileName, localKeymapFileName, onSelectFiles, onClose]);

  // --- Saved Sessions State ---
  const [sessions, setSessions] = useState<SavedSessionData[]>([]);
  const [sessionName, setSessionName] = useState('');

  // Load saved sessions from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('keymap-editor:saved-sessions');
    if (saved) {
      try {
        setSessions(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load saved sessions', e);
      }
    }
  }, [isOpen]);

  const formatDate = useCallback((isoString: string) => {
    try {
      const date = new Date(isoString);
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, '0');
      const d = String(date.getDate()).padStart(2, '0');
      const h = String(date.getHours()).padStart(2, '0');
      const min = String(date.getMinutes()).padStart(2, '0');
      const s = String(date.getSeconds()).padStart(2, '0');
      return `${y}/${m}/${d} ${h}:${min}:${s}`;
    } catch (e) {
      return isoString;
    }
  }, []);

  const handleSaveSession = useCallback(() => {
    const { source, sourceOther, layout, keymap, editingKeymap } = currentSession;
    if (!layout || (!keymap && !editingKeymap)) return;

    const now = new Date().toISOString();
    const defaultName = `セーブデータ (${formatDate(now)})`;
    const finalName = sessionName.trim() || defaultName;

    const newSession: SavedSessionData = {
      id: Date.now().toString(),
      name: finalName,
      timestamp: now,
      source,
      sourceOther,
      layout,
      keymap: editingKeymap || keymap,
      editingKeymap: null
    };

    const updatedSessions = [newSession, ...sessions];
    setSessions(updatedSessions);
    localStorage.setItem('keymap-editor:saved-sessions', JSON.stringify(updatedSessions));
    setSessionName('');
  }, [currentSession, sessions, sessionName, formatDate]);

  const handleDeleteSession = useCallback((id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const confirmDelete = window.confirm('このセーブデータを削除しますか？');
    if (!confirmDelete) return;

    const updatedSessions = sessions.filter(session => session.id !== id);
    setSessions(updatedSessions);
    localStorage.setItem('keymap-editor:saved-sessions', JSON.stringify(updatedSessions));
  }, [sessions]);

  const getSourceLabel = useCallback((session: SavedSessionData) => {
    if (session.source === 'local') return 'Local';
    if (session.source === 'github') {
      const repo = session.sourceOther?.github?.repository || 'GitHub';
      return `GitHub (${repo})`;
    }
    return 'Upload';
  }, []);

  const hasLoadedKeyboard = !!currentSession.layout && (!!currentSession.keymap || !!currentSession.editingKeymap);

  if (!isOpen) return null;

  return (
    <Modal>
      <DialogBox onDismiss={onClose} dismissText="">
        <div className="unified-modal-content">
          {/* Left Column: File selection */}
          <div className="unified-modal-column">
            <h3 className="unified-modal-column-title">
              <i className="fas fa-file-upload icon-upload"></i> ファイル選択 / File Selection
            </h3>
            <p style={{ margin: '0 0 20px 0', fontSize: '0.85em', color: '#7f8c8d', lineHeight: '1.4' }}>
              レイアウトとキーマップの設定ファイルをアップロードしてエディタを初期化します。
            </p>

            <div className="modal-file-row">
              <label style={{ width: '130px' }}>Layout (info.json):</label>
              <button 
                type="button" 
                className="modal-file-button" 
                onClick={() => layoutInputRef.current?.click()}
              >
                ファイル選択
              </button>
              <span className={`modal-file-name ${localLayoutFileName ? 'selected' : ''}`} style={{ marginLeft: '10px' }}>
                {localLayoutFileName || '選択されていません'}
              </span>
              <input 
                ref={layoutInputRef}
                type="file" 
                accept=".json" 
                onChange={handleLayoutChange} 
                style={{ display: 'none' }} 
              />
            </div>

            <div className="modal-file-row">
              <label style={{ width: '130px' }}>Keymap (.json/.keymap):</label>
              <button 
                type="button" 
                className="modal-file-button" 
                onClick={() => keymapInputRef.current?.click()}
              >
                ファイル選択
              </button>
              <span className={`modal-file-name ${localKeymapFileName ? 'selected' : ''}`} style={{ marginLeft: '10px' }}>
                {localKeymapFileName || '選択されていません'}
              </span>
              <input 
                ref={keymapInputRef}
                type="file" 
                accept=".json,.keymap" 
                onChange={handleKeymapChange} 
                style={{ display: 'none' }} 
              />
            </div>

            {fileError && (
              <div style={{ marginTop: '10px' }}>
                <ValidationErrors
                  title={fileError.name}
                  errors={fileError.errors}
                  onDismiss={() => setFileError(null)}
                />
              </div>
            )}

            <div style={{ marginTop: 'auto', paddingTop: '15px' }}>
              <button 
                type="button" 
                className="btn-modal-load" 
                disabled={!localLayoutData || !localKeymapData}
                onClick={handleLoadFiles}
                style={{ width: '100%', padding: '10px' }}
              >
                ファイルを読み込む
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="unified-modal-divider"></div>

          {/* Right Column: Saved Sessions (Snapshots) */}
          <div className="unified-modal-column">
            <h3 className="unified-modal-column-title">
              <i className="fas fa-history icon-history"></i> セーブデータ管理 / Saved Sessions
            </h3>
            <p style={{ margin: '0 0 15px 0', fontSize: '0.85em', color: '#7f8c8d', lineHeight: '1.4' }}>
              現在のエディタの状態をブラウザのローカルストレージにスナップショットとして保存・復元できます。
            </p>

            <div className="saved-sessions-save-form" style={{ display: 'flex', gap: '6px', marginBottom: '15px' }}>
              <input
                type="text"
                placeholder="セーブデータ名を入力..."
                value={sessionName}
                onChange={(e) => setSessionName(e.target.value)}
                disabled={!hasLoadedKeyboard}
                className="saved-sessions-input"
                style={{ flex: 1 }}
              />
              <button
                onClick={handleSaveSession}
                disabled={!hasLoadedKeyboard}
                className="btn-save-session"
                title="現在の状態をブラウザに保存"
              >
                <i className="fas fa-save"></i> 保存
              </button>
            </div>

            {sessions.length === 0 ? (
              <div className="saved-sessions-empty" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                保存されたセーブデータはありません。
              </div>
            ) : (
              <div className="saved-sessions-list" style={{ flex: 1, maxHeight: '200px' }}>
                {sessions.map((session) => (
                  <div key={session.id} className="saved-sessions-item">
                    <div className="saved-sessions-item-info">
                      <div className="saved-sessions-item-name" title={session.name}>
                        {session.name}
                      </div>
                      <div className="saved-sessions-item-meta">
                        <span className="source-tag">{getSourceLabel(session)}</span>
                        <span className="time-tag">{formatDate(session.timestamp)}</span>
                      </div>
                    </div>
                    <div className="saved-sessions-item-actions">
                      <button
                        onClick={() => {
                          onLoadSession(session);
                          onClose();
                        }}
                        className="btn-load-session"
                        title="このデータを読み込む"
                      >
                        <i className="fas fa-folder-open"></i> 読込
                      </button>
                      <button
                        onClick={(e) => handleDeleteSession(session.id, e)}
                        className="btn-delete-session"
                        title="削除"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Global Footer Close button */}
        <div className="modal-actions" style={{ marginTop: '20px', paddingBottom: '0' }}>
          <button 
            type="button" 
            className="btn-modal-cancel" 
            onClick={onClose}
          >
            閉じる
          </button>
        </div>
      </DialogBox>
    </Modal>
  );
}
