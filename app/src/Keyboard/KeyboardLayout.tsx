import pick from 'lodash/pick';
import React, { useCallback, useMemo } from 'react';

import Key from './Keys/Key';
import { KeyBinding } from '../shared/keymapUtils';
import { Position, Rotation, Size } from '../key-units';

const getPosition = (key: any): Position => pick(key, ['x', 'y']) as unknown as Position;
const getRotation = (key: any): Rotation => {
  const { rx, ry, r } = key;
  return { x: rx, y: ry, a: r };
};
const getSize = (key: any): Size => {
  const { w = 1, u = w, h = 1 } = key;
  return { u, h };
};

interface KeyboardLayoutProps {
  layout: any[];
  bindings: KeyBinding[];
  onUpdate: (updatedBindings: KeyBinding[]) => void;
  isPalette?: boolean;
  [key: string]: any;
}

function KeyboardLayout(props: KeyboardLayoutProps) {
  const { layout, bindings, onUpdate, isPalette } = props;
  const normalized = useMemo(() => {
    return layout.map((_, i) => (
      bindings[i] || {
        value: '&none',
        params: []
      }
    ));
  }, [layout, bindings]);

  const handleUpdateBind = useCallback((keyIndex: number, updateBinding: KeyBinding) => {
    onUpdate([
      ...normalized.slice(0, keyIndex),
      updateBinding,
      ...normalized.slice(keyIndex + 1)
    ]);
  }, [normalized, onUpdate]);

  return (
    <div style={{ position: 'relative' }}>
      {layout.map((key, i) => (
        <Key
          key={i}
          position={getPosition(key)}
          rotation={getRotation(key)}
          size={getSize(key)}
          label={key.label}
          value={normalized[i].value}
          params={normalized[i].params || []}
          onUpdate={(bind: KeyBinding) => handleUpdateBind(i, bind)}
          isPalette={isPalette}
        />
      ))}
    </div>
  );
}

export default KeyboardLayout;
