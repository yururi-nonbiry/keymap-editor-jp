import * as api from './api';

export interface ZmkKeycode {
  names: string[];
  description: string;
  context?: string;
  symbol?: string;
  faIcon?: string;
}

export interface NormalizedKeycode {
  code: string;
  aliases: string[];
  description: string;
  context?: string;
  faIcon?: string;
  symbol: string;
  params: string[];
  isModifier?: boolean;
}

export function loadBehaviours() {
  return api.loadBehaviours();
}

export function loadKeycodes(): Promise<NormalizedKeycode[]> {
  return api.loadKeycodes().then(normalizeZmkKeycodes);
}

function shortestAlias(aliases: string[]): string {
  return [...aliases]
    .sort((a, b) => a.length - b.length)[0]
    .replace(/^KC_/, '');
}

function normalizeZmkKeycodes(keycodes: ZmkKeycode[]): NormalizedKeycode[] {
  const fnPattern = /^(.+?)\((code)\)$/;

  return keycodes.reduce((acc: NormalizedKeycode[], keycode: ZmkKeycode) => {
    const { description, context, symbol, faIcon } = keycode;
    const aliases = keycode.names.filter(name => !name.match(fnPattern));
    const fnMatch = keycode.names.map(name => name.match(fnPattern)).filter(v => !!v)[0];
    const base = { aliases, description, context, faIcon, symbol: symbol || shortestAlias(aliases), params: [] };

    for (const code of aliases) {
      acc.push(Object.assign({}, base, {
        code,
        isModifier: !!fnMatch
      }));
    }

    if (fnMatch) {
      acc.push(Object.assign({}, base, {
        code: fnMatch[1],
        params: fnMatch[2].split(',')
      }));
    }

    return acc;
  }, []);
}
