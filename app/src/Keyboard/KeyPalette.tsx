import React, { useMemo, useState, useContext, useEffect, useCallback } from 'react';
import KeyboardLayout from './KeyboardLayout';
import { JIS_LAYOUT, US_LAYOUT, PaletteLayoutItem } from '../data/standard-layouts';
import { KeyBinding, parseKeyBinding } from '../shared/keymapUtils';
import { SearchContext, DefinitionsContext } from '../providers';
import { getJpDefinitions } from '../jpLayout';
import Icon from '../Common/Icon';
import styles from './styles.module.css';

interface KeyPaletteProps {
  layoutType: string;
}

type PaletteTab = 'keys' | 'layers' | 'behaviors' | 'bluetooth' | 'others';

function KeyPalette({ layoutType: initialLayoutType }: KeyPaletteProps) {
  const parentSearchContext = useContext(SearchContext);
  const { rawDefinitions, behaviours } = useContext(DefinitionsContext);
  const [tab, setTab] = useState<PaletteTab>('keys');
  const [layoutType, setLayoutType] = useState(initialLayoutType);
  const isJp = initialLayoutType === 'JP';

  const localKeycodes = useMemo(() => {
    if (!rawDefinitions) return [];
    return layoutType === 'JP' ? getJpDefinitions(rawDefinitions).keycodes : rawDefinitions.keycodes;
  }, [rawDefinitions, layoutType]);

  const standardCodes = useMemo(() => {
    const codes = new Set<string>();
    US_LAYOUT.forEach(k => { if (k.code) codes.add(k.code); });
    JIS_LAYOUT.forEach(k => { if (k.code) codes.add(k.code); });
    return codes;
  }, []);

  const otherKeycodes = useMemo(() => {
    if (!localKeycodes) return [];
    const seen = new Set<string>();
    const result: any[] = [];
    localKeycodes.forEach((kc: any) => {
      const hasCode = standardCodes.has(kc.code) || (kc.aliases && kc.aliases.some((alias: string) => standardCodes.has(alias)));
      if (!hasCode && !seen.has(kc.code)) {
        seen.add(kc.code);
        result.push(kc);
      }
    });
    return result;
  }, [localKeycodes, standardCodes]);

  const sources = useMemo(() => {
    if (!rawDefinitions) return parentSearchContext.sources;
    const modMap: Record<string, any> = {};
    localKeycodes.forEach((kc: any) => {
      if (kc.isModifier) {
        modMap[kc.code] = kc;
      }
    });
    return {
      kc: localKeycodes.indexed,
      code: localKeycodes.indexed,
      mod: modMap,
      behaviours: behaviours.indexed,
      layer: parentSearchContext.sources.layer
    };
  }, [localKeycodes, behaviours, parentSearchContext.sources, rawDefinitions]);

  const searchTargets = useMemo(() => {
    return {
      behaviour: Object.values(behaviours.indexed || {}),
      layer: Object.values(parentSearchContext.sources.layer || {}),
      mod: localKeycodes.filter((kc: any) => kc.isModifier),
      code: localKeycodes
    };
  }, [behaviours, localKeycodes, parentSearchContext.sources.layer]);

  const getSearchTargets = useCallback((param: any, behaviourName: string) => {
    if (param.enum) {
      return param.enum.map((v: string) => ({ code: v }));
    }

    if (param === 'command') {
      return sources.behaviours?.[behaviourName]?.commands || [];
    }

    return (searchTargets as any)[param] || [];
  }, [searchTargets, sources]);

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
            x: rowIndex * 1.5,
            y: colIndex,
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
      const behaviors = ['&kp', '&mt', '&lt', '&mo', '&to', '&tog', '&sl', '&none', '&trans', '&bootloader', '&sys_reset', '&ext_power', '&rgb_ug', '&bl'];
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

    if (tab === 'bluetooth') {
      const bluetoothItems = [
        '&bt BT_CLR',
        '&bt BT_NXT',
        '&bt BT_PRV',
        '&bt BT_SEL 0',
        '&bt BT_SEL 1',
        '&bt BT_SEL 2',
        '&bt BT_SEL 3',
        '&bt BT_SEL 4',
        '&out OUT_BLE',
        '&out OUT_USB',
        '&out OUT_TOG'
      ];
      const l: PaletteLayoutItem[] = [];
      const b: KeyBinding[] = [];

      bluetoothItems.forEach((item, i) => {
        l.push({
          x: (i % 6) * 1.5,
          y: Math.floor(i / 6),
          w: 1.5,
          label: item,
          code: ''
        });
        b.push(parseKeyBinding(item));
      });
      return { layout: l, bindings: b };
    }

    if (tab === 'others') {
      const l: PaletteLayoutItem[] = [];
      const b: KeyBinding[] = [];

      otherKeycodes.forEach((kc: any, i: number) => {
        l.push({
          x: (i % 6) * 1.5,
          y: Math.floor(i / 6),
          w: 1.5,
          label: kc.displayName || kc.symbol || kc.code.replace(/^KC_/, ''),
          code: ''
        });
        b.push({
          value: '&kp',
          params: [{ value: kc.code, params: [] }]
        });
      });
      return { layout: l, bindings: b };
    }

    return { layout: [], bindings: [] };
  }, [tab, layoutType, sources.layer, otherKeycodes]);

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
        <h3 className={styles['key-palette-title']}>{isJp ? 'キーパレット' : 'Key Palette'}</h3>
        <p className={styles['key-palette-subtitle']}>
          {isJp ? 'キーを上のキーボードにドラッグ＆ドロップしてください（Shiftキーを押しながらドロップすると、Shift＋キーが設定されます）' : 'Drag and drop keys to the keyboard above (Hold Shift while dropping to set Shift + key)'}
        </p>
      </div>
      
      <div className={styles['segmented-control-wrapper']}>
        <div className={styles['segmented-control']}>
          <button 
            onClick={() => { setTab('keys'); setLayoutType('US'); }} 
            className={`${styles['segmented-control-button']} ${(tab === 'keys' && layoutType === 'US') ? styles.active : ''}`}
          >
            <Icon name="keyboard" />
            {isJp ? 'US キー' : 'US Keys'}
          </button>
          <button 
            onClick={() => { setTab('keys'); setLayoutType('JP'); }} 
            className={`${styles['segmented-control-button']} ${(tab === 'keys' && layoutType === 'JP') ? styles.active : ''}`}
          >
            <Icon name="keyboard" />
            {isJp ? 'JIS キー' : 'JIS Keys'}
          </button>
          <button 
            onClick={() => setTab('layers')} 
            className={`${styles['segmented-control-button']} ${tab === 'layers' ? styles.active : ''}`}
          >
            <Icon name="layer-group" />
            {isJp ? 'レイヤー' : 'Layers'}
          </button>
          <button 
            onClick={() => setTab('behaviors')} 
            className={`${styles['segmented-control-button']} ${tab === 'behaviors' ? styles.active : ''}`}
          >
            <Icon name="sliders" />
            {isJp ? 'ビヘイビア' : 'Behaviors'}
          </button>
          <button 
            onClick={() => setTab('bluetooth')} 
            className={`${styles['segmented-control-button']} ${tab === 'bluetooth' ? styles.active : ''}`}
          >
            <Icon name="bluetooth" collection="brands" />
            {isJp ? 'Bluetooth' : 'Bluetooth'}
          </button>
          <button 
            onClick={() => setTab('others')} 
            className={`${styles['segmented-control-button']} ${tab === 'others' ? styles.active : ''}`}
          >
            <Icon name="plus" />
            {isJp ? 'その他キー' : 'Other Keys'}
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
        <SearchContext.Provider value={{ getSearchTargets, sources, layoutType }}>
          <KeyboardLayout
            layout={layout}
            bindings={bindings}
            onUpdate={handleUpdate}
            isPalette={true}
          />
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default KeyPalette;
