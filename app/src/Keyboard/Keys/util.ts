import get from 'lodash/get';
import keyBy from 'lodash/keyBy';

import { getBehaviourParams } from '../../keymap';
import { KeyNode, Param } from './keyTypes';

export function makeIndex(tree: KeyNode): KeyNode[] {
  const index: KeyNode[] = [];
  (function traverse(node: KeyNode) {
    const params = node.params || [];
    index.push(node);
    params.forEach(traverse);
  })(tree);

  return index;
}

export function isSimple(normalized: KeyNode): boolean {
  const params = normalized.params || [];
  const [first] = params;
  const symbol = get(first, 'source.symbol', get(first, 'source.code', '')) as string;
  const shortSymbol = symbol.length === 1;
  const singleParam = params.length === 1;
  return singleParam && shortSymbol;
}

export function isComplex(normalized: KeyNode, behaviourParams: Param[]): boolean {
  const params = normalized.params || [];
  const [first] = params;
  const symbol = get(first, 'source.symbol', get(first, 'value', '')) as string;
  const isLongSymbol = symbol.length > 4;
  const isMultiParam = behaviourParams.length > 1;
  const isNestedParam = (get(first, 'params', []) as any[]).length > 0;

  return isLongSymbol || isMultiParam || isNestedParam;
}

export function createPromptMessage(param: any, isJp?: boolean): string {
  const promptMapping: Record<string, string> = isJp ? {
    layer: 'レイヤーを選択',
    mod: 'モディファイアを選択',
    behaviour: '動作を選択',
    command: 'コマンドを選択',
    keycode: 'キーコードを選択'
  } : {
    layer: 'Select layer',
    mod: 'Select modifier',
    behaviour: 'Select behaviour',
    command: 'Select command',
    keycode: 'Select key code'
  };

  if (param.name) {
    return isJp ? `${param.name}を選択` : `Select ${param.name}`;
  }

  return (
    promptMapping[param] ||
    promptMapping.keycode
  );
}

export function hydrateTree(value: string | undefined, params: any[], sources: any): KeyNode {
  const bind = value;
  const behaviour = get(sources.behaviours, bind || '');
  const behaviourParams = getBehaviourParams(params, behaviour);
  const commands = keyBy(behaviour ? behaviour.commands : [], 'code');

  function getSourceValue(val: any, as: any) {
    if (as === 'command') return commands[val];
    if (as === 'raw' || as.enum) return { code: val };
    return sources?.[as]?.[val];
  }

  function hydrateNode(node: any, as: any): KeyNode {
    if (!node) {
      return { value: undefined, params: [] };
    }
    const { value: nodeValue, params: nodeParams } = node;
    const source = getSourceValue(nodeValue, as);

    return {
      value: nodeValue,
      source,
      params: (get(source, 'params', []) as any[]).map((asParam, i) => (
        hydrateNode(nodeParams[i], asParam)
      ))
    };
  }

  return {
    value,
    source: behaviour,
    params: behaviourParams.map((asParam, i) => (
      hydrateNode(params[i], asParam)
    ))
  };
}
