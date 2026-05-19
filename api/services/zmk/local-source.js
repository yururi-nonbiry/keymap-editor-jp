const childProcess = require('child_process')
const fs = require('fs')
const path = require('path')
const { parseKeymap } = require('./keymap')

const ZMK_PATH = process.env.ZMK_PATH || path.join(__dirname, '..', '..', '..', 'zmk-config')
console.log('ZMK_PATH resolved to:', ZMK_PATH)

const EMPTY_KEYMAP = {
  keyboard: 'unknown',
  keymap: 'unknown',
  layout: 'unknown',
  layer_names: ['default'],
  layers: [[]]
}

function loadBehaviors() {
  return JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', '..', 'app', 'src', 'data', 'zmk-behaviors.json')))
}

function loadKeycodes() {
  return JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', '..', 'app', 'src', 'data', 'zmk-keycodes.json')))
}

function findLayoutFile() {
  const configDir = path.join(ZMK_PATH, 'config')
  if (fs.existsSync(path.join(configDir, 'info.json'))) {
    return 'info.json'
  }
  try {
    const files = fs.readdirSync(configDir)
    const jsonFile = files.find(file => file.endsWith('.json') && file !== 'keymap.json')
    return jsonFile || 'info.json'
  } catch (e) {
    return 'info.json'
  }
}

function findKeymapJsonFile() {
  const configDir = path.join(ZMK_PATH, 'config')
  if (fs.existsSync(path.join(configDir, 'keymap.json'))) {
    return 'keymap.json'
  }
  return null
}

function loadLayout(layout) {
  const layoutFile = findLayoutFile()
  const layoutPath = path.join(ZMK_PATH, 'config', layoutFile)
  const data = JSON.parse(fs.readFileSync(layoutPath))
  const layoutKey = layout || Object.keys(data.layouts)[0]
  return data.layouts[layoutKey].layout
}

function loadKeymap() {
  const keymapJsonFile = findKeymapJsonFile()
  console.log('loadKeymap: findKeymapJsonFile returned:', keymapJsonFile)
  if (keymapJsonFile) {
    const keymapPath = path.join(ZMK_PATH, 'config', keymapJsonFile)
    console.log('loadKeymap: reading from path:', keymapPath)
    const result = parseKeymap(JSON.parse(fs.readFileSync(keymapPath)))
    console.log('loadKeymap: result has layers count:', result.layers ? result.layers.length : null)
    return result
  }
  console.log('loadKeymap: returning EMPTY_KEYMAP')
  return EMPTY_KEYMAP
}

function findKeymapFile() {
  const files = fs.readdirSync(path.join(ZMK_PATH, 'config'))
  return files.find(file => file.endsWith('.keymap'))
}

function exportKeymap(generatedKeymap, flash, callback) {
  const keymapPath = path.join(ZMK_PATH, 'config')
  const keymapFile = findKeymapFile()

  fs.existsSync(keymapPath) || fs.mkdirSync(keymapPath)
  const keymapJsonFile = findKeymapJsonFile() || 'keymap.json'
  fs.writeFileSync(path.join(keymapPath, keymapJsonFile), generatedKeymap.json)
  fs.writeFileSync(path.join(keymapPath, keymapFile), generatedKeymap.code)

  return childProcess.execFile('git', ['status'], { cwd: ZMK_PATH }, callback)
}

module.exports = {
  loadBehaviors,
  loadKeycodes,
  loadLayout,
  loadKeymap,
  exportKeymap
}
