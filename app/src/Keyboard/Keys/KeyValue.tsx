import React, { useCallback, useContext } from 'react';

import { Param, Value, Source } from './keyTypes';
import styles from './styles.module.css';
import Icon from '../../Common/Icon';
import { SearchContext } from '../../providers';

function NullKey() {
  return <span>⦸</span>;
}

interface KeyValueProps {
  index: number;
  param: Param;
  value: Value;
  source?: Source;
  onSelect: (event: any) => void;
  isPalette?: boolean;
}

interface SymbolPair {
  normal: string;
  shifted: string;
}

const US_SYMBOL_MAP: Record<string, SymbolPair> = {
  GRAVE: { normal: "`", shifted: "~" },
  NUMBER_1: { normal: "1", shifted: "!" },
  NUMBER_2: { normal: "2", shifted: "@" },
  NUMBER_3: { normal: "3", shifted: "#" },
  NUMBER_4: { normal: "4", shifted: "$" },
  NUMBER_5: { normal: "5", shifted: "%" },
  NUMBER_6: { normal: "6", shifted: "^" },
  NUMBER_7: { normal: "7", shifted: "&" },
  NUMBER_8: { normal: "8", shifted: "*" },
  NUMBER_9: { normal: "9", shifted: "(" },
  NUMBER_0: { normal: "0", shifted: ")" },
  MINUS: { normal: "-", shifted: "_" },
  EQUAL: { normal: "=", shifted: "+" },
  LEFT_BRACKET: { normal: "[", shifted: "{" },
  RIGHT_BRACKET: { normal: "]", shifted: "}" },
  BACKSLASH: { normal: "\\", shifted: "|" },
  SEMICOLON: { normal: ";", shifted: ":" },
  SINGLE_QUOTE: { normal: "'", shifted: "\"" },
  COMMA: { normal: ",", shifted: "<" },
  PERIOD: { normal: ".", shifted: ">" },
  SLASH: { normal: "/", shifted: "?" },
};

const JP_SYMBOL_MAP: Record<string, SymbolPair> = {
  NUMBER_1: { normal: "1", shifted: "!" },
  NUMBER_2: { normal: "2", shifted: "\"" },
  NUMBER_3: { normal: "3", shifted: "#" },
  NUMBER_4: { normal: "4", shifted: "$" },
  NUMBER_5: { normal: "5", shifted: "%" },
  NUMBER_6: { normal: "6", shifted: "&" },
  NUMBER_7: { normal: "7", shifted: "'" },
  NUMBER_8: { normal: "8", shifted: "(" },
  NUMBER_9: { normal: "9", shifted: ")" },
  MINUS: { normal: "-", shifted: "=" },
  EQUAL: { normal: "^", shifted: "~" },
  LEFT_BRACKET: { normal: "@", shifted: "`" },
  RIGHT_BRACKET: { normal: "[", shifted: "{" },
  BACKSLASH: { normal: "]", shifted: "}" },
  SEMICOLON: { normal: ";", shifted: "+" },
  SINGLE_QUOTE: { normal: ":", shifted: "*" },
  INTERNATIONAL_3: { normal: "¥", shifted: "|" },
  INTERNATIONAL_1: { normal: "\\", shifted: "_" },
  COMMA: { normal: ",", shifted: "<" },
  PERIOD: { normal: ".", shifted: ">" },
  SLASH: { normal: "/", shifted: "?" },
};

function KeyValue(props: KeyValueProps) {
  const { param, index, value, source, onSelect, isPalette } = props;
  const { layoutType } = useContext(SearchContext);
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

  const map = layoutType === 'JP' ? JP_SYMBOL_MAP : US_SYMBOL_MAP;
  const symbolPair = map[String(value)];

  const content = isPalette && symbolPair ? (
    <div className={styles.splitKey}>
      <span className={styles.shifted}>{symbolPair.shifted}</span>
      <span className={styles.normal}>{symbolPair.normal}</span>
    </div>
  ) : (
    icon || text || <NullKey />
  );

  return (
    <span
      className={styles.code}
      title={title}
      onClick={handleClick}
    >
      {content}
    </span>
  );
}

export default KeyValue;
