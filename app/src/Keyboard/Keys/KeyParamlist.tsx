import get from 'lodash/get';
import React from 'react';

import { KeyIndex, Param, KeyNode } from './keyTypes';
import KeyValue from './KeyValue';
import styles from './styles.module.css';

interface KeyParamlistProps {
  index: KeyIndex;
  params: Param[];
  values: KeyNode[];
  onSelect: (event: any) => void;
  root?: boolean;
}

function KeyParamlist(props: KeyParamlistProps) {
  const { index, params, values, onSelect, root } = props;
  return (
    <span
      className={styles.params}
      data-is-root={!!root}
      data-param-count={params.length}
    >
      {params.map((param, i) => (
        <span key={`param-${i}`} className={styles.param}>
          <KeyValue
            index={index.indexOf(values[i])}
            param={param}
            value={get(values[i], 'value')}
            source={get(values[i], 'source')}
            onSelect={onSelect}
          />
          {get(values[i], 'source.params.length', 0) > 0 ? (
            <KeyParamlist
              index={index}
              params={get(values[i], 'source.params')}
              values={get(values[i], 'params') || []}
              onSelect={onSelect}
            />
          ) : null}
        </span>
      ))}
    </span>
  );
}

export default KeyParamlist;
