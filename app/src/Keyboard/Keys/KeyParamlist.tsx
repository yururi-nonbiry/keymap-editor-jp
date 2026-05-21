import get from 'lodash/get';
import React, { useContext } from 'react';

import { KeyIndex, Param, KeyNode, Value } from './keyTypes';
import KeyValue, { US_SYMBOL_MAP, JP_SYMBOL_MAP } from './KeyValue';
import styles from './styles.module.css';
import { SearchContext } from '../../providers';

interface KeyParamlistProps {
  index: KeyIndex;
  params: Param[];
  values: KeyNode[];
  onSelect: (event: any) => void;
  root?: boolean;
  parentValue?: Value;
  isPalette?: boolean;
}

function KeyParamlist(props: KeyParamlistProps) {
  const { index, params, values, onSelect, root, parentValue, isPalette } = props;
  const parentValueStr = parentValue !== undefined ? String(parentValue) : undefined;
  const isModifierParent = parentValueStr ? /^(L|R)(S|C|A|G)$/.test(parentValueStr) : false;
  const { layoutType } = useContext(SearchContext);

  return (
    <span
      className={styles.params}
      data-is-root={!!root}
      data-param-count={params.length}
      data-parent-value={parentValue}
      data-is-modifier-parent={isModifierParent}
    >
      {params.map((param, i) => {
        const val = get(values[i], 'value');
        const valStr = val !== undefined ? String(val) : '';
        const isShiftModifier = valStr === 'LS' || valStr === 'RS';
        const childNode = isShiftModifier ? get(values[i], 'params[0]') : null;

        if (isShiftModifier && childNode) {
          const childValue = childNode.value;
          const childSource = childNode.source;
          const map = layoutType === 'JP' ? JP_SYMBOL_MAP : US_SYMBOL_MAP;
          const pair = map[String(childValue)];
          let shiftedSymbol = '';
          if (pair) {
            shiftedSymbol = pair.shifted;
          } else {
            const sym = childSource?.symbol || childSource?.displayName || String(childValue);
            if (sym && sym.length <= 2) {
              shiftedSymbol = sym;
            }
          }

          return (
            <span key={`param-${i}`} className={styles.shiftModifierParam}>
              {shiftedSymbol && <span className={styles.shiftedSymbol}>{shiftedSymbol}</span>}
              <span className={styles.shiftedParentheses}>
                <span className={styles.paren}>(</span>
                <KeyValue
                  index={index.indexOf(values[i])}
                  param={param}
                  value={val}
                  source={get(values[i], 'source')}
                  onSelect={onSelect}
                  isPalette={isPalette}
                />
                <span className={styles.space}> </span>
                <KeyValue
                  index={index.indexOf(childNode)}
                  param={get(values[i], 'source.params[0]') || 'code'}
                  value={childValue}
                  source={childSource}
                  onSelect={onSelect}
                  isPalette={isPalette}
                />
                <span className={styles.paren}>)</span>
              </span>
            </span>
          );
        }

        return (
          <span key={`param-${i}`} className={styles.param}>
            <KeyValue
              index={index.indexOf(values[i])}
              param={param}
              value={val}
              source={get(values[i], 'source')}
              onSelect={onSelect}
              isPalette={isPalette}
            />
            {get(values[i], 'source.params.length', 0) > 0 ? (
              <KeyParamlist
                index={index}
                params={get(values[i], 'source.params') || []}
                values={get(values[i], 'params') || []}
                onSelect={onSelect}
                parentValue={get(values[i], 'value')}
                isPalette={isPalette}
              />
            ) : null}
          </span>
        );
      })}
    </span>
  );
}

export default KeyParamlist;
