import React, { useState, useCallback, useRef } from 'react';
import Modal from '../Common/Modal';
import DialogBox from '../Common/DialogBox';
import ValidationErrors from './Github/ValidationErrors';
import { parseKeymap, parseKeymapDts } from '../keymapGenerator';

interface OfflinePickerProps {
  onSelect: (data: any) => void;
  layoutFileName: string | null;
  keymapFileName: string | null;
}

function OfflinePicker({ onSelect, layoutFileName, keymapFileName }: OfflinePickerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localLayoutData, setLocalLayoutData] = useState<any[] | null>(null);
  const [localKeymapData, setLocalKeymapData] = useState<any | null>(null);
  const [localLayoutFileName, setLocalLayoutFileName] = useState<string | null>(null);
  const [localKeymapFileName, setLocalKeymapFileName] = useState<string | null>(null);
  const [error, setError] = useState<{ name: string; errors: string[] } | null>(null);

  const layoutInputRef = useRef<HTMLInputElement>(null);
  const keymapInputRef = useRef<HTMLInputElement>(null);

  const handleOpenModal = useCallback(() => {
    // Reset local selection when opening modal, but keep the currently loaded file names
    setLocalLayoutData(null);
    setLocalKeymapData(null);
    setLocalLayoutFileName(layoutFileName);
    setLocalKeymapFileName(keymapFileName);
    setError(null);
    setIsModalOpen(true);
  }, [layoutFileName, keymapFileName]);

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
        setError(null);
      } catch (err: any) {
        setError({ name: 'Layout File Error', errors: [err.message] });
        setLocalLayoutData(null);
        setLocalLayoutFileName(null);
      }
    };
    reader.readAsText(file);
  }, [setLocalLayoutData, setLocalLayoutFileName, setError]);

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
        setError(null);
      } catch (err: any) {
        setError({ name: 'Keymap File Error', errors: [err.message] });
        setLocalKeymapData(null);
        setLocalKeymapFileName(null);
      }
    };
    reader.readAsText(file);
  }, [setLocalKeymapData, setLocalKeymapFileName, setError]);

  const handleLoad = useCallback(() => {
    if (localLayoutData && localKeymapData && localLayoutFileName && localKeymapFileName) {
      onSelect({
        layout: localLayoutData,
        keymap: localKeymapData,
        source: 'upload',
        layoutFileName: localLayoutFileName,
        keymapFileName: localKeymapFileName
      });
      setIsModalOpen(false);
    }
  }, [localLayoutData, localKeymapData, localLayoutFileName, localKeymapFileName, onSelect]);

  return (
    <div className="offline-picker" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <button
        onClick={handleOpenModal}
        className="btn-select-files"
      >
        <i className="fas fa-file-upload" /> ファイル選択
      </button>

      {isModalOpen && (
        <Modal>
          <DialogBox onDismiss={() => setIsModalOpen(false)} dismissText="">
            <h2 style={{ margin: '0 0 10px 0', fontSize: '1.4em', color: '#2c3e50', textAlign: 'center' }}>
              ファイル選択 / Select Files
            </h2>
            <p style={{ margin: '0 0 20px 0', fontSize: '0.9em', color: '#7f8c8d', textAlign: 'center' }}>
              Upload layout and keymap configuration files to initialize the editor.
            </p>

            <div className="modal-file-row">
              <label>Layout (info.json):</label>
              <button 
                type="button" 
                className="modal-file-button" 
                onClick={() => layoutInputRef.current?.click()}
              >
                ファイルを選択
              </button>
              <span className={`modal-file-name ${localLayoutFileName ? 'selected' : ''}`}>
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
              <label>Keymap (.json/.keymap):</label>
              <button 
                type="button" 
                className="modal-file-button" 
                onClick={() => keymapInputRef.current?.click()}
              >
                ファイルを選択
              </button>
              <span className={`modal-file-name ${localKeymapFileName ? 'selected' : ''}`}>
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

            {error && (
              <ValidationErrors
                title={error.name}
                errors={error.errors}
                onDismiss={() => setError(null)}
              />
            )}

            <div className="modal-actions">
              <button 
                type="button" 
                className="btn-modal-cancel" 
                onClick={() => setIsModalOpen(false)}
              >
                キャンセル
              </button>
              <button 
                type="button" 
                className="btn-modal-load" 
                disabled={!localLayoutData || !localKeymapData}
                onClick={handleLoad}
              >
                Load
              </button>
            </div>
          </DialogBox>
        </Modal>
      )}
    </div>
  );
}

export default OfflinePicker;
