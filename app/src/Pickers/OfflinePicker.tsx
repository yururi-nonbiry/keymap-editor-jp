import React, { useState, useCallback } from 'react';
import ValidationErrors from './Github/ValidationErrors';
import { parseKeymap, parseKeymapDts } from '../keymapGenerator';

interface OfflinePickerProps {
  onSelect: (data: any) => void;
}

function OfflinePicker({ onSelect }: OfflinePickerProps) {
  const [layoutData, setLayoutData] = useState<any[] | null>(null);
  const [keymapData, setKeymapData] = useState<any | null>(null);
  const [error, setError] = useState<{ name: string; errors: string[] } | null>(null);

  const handleLayoutChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
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
        setLayoutData(null);
      }
    };
    reader.readAsText(file);
  }, [setLayoutData, setError]);

  const handleKeymapChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
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
        setKeymapData(parsed);
        setError(null);
      } catch (err: any) {
        setError({ name: 'Keymap File Error', errors: [err.message] });
        setKeymapData(null);
      }
    };
    reader.readAsText(file);
  }, [setKeymapData, setError]);

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
    <div className="offline-picker" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <label style={{ fontSize: '0.8em', whiteSpace: 'nowrap' }}>Layout (info.json):</label>
        <input type="file" accept=".json" onChange={handleLayoutChange} style={{ fontSize: '0.8em', width: '150px' }} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <label style={{ fontSize: '0.8em', whiteSpace: 'nowrap' }}>Keymap (.json/.keymap):</label>
        <input type="file" accept=".json,.keymap" onChange={handleKeymapChange} style={{ fontSize: '0.8em', width: '150px' }} />
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
          padding: '4px 8px',
          backgroundColor: layoutData && keymapData ? '#007bff' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: layoutData && keymapData ? 'pointer' : 'not-allowed',
          fontSize: '0.8em'
        }}
      >
        Load
      </button>
    </div>
  );
}

export default OfflinePicker;
