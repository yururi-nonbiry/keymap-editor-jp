import filter from 'lodash/filter';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import keyBy from 'lodash/keyBy';
import times from 'lodash/times';
import React, { useCallback, useContext, useMemo, useState } from 'react';

import KeyboardLayout from './KeyboardLayout';
import KeyPalette from './KeyPalette';
import LayerSelector from './LayerSelector';
import Key from './Keys/Key';
import { getKeyBoundingBox } from '../key-units';
import { DefinitionsContext, SearchContext } from '../providers';
import { Keymap, KeyBinding } from '../shared/keymapUtils';

interface KeyboardProps {
  layout: any[];
  keymap: Keymap;
  onUpdate: (updated: Keymap) => void;
  keyboardLayoutType?: string;
}

function Keyboard(props: KeyboardProps) {
  const { layout, keymap, onUpdate, keyboardLayoutType = 'US' } = props;
  const [activeLayer, setActiveLayer] = useState(0);
  const { keycodes, behaviours } = useContext(DefinitionsContext);

  const isEncoder = useCallback((key: any) => {
    return !!(key.isEncoder || key.encoder || key.type === 'encoder' || key.variant === 'encoder');
  }, []);

  const normalLayout = useMemo(() => layout.filter(key => !isEncoder(key)), [layout, isEncoder]);
  const encoderLayout = useMemo(() => {
    const existing = layout.filter(key => isEncoder(key));
    const sensorBindingCount = keymap.sensor_bindings?.[activeLayer]?.length || keymap.sensor_bindings?.[0]?.length || 0;
    const count = Math.max(existing.length, sensorBindingCount);
    if (existing.length >= count) {
      return existing;
    }
    const dummy = [...existing];
    for (let i = existing.length; i < count; i++) {
      dummy.push({
        isEncoder: true,
        label: `Encoder ${i + 1}`,
        x: i * 1.5,
        y: 0
      });
    }
    return dummy;
  }, [layout, isEncoder, keymap.sensor_bindings, activeLayer]);

  const availableLayers = useMemo(() => isEmpty(keymap) ? [] : (
    (keymap.layers || []).map((_, i) => ({
      code: i.toString(),
      description: (keymap.layer_names || [])[i] || `Layer ${i}`
    }))
  ), [keymap]);

  const sources = useMemo(() => ({
    kc: keycodes.indexed,
    code: keycodes.indexed,
    mod: keyBy(filter(keycodes, 'isModifier'), 'code'),
    behaviours: behaviours.indexed,
    layer: keyBy(availableLayers, 'code')
  }), [keycodes, behaviours, availableLayers]);

  const isReady = useMemo(() => {
    return (
      Object.keys(keycodes.indexed || {}).length > 0 &&
      Object.keys(behaviours.indexed || {}).length > 0 &&
      get(keymap, 'layers.length', 0) > 0
    );
  }, [keycodes, behaviours, keymap]);

  const searchTargets = useMemo(() => {
    return {
      behaviour: behaviours,
      layer: availableLayers,
      mod: filter(keycodes, 'isModifier'),
      code: keycodes
    };
  }, [behaviours, keycodes, availableLayers]);

  const getSearchTargets = useCallback((param: any, behaviour: string) => {
    if (param.enum) {
      return param.enum.map((v: string) => ({ code: v }));
    }

    if (param === 'command') {
      return get(sources, ['behaviours', behaviour, 'commands'], []);
    }

    if (!(searchTargets as any)[param]) {
      console.log('cannot find target for', param);
    }

    return (searchTargets as any)[param];
  }, [searchTargets, sources]);

  const boundingBox = useMemo(() => {
    return normalLayout.map(key => getKeyBoundingBox(
      { x: key.x, y: key.y },
      { u: key.u || key.w || 1, h: key.h || 1 },
      { x: key.rx, y: key.ry, a: key.r }
    )).reduce(({ x, y }, { max }) => ({
      x: Math.max(x, max.x),
      y: Math.max(y, max.y)
    }), { x: 0, y: 0 });
  }, [normalLayout]);

  const wrapperStyle = useMemo(() => {
    return {
      width: `${boundingBox.x}px`,
      height: `${boundingBox.y}px`,
      margin: '0 auto',
      padding: '40px'
    };
  }, [boundingBox]);

  const handleCreateLayer = useCallback(() => {
    const layer = keymap.layers.length;
    const binding = '&trans';
    const makeKeycode = (): KeyBinding => ({ value: binding, params: [] });

    let keyCount = 0;
    let encoderCount = 0;
    layout.forEach(key => {
      if (isEncoder(key)) {
        encoderCount++;
      } else {
        keyCount++;
      }
    });

    const newLayer = times(keyCount, makeKeycode);
    const updatedLayerNames = [ ...(keymap.layer_names || []), `Layer #${layer}` ];
    const layers = [ ...keymap.layers, newLayer ];

    const newSensorLayer = times(encoderCount, makeKeycode);
    const sensor_bindings = [ ...(keymap.sensor_bindings || []), newSensorLayer ];

    onUpdate({ ...keymap, layer_names: updatedLayerNames, layers, sensor_bindings });
  }, [keymap, layout, isEncoder, onUpdate]);

  const handleUpdateLayer = useCallback((layerIndex: number, updatedKeys: KeyBinding[]) => {
    const originalLayers = keymap.layers;
    const layers = [
      ...originalLayers.slice(0, layerIndex),
      updatedKeys,
      ...originalLayers.slice(layerIndex + 1)
    ];

    onUpdate({ ...keymap, layers });
  }, [keymap, onUpdate]);

  const handleUpdateSensor = useCallback((layerIndex: number, encoderIndex: number, updatedBinding: KeyBinding) => {
    const originalSensors = keymap.sensor_bindings || [];
    const paddedSensors = [...originalSensors];
    while (paddedSensors.length <= layerIndex) {
      paddedSensors.push([]);
    }

    const layerSensors = [...(paddedSensors[layerIndex] || [])];
    while (layerSensors.length <= encoderIndex) {
      layerSensors.push({ value: '&none', params: [] });
    }
    layerSensors[encoderIndex] = updatedBinding;

    const sensor_bindings = [
      ...paddedSensors.slice(0, layerIndex),
      layerSensors,
      ...paddedSensors.slice(layerIndex + 1)
    ];

    onUpdate({ ...keymap, sensor_bindings });
  }, [keymap, onUpdate]);

  const handleRenameLayer = useCallback((layerName: string) => {
    const layer_names = [
      ...(keymap.layer_names || []).slice(0, activeLayer),
      layerName,
      ...(keymap.layer_names || []).slice(activeLayer + 1)
    ];

    onUpdate({ ...keymap, layer_names });
  }, [keymap, activeLayer, onUpdate]);

  const handleDeleteLayer = useCallback((layerIndex: number) => {
    const layer_names = [...(keymap.layer_names || [])];
    layer_names.splice(layerIndex, 1);

    const layers = [...keymap.layers];
    layers.splice(layerIndex, 1);

    const sensor_bindings = [...(keymap.sensor_bindings || [])];
    if (sensor_bindings.length > layerIndex) {
      sensor_bindings.splice(layerIndex, 1);
    }

    let newActiveLayer = activeLayer;
    if (activeLayer > layers.length - 1) {
      newActiveLayer = Math.max(0, layers.length - 1);
      setActiveLayer(newActiveLayer);
    }

    onUpdate({ ...keymap, layers, layer_names, sensor_bindings });
  }, [keymap, activeLayer, onUpdate]);

  return (
    <>
      <LayerSelector
        layers={keymap.layer_names || []}
        activeLayer={activeLayer}
        onSelect={setActiveLayer}
        onNewLayer={handleCreateLayer}
        onRenameLayer={handleRenameLayer}
        onDeleteLayer={handleDeleteLayer}
      />
      <SearchContext.Provider value={{ getSearchTargets, sources, layoutType: keyboardLayoutType }}>
        <div className="screen-only" style={wrapperStyle}>
          {isReady && (
            <KeyboardLayout
              data-layer={activeLayer}
              layout={normalLayout}
              bindings={keymap.layers[activeLayer] || []}
              onUpdate={(updatedLayer: KeyBinding[]) => handleUpdateLayer(activeLayer, updatedLayer)}
            />
          )}
        </div>

        {encoderLayout.length > 0 && (
          <div className="encoder-panel screen-only" style={{
            maxWidth: '1200px',
            margin: '20px auto',
            padding: '20px',
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            <h3 style={{
              margin: 0,
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#495057',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <i className="fas fa-sync-alt" style={{ color: '#007bff' }}></i>
              ロータリーエンコーダー設定 (Rotary Encoder Settings)
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              padding: '10px 0'
            }}>
              {encoderLayout.map((enc, idx) => {
                const binding = keymap.sensor_bindings?.[activeLayer]?.[idx] || { value: '&none', params: [] };
                return (
                  <div key={idx} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '15px',
                    borderRadius: '8px',
                    background: '#f8f9fa',
                    border: '1px solid #e9ecef',
                    minWidth: '140px'
                  }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#6c757d' }}>
                      {enc.label || `Encoder ${idx + 1}`}
                    </span>
                    <div style={{ position: 'relative', width: '70px', height: '70px' }}>
                      <Key
                        position={{ x: 0, y: 0 }}
                        size={{ u: 1, h: 1 }}
                        value={binding.value}
                        params={binding.params || []}
                        onUpdate={(updatedBind) => handleUpdateSensor(activeLayer, idx, updatedBind)}
                        isEncoder={true}
                        relative={true}
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '100%',
                          left: '0',
                          top: '0'
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <KeyPalette layoutType={keyboardLayoutType} />

        {isReady && (
          <div className="print-only print-container">
            {keymap.layers.map((layerBindings, index) => {
              const layerName = (keymap.layer_names || [])[index] || `Layer ${index}`;
              return (
                <div key={index} className="print-page">
                  <h2 className="print-layer-title">{layerName}</h2>
                  <div style={wrapperStyle}>
                    <KeyboardLayout
                      layout={normalLayout}
                      bindings={keymap.layers[index] || []}
                      onUpdate={() => {}}
                    />
                  </div>
                  {encoderLayout.length > 0 && (
                    <div className="print-encoder-panel" style={{
                      marginTop: '20px',
                      display: 'flex',
                      gap: '15px',
                      justifyContent: 'center'
                    }}>
                      {encoderLayout.map((enc, idx) => {
                        const binding = keymap.sensor_bindings?.[index]?.[idx] || { value: '&none', params: [] };
                        return (
                          <div key={idx} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '4px',
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            minWidth: '80px'
                          }}>
                            <span style={{ fontSize: '10px', color: '#666' }}>
                              {enc.label || `Encoder ${idx + 1}`}
                            </span>
                            <div style={{ position: 'relative', width: '50px', height: '50px' }}>
                              <Key
                                position={{ x: 0, y: 0 }}
                                size={{ u: 1, h: 1 }}
                                value={binding.value}
                                params={binding.params || []}
                                onUpdate={() => {}}
                                isEncoder={true}
                                relative={true}
                                style={{
                                  position: 'relative',
                                  width: '100%',
                                  height: '100%',
                                  left: '0',
                                  top: '0'
                                }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </SearchContext.Provider>
    </>
  );
}


export default Keyboard;
