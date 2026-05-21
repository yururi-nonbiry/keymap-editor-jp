export type ParamType = 'code' | 'layer' | 'mod' | 'command';

export interface EnumParam {
  enum: string[];
  name: string;
  type: string;
}

export type Param = ParamType | EnumParam;

export type Value = string | number | undefined;

export interface Source {
  params?: Param[];
  code: Value;
  description?: string;
  symbol?: string;
  faIcon?: string;
  displayName?: string;
}

export interface KeyNode {
  value: Value;
  source?: Source;
  params?: KeyNode[];
}

export type KeyIndex = KeyNode[];
