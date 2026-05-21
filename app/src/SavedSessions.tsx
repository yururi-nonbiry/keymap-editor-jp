import React, { useState, useEffect, useCallback } from 'react';
import Modal from './Common/Modal';
import DialogBox from './Common/DialogBox';

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

interface SavedSessionsProps {
  currentSession: {
    source: string | null;
    sourceOther: any | null;
    layout: any[] | null;
    keymap: any | null;
    editingKeymap: any | null;
  };
  onLoadSession: (session: SavedSessionData) => void;
}

function SavedSessions({ currentSession, onLoadSession }: SavedSessionsProps) {
  const [sessions, setSessions] = useState<SavedSessionData[]>([]);
  const [sessionName, setSessionName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load saved sessions from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('keymap-editor:saved-sessions');
    if (saved) {
      try {
        setSessions(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load saved sessions', e);
      }
    }
  }, []);

  // Format date to local Japanese style YYYY/MM/DD HH:mm:ss
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

  // Save current active session
  const handleSave = useCallback(() => {
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
      editingKeymap: null // save as baseline keymap
    };

    const updatedSessions = [newSession, ...sessions];
    setSessions(updatedSessions);
    localStorage.setItem('keymap-editor:saved-sessions', JSON.stringify(updatedSessions));
    setSessionName('');
  }, [currentSession, sessions, sessionName, formatDate]);

  // Delete a saved session
  const handleDelete = useCallback((id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const confirmDelete = window.confirm('このセーブデータを削除しますか？');
    if (!confirmDelete) return;

    const updatedSessions = sessions.filter(session => session.id !== id);
    setSessions(updatedSessions);
    localStorage.setItem('keymap-editor:saved-sessions', JSON.stringify(updatedSessions));
  }, [sessions]);

  // Get human-readable source label
  const getSourceLabel = useCallback((session: SavedSessionData) => {
    if (session.source === 'local') return 'Local';
    if (session.source === 'github') {
      const repo = session.sourceOther?.github?.repository || 'GitHub';
      return `GitHub (${repo})`;
    }
    return 'Upload';
  }, []);

  const hasLoadedKeyboard = !!currentSession.layout && (!!currentSession.keymap || !!currentSession.editingKeymap);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="btn-saved-sessions-toggle"
        title="セーブデータの保存と読み込み"
      >
        <i className="fas fa-history"></i> セーブデータ管理 (Snapshots)
      </button>

      {isModalOpen && (
        <Modal>
          <DialogBox onDismiss={() => setIsModalOpen(false)} dismissText="">
            <div className="saved-sessions-modal-content">
              <div className="saved-sessions-header" style={{ marginBottom: '10px' }}>
                <i className="fas fa-history icon-title"></i>
                <span style={{ fontWeight: 600, color: '#2c3e50', fontSize: '1.1rem' }}>
                  セーブデータ管理 (Snapshots)
                </span>
              </div>

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
                  onClick={handleSave}
                  disabled={!hasLoadedKeyboard}
                  className="btn-save-session"
                  title="現在の状態をブラウザに保存"
                >
                  <i className="fas fa-save"></i> 保存
                </button>
              </div>

              {sessions.length === 0 ? (
                <div className="saved-sessions-empty">
                  保存されたセーブデータはありません。
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
                          <span className="source-tag">{getSourceLabel(session)}</span>
                          <span className="time-tag">{formatDate(session.timestamp)}</span>
                        </div>
                      </div>
                      <div className="saved-sessions-item-actions">
                        <button
                          onClick={() => {
                            onLoadSession(session);
                            setIsModalOpen(false);
                          }}
                          className="btn-load-session"
                          title="このデータを読み込む"
                        >
                          <i className="fas fa-folder-open"></i> 読込
                        </button>
                        <button
                          onClick={(e) => handleDelete(session.id, e)}
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

              <div className="modal-actions" style={{ marginTop: '15px' }}>
                <button 
                  type="button" 
                  className="btn-modal-cancel" 
                  onClick={() => setIsModalOpen(false)}
                >
                  閉じる
                </button>
              </div>
            </div>
          </DialogBox>
        </Modal>
      )}
    </>
  );
}

export default SavedSessions;
