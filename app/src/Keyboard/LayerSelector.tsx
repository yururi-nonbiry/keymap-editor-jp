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
  isJp?: boolean;
}

function LayerSelector(props: LayerSelectorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { activeLayer, layers, isJp } = props;
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
    <div className={styles['layer-sidebar']} ref={ref}>
      <h3 className={styles['layer-sidebar-title']}>{isJp ? 'レイヤー' : 'Layers'}</h3>
      <ul className={styles['layer-sidebar-list']}>
        {layers.map((name, i) => (
          <li
            key={`layer-${i}`}
            className={`${styles['layer-sidebar-item']} ${activeLayer === i ? styles.active : ''}`}
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
        <li className={styles['layer-sidebar-add']} onClick={handleAdd}>
          <Icon name="plus" />
          <span>{isJp ? '新規レイヤー追加' : 'Add Layer'}</span>
        </li>
      </ul>
    </div>
  );
}

export default LayerSelector;
