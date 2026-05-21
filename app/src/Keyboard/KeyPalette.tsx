import React, { useMemo, useState, useContext } from 'react';
import KeyboardLayout from './KeyboardLayout';
import { JIS_LAYOUT, US_LAYOUT, PaletteLayoutItem } from '../data/standard-layouts';
import { KeyBinding } from '../shared/keymapUtils';
import { SearchContext } from '../providers';

interface KeyPaletteProps {
  layoutType: string;
}

type PaletteTab = 'keys' | 'layers' | 'behaviors';

function KeyPalette({ layoutType: initialLayoutType }: KeyPaletteProps) {
  const { sources } = useContext(SearchContext);
  const [tab, setTab] = useState<PaletteTab>('keys');
  const [layoutType, setLayoutType] = useState(initialLayoutType);

  const { layout, bindings } = useMemo(() => {
    if (tab === 'keys') {
      const l = layoutType === 'JP' ? JIS_LAYOUT : US_LAYOUT;
      const b = l.map(key => ({
        value: '&kp',
        params: [{ value: key.code, params: [] }]
      }));
      return { layout: l, bindings: b };
    }

    if (tab === 'layers') {
      const layerBehaviors = ['&mo', '&to', '&tog', '&sl', '&lt'];
      const layers = Object.values(sources.layer || {});
      const l: PaletteLayoutItem[] = [];
      const b: KeyBinding[] = [];

      layers.forEach((layer: any, rowIndex) => {
        layerBehaviors.forEach((behavior, colIndex) => {
          l.push({
            x: colIndex * 1.5,
            y: rowIndex,
            w: 1.5,
            label: `${behavior.replace('&', '')} ${layer.description}`,
            code: ''
          });
          b.push({
            value: behavior,
            params: [{ value: layer.code, params: [] }]
          });
        });
      });
      return { layout: l, bindings: b };
    }

    if (tab === 'behaviors') {
      const behaviors = ['&kp', '&mt', '&lt', '&mo', '&to', '&tog', '&sl', '&none', '&trans', '&bootloader', '&sys_reset', '&bt', '&ext_power', '&rgb_ug', '&bl'];
      const l: PaletteLayoutItem[] = [];
      const b: KeyBinding[] = [];

      behaviors.forEach((behavior, i) => {
        l.push({
          x: (i % 6) * 1.5,
          y: Math.floor(i / 6),
          w: 1.5,
          label: behavior,
          code: ''
        });
        b.push({
          value: behavior,
          params: []
        });
      });
      return { layout: l, bindings: b };
    }

    return { layout: [], bindings: [] };
  }, [tab, layoutType, sources.layer]);

  const handleUpdate = () => {
    // Palette is read-only for updates
  };

  // Calculate bounding box to set wrapper height/width
  const boundingBox = useMemo(() => {
    return (layout as PaletteLayoutItem[]).reduce((acc, key) => {
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
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => setTab('keys')} style={{ fontWeight: tab === 'keys' ? 'bold' : 'normal' }}>Keys</button>
        <button onClick={() => setTab('layers')} style={{ fontWeight: tab === 'layers' ? 'bold' : 'normal' }}>Layers</button>
        <button onClick={() => setTab('behaviors')} style={{ fontWeight: tab === 'behaviors' ? 'bold' : 'normal' }}>Behaviors</button>
      </div>

      {tab === 'keys' && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
          <button onClick={() => setLayoutType('US')} style={{ fontWeight: layoutType === 'US' ? 'bold' : 'normal' }}>US</button>
          <button onClick={() => setLayoutType('JP')} style={{ fontWeight: layoutType === 'JP' ? 'bold' : 'normal' }}>JIS</button>
        </div>
      )}

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
