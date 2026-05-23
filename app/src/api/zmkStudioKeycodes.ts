export const KEYBOARD_PAGE = 0x07;
export const CONSUMER_PAGE = 0x0c;

// Map standard ZMK keycode names to [page, usage]
export const ZMK_KEY_TO_HID: Record<string, [number, number]> = {
  // Alphanumeric keys
  A: [KEYBOARD_PAGE, 0x04],
  B: [KEYBOARD_PAGE, 0x05],
  C: [KEYBOARD_PAGE, 0x06],
  D: [KEYBOARD_PAGE, 0x07],
  E: [KEYBOARD_PAGE, 0x08],
  F: [KEYBOARD_PAGE, 0x09],
  G: [KEYBOARD_PAGE, 0x0a],
  H: [KEYBOARD_PAGE, 0x0b],
  I: [KEYBOARD_PAGE, 0x0c],
  J: [KEYBOARD_PAGE, 0x0d],
  K: [KEYBOARD_PAGE, 0x0e],
  L: [KEYBOARD_PAGE, 0x0f],
  M: [KEYBOARD_PAGE, 0x10],
  N: [KEYBOARD_PAGE, 0x11],
  O: [KEYBOARD_PAGE, 0x12],
  P: [KEYBOARD_PAGE, 0x13],
  Q: [KEYBOARD_PAGE, 0x14],
  R: [KEYBOARD_PAGE, 0x15],
  S: [KEYBOARD_PAGE, 0x16],
  T: [KEYBOARD_PAGE, 0x17],
  U: [KEYBOARD_PAGE, 0x18],
  V: [KEYBOARD_PAGE, 0x19],
  W: [KEYBOARD_PAGE, 0x1a],
  X: [KEYBOARD_PAGE, 0x1b],
  Y: [KEYBOARD_PAGE, 0x1c],
  Z: [KEYBOARD_PAGE, 0x1d],

  // Numbers
  N1: [KEYBOARD_PAGE, 0x1e],
  NUMBER_1: [KEYBOARD_PAGE, 0x1e],
  N2: [KEYBOARD_PAGE, 0x1f],
  NUMBER_2: [KEYBOARD_PAGE, 0x1f],
  N3: [KEYBOARD_PAGE, 0x20],
  NUMBER_3: [KEYBOARD_PAGE, 0x20],
  N4: [KEYBOARD_PAGE, 0x21],
  NUMBER_4: [KEYBOARD_PAGE, 0x21],
  N5: [KEYBOARD_PAGE, 0x22],
  NUMBER_5: [KEYBOARD_PAGE, 0x22],
  N6: [KEYBOARD_PAGE, 0x23],
  NUMBER_6: [KEYBOARD_PAGE, 0x23],
  N7: [KEYBOARD_PAGE, 0x24],
  NUMBER_7: [KEYBOARD_PAGE, 0x24],
  N8: [KEYBOARD_PAGE, 0x25],
  NUMBER_8: [KEYBOARD_PAGE, 0x25],
  N9: [KEYBOARD_PAGE, 0x26],
  NUMBER_9: [KEYBOARD_PAGE, 0x26],
  N0: [KEYBOARD_PAGE, 0x27],
  NUMBER_0: [KEYBOARD_PAGE, 0x27],

  // Control keys
  ENTER: [KEYBOARD_PAGE, 0x28],
  RET: [KEYBOARD_PAGE, 0x28],
  RETURN: [KEYBOARD_PAGE, 0x28],
  ESC: [KEYBOARD_PAGE, 0x29],
  ESCAPE: [KEYBOARD_PAGE, 0x29],
  BSPC: [KEYBOARD_PAGE, 0x2a],
  BACKSPACE: [KEYBOARD_PAGE, 0x2a],
  TAB: [KEYBOARD_PAGE, 0x2b],
  SPACE: [KEYBOARD_PAGE, 0x2c],

  // Symbols and punctuation
  MINUS: [KEYBOARD_PAGE, 0x2d],
  EQUAL: [KEYBOARD_PAGE, 0x2e],
  LBKT: [KEYBOARD_PAGE, 0x2f],
  LEFT_BRACKET: [KEYBOARD_PAGE, 0x2f],
  RBKT: [KEYBOARD_PAGE, 0x30],
  RIGHT_BRACKET: [KEYBOARD_PAGE, 0x30],
  BSLH: [KEYBOARD_PAGE, 0x31],
  BACKSLASH: [KEYBOARD_PAGE, 0x31],
  SEMI: [KEYBOARD_PAGE, 0x33],
  SEMICOLON: [KEYBOARD_PAGE, 0x33],
  SQT: [KEYBOARD_PAGE, 0x34],
  SINGLE_QUOTE: [KEYBOARD_PAGE, 0x34],
  GRAVE: [KEYBOARD_PAGE, 0x35],
  COMMA: [KEYBOARD_PAGE, 0x36],
  DOT: [KEYBOARD_PAGE, 0x37],
  PERIOD: [KEYBOARD_PAGE, 0x37],
  FSLH: [KEYBOARD_PAGE, 0x38],
  SLASH: [KEYBOARD_PAGE, 0x38],
  CAPS: [KEYBOARD_PAGE, 0x39],
  CAPSLOCK: [KEYBOARD_PAGE, 0x39],

  // Function keys
  F1: [KEYBOARD_PAGE, 0x3a],
  F2: [KEYBOARD_PAGE, 0x3b],
  F3: [KEYBOARD_PAGE, 0x3c],
  F4: [KEYBOARD_PAGE, 0x3d],
  F5: [KEYBOARD_PAGE, 0x3e],
  F6: [KEYBOARD_PAGE, 0x3f],
  F7: [KEYBOARD_PAGE, 0x40],
  F8: [KEYBOARD_PAGE, 0x41],
  F9: [KEYBOARD_PAGE, 0x42],
  F10: [KEYBOARD_PAGE, 0x43],
  F11: [KEYBOARD_PAGE, 0x44],
  F12: [KEYBOARD_PAGE, 0x45],

  // Navigation
  PRINTSCREEN: [KEYBOARD_PAGE, 0x46],
  PRNTSCRN: [KEYBOARD_PAGE, 0x46],
  SCROLLLOCK: [KEYBOARD_PAGE, 0x47],
  PAUSE_BREAK: [KEYBOARD_PAGE, 0x48],
  INSERT: [KEYBOARD_PAGE, 0x49],
  HOME: [KEYBOARD_PAGE, 0x4a],
  PG_UP: [KEYBOARD_PAGE, 0x4b],
  PAGE_UP: [KEYBOARD_PAGE, 0x4b],
  DELETE: [KEYBOARD_PAGE, 0x4c],
  DEL: [KEYBOARD_PAGE, 0x4c],
  END: [KEYBOARD_PAGE, 0x4d],
  PG_DN: [KEYBOARD_PAGE, 0x4e],
  PAGE_DOWN: [KEYBOARD_PAGE, 0x4e],
  RIGHT: [KEYBOARD_PAGE, 0x4f],
  LEFT: [KEYBOARD_PAGE, 0x50],
  DOWN: [KEYBOARD_PAGE, 0x51],
  UP: [KEYBOARD_PAGE, 0x52],

  // Keypad
  KP_NUM: [KEYBOARD_PAGE, 0x53],
  KP_SLASH: [KEYBOARD_PAGE, 0x54],
  KP_MULTIPLY: [KEYBOARD_PAGE, 0x55],
  KP_ASTERISK: [KEYBOARD_PAGE, 0x55],
  KP_MINUS: [KEYBOARD_PAGE, 0x56],
  KP_SUBTRACT: [KEYBOARD_PAGE, 0x56],
  KP_PLUS: [KEYBOARD_PAGE, 0x57],
  KP_ADD: [KEYBOARD_PAGE, 0x57],
  KP_ENTER: [KEYBOARD_PAGE, 0x58],
  KP_N1: [KEYBOARD_PAGE, 0x59],
  KP_N2: [KEYBOARD_PAGE, 0x5a],
  KP_N3: [KEYBOARD_PAGE, 0x5b],
  KP_N4: [KEYBOARD_PAGE, 0x5c],
  KP_N5: [KEYBOARD_PAGE, 0x5d],
  KP_N6: [KEYBOARD_PAGE, 0x5e],
  KP_N7: [KEYBOARD_PAGE, 0x5f],
  KP_N8: [KEYBOARD_PAGE, 0x60],
  KP_N9: [KEYBOARD_PAGE, 0x61],
  KP_N0: [KEYBOARD_PAGE, 0x62],
  KP_DOT: [KEYBOARD_PAGE, 0x63],
  KP_DECIMAL: [KEYBOARD_PAGE, 0x63],

  // Modifiers
  LCTRL: [KEYBOARD_PAGE, 0xe0],
  LSHIFT: [KEYBOARD_PAGE, 0xe1],
  LALT: [KEYBOARD_PAGE, 0xe2],
  LGUI: [KEYBOARD_PAGE, 0xe3],
  RCTRL: [KEYBOARD_PAGE, 0xe4],
  RSHIFT: [KEYBOARD_PAGE, 0xe5],
  RALT: [KEYBOARD_PAGE, 0xe6],
  RGUI: [KEYBOARD_PAGE, 0xe7],

  // Consumer controls (common)
  C_PLAY: [CONSUMER_PAGE, 0xb0],
  C_PAUSE: [CONSUMER_PAGE, 0xb1],
  C_RECORD: [CONSUMER_PAGE, 0xb2],
  C_FF: [CONSUMER_PAGE, 0xb3],
  C_FAST_FORWARD: [CONSUMER_PAGE, 0xb3],
  C_REWIND: [CONSUMER_PAGE, 0xb4],
  C_NEXT: [CONSUMER_PAGE, 0xb5],
  C_PREV: [CONSUMER_PAGE, 0xb6],
  C_PREVIOUS: [CONSUMER_PAGE, 0xb6],
  C_STOP: [CONSUMER_PAGE, 0xb7],
  C_EJECT: [CONSUMER_PAGE, 0xb8],
  C_PLAY_PAUSE: [CONSUMER_PAGE, 0xcd],
  C_MUTE: [CONSUMER_PAGE, 0xe2],
  C_VOL_UP: [CONSUMER_PAGE, 0xe9],
  C_VOLUME_UP: [CONSUMER_PAGE, 0xe9],
  C_VOL_DN: [CONSUMER_PAGE, 0xea],
  C_VOLUME_DOWN: [CONSUMER_PAGE, 0xea],
  C_SEARCH: [CONSUMER_PAGE, 0x0221],
  C_AC_SEARCH: [CONSUMER_PAGE, 0x0221],
  C_HOME: [CONSUMER_PAGE, 0x0223],
  C_AC_HOME: [CONSUMER_PAGE, 0x0223],
  C_BACK: [CONSUMER_PAGE, 0x0224],
  C_AC_BACK: [CONSUMER_PAGE, 0x0224],
  C_FORWARD: [CONSUMER_PAGE, 0x0225],
  C_AC_FORWARD: [CONSUMER_PAGE, 0x0225],
  C_REFRESH: [CONSUMER_PAGE, 0x0227],
  C_AC_REFRESH: [CONSUMER_PAGE, 0x0227],
  C_BOOKMARKS: [CONSUMER_PAGE, 0x022a],
  C_AC_BOOKMARKS: [CONSUMER_PAGE, 0x022a],
};

// Create a reverse mapping
export const HID_TO_ZMK_KEY: Record<number, string> = {};
Object.entries(ZMK_KEY_TO_HID).forEach(([key, [page, usage]]) => {
  const packed = (page << 16) | usage;
  if (!HID_TO_ZMK_KEY[packed]) {
    HID_TO_ZMK_KEY[packed] = key;
  }
});

/**
 * Decodes ZMK HID 32-bit parameter value to string keycode with modifiers.
 */
export function decodeKeycodeParameter(value: number): string {
  const mods = (value >>> 24) & 0xff;
  const baseValue = value & 0x00ffffff;

  let keyStr = HID_TO_ZMK_KEY[baseValue];
  if (!keyStr) {
    const page = (baseValue >>> 16) & 0xffff;
    const usage = baseValue & 0xffff;
    if (page === 0 || page === KEYBOARD_PAGE) {
      keyStr = HID_TO_ZMK_KEY[(KEYBOARD_PAGE << 16) | usage] || `0x${baseValue.toString(16)}`;
    } else {
      keyStr = `0x${baseValue.toString(16)}`;
    }
  }

  // Wrap with ZMK modifier functions:
  // MOD_LCTL 0x01, MOD_LSFT 0x02, MOD_LALT 0x04, MOD_LGUI 0x08, R-side counterparts starting from 0x10.
  let result = keyStr;
  if (mods & 0x01) result = `LC(${result})`;
  if (mods & 0x02) result = `LS(${result})`;
  if (mods & 0x04) result = `LA(${result})`;
  if (mods & 0x08) result = `LG(${result})`;
  if (mods & 0x10) result = `RC(${result})`;
  if (mods & 0x20) result = `RS(${result})`;
  if (mods & 0x40) result = `RA(${result})`;
  if (mods & 0x80) result = `RG(${result})`;

  return result;
}

/**
 * Encodes ZMK keycode string with modifiers to ZMK HID 32-bit parameter.
 */
export function encodeKeycodeParameter(keycodeStr: string): number {
  let str = keycodeStr.trim();
  let mods = 0;

  // Recursively extract modifier wrappers
  let matched = true;
  while (matched) {
    matched = false;
    const match = str.match(/^(LC|LS|LA|LG|RC|RS|RA|RG)\((.*)\)$/i);
    if (match) {
      const modName = match[1].toUpperCase();
      str = match[2].trim();
      matched = true;
      if (modName === 'LC') mods |= 0x01;
      else if (modName === 'LS') mods |= 0x02;
      else if (modName === 'LA') mods |= 0x04;
      else if (modName === 'LG') mods |= 0x08;
      else if (modName === 'RC') mods |= 0x10;
      else if (modName === 'RS') mods |= 0x20;
      else if (modName === 'RA') mods |= 0x40;
      else if (modName === 'RG') mods |= 0x80;
    }
  }

  // Look up base keycode value
  let baseValue = 0;
  if (str.startsWith('0x') || str.startsWith('0X')) {
    baseValue = parseInt(str, 16);
  } else {
    const mapping = ZMK_KEY_TO_HID[str.toUpperCase()];
    if (mapping) {
      const [page, usage] = mapping;
      baseValue = (page << 16) | usage;
    } else {
      const parsed = parseInt(str, 10);
      if (!isNaN(parsed)) {
        baseValue = parsed;
      }
    }
  }

  return (mods << 24) | baseValue;
}
