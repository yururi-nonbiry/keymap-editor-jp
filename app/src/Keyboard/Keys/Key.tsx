import cloneDeep from 'lodash/cloneDeep';
import get from 'lodash/get';
import pick from 'lodash/pick';
import React, { useContext, useState } from 'react';

import { SearchContext } from '../../providers';
import { getBehaviourParams } from '../../keymap';
import { getKeyStyles, Position, Size, Rotation } from '../../key-units';

import KeyParamlist from './KeyParamlist';
import { KeyNode, Value, Param } from './keyTypes';
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
}

interface EditingState {
  target: HTMLElement;
  codeIndex: number;
  code: Value;
  param: any;
  targets: any[];
}

function Key(props: KeyProps) {
  const { getSearchTargets, sources } = useContext(SearchContext);
  const { position, rotation, size } = props;
  const { label, value, params, onUpdate } = props;
  const [editing, setEditing] = useState<EditingState | null>(null);

  const bind = value;
  const behaviour = get(sources.behaviours, bind || '');
  const behaviourParams = getBehaviourParams(params, behaviour);

  const normalized = hydrateTree(value as string, params, sources);

  const index = makeIndex(normalized);
  const positioningStyle = getKeyStyles(position, size, rotation || {});

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

  return (
    <div
      className={styles.key}
      data-label={label}
      data-u={size.u}
      data-h={size.h}
      // @ts-ignore
      data-simple={isSimple(normalized)}
      // @ts-ignore
      data-long={isComplex(normalized, behaviourParams)}
      style={positioningStyle as React.CSSProperties}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={handleSelectBehaviour}
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
    />
    {editing && (
      <Modal>
        <ValuePicker
          target={editing.target}
          value={editing.code}
          param={editing.param}
          choices={editing.targets}
          prompt={createPromptMessage(editing.param)}
          searchKey="code"
          onSelect={handleSelectValue}
          onCancel={() => setEditing(null)}
        />
      </Modal>
    )}
  </div>
  );
}

export default Key;
