import behaviours from './data/zmk-behaviors.json';
import keyBy from 'lodash/keyBy';
import * as keymapUtils from './shared/keymapUtils';
import { Keymap, LayoutItem, RenderTableOptions } from './shared/keymapUtils';

const behavioursByBind = keyBy(behaviours, 'code');

export function renderTable(layout: LayoutItem[], layer: string[], opts?: RenderTableOptions) {
  return keymapUtils.renderTable(layout, layer, opts);
}

export function parseKeyBinding(binding: string) {
  return keymapUtils.parseKeyBinding(binding);
}

export function parseKeymap(keymap: any) {
  return keymapUtils.parseKeymap(keymap);
}

export function parseKeymapDts(content: string) {
  return keymapUtils.parseKeymapDts(content);
}

export function generateKeymap(layout: LayoutItem[], keymap: Keymap, template?: string) {
  return keymapUtils.generateKeymap(layout, keymap, template, behavioursByBind as any);
}
