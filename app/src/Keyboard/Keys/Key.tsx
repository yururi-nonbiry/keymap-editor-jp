import cloneDeep from 'lodash/cloneDeep';
import get from 'lodash/get';
import pick from 'lodash/pick';
import React, { useContext, useState } from 'react';

import { SearchContext } from '../../providers';
import { getBehaviourParams } from '../../keymap';
import { getKeyStyles, Position, Size, Rotation } from '../../key-units';

import KeyParamlist from './KeyParamlist';
import { Value } from './keyTypes';
import {
  createPromptMessage,
  hydrateTree,
  isSimple,
  isComplex,
  makeIndex
} from './util';
import styles from './styles.module.css';

import Modal from '../../Common/Modal';
// @ts-ignore
import ValuePicker from '../../ValuePicker';

interface KeyProps {
  position: Position;
  rotation?: Rotation;
  size: Size;
  label?: string;
  value: Value;
  params: any[];
  onUpdate: (updated: any) => void;
  isPalette?: boolean;
  isEncoder?: boolean;
  relative?: boolean;
  style?: React.CSSProperties;
}

interface EditingState {
  target: HTMLElement;
  codeIndex: number;
  code: Value;
  param: any;
  targets: any[];
}

function Key(props: KeyProps) {
  const { getSearchTargets, sources, layoutType } = useContext(SearchContext);
  const isJp = layoutType === 'JP';
  const { position, rotation, size, isPalette, isEncoder } = props;
  const { label, value, params, onUpdate } = props;
  const [editing, setEditing] = useState<EditingState | null>(null);
  const [dragSide, setDragSide] = useState<'left' | 'right' | 'none'>('none');

  const bind = value;
  const behaviour = get(sources.behaviours, bind || '');
  const behaviourParams = getBehaviourParams(params, behaviour);

  const normalized = hydrateTree(value as string, params, sources);

  const index = makeIndex(normalized);
  const positioningStyle = props.relative
    ? { position: 'relative' as const }
    : getKeyStyles(position, size, rotation || {}) as any;
  if (isEncoder && positioningStyle && !props.relative) {
    const wVal = parseFloat(positioningStyle.width || '0');
    const hVal = parseFloat(positioningStyle.height || '0');
    if (wVal > 0 && hVal > 0) {
      const minSize = Math.min(wVal, hVal);
      positioningStyle.width = `${minSize}px`;
      positioningStyle.height = `${minSize}px`;
    }
  }
  const finalStyle = {
    ...positioningStyle,
    ...props.style
  };

  function onMouseOver(event: React.MouseEvent) {
    const old = document.querySelector(`.${styles.highlight}`);
    old && old.classList.remove(styles.highlight);
    (event.target as HTMLElement).classList.add(styles.highlight);
  }
  function onMouseLeave(event: React.MouseEvent) {
    (event.target as HTMLElement).classList.remove(styles.highlight);
  }

  function handleSelectCode(event: any) {
    const editingData = pick(event, ['target', 'codeIndex', 'code', 'param']) as any;
    editingData.targets = getSearchTargets(editingData.param, String(value));
    setEditing(editingData);
  }
  function handleSelectBehaviour(event: React.MouseEvent) {
    event.stopPropagation();
    setEditing({
      target: event.target as HTMLElement,
      targets: getSearchTargets('behaviour', String(value)),
      codeIndex: 0,
      code: value,
      param: 'behaviour'
    });
  }
  function handleSelectValue(source: any) {
    if (!editing) return;
    const { codeIndex } = editing;
    const updated = cloneDeep(normalized);
    const nodesIndex = makeIndex(updated);
    const targetCode = nodesIndex[codeIndex];

    targetCode.value = source.code;
    targetCode.params = [];
    nodesIndex.forEach(node => {
      delete (node as any).source;
    });

    setEditing(null);
    onUpdate(pick(updated, ['value', 'params']) as { value: Value; params: any[] });
  }

  function onDragStart(event: React.DragEvent) {
    event.dataTransfer.setData('application/json', JSON.stringify({ value, params }));
  }

  function onDragOver(event: React.DragEvent) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';

    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = event.clientX - rect.left;
    const currentParams = normalized.params || [];
    const isLeft = currentParams.length > 1 ? x < rect.width / 2 : x < rect.width * 2 / 5;
    const isRight = currentParams.length > 1 ? x >= rect.width / 2 : x > rect.width * 3 / 5;

    if (isLeft) setDragSide('left');
    else if (isRight) setDragSide('right');
    else setDragSide('none');
  }

  function onDragLeave() {
    setDragSide('none');
  }

  function onDrop(event: React.DragEvent) {
    event.preventDefault();
    setDragSide('none');
    const data = event.dataTransfer.getData('application/json');
    if (!data) return;

    try {
      let payload = JSON.parse(data);

      // If Shift key is pressed during drop, wrap &kp parameters in LS()
      if (event.shiftKey) {
        if (payload.value === '&kp' && payload.params && payload.params[0]) {
          if (payload.params[0].value !== 'LS') {
            payload = {
              ...payload,
              params: [
                {
                  value: 'LS',
                  params: [payload.params[0]]
                }
              ]
            };
          }
        }
      }
      const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      const x = event.clientX - rect.left;
      const currentParams = normalized.params || [];
      const isLeft = currentParams.length > 1 ? x < rect.width / 2 : x < rect.width * 2 / 5;
      const isRight = currentParams.length > 1 ? x >= rect.width / 2 : x > rect.width * 3 / 5;

      const droppedParam = payload.params?.[0];

      // If we dropped on the left or right of a multi-param behavior and have a parameter to drop
      if (currentParams.length > 1 && (isLeft || isRight) && droppedParam) {
        const updated = cloneDeep(normalized);
        const paramIndex = isLeft ? 0 : 1;
        if (updated.params) {
          updated.params[paramIndex] = droppedParam;
        }
        onUpdate(pick(updated, ['value', 'params']));
        return;
      }

      // If we dropped on the left of a single-param behavior (like &kp)
      // and the dropped item is a modifier or layer, try to create &mt or &lt
      if (currentParams.length === 1 && isLeft && droppedParam) {
        const droppedValue = droppedParam.value;
        const isModifier = !!sources.mod[droppedValue];
        const isLayer = !!sources.layer[droppedValue];

        if (isModifier) {
          onUpdate({
            value: '&mt',
            params: [droppedParam, currentParams[0]]
          });
          return;
        } else if (isLayer) {
          onUpdate({
            value: '&lt',
            params: [droppedParam, currentParams[0]]
          });
          return;
        }
      }

      // Default behavior: replace everything
      onUpdate(payload);
    } catch (e) {
      console.error('Failed to parse dropped key data', e);
    }
  }

  return (
    <div
      className={`${styles.key} ${isEncoder ? styles.encoder : ''} ${dragSide === 'left' ? styles['highlight-left'] : ''} ${dragSide === 'right' ? styles['highlight-right'] : ''}`}
      data-behaviour={value}
      data-label={label}
      data-u={size.u}
      data-h={size.h}
      // @ts-ignore
      data-simple={isSimple(normalized)}
      // @ts-ignore
      data-long={isComplex(normalized, behaviourParams)}
      style={finalStyle as React.CSSProperties}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={handleSelectBehaviour}
      draggable={true}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
    {behaviour ? (
      <span
        className={styles['behaviour-binding']}
        onClick={handleSelectBehaviour}
      >
        {behaviour.code}
      </span>
    ) : null}
    <KeyParamlist
      root={true}
      index={index}
      params={behaviourParams}
      values={normalized.params || []}
      onSelect={handleSelectCode}
      isPalette={isPalette}
    />
    {editing && (
      <Modal>
        <ValuePicker
          target={editing.target}
          value={editing.code}
          param={editing.param}
          choices={editing.targets}
          prompt={createPromptMessage(editing.param, isJp)}
          searchKey="code"
          onSelect={handleSelectValue}
          onCancel={() => setEditing(null)}
          isJp={isJp}
        />
      </Modal>
    )}
  </div>
  );
}

export default Key;
