import behaviours from './data/zmk-behaviors.json'
import keyBy from 'lodash/keyBy'
import keymapUtils from './shared/keymapUtils'

const behavioursByBind = keyBy(behaviours, 'code')

export function renderTable(layout, layer, opts) {
  return keymapUtils.renderTable(layout, layer, opts)
}

export function parseKeyBinding(binding) {
  return keymapUtils.parseKeyBinding(binding)
}

export function parseKeymap(keymap) {
  return keymapUtils.parseKeymap(keymap)
}

export function generateKeymap(layout, keymap, template) {
  return keymapUtils.generateKeymap(layout, keymap, template, behavioursByBind)
}

