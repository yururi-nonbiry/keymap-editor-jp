
export interface PaletteLayoutItem {
  x: number;
  y: number;
  w?: number;
  h?: number;
  label: string;
  code: string;
}

export const JIS_LAYOUT: PaletteLayoutItem[] = [
  // F-row
  { x: 0, y: 0, label: "Esc", code: "ESC" },
  { x: 2, y: 0, label: "F1", code: "F1" },
  { x: 3, y: 0, label: "F2", code: "F2" },
  { x: 4, y: 0, label: "F3", code: "F3" },
  { x: 5, y: 0, label: "F4", code: "F4" },
  { x: 6.5, y: 0, label: "F5", code: "F5" },
  { x: 7.5, y: 0, label: "F6", code: "F6" },
  { x: 8.5, y: 0, label: "F7", code: "F7" },
  { x: 9.5, y: 0, label: "F8", code: "F8" },
  { x: 11, y: 0, label: "F9", code: "F9" },
  { x: 12, y: 0, label: "F10", code: "F10" },
  { x: 13, y: 0, label: "F11", code: "F11" },
  { x: 14, y: 0, label: "F12", code: "F12" },
  { x: 15.25, y: 0, label: "PrtSc", code: "PRINTSCREEN" },
  { x: 16.25, y: 0, label: "ScrLk", code: "SCROLLLOCK" },
  { x: 17.25, y: 0, label: "Pause", code: "PAUSE_BREAK" },

  // Row 0
  { x: 0, y: 1.5, label: "半/全", code: "GRAVE" },
  { x: 1, y: 1.5, label: "1", code: "NUMBER_1" },
  { x: 2, y: 1.5, label: "2", code: "NUMBER_2" },
  { x: 3, y: 1.5, label: "3", code: "NUMBER_3" },
  { x: 4, y: 1.5, label: "4", code: "NUMBER_4" },
  { x: 5, y: 1.5, label: "5", code: "NUMBER_5" },
  { x: 6, y: 1.5, label: "6", code: "NUMBER_6" },
  { x: 7, y: 1.5, label: "7", code: "NUMBER_7" },
  { x: 8, y: 1.5, label: "8", code: "NUMBER_8" },
  { x: 9, y: 1.5, label: "9", code: "NUMBER_9" },
  { x: 10, y: 1.5, label: "0", code: "NUMBER_0" },
  { x: 11, y: 1.5, label: "-", code: "MINUS" },
  { x: 12, y: 1.5, label: "^", code: "EQUAL" },
  { x: 13, y: 1.5, label: "¥", code: "INTERNATIONAL_3" },
  { x: 14, y: 1.5, w: 1, label: "BS", code: "BACKSPACE" },

  // Nav cluster row 0
  { x: 15.5, y: 1.5, label: "Ins", code: "INSERT" },
  { x: 16.5, y: 1.5, label: "Home", code: "HOME" },
  { x: 17.5, y: 1.5, label: "PgUp", code: "PAGE_UP" },

  // Numpad row 0
  { x: 19, y: 1.5, label: "Num", code: "KP_NUM" },
  { x: 20, y: 1.5, label: "/", code: "KP_DIVIDE" },
  { x: 21, y: 1.5, label: "*", code: "KP_MULTIPLY" },
  { x: 22, y: 1.5, label: "-", code: "KP_MINUS" },

  // Row 1
  { x: 0, y: 2.5, w: 1.5, label: "Tab", code: "TAB" },
  { x: 1.5, y: 2.5, label: "Q", code: "Q" },
  { x: 2.5, y: 2.5, label: "W", code: "W" },
  { x: 3.5, y: 2.5, label: "E", code: "E" },
  { x: 4.5, y: 2.5, label: "R", code: "R" },
  { x: 5.5, y: 2.5, label: "T", code: "T" },
  { x: 6.5, y: 2.5, label: "Y", code: "Y" },
  { x: 7.5, y: 2.5, label: "U", code: "U" },
  { x: 8.5, y: 2.5, label: "I", code: "I" },
  { x: 9.5, y: 2.5, label: "O", code: "O" },
  { x: 10.5, y: 2.5, label: "P", code: "P" },
  { x: 11.5, y: 2.5, label: "@", code: "LEFT_BRACKET" },
  { x: 12.5, y: 2.5, label: "[", code: "RIGHT_BRACKET" },
  { x: 13.5, y: 2.5, w: 1.5, h: 2, label: "Enter", code: "RETURN" },

  // Nav cluster row 1
  { x: 15.5, y: 2.5, label: "Del", code: "DELETE" },
  { x: 16.5, y: 2.5, label: "End", code: "END" },
  { x: 17.5, y: 2.5, label: "PgDn", code: "PAGE_DOWN" },

  // Numpad row 1
  { x: 19, y: 2.5, label: "7", code: "KP_N7" },
  { x: 20, y: 2.5, label: "8", code: "KP_N8" },
  { x: 21, y: 2.5, label: "9", code: "KP_N9" },
  { x: 22, y: 2.5, h: 2, label: "+", code: "KP_PLUS" },

  // Row 2
  { x: 0, y: 3.5, w: 1.75, label: "Caps", code: "CAPSLOCK" },
  { x: 1.75, y: 3.5, label: "A", code: "A" },
  { x: 2.75, y: 3.5, label: "S", code: "S" },
  { x: 3.75, y: 3.5, label: "D", code: "D" },
  { x: 4.75, y: 3.5, label: "F", code: "F" },
  { x: 5.75, y: 3.5, label: "G", code: "G" },
  { x: 6.75, y: 3.5, label: "H", code: "H" },
  { x: 7.75, y: 3.5, label: "J", code: "J" },
  { x: 8.75, y: 3.5, label: "K", code: "K" },
  { x: 9.75, y: 3.5, label: "L", code: "L" },
  { x: 10.75, y: 3.5, label: ";", code: "SEMICOLON" },
  { x: 11.75, y: 3.5, label: ":", code: "SINGLE_QUOTE" },
  { x: 12.75, y: 3.5, label: "]", code: "BACKSLASH" },

  // Numpad row 2
  { x: 19, y: 3.5, label: "4", code: "KP_N4" },
  { x: 20, y: 3.5, label: "5", code: "KP_N5" },
  { x: 21, y: 3.5, label: "6", code: "KP_N6" },

  // Row 3
  { x: 0, y: 4.5, w: 2.25, label: "Shift", code: "LEFT_SHIFT" },
  { x: 2.25, y: 4.5, label: "Z", code: "Z" },
  { x: 3.25, y: 4.5, label: "X", code: "X" },
  { x: 4.25, y: 4.5, label: "C", code: "C" },
  { x: 5.25, y: 4.5, label: "V", code: "V" },
  { x: 6.25, y: 4.5, label: "B", code: "B" },
  { x: 7.25, y: 4.5, label: "N", code: "N" },
  { x: 8.25, y: 4.5, label: "M", code: "M" },
  { x: 9.25, y: 4.5, label: ",", code: "COMMA" },
  { x: 10.25, y: 4.5, label: ".", code: "PERIOD" },
  { x: 11.25, y: 4.5, label: "/", code: "SLASH" },
  { x: 12.25, y: 4.5, label: "_", code: "INTERNATIONAL_1" },
  { x: 13.25, y: 4.5, w: 1.75, label: "Shift", code: "RIGHT_SHIFT" },

  // Arrows (Up)
  { x: 16.5, y: 4.5, label: "Up", code: "UP" },

  // Numpad row 3
  { x: 19, y: 4.5, label: "1", code: "KP_N1" },
  { x: 20, y: 4.5, label: "2", code: "KP_N2" },
  { x: 21, y: 4.5, label: "3", code: "KP_N3" },
  { x: 22, y: 4.5, h: 2, label: "Enter", code: "KP_ENTER" },

  // Row 4
  { x: 0, y: 5.5, w: 1.25, label: "Ctrl", code: "LEFT_CONTROL" },
  { x: 1.25, y: 5.5, w: 1.25, label: "Win", code: "LEFT_GUI" },
  { x: 2.5, y: 5.5, w: 1.25, label: "Alt", code: "LEFT_ALT" },
  { x: 3.75, y: 5.5, label: "無変換", code: "INTERNATIONAL_5" },
  { x: 4.75, y: 5.5, w: 3.5, label: "Space", code: "SPACE" },
  { x: 8.25, y: 5.5, label: "変換", code: "INTERNATIONAL_4" },
  { x: 9.25, y: 5.5, label: "かな", code: "INTERNATIONAL_2" },
  { x: 10.25, y: 5.5, w: 1.25, label: "Alt", code: "RIGHT_ALT" },
  { x: 11.5, y: 5.5, w: 1.25, label: "Ctrl", code: "RIGHT_CONTROL" },

  // Arrows (Left, Down, Right)
  { x: 15.5, y: 5.5, label: "Left", code: "LEFT" },
  { x: 16.5, y: 5.5, label: "Down", code: "DOWN" },
  { x: 17.5, y: 5.5, label: "Right", code: "RIGHT" },

  // Numpad row 4
  { x: 19, y: 5.5, w: 2, label: "0", code: "KP_N0" },
  { x: 21, y: 5.5, label: ".", code: "KP_DOT" },
];

export const US_LAYOUT: PaletteLayoutItem[] = [
  // F-row
  { x: 0, y: 0, label: "Esc", code: "ESC" },
  { x: 2, y: 0, label: "F1", code: "F1" },
  { x: 3, y: 0, label: "F2", code: "F2" },
  { x: 4, y: 0, label: "F3", code: "F3" },
  { x: 5, y: 0, label: "F4", code: "F4" },
  { x: 6.5, y: 0, label: "F5", code: "F5" },
  { x: 7.5, y: 0, label: "F6", code: "F6" },
  { x: 8.5, y: 0, label: "F7", code: "F7" },
  { x: 9.5, y: 0, label: "F8", code: "F8" },
  { x: 11, y: 0, label: "F9", code: "F9" },
  { x: 12, y: 0, label: "F10", code: "F10" },
  { x: 13, y: 0, label: "F11", code: "F11" },
  { x: 14, y: 0, label: "F12", code: "F12" },
  { x: 15.25, y: 0, label: "PrtSc", code: "PRINTSCREEN" },
  { x: 16.25, y: 0, label: "ScrLk", code: "SCROLLLOCK" },
  { x: 17.25, y: 0, label: "Pause", code: "PAUSE_BREAK" },

  // Row 0
  { x: 0, y: 1.5, label: "`", code: "GRAVE" },
  { x: 1, y: 1.5, label: "1", code: "NUMBER_1" },
  { x: 2, y: 1.5, label: "2", code: "NUMBER_2" },
  { x: 3, y: 1.5, label: "3", code: "NUMBER_3" },
  { x: 4, y: 1.5, label: "4", code: "NUMBER_4" },
  { x: 5, y: 1.5, label: "5", code: "NUMBER_5" },
  { x: 6, y: 1.5, label: "6", code: "NUMBER_6" },
  { x: 7, y: 1.5, label: "7", code: "NUMBER_7" },
  { x: 8, y: 1.5, label: "8", code: "NUMBER_8" },
  { x: 9, y: 1.5, label: "9", code: "NUMBER_9" },
  { x: 10, y: 1.5, label: "0", code: "NUMBER_0" },
  { x: 11, y: 1.5, label: "-", code: "MINUS" },
  { x: 12, y: 1.5, label: "=", code: "EQUAL" },
  { x: 13, y: 1.5, w: 2, label: "Backspace", code: "BACKSPACE" },

  // Nav cluster row 0
  { x: 15.25, y: 1.5, label: "Ins", code: "INSERT" },
  { x: 16.25, y: 1.5, label: "Home", code: "HOME" },
  { x: 17.25, y: 1.5, label: "PgUp", code: "PAGE_UP" },

  // Numpad row 0
  { x: 18.5, y: 1.5, label: "Num", code: "KP_NUM" },
  { x: 19.5, y: 1.5, label: "/", code: "KP_DIVIDE" },
  { x: 20.5, y: 1.5, label: "*", code: "KP_MULTIPLY" },
  { x: 21.5, y: 1.5, label: "-", code: "KP_MINUS" },

  // Row 1
  { x: 0, y: 2.5, w: 1.5, label: "Tab", code: "TAB" },
  { x: 1.5, y: 2.5, label: "Q", code: "Q" },
  { x: 2.5, y: 2.5, label: "W", code: "W" },
  { x: 3.5, y: 2.5, label: "E", code: "E" },
  { x: 4.5, y: 2.5, label: "R", code: "R" },
  { x: 5.5, y: 2.5, label: "T", code: "T" },
  { x: 6.5, y: 2.5, label: "Y", code: "Y" },
  { x: 7.5, y: 2.5, label: "U", code: "U" },
  { x: 8.5, y: 2.5, label: "I", code: "I" },
  { x: 9.5, y: 2.5, label: "O", code: "O" },
  { x: 10.5, y: 2.5, label: "P", code: "P" },
  { x: 11.5, y: 2.5, label: "[", code: "LEFT_BRACKET" },
  { x: 12.5, y: 2.5, label: "]", code: "RIGHT_BRACKET" },
  { x: 13.5, y: 2.5, w: 1.5, label: "\\", code: "BACKSLASH" },

  // Nav cluster row 1
  { x: 15.25, y: 2.5, label: "Del", code: "DELETE" },
  { x: 16.25, y: 2.5, label: "End", code: "END" },
  { x: 17.25, y: 2.5, label: "PgDn", code: "PAGE_DOWN" },

  // Numpad row 1
  { x: 18.5, y: 2.5, label: "7", code: "KP_N7" },
  { x: 19.5, y: 2.5, label: "8", code: "KP_N8" },
  { x: 20.5, y: 2.5, label: "9", code: "KP_N9" },
  { x: 21.5, y: 2.5, h: 2, label: "+", code: "KP_PLUS" },

  // Row 2
  { x: 0, y: 3.5, w: 1.75, label: "Caps", code: "CAPSLOCK" },
  { x: 1.75, y: 3.5, label: "A", code: "A" },
  { x: 2.75, y: 3.5, label: "S", code: "S" },
  { x: 3.75, y: 3.5, label: "D", code: "D" },
  { x: 4.75, y: 3.5, label: "F", code: "F" },
  { x: 5.75, y: 3.5, label: "G", code: "G" },
  { x: 6.75, y: 3.5, label: "H", code: "H" },
  { x: 7.75, y: 3.5, label: "J", code: "J" },
  { x: 8.75, y: 3.5, label: "K", code: "K" },
  { x: 9.75, y: 3.5, label: "L", code: "L" },
  { x: 10.75, y: 3.5, label: ";", code: "SEMICOLON" },
  { x: 11.75, y: 3.5, label: "'", code: "SINGLE_QUOTE" },
  { x: 12.75, y: 3.5, w: 2.25, label: "Enter", code: "RETURN" },

  // Numpad row 2
  { x: 18.5, y: 3.5, label: "4", code: "KP_N4" },
  { x: 19.5, y: 3.5, label: "5", code: "KP_N5" },
  { x: 20.5, y: 3.5, label: "6", code: "KP_N6" },

  // Row 3
  { x: 0, y: 4.5, w: 2.25, label: "Shift", code: "LEFT_SHIFT" },
  { x: 2.25, y: 4.5, label: "Z", code: "Z" },
  { x: 3.25, y: 4.5, label: "X", code: "X" },
  { x: 4.25, y: 4.5, label: "C", code: "C" },
  { x: 5.25, y: 4.5, label: "V", code: "V" },
  { x: 6.25, y: 4.5, label: "B", code: "B" },
  { x: 7.25, y: 4.5, label: "N", code: "N" },
  { x: 8.25, y: 4.5, label: "M", code: "M" },
  { x: 9.25, y: 4.5, label: ",", code: "COMMA" },
  { x: 10.25, y: 4.5, label: ".", code: "PERIOD" },
  { x: 11.25, y: 4.5, label: "/", code: "SLASH" },
  { x: 12.25, y: 4.5, w: 2.75, label: "Shift", code: "RIGHT_SHIFT" },

  // Arrows (Up)
  { x: 16.25, y: 4.5, label: "Up", code: "UP" },

  // Numpad row 3
  { x: 18.5, y: 4.5, label: "1", code: "KP_N1" },
  { x: 19.5, y: 4.5, label: "2", code: "KP_N2" },
  { x: 20.5, y: 4.5, label: "3", code: "KP_N3" },
  { x: 21.5, y: 4.5, h: 2, label: "Enter", code: "KP_ENTER" },

  // Row 4
  { x: 0, y: 5.5, w: 1.25, label: "Ctrl", code: "LEFT_CONTROL" },
  { x: 1.25, y: 5.5, w: 1.25, label: "Win", code: "LEFT_GUI" },
  { x: 2.5, y: 5.5, w: 1.25, label: "Alt", code: "LEFT_ALT" },
  { x: 3.75, y: 5.5, w: 6.25, label: "Space", code: "SPACE" },
  { x: 10, y: 5.5, w: 1.25, label: "Alt", code: "RIGHT_ALT" },
  { x: 11.25, y: 5.5, w: 1.25, label: "Win", code: "RIGHT_GUI" },
  { x: 12.5, y: 5.5, w: 1.25, label: "Menu", code: "K_APPLICATION" },
  { x: 13.75, y: 5.5, w: 1.25, label: "Ctrl", code: "RIGHT_CONTROL" },

  // Arrows (Left, Down, Right)
  { x: 15.25, y: 5.5, label: "Left", code: "LEFT" },
  { x: 16.25, y: 5.5, label: "Down", code: "DOWN" },
  { x: 17.25, y: 5.5, label: "Right", code: "RIGHT" },

  // Numpad row 4
  { x: 18.5, y: 5.5, w: 2, label: "0", code: "KP_N0" },
  { x: 20.5, y: 5.5, label: ".", code: "KP_DOT" },
];
