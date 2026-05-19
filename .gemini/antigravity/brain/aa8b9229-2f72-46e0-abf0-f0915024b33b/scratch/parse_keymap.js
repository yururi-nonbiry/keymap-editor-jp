const fs = require('fs')
const path = require('path')

const keymapPath = 'C:\\Git\\zmk-config-roBa\\config\\roBa.keymap'
const outputPath = 'C:\\Git\\zmk-config-roBa\\config\\keymap.json'

const content = fs.readFileSync(keymapPath, 'utf8')

// Define behavior parameter count maps
const BEHAVIOR_PARAMS = {
  '&kp': 1,
  '&mt': 2,
  '&lt': 2,
  '&mo': 1,
  '&to': 1,
  '&tog': 1,
  '&sk': 1,
  '&sl': 1,
  '&trans': 0,
  '&none': 0,
  '&reset': 0,
  '&bootloader': 0,
  '&out': 1,
  '&rgb_ug': 1,
  '&ext_power': 1,
  '&mkp': 1,
  '&lt_to_layer_0': 2, // custom behavior in roBa.keymap
}

// Special case for &bt
function getBtParamCount(tokens, startIndex) {
  const cmd = tokens[startIndex + 1]
  if (cmd === 'BT_SEL') return 2
  return 1 // BT_CLR, BT_NXT, BT_PRV, etc.
}

// Parse a bindings block like: <&kp Q &kp W ...>
function parseBindings(bindingsText) {
  // Normalize whitespace and remove line breaks
  const cleanText = bindingsText.replace(/\s+/g, ' ').trim()
  
  // Split into tokens
  const tokens = cleanText.split(' ').filter(t => t.length > 0)
  
  const bindings = []
  let i = 0
  while (i < tokens.length) {
    const token = tokens[i]
    if (token.startsWith('&')) {
      let paramCount = BEHAVIOR_PARAMS[token]
      if (token === '&bt') {
        paramCount = getBtParamCount(tokens, i)
      }
      if (paramCount === undefined) {
        // Fallback: guess param count based on next tokens until next behavior
        paramCount = 0
        while (i + 1 + paramCount < tokens.length && !tokens[i + 1 + paramCount].startsWith('&')) {
          paramCount++
        }
      }
      
      const bindingTokens = [token]
      for (let p = 0; p < paramCount; p++) {
        bindingTokens.push(tokens[i + 1 + p])
      }
      bindings.push(bindingTokens.join(' '))
      i += 1 + paramCount
    } else {
      // Just in case, skip orphan tokens
      i++
    }
  }
  
  return bindings
}

// Find keymap node in DTS
const keymapMatch = content.match(/keymap\s*\{([\s\S]*?)\};[\s]*$/)
if (!keymapMatch) {
  console.error('Could not find keymap node')
  process.exit(1)
}

const keymapBody = keymapMatch[1]

// Parse layers
const layerRegex = /(\w+)\s*\{[\s\S]*?bindings\s*=\s*<([\s\S]*?)>;[\s\S]*?\};/g
let match
const layers = []
const layerNames = []

while ((match = layerRegex.exec(keymapBody)) !== null) {
  const name = match[1]
  const bindingsText = match[2]
  
  // Clean name
  let cleanName = name
  if (name === 'default_layer') {
    cleanName = 'default'
  }
  
  layerNames.push(cleanName)
  layers.push(parseBindings(bindingsText))
}

const keymapJson = {
  keyboard: 'roBa',
  keymap: 'roBa',
  layout: 'default_layout',
  layer_names: layerNames,
  layers: layers
}

fs.writeFileSync(outputPath, JSON.stringify(keymapJson, null, 2))
console.log('Successfully generated keymap.json with', layers.length, 'layers')
