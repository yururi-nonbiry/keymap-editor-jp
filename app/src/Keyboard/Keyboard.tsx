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

    const newLayer = times(layout.length, makeKeycode);
    const updatedLayerNames = [ ...(keymap.layer_names || []), `Layer #${layer}` ];
    const layers = [ ...keymap.layers, newLayer ];

    onUpdate({ ...keymap, layer_names: updatedLayerNames, layers });
  }, [keymap, layout, onUpdate]);

  const handleUpdateLayer = useCallback((layerIndex: number, updatedLayer: KeyBinding[]) => {
    const original = keymap.layers;
    const layers = [
      ...original.slice(0, layerIndex),
      updatedLayer,
      ...original.slice(layerIndex + 1)
    ];

    onUpdate({ ...keymap, layers });
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

    let newActiveLayer = activeLayer;
    if (activeLayer > layers.length - 1) {
      newActiveLayer = Math.max(0, layers.length - 1);
      setActiveLayer(newActiveLayer);
    }

    onUpdate({ ...keymap, layers, layer_names });
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
              bindings={keymap.layers[activeLayer]}
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
                      bindings={layerBindings}
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
