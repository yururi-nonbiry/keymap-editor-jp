import React, { useMemo, useState, useContext, useEffect } from 'react';
import KeyboardLayout from './KeyboardLayout';
import { JIS_LAYOUT, US_LAYOUT, PaletteLayoutItem } from '../data/standard-layouts';
import { KeyBinding } from '../shared/keymapUtils';
import { SearchContext } from '../providers';
import Icon from '../Common/Icon';
import styles from './styles.module.css';

interface KeyPaletteProps {
  layoutType: string;
}

type PaletteTab = 'keys' | 'layers' | 'behaviors';

function KeyPalette({ layoutType: initialLayoutType }: KeyPaletteProps) {
  const { sources } = useContext(SearchContext);
  const [tab, setTab] = useState<PaletteTab>('keys');
  const [layoutType, setLayoutType] = useState(initialLayoutType);

  useEffect(() => {
    setLayoutType(initialLayoutType);
  }, [initialLayoutType]);

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
    <div className={styles['key-palette-container']}>
      <div className={styles['key-palette-header']}>
        <h3 className={styles['key-palette-title']}>Key Palette</h3>
        <p className={styles['key-palette-subtitle']}>Drag and drop keys to the keyboard above</p>
      </div>
      
      <div className={styles['segmented-control-wrapper']}>
        <div className={styles['segmented-control']}>
          <button 
            onClick={() => { setTab('keys'); setLayoutType('US'); }} 
            className={`${styles['segmented-control-button']} ${(tab === 'keys' && layoutType === 'US') ? styles.active : ''}`}
          >
            <Icon name="keyboard" />
            US Keys
          </button>
          <button 
            onClick={() => { setTab('keys'); setLayoutType('JP'); }} 
            className={`${styles['segmented-control-button']} ${(tab === 'keys' && layoutType === 'JP') ? styles.active : ''}`}
          >
            <Icon name="keyboard" />
            JIS Keys
          </button>
          <button 
            onClick={() => setTab('layers')} 
            className={`${styles['segmented-control-button']} ${tab === 'layers' ? styles.active : ''}`}
          >
            <Icon name="layer-group" />
            Layers
          </button>
          <button 
            onClick={() => setTab('behaviors')} 
            className={`${styles['segmented-control-button']} ${tab === 'behaviors' ? styles.active : ''}`}
          >
            <Icon name="sliders" />
            Behaviors
          </button>
        </div>
      </div>

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
