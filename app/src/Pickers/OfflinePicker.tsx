import React, { useState, useCallback } from 'react';
import ValidationErrors from './Github/ValidationErrors';
import { parseKeymap, parseKeymapDts } from '../keymapGenerator';

interface OfflinePickerProps {
  onSelect: (data: any) => void;
}

function OfflinePicker({ onSelect }: OfflinePickerProps) {
  const [layoutFile, setLayoutFile] = useState<File | null>(null);
  const [keymapFile, setKeymapFile] = useState<File | null>(null);
  const [layoutData, setLayoutData] = useState<any[] | null>(null);
  const [keymapData, setKeymapData] = useState<any | null>(null);
  const [error, setError] = useState<{ name: string; errors: string[] } | null>(null);

  const handleLayoutChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLayoutFile(file);
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

        setLayoutData(layout);
        setError(null);
      } catch (err: any) {
        setError({ name: 'Layout File Error', errors: [err.message] });
        setLayoutFile(null);
        setLayoutData(null);
      }
    };
    reader.readAsText(file);
  }, [setLayoutFile, setLayoutData, setError]);

  const handleKeymapChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setKeymapFile(file);
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

        if (!json.layers || !Array.isArray(json.layers)) {
          throw new Error('Invalid keymap file. Must contain a "layers" array or ZMK bindings.');
        }

        const parsed = parseKeymap(json);
        setKeymapData(parsed);
        setError(null);
      } catch (err: any) {
        setError({ name: 'Keymap File Error', errors: [err.message] });
        setKeymapFile(null);
        setKeymapData(null);
      }
    };
    reader.readAsText(file);
  }, [setKeymapFile, setKeymapData, setError]);

  const handleLoad = useCallback(() => {
    if (layoutData && keymapData) {
      onSelect({
        layout: layoutData,
        keymap: keymapData,
        source: 'upload'
      });
    }
  }, [layoutData, keymapData, onSelect]);

  return (
    <div className="offline-picker" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <h3>Offline Mode - File Upload</h3>
      <p style={{ fontSize: '0.9em', color: '#666' }}>
        Please upload your layout (info.json) and keymap (keymap.json or .keymap) files to start editing offline.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label style={{ fontWeight: 'bold' }}>Keyboard Layout File (info.json):</label>
        <input type="file" accept=".json" onChange={handleLayoutChange} />
        {layoutFile && <span style={{ color: 'green', fontSize: '0.85em' }}>✓ Loaded: {layoutFile.name}</span>}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label style={{ fontWeight: 'bold' }}>Keymap File (keymap.json or .keymap):</label>
        <input type="file" accept=".json,.keymap" onChange={handleKeymapChange} />
        {keymapFile && <span style={{ color: 'green', fontSize: '0.85em' }}>✓ Loaded: {keymapFile.name}</span>}
      </div>

      {error && (
        <ValidationErrors
          title={error.name}
          errors={error.errors}
          onDismiss={() => setError(null)}
        />
      )}

      <button
        disabled={!layoutData || !keymapData}
        onClick={handleLoad}
        style={{
          padding: '10px 15px',
          backgroundColor: layoutData && keymapData ? '#007bff' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: layoutData && keymapData ? 'pointer' : 'not-allowed',
          marginTop: '10px'
        }}
      >
        Load Keymap Editor
      </button>
    </div>
  );
}

export default OfflinePicker;
