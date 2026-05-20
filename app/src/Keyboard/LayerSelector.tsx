import React, { useCallback, useEffect, useRef, useState } from 'react';

import Icon from '../Common/Icon';
import styles from './styles.module.css';

function stop(fn: () => void) {
  return function(event: React.MouseEvent) {
    event.stopPropagation();
    fn();
  };
}

function onKey(mapping: Record<string, () => void>) {
  return function(event: React.KeyboardEvent) {
    if (mapping[event.key]) {
      mapping[event.key]();
    }
  };
}

interface LayerSelectorProps {
  layers: string[];
  activeLayer: number;
  onSelect: (index: number) => void;
  onNewLayer: () => void;
  onRenameLayer: (name: string) => void;
  onDeleteLayer: (index: number) => void;
}

function LayerSelector(props: LayerSelectorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { activeLayer, layers } = props;
  const { onSelect, onNewLayer, onRenameLayer, onDeleteLayer } = props;
  const [renaming, setRenaming] = useState(false);
  const [editing, setEditing] = useState('');

  const handleSelect = useCallback((layer: number) => {
    if (layer === activeLayer) {
      setEditing(layers[activeLayer]);
      setRenaming(true);
      return;
    }

    setRenaming(false);
    onSelect(layer);
  }, [layers, activeLayer, setEditing, setRenaming, onSelect]);

  const handleAdd = useCallback(() => {
    onNewLayer();
  }, [onNewLayer]);

  const handleDelete = useCallback((layerIndex: number, layerName: string) => {
    const confirmation = `Really delete layer: ${layerName}?`;
    window.confirm(confirmation) && onDeleteLayer(layerIndex);
  }, [onDeleteLayer]);

  const finishEditing = useCallback(() => {
    if (!renaming) {
      return;
    }

    setEditing('');
    setRenaming(false);
    onRenameLayer(editing);
  }, [editing, renaming, setEditing, setRenaming, onRenameLayer]);

  const cancelEditing = useCallback(() => {
    if (!renaming) {
      return;
    }

    setEditing('');
    setRenaming(false);
  }, [renaming, setEditing, setRenaming]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    const clickedOutside = ref.current && !ref.current.contains(event.target as Node);
    if (!clickedOutside) {
      return;
    }

    cancelEditing();
  }, [ref, cancelEditing]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);

  const focusInput = useCallback((node: HTMLInputElement | null) => {
    if (node) {
      node.focus();
      node.select();
    }
  }, []);

  return (
    <div
      className={styles['layer-selector']}
      // @ts-ignore
      data-renaming={renaming}
      ref={ref}
    >
      <p>Layers:</p>
      <ul>
        {layers.map((name, i) => (
          <li
            key={`layer-${i}`}
            className={activeLayer === i ? styles.active : ''}
            data-layer={i}
            onClick={stop(() => handleSelect(i))}
          >
            <span className={styles.index}>{i}</span>
            {(activeLayer === i && renaming) ? (
              <input
                ref={focusInput}
                className={styles.name}
                onChange={e => setEditing(e.target.value)}
                onKeyDown={onKey({
                  Enter: finishEditing,
                  Escape: cancelEditing
                })}
                value={editing}
              />
            ) : (
              <span className={styles.name}>
                {name}
                <Icon
                  name="times-circle"
                  className={styles.delete}
                  onClick={stop(() => handleDelete(i, name))}
                />
              </span>
            )}
          </li>
        ))}
        <li onClick={handleAdd}>
          <Icon className={styles.index} name="plus" />
          <span className={styles.name}>Add Layer</span>
        </li>
      </ul>
    </div>
  );
}

export default LayerSelector;
