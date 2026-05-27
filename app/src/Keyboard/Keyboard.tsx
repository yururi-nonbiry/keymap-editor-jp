import filter from 'lodash/filter';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import keyBy from 'lodash/keyBy';
import times from 'lodash/times';
import React, { useCallback, useContext, useMemo, useState } from 'react';

import KeyboardLayout from './KeyboardLayout';
import KeyPalette from './KeyPalette';
import LayerSelector from './LayerSelector';
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

  console.log('[DEBUG Keyboard] layout length:', layout.length, 'encoders:', layout.filter(k => isEncoder(k)).length);
  console.log('[DEBUG Keyboard] sensor_bindings:', keymap.sensor_bindings);

  const getCombinedBindings = useCallback((layerIndex: number) => {
    let keyIndex = 0;
    let encoderIndex = 0;
    const layerKeys = keymap.layers[layerIndex] || [];
    const layerSensors = keymap.sensor_bindings?.[layerIndex] || [];

    return layout.map(key => {
      if (isEncoder(key)) {
        const bind = layerSensors[encoderIndex] || { value: '&none', params: [] };
        encoderIndex++;
        return bind;
      } else {
        const bind = layerKeys[keyIndex] || { value: '&none', params: [] };
        keyIndex++;
        return bind;
      }
    });
  }, [layout, keymap, isEncoder]);

  const activeCombinedBindings = useMemo(() => getCombinedBindings(activeLayer), [activeLayer, getCombinedBindings]);

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
    return layout.map(key => getKeyBoundingBox(
      { x: key.x, y: key.y },
      { u: key.u || key.w || 1, h: key.h || 1 },
      { x: key.rx, y: key.ry, a: key.r }
    )).reduce(({ x, y }, { max }) => ({
      x: Math.max(x, max.x),
      y: Math.max(y, max.y)
    }), { x: 0, y: 0 });
  }, [layout]);

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

  const handleUpdateLayer = useCallback((layerIndex: number, updatedCombined: KeyBinding[]) => {
    const updatedKeys: KeyBinding[] = [];
    const updatedSensors: KeyBinding[] = [];

    layout.forEach((key, i) => {
      const bind = updatedCombined[i] || { value: '&none', params: [] };
      if (isEncoder(key)) {
        updatedSensors.push(bind);
      } else {
        updatedKeys.push(bind);
      }
    });

    const originalLayers = keymap.layers;
    const layers = [
      ...originalLayers.slice(0, layerIndex),
      updatedKeys,
      ...originalLayers.slice(layerIndex + 1)
    ];

    const originalSensors = keymap.sensor_bindings || [];
    const paddedSensors = [...originalSensors];
    while (paddedSensors.length < layers.length) {
      paddedSensors.push([]);
    }
    const sensor_bindings = [
      ...paddedSensors.slice(0, layerIndex),
      updatedSensors,
      ...paddedSensors.slice(layerIndex + 1)
    ];

    onUpdate({ ...keymap, layers, sensor_bindings });
  }, [keymap, layout, isEncoder, onUpdate]);

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
              layout={layout}
              bindings={activeCombinedBindings}
              onUpdate={(updatedLayer: KeyBinding[]) => handleUpdateLayer(activeLayer, updatedLayer)}
            />
          )}
        </div>
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
                      layout={layout}
                      bindings={getCombinedBindings(index)}
                      onUpdate={() => {}}
                    />
                  </div>
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
