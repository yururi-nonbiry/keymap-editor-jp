import _ from 'lodash';
const { filter, flatten, get, map, uniq } = _;

export interface KeyBinding {
  value: string;
  params: KeyBinding[];
}

export interface Keymap {
  layers: KeyBinding[][];
  layer_names?: string[];
  sensor_bindings?: KeyBinding[][];
  [key: string]: any;
}

export interface EncodedKeymap {
  layers: string[][];
  layer_names?: string[];
  sensor_bindings?: string[][];
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
    layers: parsedKeymap.layers.map(layer => layer.map(encodeKeyBinding)),
    sensor_bindings: parsedKeymap.sensor_bindings ? parsedKeymap.sensor_bindings.map(layer => layer.map(encodeKeyBinding)) : undefined
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
  sensor_bindings?: string[][];
}): string {
  const includesPattern = /\{\{\s*behaviour_includes\s*\}\}/;
  const layersPattern = /\{\{\s*rendered_layers\s*\}\}/;

  const renderedLayers = params.layers.map((layer, i) => {
    const name = i === 0 ? 'default_layer' : `layer_${params.layerNames[i] || i}`;
    const rendered = renderTable(params.layout, layer, {
      linePrefix: '',
      columnSeparator: ' '
    });

    let sensorBindingsStr = '';
    if (params.sensor_bindings && params.sensor_bindings[i] && params.sensor_bindings[i].length > 0) {
      sensorBindingsStr = `\n            sensor-bindings = <${params.sensor_bindings[i].join(' ')}>;`;
    }

    return `
        ${name.replace(/[^a-zA-Z0-9_]/g, '_')} {
            bindings = <
${rendered}
            >;${sensorBindingsStr}
        };
`;
  });

  return template
    .replace(includesPattern, params.behaviourHeaders.join('\n'))
    .replace(layersPattern, renderedLayers.join(''));
}

export function generateKeymapCode(
  layout: LayoutItem[],
  keymap: Keymap,
  encoded: EncodedKeymap,
  template: string,
  behavioursByBind?: Record<string, Behaviour>
): string {
  const finalBehavioursByBind = behavioursByBind || {};
  const names = keymap.layer_names || [];

  const allBinds = uniq([
    ...getBehavioursUsed(keymap),
    ...(keymap.sensor_bindings ? flatten(keymap.sensor_bindings).map(b => b.value) : [])
  ]);

  const behaviourHeaders = uniq(flatten(allBinds.map(
    bind => get(finalBehavioursByBind, [bind, 'includes'], [])
  )));

  return renderTemplate(template, {
    layout,
    behaviourHeaders,
    layers: encoded.layers,
    layerNames: names,
    sensor_bindings: encoded.sensor_bindings
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
    }),
    sensor_bindings: keymap.sensor_bindings ? keymap.sensor_bindings.map((layer: string[]) => {
      return layer.map(parseKeyBinding);
    }) : undefined
  });
}

export function stripComments(text: string): string {
  return text.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');
}

export function parseKeymapDts(content: string): { layers: string[][]; layer_names: string[]; sensor_bindings?: string[][] } {
  const layers: string[][] = [];
  const layerNames: string[] = [];
  const sensorBindings: string[][] = [];

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

  const layerRegex = /([\w-]+)\s*\{([\s\S]*?bindings\s*=\s*<([\s\S]*?)>;([\s\S]*?))\};/g;
  let match;
  while ((match = layerRegex.exec(searchScope)) !== null) {
    const name = match[1];
    const bindingsText = match[3];
    
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

      // Extract sensor bindings for this layer
      const beforeBindings = match[2].split('bindings')[0];
      const afterBindings = match[4];
      
      const sensorMatchBefore = beforeBindings.match(/sensor-bindings\s*=\s*<([\s\S]*?)>;/);
      const sensorMatchAfter = afterBindings.match(/sensor-bindings\s*=\s*<([\s\S]*?)>;/);
      const sensorMatch = sensorMatchBefore || sensorMatchAfter;

      if (sensorMatch) {
        const cleanSensors = sensorMatch[1].replace(/\s+/g, ' ').trim();
        const sensorTokens = cleanSensors.split(' ').filter(t => t.length > 0);
        
        const sensorBindingStrings: string[] = [];
        let sCurrent: string[] = [];
        for (const token of sensorTokens) {
          if (token.startsWith('&') && sCurrent.length > 0) {
            sensorBindingStrings.push(sCurrent.join(' '));
            sCurrent = [token];
          } else {
            sCurrent.push(token);
          }
        }
        if (sCurrent.length > 0) {
          sensorBindingStrings.push(sCurrent.join(' '));
        }
        sensorBindings.push(sensorBindingStrings);
      } else {
        sensorBindings.push([]);
      }
    }
  }

  return {
    layers,
    layer_names: layerNames,
    sensor_bindings: sensorBindings
  };
}

export function findKeymapNodeRange(content: string): { start: number; end: number } | null {
  let inLineComment = false;
  let inBlockComment = false;
  let inString = false;
  
  let i = 0;
  const len = content.length;
  
  while (i < len) {
    if (inLineComment) {
      if (content[i] === '\n') {
        inLineComment = false;
      }
      i++;
      continue;
    }
    if (inBlockComment) {
      if (content[i] === '*' && content[i + 1] === '/') {
        inBlockComment = false;
        i += 2;
      } else {
        i++;
      }
      continue;
    }
    if (inString) {
      if (content[i] === '"' && content[i - 1] !== '\\') {
        inString = false;
      }
      i++;
      continue;
    }
    
    // Check for comment start
    if (content[i] === '/' && content[i + 1] === '/') {
      inLineComment = true;
      i += 2;
      continue;
    }
    if (content[i] === '/' && content[i + 1] === '*') {
      inBlockComment = true;
      i += 2;
      continue;
    }
    if (content[i] === '"') {
      inString = true;
      i++;
      continue;
    }
    
    // Check for "keymap" word
    if (content.substring(i, i + 6) === 'keymap') {
      const prevChar = i > 0 ? content[i - 1] : '';
      const nextChar = i + 6 < len ? content[i + 6] : '';
      const isWordStart = prevChar === '' || /[^a-zA-Z0-9_]/.test(prevChar);
      const isWordEnd = nextChar === '' || /[^a-zA-Z0-9_]/.test(nextChar);
      
      if (isWordStart && isWordEnd) {
        let j = i + 6;
        let foundOpenBrace = false;
        while (j < len) {
          if (inLineComment) {
            if (content[j] === '\n') inLineComment = false;
            j++;
            continue;
          }
          if (inBlockComment) {
            if (content[j] === '*' && content[j + 1] === '/') {
              inBlockComment = false;
              j += 2;
            } else {
              j++;
            }
            continue;
          }
          if (content[j] === '/' && content[j + 1] === '/') {
            inLineComment = true;
            j += 2;
            continue;
          }
          if (content[j] === '/' && content[j + 1] === '*') {
            inBlockComment = true;
            j += 2;
            continue;
          }
          if (content[j] === '{') {
            foundOpenBrace = true;
            break;
          }
          j++;
        }
        
        if (foundOpenBrace) {
          let depth = 1;
          let k = j + 1;
          while (k < len) {
            if (inLineComment) {
              if (content[k] === '\n') inLineComment = false;
              k++;
              continue;
            }
            if (inBlockComment) {
              if (content[k] === '*' && content[k + 1] === '/') {
                inBlockComment = false;
                k += 2;
              } else {
                k++;
              }
              continue;
            }
            if (content[k] === '/' && content[k + 1] === '/') {
              inLineComment = true;
              k += 2;
              continue;
            }
            if (content[k] === '/' && content[k + 1] === '*') {
              inBlockComment = true;
              k += 2;
              continue;
            }
            if (content[k] === '{') {
              depth++;
            } else if (content[k] === '}') {
              depth--;
              if (depth === 0) {
                return { start: i, end: k + 1 };
              }
            }
            k++;
          }
        }
      }
    }
    i++;
  }
  return null;
}

export function extractSensorBindings(content: string): (string | null)[] {
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

  const sensorBindingsList: (string | null)[] = [];
  const layerRegex = /([\w-]+)\s*\{([\s\S]*?bindings\s*=\s*<([\s\S]*?)>;([\s\S]*?))\};/g;
  let match;
  while ((match = layerRegex.exec(searchScope)) !== null) {
    const beforeBindings = match[2].split('bindings')[0];
    const afterBindings = match[4];
    
    // Look for sensor-bindings in either the section before or after bindings
    const sensorMatchBefore = beforeBindings.match(/sensor-bindings\s*=\s*<([\s\S]*?)>;/);
    const sensorMatchAfter = afterBindings.match(/sensor-bindings\s*=\s*<([\s\S]*?)>;/);
    
    const sensorMatch = sensorMatchBefore || sensorMatchAfter;
    if (sensorMatch) {
      sensorBindingsList.push(sensorMatch[1].replace(/\s+/g, ' ').trim());
    } else {
      sensorBindingsList.push(null);
    }
  }
  return sensorBindingsList;
}

export function generateKeymapCodeWithOriginal(
  layout: LayoutItem[],
  keymap: Keymap,
  encoded: EncodedKeymap,
  originalCode: string
): string {
  const range = findKeymapNodeRange(originalCode);
  if (!range) {
    return generateKeymapCode(layout, keymap, encoded, keymapTemplate);
  }
  
  const originalSensorBindings = extractSensorBindings(originalCode);

  const names = keymap.layer_names || [];
  const renderedLayers = encoded.layers.map((layer, i) => {
    const name = i === 0 ? 'default_layer' : `layer_${names[i] || i}`;
    const rendered = renderTable(layout, layer, {
      linePrefix: '',
      columnSeparator: ' '
    });

    let sensorBindingsStr = '';
    if (encoded.sensor_bindings && encoded.sensor_bindings[i] && encoded.sensor_bindings[i].length > 0) {
      sensorBindingsStr = `\n            sensor-bindings = <${encoded.sensor_bindings[i].join(' ')}>;`;
    } else if (originalSensorBindings && originalSensorBindings[i]) {
      sensorBindingsStr = `\n            sensor-bindings = <${originalSensorBindings[i]}>;`;
    }

    return `
        ${name.replace(/[^a-zA-Z0-9_]/g, '_')} {
            bindings = <
${rendered}
            >;${sensorBindingsStr}
        };
`;
  }).join('');

  const newKeymapNode = `keymap {
        compatible = "zmk,keymap";
        ${renderedLayers}
    }`;

  return originalCode.substring(0, range.start) + newKeymapNode + originalCode.substring(range.end);
}

export function generateKeymap(layout: LayoutItem[], keymap: Keymap, template?: string, behavioursByBind?: Record<string, Behaviour>) {
  const encoded = encodeKeymap(keymap);
  
  let code: string;
  if (keymap.originalCode) {
    code = generateKeymapCodeWithOriginal(layout, keymap, encoded, keymap.originalCode);
  } else {
    code = generateKeymapCode(layout, keymap, encoded, template || keymapTemplate, behavioursByBind);
  }

  return {
    code,
    json: generateKeymapJSON(layout, keymap, encoded)
  };
}
