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

interface PendingSaveData {
  timestamp: string;
  source: string | null;
  sourceOther: any | null;
  layout: any[] | null;
  keymap: any | null;
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
      setShowConflictDialog(false);
      setConflictSession(null);
      setConflictNewName('');
      setPendingSaveData(null);
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

        let maxLayoutY = 0;
        layout.forEach((item: any) => {
          if (item && typeof item.y === 'number') {
            const itemH = item.h || 1;
            if (item.y + itemH > maxLayoutY) {
              maxLayoutY = item.y + itemH;
            }
          }
        });

        const mapEncoder = (enc: any, idx: number) => {
          const w = enc.w || 1;
          const h = enc.h || 1;
          const x = (typeof enc.x === 'number') ? enc.x : idx * 1.5;
          const y = (typeof enc.y === 'number') ? enc.y : maxLayoutY + 0.5;
          return {
            ...enc,
            x,
            y,
            w,
            h,
            isEncoder: true,
            label: enc.label || `Encoder ${idx + 1}`
          };
        };

        let encoders: any[] = [];
        if (json.encoders && Array.isArray(json.encoders)) {
          encoders = json.encoders.map(mapEncoder);
        } else if (json.encoder?.rotary && Array.isArray(json.encoder.rotary)) {
          encoders = json.encoder.rotary.map(mapEncoder);
        } else if (json.sensors && Array.isArray(json.sensors)) {
          encoders = json.sensors.map(mapEncoder);
        }

        setLocalLayoutData([...layout, ...encoders]);
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
        let json: any;
        if (file.name.toLowerCase().endsWith('.keymap')) {
          json = parseKeymapDts(content);
          json.originalCode = content;
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

  // --- Duplicate Session Conflict State ---
  const [showConflictDialog, setShowConflictDialog] = useState(false);
  const [conflictSession, setConflictSession] = useState<SavedSessionData | null>(null);
  const [conflictNewName, setConflictNewName] = useState('');
  const [pendingSaveData, setPendingSaveData] = useState<PendingSaveData | null>(null);

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

    const saveData: PendingSaveData = {
      timestamp: now,
      source,
      sourceOther,
      layout,
      keymap: editingKeymap || keymap
    };

    const existingSession = sessions.find(s => s.name === finalName);

    if (existingSession) {
      setConflictSession(existingSession);
      setConflictNewName(`${finalName} (新しい名称)`);
      setPendingSaveData(saveData);
      setShowConflictDialog(true);
    } else {
      const newSession: SavedSessionData = {
        id: Date.now().toString(),
        name: finalName,
        timestamp: saveData.timestamp,
        source: saveData.source,
        sourceOther: saveData.sourceOther,
        layout: saveData.layout,
        keymap: saveData.keymap,
        editingKeymap: null
      };

      const updatedSessions = [newSession, ...sessions];
      setSessions(updatedSessions);
      localStorage.setItem('keymap-editor:saved-sessions', JSON.stringify(updatedSessions));
      setSessionName('');
    }
  }, [currentSession, sessions, sessionName, formatDate]);

  const handleOverwrite = useCallback(() => {
    if (!conflictSession || !pendingSaveData) return;

    const updatedSessions = sessions.map(session => {
      if (session.id === conflictSession.id) {
        return {
          ...session,
          timestamp: pendingSaveData.timestamp,
          source: pendingSaveData.source,
          sourceOther: pendingSaveData.sourceOther,
          layout: pendingSaveData.layout,
          keymap: pendingSaveData.keymap,
          editingKeymap: null
        };
      }
      return session;
    });

    setSessions(updatedSessions);
    localStorage.setItem('keymap-editor:saved-sessions', JSON.stringify(updatedSessions));
    
    setShowConflictDialog(false);
    setConflictSession(null);
    setPendingSaveData(null);
    setSessionName('');
  }, [sessions, conflictSession, pendingSaveData]);

  const handleRenameAndSave = useCallback(() => {
    const finalName = conflictNewName.trim();
    if (!finalName || !pendingSaveData) return;

    const anotherConflict = sessions.find(s => s.name === finalName);
    if (anotherConflict) {
      alert(`「${finalName}」は既に存在します。別の名前を入力してください。`);
      return;
    }

    const newSession: SavedSessionData = {
      id: Date.now().toString(),
      name: finalName,
      timestamp: pendingSaveData.timestamp,
      source: pendingSaveData.source,
      sourceOther: pendingSaveData.sourceOther,
      layout: pendingSaveData.layout,
      keymap: pendingSaveData.keymap,
      editingKeymap: null
    };

    const updatedSessions = [newSession, ...sessions];
    setSessions(updatedSessions);
    localStorage.setItem('keymap-editor:saved-sessions', JSON.stringify(updatedSessions));

    setShowConflictDialog(false);
    setConflictSession(null);
    setPendingSaveData(null);
    setSessionName('');
  }, [sessions, conflictNewName, pendingSaveData]);

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
    <>
      <Modal>
        <DialogBox onDismiss={onClose} dismissText="" className="file-session-dialog">
        <div className="unified-modal-content">
          {/* Left Column: File selection */}
          <div className="unified-modal-column">
            <h3 className="unified-modal-column-title">
              <i className="fas fa-file-upload icon-upload"></i> ファイル選択 / File Selection
            </h3>
            <p className="unified-modal-subtitle">
              レイアウトとキーマップの設定ファイルをアップロードしてエディタを初期化します。
            </p>

            <div className="modern-file-picker-grid">
              <div 
                className={`modern-file-card ${localLayoutFileName ? 'active' : ''}`}
                onClick={() => layoutInputRef.current?.click()}
              >
                <div className="modern-file-card-icon">
                  <i className={`fas ${localLayoutFileName ? 'fa-keyboard' : 'fa-file-code'}`}></i>
                </div>
                <div className="modern-file-card-details">
                  <span className="modern-file-card-label">Layout Info</span>
                  <span className="modern-file-card-name" title={localLayoutFileName || '選択されていません'}>
                    {localLayoutFileName || 'info.json を選択'}
                  </span>
                </div>
                <input 
                  ref={layoutInputRef}
                  type="file" 
                  accept=".json" 
                  onChange={handleLayoutChange} 
                  style={{ display: 'none' }} 
                />
              </div>

              <div 
                className={`modern-file-card ${localKeymapFileName ? 'active' : ''}`}
                onClick={() => keymapInputRef.current?.click()}
              >
                <div className="modern-file-card-icon">
                  <i className={`fas ${localKeymapFileName ? 'fa-file-signature' : 'fa-code-branch'}`}></i>
                </div>
                <div className="modern-file-card-details">
                  <span className="modern-file-card-label">Keymap File</span>
                  <span className="modern-file-card-name" title={localKeymapFileName || '選択されていません'}>
                    {localKeymapFileName || '.json / .keymap'}
                  </span>
                </div>
                <input 
                  ref={keymapInputRef}
                  type="file" 
                  accept=".json,.keymap" 
                  onChange={handleKeymapChange} 
                  style={{ display: 'none' }} 
                />
              </div>
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
                style={{ width: '100%' }}
              >
                <i className="fas fa-file-import" style={{ marginRight: '6px' }}></i> ファイルを読み込む
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
            <p className="unified-modal-subtitle">
              現在のエディタの状態をブラウザのローカルストレージにスナップショットとして保存・復元できます。
            </p>

            <div className="saved-sessions-save-form">
              <input
                type="text"
                placeholder="セーブデータ名を入力..."
                value={sessionName}
                onChange={(e) => setSessionName(e.target.value)}
                disabled={!hasLoadedKeyboard}
                className="saved-sessions-input"
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
              <div className="saved-sessions-empty">
                <div className="empty-icon">
                  <i className="fas fa-folder-open"></i>
                </div>
                <div className="empty-text">セーブデータはありません</div>
                <div className="empty-subtext">現在のエディタ状態をブラウザに一時保存できます。</div>
              </div>
            ) : (
              <div className="saved-sessions-list">
                {sessions.map((session) => (
                  <div key={session.id} className="saved-sessions-item">
                    <div className="saved-sessions-item-info">
                      <div className="saved-sessions-item-name" title={session.name}>
                        {session.name}
                      </div>
                      <div className="saved-sessions-item-meta">
                        <span className={`source-tag source-${session.source || 'upload'}`}>
                          {getSourceLabel(session)}
                        </span>
                        <span className="time-tag">
                          <i className="far fa-clock" style={{ marginRight: '4px' }}></i>
                          {formatDate(session.timestamp)}
                        </span>
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
        <div className="modal-actions">
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
    {showConflictDialog && (
      <Modal>
        <div className="dialog-box conflict-dialog" style={{ maxWidth: '450px' }}>
          <h3 className="unified-modal-column-title" style={{ color: '#ef4444' }}>
            <i className="fas fa-exclamation-triangle" style={{ color: '#ef4444', background: 'none', WebkitTextFillColor: 'initial' }}></i>
            セーブデータの重複 / Save Name Conflict
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#475569', margin: '12px 0 20px 0', lineHeight: '1.6' }}>
            セーブデータ <strong>「{conflictSession?.name}」</strong> は既に存在します。上書きしますか？それとも別の名前で保存しますか？
          </p>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', color: '#64748b', marginBottom: '8px' }}>
              別の名前で保存する場合の名前:
            </label>
            <input
              type="text"
              value={conflictNewName}
              onChange={(e) => setConflictNewName(e.target.value)}
              className="saved-sessions-input"
              style={{ width: '100%', boxSizing: 'border-box' }}
              placeholder="新しい名前を入力..."
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '24px' }}>
            <button
              type="button"
              onClick={handleOverwrite}
              className="btn-modal-load"
              style={{ width: '100%', background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', boxShadow: '0 4px 14px rgba(239, 68, 68, 0.3)' }}
            >
              <i className="fas fa-redo-alt"></i> 上書き保存する / Overwrite
            </button>

            <button
              type="button"
              onClick={handleRenameAndSave}
              disabled={!conflictNewName.trim() || conflictNewName.trim() === conflictSession?.name}
              className="btn-save-session"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <i className="fas fa-edit"></i> 別の名前で保存する / Save As New Name
            </button>

            <button
              type="button"
              onClick={() => {
                setShowConflictDialog(false);
                setConflictSession(null);
                setPendingSaveData(null);
              }}
              className="btn-modal-cancel"
              style={{ width: '100%', marginTop: '4px' }}
            >
              キャンセル / Cancel
            </button>
          </div>
        </div>
      </Modal>
    )}
  </>
  );
}
