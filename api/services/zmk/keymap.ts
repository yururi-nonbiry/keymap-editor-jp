import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import _ from 'lodash';
const { keyBy } = _;

import {
  parseKeymap as sharedParseKeymap,
  generateKeymap as sharedGenerateKeymap,
  parseKeyBinding as sharedParseKeyBinding,
  Keymap,
  Behaviour,
  LayoutItem
} from '../../../app/src/shared/keymapUtils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class KeymapValidationError extends Error {
  errors: string[];
  constructor (errors: string[]) {
    super();
    this.name = 'KeymapValidationError';
    this.errors = errors;
  }
}

const behaviours: Behaviour[] = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../app/src/data/zmk-behaviors.json'), 'utf-8'));
const behavioursByBind = keyBy(behaviours, 'code');

export function parseKeymap(keymap: any): Keymap {
  return sharedParseKeymap(keymap);
}

export function parseKeyBinding(binding: string) {
  return sharedParseKeyBinding(binding);
}

export function generateKeymap(layout: LayoutItem[], keymap: Keymap, template?: string) {
  return sharedGenerateKeymap(layout, keymap, template, behavioursByBind);
}

export function validateKeymapJson(keymap: any): void {
  const errors: string[] = [];

  if (typeof keymap !== 'object' || keymap === null) {
    errors.push('keymap.json root must be an object');
  } else if (!Array.isArray(keymap.layers)) {
    errors.push('keymap must include "layers" array');
  } else {
    for (const i in keymap.layers) {
      const layer = keymap.layers[i];

      if (!Array.isArray(layer)) {
        errors.push(`Layer at layers[${i}] must be an array`);
      } else {
        for (const j in layer) {
          const key: any = layer[j];
          const keyPath = `layers[${i}][${j}]`;

          if (typeof key !== 'string') {
            errors.push(`Value at "${keyPath}" must be a string`);
          } else {
            const bind: RegExpMatchArray | null = key.match(/^&.+?\b/);
            if (!(bind && bind[0] in behavioursByBind)) {
              errors.push(`Key bind at "${keyPath}" has invalid behaviour`);
            }
          }
        }
      }
    }
  }

  if (errors.length) {
    throw new KeymapValidationError(errors);
  }
}
