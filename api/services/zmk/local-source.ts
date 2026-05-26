import * as childProcess from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { parseKeymap as zmkParseKeymap } from './keymap.js';
import { Keymap, LayoutItem } from '../../../app/src/shared/keymapUtils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ZMK_PATH = process.env.ZMK_PATH || path.join(__dirname, '..', '..', '..', 'zmk-config');
console.log('ZMK_PATH resolved to:', ZMK_PATH);

const EMPTY_KEYMAP: Keymap = {
  keyboard: 'unknown',
  keymap: 'unknown',
  layout: 'unknown',
  layer_names: ['default'],
  layers: [[]]
};

export function loadBehaviors(): any[] {
  return JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', '..', 'app', 'src', 'data', 'zmk-behaviors.json'), 'utf-8'));
}

export function loadKeycodes(): any[] {
  return JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', '..', 'app', 'src', 'data', 'zmk-keycodes.json'), 'utf-8'));
}

function findLayoutFile(): string {
  const configDir = path.join(ZMK_PATH, 'config');
  if (fs.existsSync(path.join(configDir, 'info.json'))) {
    return 'info.json';
  }
  try {
    const files = fs.readdirSync(configDir);
    const jsonFile = files.find(file => file.endsWith('.json') && file !== 'keymap.json');
    return jsonFile || 'info.json';
  } catch (e) {
    return 'info.json';
  }
}

function findKeymapJsonFile(): string | null {
  const configDir = path.join(ZMK_PATH, 'config');
  if (fs.existsSync(path.join(configDir, 'keymap.json'))) {
    return 'keymap.json';
  }
  return null;
}

export function loadLayout(layout?: string): LayoutItem[] {
  const layoutFile = findLayoutFile();
  const layoutPath = path.join(ZMK_PATH, 'config', layoutFile);
  const data = JSON.parse(fs.readFileSync(layoutPath, 'utf-8'));
  const layoutKey = layout || Object.keys(data.layouts)[0];
  const layoutItems = data.layouts[layoutKey].layout;

  let maxLayoutY = 0;
  layoutItems.forEach((item: any) => {
    if (item && typeof item.y === 'number') {
      const itemH = item.h || 1;
      if (item.y + itemH > maxLayoutY) {
        maxLayoutY = item.y + itemH;
      }
    }
  });

  const mapEncoder = (enc: any, idx: number) => {
    const w = enc.w || 1;
    const h = enc.h || 1;
    const x = (typeof enc.x === 'number') ? enc.x : idx * 1.5;
    const y = (typeof enc.y === 'number') ? enc.y : maxLayoutY + 0.5;
    return {
      ...enc,
      x,
      y,
      w,
      h,
      isEncoder: true,
      label: enc.label || `Encoder ${idx + 1}`
    };
  };

  let encoders: any[] = [];
  if (data.encoders && Array.isArray(data.encoders)) {
    encoders = data.encoders.map(mapEncoder);
  } else if (data.encoder?.rotary && Array.isArray(data.encoder.rotary)) {
    encoders = data.encoder.rotary.map(mapEncoder);
  } else if (data.sensors && Array.isArray(data.sensors)) {
    encoders = data.sensors.map(mapEncoder);
  }

  return [...layoutItems, ...encoders];
}

export function loadKeymap(): Keymap {
  const keymapJsonFile = findKeymapJsonFile();
  console.log('loadKeymap: findKeymapJsonFile returned:', keymapJsonFile);
  if (keymapJsonFile) {
    const keymapPath = path.join(ZMK_PATH, 'config', keymapJsonFile);
    console.log('loadKeymap: reading from path:', keymapPath);
    const result = zmkParseKeymap(JSON.parse(fs.readFileSync(keymapPath, 'utf-8')));
    console.log('loadKeymap: result has layers count:', result.layers ? result.layers.length : null);
    
    const keymapFile = findKeymapFile();
    if (keymapFile) {
      try {
        const originalCode = fs.readFileSync(path.join(ZMK_PATH, 'config', keymapFile), 'utf-8');
        result.originalCode = originalCode;
      } catch (err) {
        console.error('Failed to read local keymap file:', err);
      }
    }
    
    return result;
  }
  console.log('loadKeymap: returning EMPTY_KEYMAP');
  return EMPTY_KEYMAP;
}

function findKeymapFile(): string | undefined {
  const files = fs.readdirSync(path.join(ZMK_PATH, 'config'));
  return files.find(file => file.endsWith('.keymap'));
}

export function exportKeymap(generatedKeymap: { code: string; json: string }, flash: boolean, callback: (error: childProcess.ExecFileException | null, stdout: string, stderr: string) => void) {
  const keymapPath = path.join(ZMK_PATH, 'config');
  const keymapFile = findKeymapFile() || 'keymap.keymap';

  if (!fs.existsSync(keymapPath)) {
    fs.mkdirSync(keymapPath, { recursive: true });
  }
  const keymapJsonFile = findKeymapJsonFile() || 'keymap.json';
  fs.writeFileSync(path.join(keymapPath, keymapJsonFile), generatedKeymap.json);
  fs.writeFileSync(path.join(keymapPath, keymapFile), generatedKeymap.code);

  return childProcess.execFile('git', ['status'], { cwd: ZMK_PATH }, callback);
}
