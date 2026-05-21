import React, { useCallback } from 'react';

import { Param, Value, Source } from './keyTypes';
import styles from './styles.module.css';
import Icon from '../../Common/Icon';

function NullKey() {
  return <span>⦸</span>;
}

interface KeyValueProps {
  index: number;
  param: Param;
  value: Value;
  source?: Source;
  onSelect: (event: any) => void;
}

function KeyValue(props: KeyValueProps) {
  const { param, index, value, source, onSelect } = props;
  const displayName = source?.displayName || source?.code;
  const title = source && `(${displayName}) ${source.description}`;
  const text = source && (source?.symbol || source?.code);
  const icon = source?.faIcon && <Icon name={source.faIcon} />;

  const handleClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    onSelect({
      target: event.target,
      codeIndex: index,
      code: value,
      param
    });
  }, [param, value, index, onSelect]);

  return (
    <span
      className={styles.code}
      title={title}
      onClick={handleClick}
    >
      {icon || text || <NullKey />}
    </span>
  );
}

export default KeyValue;
