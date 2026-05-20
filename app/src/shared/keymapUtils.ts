import filter from 'lodash/filter';
import flatten from 'lodash/flatten';
import get from 'lodash/get';
import map from 'lodash/map';
import uniq from 'lodash/uniq';

export interface KeyBinding {
  value: string;
  params: KeyBinding[];
}

export interface Keymap {
  layers: KeyBinding[][];
  layer_names?: string[];
  [key: string]: any;
}

export interface EncodedKeymap {
  layers: string[][];
  layer_names?: string[];
  [key: string]: any;
}

export interface LayoutItem {
  row?: number;
  col?: number;
  [key: string]: any;
}

export interface Behaviour {
  code: string;
  includes?: string[];
  commands?: any[];
  params?: string[];
}

export interface RenderTableOptions {
  useQuotes?: boolean;
  linePrefix?: string;
  columnSeparator?: string;
}

export const keymapTemplate = `
/*
 * Copyright (c) 2020 The ZMK Contributors
 *
 * SPDX-License-Identifier: MIT
 */


/* THIS FILE WAS GENERATED!
 *
 * This file was generated automatically. You may or may not want to
 * edit it directly.
 */

#include <behaviors.dtsi>
{{behaviour_includes}}

/ {
    keymap {
        compatible = "zmk,keymap";

{{rendered_layers}}
    };
};
`;

export function encodeBindValue(parsed: KeyBinding): string {
  const params = (parsed.params || []).map(encodeBindValue);
  const paramString = params.length > 0 ? `(${params.join(',')})` : '';
  return parsed.value + paramString;
}

export function encodeKeyBinding(parsed: KeyBinding): string {
  const value = parsed.value;
  const params = parsed.params || [];
  return `${value} ${params.map(encodeBindValue).join(' ')}`.trim();
}

export function encodeKeymap(parsedKeymap: Keymap): EncodedKeymap {
  return Object.assign({}, parsedKeymap, {
    layers: parsedKeymap.layers.map(layer => layer.map(encodeKeyBinding))
  });
}

export function getBehavioursUsed(keymap: Keymap): string[] {
  const keybinds = flatten(keymap.layers);
  return uniq(map(keybinds, 'value'));
}

export function renderTable(layout: LayoutItem[], layer: string[], opts?: RenderTableOptions): string {
  const options = opts || {};
  const useQuotes = options.useQuotes !== undefined ? options.useQuotes : false;
  const linePrefix = options.linePrefix !== undefined ? options.linePrefix : '';
  const columnSeparator = options.columnSeparator !== undefined ? options.columnSeparator : ',';
  const minWidth = useQuotes ? 9 : 7;
  const table = layer.reduce((map: string[][], code: string, i: number) => {
    if (layout[i]) {
      const row: number = layout[i].row !== undefined ? layout[i].row! : 0;
      const col: number | undefined = layout[i].col;
      map[row] = map[row] || [];
      map[row][col !== undefined ? col : map[row].length] = code;
    }
    return map;
  }, []);

  const columns = table.reduce((max: number, row: string[]) => Math.max(max, row ? row.length : 0), 0);
  const columnIndices = columns > 0 ? '.'.repeat(columns - 1).split('.').map((_, i) => i) : [];
  const columnWidths = columnIndices.map(i => table.reduce((max: number, row: string[]) => Math.max(
    max,
    ((row && row[i]) || []).length
    + columnSeparator.length
    + (useQuotes ? 2 : 0)
  ), 0));

  return table.map((row: string[], rowIndex: number) => {
    if (!row) return '';
    const isLastRow = rowIndex === table.length - 1;
    return linePrefix + columnIndices.map(i => {
      const noMoreValues = row.slice(i).every(col => col === undefined);
      const noFollowingValues = row.slice(i + 1).every(col => col === undefined);
      const padding = Math.max(minWidth, columnWidths[i]);

      if (noMoreValues) return '';
      if (!row[i]) return ' '.repeat(padding + 1);
      const column = (useQuotes ? `"${row[i]}"` : row[i]).padStart(padding);
      const suffix = (isLastRow && noFollowingValues) ? '' : columnSeparator;
      return column + suffix;
    }).join('').replace(/\s+$/, '');
  }).filter(line => line.length > 0).join('\n');
}

export function renderTemplate(template: string, params: {
  layers: string[][];
  layerNames: string[];
  layout: LayoutItem[];
  behaviourHeaders: string[];
}): string {
  const includesPattern = /\{\{\s*behaviour_includes\s*\}\}/;
  const layersPattern = /\{\{\s*rendered_layers\s*\}\}/;

  const renderedLayers = params.layers.map((layer, i) => {
    const name = i === 0 ? 'default_layer' : `layer_${params.layerNames[i] || i}`;
    const rendered = renderTable(params.layout, layer, {
      linePrefix: '',
      columnSeparator: ' '
    });

    return `
        ${name.replace(/[^a-zA-Z0-9_]/g, '_')} {
            bindings = <
${rendered}
            >;
        };
`;
  });

  return template
    .replace(includesPattern, params.behaviourHeaders.join('\n'))
    .replace(layersPattern, renderedLayers.join(''));
}

export function generateKeymapCode(layout: LayoutItem[], keymap: Keymap, encoded: EncodedKeymap, template: string, behavioursByBind?: Record<string, Behaviour>): string {
  const finalBehavioursByBind = behavioursByBind || {};
  const names = keymap.layer_names || [];
  const behaviourHeaders = flatten(getBehavioursUsed(keymap).map(
    bind => get(finalBehavioursByBind, [bind, 'includes'], [])
  ));

  return renderTemplate(template, {
    layout,
    behaviourHeaders,
    layers: encoded.layers,
    layerNames: names
  });
}

export function generateKeymapJSON(layout: LayoutItem[], keymap: Keymap, encoded: EncodedKeymap): string {
  const base = JSON.stringify(Object.assign({}, encoded, { layers: null }), null, 2);
  const layers = encoded.layers.map(layer => {
    const rendered = renderTable(layout, layer, {
      useQuotes: true,
      linePrefix: '      '
    });
    return `[\n${rendered}\n    ]`;
  });

  return base.replace('"layers": null', `"layers": [\n    ${layers.join(', ')}\n  ]`);
}

export function parseKeyBinding(binding: string): KeyBinding {
  const paramsPattern = /\((.+)\)/;

  function parse(code: string): KeyBinding {
    const value = code.replace(paramsPattern, '');
    const paramsMatch = code.match(paramsPattern);
    const params = get(paramsMatch, '[1]', '').split(',')
      .map((s: string) => s.trim())
      .filter((s: string) => s.length > 0)
      .map(parse);

    return { value, params };
  }

  const match = binding.match(/^(&.+?)\b/);
  if (!match) {
    return { value: binding, params: [] };
  }
  const value = match[1];
  const params = filter(binding.replace(/^&.+?\b\s*/, '')
    .split(' '))
    .map(parse);

  return { value, params };
}

export function parseKeymap(keymap: any): Keymap {
  return Object.assign({}, keymap, {
    layers: keymap.layers.map((layer: string[]) => {
      return layer.map(parseKeyBinding);
    })
  });
}

export function stripComments(text: string): string {
  return text.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');
}

export function parseKeymapDts(content: string): { layers: string[][]; layer_names: string[] } {
  const layers: string[][] = [];
  const layerNames: string[] = [];

  const cleanContent = stripComments(content);
  let searchScope = cleanContent;

  const keymapStartMatch = cleanContent.match(/keymap\s*\{/);
  if (keymapStartMatch) {
    const startPos = (keymapStartMatch.index || 0) + keymapStartMatch[0].length;
    let depth = 1;
    let pos = startPos;
    while (depth > 0 && pos < cleanContent.length) {
      if (cleanContent[pos] === '{') depth++;
      else if (cleanContent[pos] === '}') depth--;
      pos++;
    }
    if (depth === 0) {
      searchScope = cleanContent.substring(startPos, pos - 1);
    }
  }

  const layerRegex = /([\w-]+)\s*\{[\s\S]*?bindings\s*=\s*<([\s\S]*?)>;[\s\S]*?\};/g;
  let match;
  while ((match = layerRegex.exec(searchScope)) !== null) {
    const name = match[1];
    const bindingsText = match[2];
    
    const cleanBindings = bindingsText.replace(/\s+/g, ' ').trim();
    const tokens = cleanBindings.split(' ').filter(t => t.length > 0);
    
    const bindingStrings: string[] = [];
    let current: string[] = [];
    for (const token of tokens) {
      if (token.startsWith('&') && current.length > 0) {
        bindingStrings.push(current.join(' '));
        current = [token];
      } else {
        current.push(token);
      }
    }
    if (current.length > 0) {
      bindingStrings.push(current.join(' '));
    }

    if (bindingStrings.length > 0) {
      layers.push(bindingStrings);
      layerNames.push(name.replace(/_layer$/, '').replace(/_/g, ' '));
    }
  }

  return {
    layers,
    layer_names: layerNames
  };
}

export function generateKeymap(layout: LayoutItem[], keymap: Keymap, template?: string, behavioursByBind?: Record<string, Behaviour>) {
  const encoded = encodeKeymap(keymap);
  return {
    code: generateKeymapCode(layout, keymap, encoded, template || keymapTemplate, behavioursByBind),
    json: generateKeymapJSON(layout, keymap, encoded)
  };
}
