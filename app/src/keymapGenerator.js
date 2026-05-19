const behaviours = require('./data/zmk-behaviors.json')
const keyBy = require('lodash/keyBy')
const keymapUtils = require('./shared/keymapUtils')

const behavioursByBind = keyBy(behaviours, 'code')

function renderTable(layout, layer, opts) {
  return keymapUtils.renderTable(layout, layer, opts)
}

function parseKeyBinding(binding) {
  return keymapUtils.parseKeyBinding(binding)
}

function parseKeymap(keymap) {
  return keymapUtils.parseKeymap(keymap)
}

function generateKeymap(layout, keymap, template) {
  return keymapUtils.generateKeymap(layout, keymap, template, behavioursByBind)
}

module.exports = {
  renderTable,
  parseKeyBinding,
  parseKeymap,
  generateKeymap
}



