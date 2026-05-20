import React, { useMemo } from 'react';
import KeyboardLayout from './KeyboardLayout';
import { JIS_LAYOUT, US_LAYOUT } from '../data/standard-layouts';
import { KeyBinding } from '../shared/keymapUtils';

interface KeyPaletteProps {
  layoutType: string;
}

function KeyPalette({ layoutType }: KeyPaletteProps) {
  const layout = layoutType === 'JP' ? JIS_LAYOUT : US_LAYOUT;

  const bindings = useMemo<KeyBinding[]>(() => {
    return layout.map(key => ({
      value: `&kp`,
      params: [
        { value: key.code, params: [] }
      ]
    }));
  }, [layout]);

  const handleUpdate = () => {
    // Palette is read-only for updates
  };

  // Calculate bounding box to set wrapper height/width
  const boundingBox = useMemo(() => {
    return layout.reduce((acc, key) => {
      const w = key.w || 1;
      const h = key.h || 1;
      return {
        x: Math.max(acc.x, key.x + w),
        y: Math.max(acc.y, key.y + h)
      };
    }, { x: 0, y: 0 });
  }, [layout]);

  // Using key-units logic for scaling
  const width = boundingBox.x * 70; // rough estimate
  const height = boundingBox.y * 70;

  return (
    <div className="key-palette" style={{ marginTop: '50px', borderTop: '1px solid #ccc', padding: '20px', overflowX: 'auto' }}>
      <h3 style={{ textAlign: 'center' }}>Key Palette (Drag and drop keys to the keyboard above)</h3>
      <div style={{ 
        width: `${width}px`, 
        height: `${height}px`, 
        margin: '0 auto', 
        position: 'relative',
        transform: 'scale(0.7)',
        transformOrigin: 'top center'
      }}>
        <KeyboardLayout
          layout={layout}
          bindings={bindings}
          onUpdate={handleUpdate}
        />
      </div>
    </div>
  );
}

export default KeyPalette;
