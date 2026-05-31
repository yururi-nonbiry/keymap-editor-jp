import React, { useMemo, useState, useContext, useEffect, useCallback } from 'react';
import Key from './Keys/Key';
import { JIS_LAYOUT, US_LAYOUT, PaletteLayoutItem } from '../data/standard-layouts';
import { parseKeyBinding } from '../shared/keymapUtils';
import { SearchContext, DefinitionsContext } from '../providers';
import { getJpDefinitions } from '../jpLayout';
import Icon from '../Common/Icon';
import styles from './styles.module.css';

interface KeyPaletteProps {
  layoutType: string;
}

type PaletteTab = 'keys' | 'layers' | 'behaviors' | 'mouse' | 'bluetooth' | 'others';

const ALPHANUMERIC_CODES = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'NUMBER_1', 'NUMBER_2', 'NUMBER_3', 'NUMBER_4', 'NUMBER_5',
  'NUMBER_6', 'NUMBER_7', 'NUMBER_8', 'NUMBER_9', 'NUMBER_0'
];

const MODIFIER_CODES = [
  'LEFT_SHIFT', 'RIGHT_SHIFT',
  'LEFT_CONTROL', 'RIGHT_CONTROL',
  'LEFT_ALT', 'RIGHT_ALT',
  'LEFT_GUI', 'RIGHT_GUI'
];

const CONTROL_CODES = [
  'ESC', 'TAB', 'CAPSLOCK', 'RETURN', 'BACKSPACE', 'SPACE',
  'INSERT', 'DELETE', 'HOME', 'END', 'PAGE_UP', 'PAGE_DOWN',
  'UP', 'DOWN', 'LEFT', 'RIGHT', 'K_APPLICATION',
  'PRINTSCREEN', 'SCROLLLOCK', 'PAUSE_BREAK',
  'INTERNATIONAL_2', // かな (Hiragana/Katakana)
  'INTERNATIONAL_4', // 変換 (Henkan)
  'INTERNATIONAL_5'  // 無変換 (Muhenkan)
];

const SYMBOL_CODES = [
  'GRAVE', 'MINUS', 'EQUAL',
  'LEFT_BRACKET', 'RIGHT_BRACKET', 'BACKSLASH',
  'SEMICOLON', 'SINGLE_QUOTE',
  'COMMA', 'PERIOD', 'SLASH',
  'INTERNATIONAL_1', // _ / ろ
  'INTERNATIONAL_3'  // ¥
];

const FUNCTION_CODES = [
  'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'
];

const NUMPAD_CODES = [
  'KP_NUM', 'KP_DIVIDE', 'KP_MULTIPLY', 'KP_MINUS',
  'KP_N7', 'KP_N8', 'KP_N9', 'KP_PLUS',
  'KP_N4', 'KP_N5', 'KP_N6',
  'KP_N1', 'KP_N2', 'KP_N3', 'KP_ENTER',
  'KP_N0', 'KP_DOT', 'KP_EQUAL'
];

const KEY_GROUPS = [
  { name: 'Alphanumeric', nameJp: '英数字', codes: ALPHANUMERIC_CODES },
  { name: 'Modifiers', nameJp: '装飾キー', codes: MODIFIER_CODES },
  { name: 'Control Keys', nameJp: 'コントロールキー', codes: CONTROL_CODES },
  { name: 'Symbols', nameJp: '記号', codes: SYMBOL_CODES },
  { name: 'Function Keys', nameJp: 'ファンクションキー', codes: FUNCTION_CODES },
  { name: 'Numpad', nameJp: 'テンキー', codes: NUMPAD_CODES },
];

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

  const handleUpdate = () => {
    // Palette is read-only for updates
  };

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
            onClick={() => setTab('mouse')} 
            className={`${styles['segmented-control-button']} ${tab === 'mouse' ? styles.active : ''}`}
          >
            <Icon name="mouse" />
            {isJp ? 'マウス' : 'Mouse'}
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

      <div className={styles['palette-content-wrapper']}>
        <SearchContext.Provider value={{ getSearchTargets, sources, layoutType }}>
          {tab === 'keys' && (
            <div className={styles['keys-tab-content']}>
              {KEY_GROUPS.map((group) => {
                const currentLayout = layoutType === 'JP' ? JIS_LAYOUT : US_LAYOUT;
                const keysInGroup = group.codes
                  .map(code => currentLayout.find(k => k.code === code))
                  .filter((k): k is PaletteLayoutItem => !!k);
                
                if (keysInGroup.length === 0) return null;

                return (
                  <div key={group.name} className={styles['category-section']}>
                    <h4 className={styles['category-title']}>{isJp ? group.nameJp : group.name}</h4>
                    <div className={styles['key-grid']}>
                      {keysInGroup.map((key) => (
                        <Key
                          key={key.code}
                          position={{ x: 0, y: 0 }}
                          size={{ u: 1, h: 1 }}
                          value="&kp"
                          params={[{ value: key.code, params: [] }]}
                          onUpdate={handleUpdate}
                          isPalette={true}
                          relative={true}
                          style={{
                            position: 'relative',
                            width: key.w ? `${Math.min(key.w, 3) * 50}px` : '50px',
                            height: '50px'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {tab === 'layers' && (
            <div className={styles['layers-tab-content']}>
              {(() => {
                const layerBehaviors = ['&mo', '&to', '&tog', '&sl', '&lt'];
                const layers = Object.values(sources.layer || {}) as any[];
                return layers.map((layer) => (
                  <div key={layer.code} className={styles['category-section']}>
                    <h4 className={styles['category-title']}>{layer.description}</h4>
                    <div className={styles['key-grid']}>
                      {layerBehaviors.map((behavior) => (
                        <Key
                          key={behavior}
                          position={{ x: 0, y: 0 }}
                          size={{ u: 1, h: 1 }}
                          value={behavior}
                          params={[{ value: layer.code, params: [] }]}
                          onUpdate={handleUpdate}
                          isPalette={true}
                          relative={true}
                          style={{
                            position: 'relative',
                            width: '90px',
                            height: '50px'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ));
              })()}
            </div>
          )}

          {tab === 'behaviors' && (
            <div className={styles['behaviors-tab-content']}>
              {(() => {
                const behaviorsList = ['&kp', '&mt', '&lt', '&mo', '&to', '&tog', '&sl', '&none', '&trans', '&bootloader', '&sys_reset', '&ext_power', '&rgb_ug', '&bl', '&inc_dec_kp'];
                return (
                  <div className={styles['key-grid']}>
                    {behaviorsList.map((behavior) => (
                      <Key
                        key={behavior}
                        position={{ x: 0, y: 0 }}
                        size={{ u: 1, h: 1 }}
                        value={behavior}
                        params={[]}
                        onUpdate={handleUpdate}
                        isPalette={true}
                        relative={true}
                        style={{
                          position: 'relative',
                          width: '100px',
                          height: '50px'
                        }}
                      />
                    ))}
                  </div>
                );
              })()}
            </div>
          )}

          {tab === 'mouse' && (
            <div className={styles['mouse-tab-content']}>
              {(() => {
                const MOUSE_BUTTONS = ['&mkp LCLK', '&mkp RCLK', '&mkp MCLK', '&mkp MB4', '&mkp MB5'];
                const MOUSE_MOVEMENTS = ['&mmv MOVE_UP', '&mmv MOVE_DOWN', '&mmv MOVE_LEFT', '&mmv MOVE_RIGHT'];
                const MOUSE_SCROLLS = ['&msc SCRL_UP', '&msc SCRL_DOWN', '&msc SCRL_LEFT', '&msc SCRL_RIGHT'];
                const mouseGroups = [
                  { name: 'Buttons', nameJp: 'ボタン', items: MOUSE_BUTTONS },
                  { name: 'Movement', nameJp: 'カーソル移動', items: MOUSE_MOVEMENTS },
                  { name: 'Scroll', nameJp: 'スクロール', items: MOUSE_SCROLLS }
                ];
                return mouseGroups.map((group) => (
                  <div key={group.name} className={styles['category-section']}>
                    <h4 className={styles['category-title']}>{isJp ? group.nameJp : group.name}</h4>
                    <div className={styles['key-grid']}>
                      {group.items.map((item) => {
                        const binding = parseKeyBinding(item);
                        return (
                          <Key
                            key={item}
                            position={{ x: 0, y: 0 }}
                            size={{ u: 1, h: 1 }}
                            value={binding.value}
                            params={binding.params || []}
                            onUpdate={handleUpdate}
                            isPalette={true}
                            relative={true}
                            style={{
                              position: 'relative',
                              width: '100px',
                              height: '50px'
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                ));
              })()}
            </div>
          )}

          {tab === 'bluetooth' && (
            <div className={styles['bluetooth-tab-content']}>
              {(() => {
                const bluetoothItems = [
                  '&bt BT_CLR',
                  '&bt BT_NXT',
                  '&bt BT_PRV',
                  '&bt BT_SEL 0',
                  '&bt BT_SEL 1',
                  '&bt BT_SEL 2',
                  '&bt BT_SEL 3',
                  '&bt BT_SEL 4',
                ];
                const outputItems = [
                  '&out OUT_BLE',
                  '&out OUT_USB',
                  '&out OUT_TOG'
                ];
                const btGroups = [
                  { name: 'Bluetooth Connection', nameJp: 'Bluetooth接続', items: bluetoothItems },
                  { name: 'Output Select', nameJp: '出力切替', items: outputItems }
                ];
                return btGroups.map((group) => (
                  <div key={group.name} className={styles['category-section']}>
                    <h4 className={styles['category-title']}>{isJp ? group.nameJp : group.name}</h4>
                    <div className={styles['key-grid']}>
                      {group.items.map((item) => {
                        const binding = parseKeyBinding(item);
                        return (
                          <Key
                            key={item}
                            position={{ x: 0, y: 0 }}
                            size={{ u: 1, h: 1 }}
                            value={binding.value}
                            params={binding.params || []}
                            onUpdate={handleUpdate}
                            isPalette={true}
                            relative={true}
                            style={{
                              position: 'relative',
                              width: '100px',
                              height: '50px'
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                ));
              })()}
            </div>
          )}

          {tab === 'others' && (
            <div className={styles['others-tab-content']}>
              <div className={styles['key-grid']}>
                {otherKeycodes.map((kc: any) => (
                  <Key
                    key={kc.code}
                    position={{ x: 0, y: 0 }}
                    size={{ u: 1, h: 1 }}
                    value="&kp"
                    params={[{ value: kc.code, params: [] }]}
                    onUpdate={handleUpdate}
                    isPalette={true}
                    relative={true}
                    style={{
                      position: 'relative',
                      minWidth: '60px',
                      width: 'auto',
                      height: '50px',
                      padding: '0 8px'
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default KeyPalette;
