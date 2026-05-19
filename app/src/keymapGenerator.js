import filter from 'lodash/filter'
import flatten from 'lodash/flatten'
import get from 'lodash/get'
import keyBy from 'lodash/keyBy'
import map from 'lodash/map'
import uniq from 'lodash/uniq'
import behaviours from './data/zmk-behaviors.json'

const behavioursByBind = keyBy(behaviours, 'code')

const keymapTemplate = `
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
`

function encodeBindValue(parsed) {
  const params = (parsed.params || []).map(encodeBindValue)
  const paramString = params.length > 0 ? `(${params.join(',')})` : ''
  return parsed.value + paramString
}

function encodeKeyBinding(parsed) {
  const { value, params } = parsed
  return `${value} ${params.map(encodeBindValue).join(' ')}`.trim()
}

function encodeKeymap(parsedKeymap) {
  return Object.assign({}, parsedKeymap, {
    layers: parsedKeymap.layers.map(layer => layer.map(encodeKeyBinding))
  })
}

function getBehavioursUsed(keymap) {
  const keybinds = flatten(keymap.layers)
  return uniq(map(keybinds, 'value'))
}

export function renderTable(layout, layer, opts = {}) {
  const {
    useQuotes = false,
    linePrefix = '',
    columnSeparator = ','
  } = opts
  const minWidth = useQuotes ? 9 : 7
  const table = layer.reduce((map, code, i) => {
    if (layout[i]) {
      const { row = 0, col } = layout[i]
      map[row] = map[row] || []
      map[row][col || map[row].length] = code
    }
    return map
  }, [])

  const columns = Math.max(...table.map(row => row ? row.length : 0), 0)
  const columnIndices = columns > 0 ? '.'.repeat(columns - 1).split('.').map((_, i) => i) : []
  const columnWidths = columnIndices.map(i => Math.max(
    ...table.map(row => (
      ((row && row[i]) || []).length
      + columnSeparator.length
      + (useQuotes ? 2 : 0)
    ))
  ))

  return table.map((row, rowIndex) => {
    if (!row) return ''
    const isLastRow = rowIndex === table.length - 1
    return linePrefix + columnIndices.map(i => {
      const noMoreValues = row.slice(i).every(col => col === undefined)
      const noFollowingValues = row.slice(i + 1).every(col => col === undefined)
      const padding = Math.max(minWidth, columnWidths[i])

      if (noMoreValues) return ''
      if (!row[i]) return ' '.repeat(padding + 1)
      const column = (useQuotes ? `"${row[i]}"` : row[i]).padStart(padding)
      const suffix = (isLastRow && noFollowingValues) ? '' : columnSeparator
      return column + suffix
    }).join('').replace(/\s+$/, '')
  }).filter(line => line.length > 0).join('\n')
}

function renderTemplate(template, params) {
  const includesPattern = /\{\{\s*behaviour_includes\s*\}\}/
  const layersPattern = /\{\{\s*rendered_layers\s*\}\}/

  const renderedLayers = params.layers.map((layer, i) => {
    const name = i === 0 ? 'default_layer' : `layer_${params.layerNames[i] || i}`
    const rendered = renderTable(params.layout, layer, {
      linePrefix: '',
      columnSeparator: ' '
    })

    return `
        ${name.replace(/[^a-zA-Z0-9_]/g, '_')} {
            bindings = <
${rendered}
            >;
        };
`
  })

  return template
    .replace(includesPattern, params.behaviourHeaders.join('\n'))
    .replace(layersPattern, renderedLayers.join(''))
}

function generateKeymapCode(layout, keymap, encoded, template) {
  const { layer_names: names = [] } = keymap
  const behaviourHeaders = flatten(getBehavioursUsed(keymap).map(
    bind => get(behavioursByBind, [bind, 'includes'], [])
  ))

  return renderTemplate(template, {
    layout,
    behaviourHeaders,
    layers: encoded.layers,
    layerNames: names
  })
}

function generateKeymapJSON(layout, keymap, encoded) {
  const base = JSON.stringify(Object.assign({}, encoded, { layers: null }), null, 2)
  const layers = encoded.layers.map(layer => {
    const rendered = renderTable(layout, layer, {
      useQuotes: true,
      linePrefix: '      '
    })
    return `[\n${rendered}\n    ]`
  })

  return base.replace('"layers": null', `"layers": [\n    ${layers.join(', ')}\n  ]`)
}

export function parseKeyBinding(binding) {
  const paramsPattern = /\((.+)\)/

  function parse(code) {
    const value = code.replace(paramsPattern, '')
    const params = get(code.match(paramsPattern), '[1]', '').split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0)
      .map(parse)

    return { value, params }
  }

  const match = binding.match(/^(&.+?)\b/)
  if (!match) {
    return { value: binding, params: [] }
  }
  const value = match[1]
  const params = filter(binding.replace(/^&.+?\b\s*/, '')
    .split(' '))
    .map(parse)

  return { value, params }
}

export function parseKeymap(keymap) {
  return Object.assign({}, keymap, {
    layers: keymap.layers.map(layer => {
      return layer.map(parseKeyBinding)
    })
  })
}

export function generateKeymap(layout, keymap, template) {
  const encoded = encodeKeymap(keymap)
  return {
    code: generateKeymapCode(layout, keymap, encoded, template || keymapTemplate),
    json: generateKeymapJSON(layout, keymap, encoded)
  }
}
