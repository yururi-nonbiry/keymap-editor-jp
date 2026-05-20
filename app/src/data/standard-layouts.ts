
export interface PaletteLayoutItem {
  x: number;
  y: number;
  w?: number;
  h?: number;
  label: string;
  code: string;
}

export const JIS_LAYOUT: PaletteLayoutItem[] = [
  // Row 0
  { x: 0, y: 0, label: "Esc", code: "ESC" },
  { x: 1, y: 0, label: "1", code: "NUMBER_1" },
  { x: 2, y: 0, label: "2", code: "NUMBER_2" },
  { x: 3, y: 0, label: "3", code: "NUMBER_3" },
  { x: 4, y: 0, label: "4", code: "NUMBER_4" },
  { x: 5, y: 0, label: "5", code: "NUMBER_5" },
  { x: 6, y: 0, label: "6", code: "NUMBER_6" },
  { x: 7, y: 0, label: "7", code: "NUMBER_7" },
  { x: 8, y: 0, label: "8", code: "NUMBER_8" },
  { x: 9, y: 0, label: "9", code: "NUMBER_9" },
  { x: 10, y: 0, label: "0", code: "NUMBER_0" },
  { x: 11, y: 0, label: "-", code: "MINUS" },
  { x: 12, y: 0, label: "^", code: "EQUAL" },
  { x: 13, y: 0, label: "¥", code: "INTERNATIONAL_3" },
  { x: 14, y: 0, w: 1, label: "BS", code: "BACKSPACE" },

  // Row 1
  { x: 0, y: 1, w: 1.5, label: "Tab", code: "TAB" },
  { x: 1.5, y: 1, label: "Q", code: "Q" },
  { x: 2.5, y: 1, label: "W", code: "W" },
  { x: 3.5, y: 1, label: "E", code: "E" },
  { x: 4.5, y: 1, label: "R", code: "R" },
  { x: 5.5, y: 1, label: "T", code: "T" },
  { x: 6.5, y: 1, label: "Y", code: "Y" },
  { x: 7.5, y: 1, label: "U", code: "U" },
  { x: 8.5, y: 1, label: "I", code: "I" },
  { x: 9.5, y: 1, label: "O", code: "O" },
  { x: 10.5, y: 1, label: "P", code: "P" },
  { x: 11.5, y: 1, label: "@", code: "LEFT_BRACKET" },
  { x: 12.5, y: 1, label: "[", code: "RIGHT_BRACKET" },
  { x: 13.5, y: 1, w: 1.5, h: 2, label: "Enter", code: "RETURN" },

  // Row 2
  { x: 0, y: 2, w: 1.75, label: "Caps", code: "CAPSLOCK" },
  { x: 1.75, y: 2, label: "A", code: "A" },
  { x: 2.75, y: 2, label: "S", code: "S" },
  { x: 3.75, y: 2, label: "D", code: "D" },
  { x: 4.75, y: 2, label: "F", code: "F" },
  { x: 5.75, y: 2, label: "G", code: "G" },
  { x: 6.75, y: 2, label: "H", code: "H" },
  { x: 7.75, y: 2, label: "J", code: "J" },
  { x: 8.75, y: 2, label: "K", code: "K" },
  { x: 9.75, y: 2, label: "L", code: "L" },
  { x: 10.75, y: 2, label: ";", code: "SEMICOLON" },
  { x: 11.75, y: 2, label: ":", code: "SINGLE_QUOTE" },
  { x: 12.75, y: 2, label: "]", code: "BACKSLASH" },

  // Row 3
  { x: 0, y: 3, w: 2.25, label: "Shift", code: "LEFT_SHIFT" },
  { x: 2.25, y: 3, label: "Z", code: "Z" },
  { x: 3.25, y: 3, label: "X", code: "X" },
  { x: 4.25, y: 3, label: "C", code: "C" },
  { x: 5.25, y: 3, label: "V", code: "V" },
  { x: 6.25, y: 3, label: "B", code: "B" },
  { x: 7.25, y: 3, label: "N", code: "N" },
  { x: 8.25, y: 3, label: "M", code: "M" },
  { x: 9.25, y: 3, label: ",", code: "COMMA" },
  { x: 10.25, y: 3, label: ".", code: "PERIOD" },
  { x: 11.25, y: 3, label: "/", code: "SLASH" },
  { x: 12.25, y: 3, label: "_", code: "INTERNATIONAL_1" },
  { x: 13.25, y: 3, w: 1.75, label: "Shift", code: "RIGHT_SHIFT" },

  // Row 4
  { x: 0, y: 4, w: 1.25, label: "Ctrl", code: "LEFT_CONTROL" },
  { x: 1.25, y: 4, w: 1.25, label: "Win", code: "LEFT_GUI" },
  { x: 2.5, y: 4, w: 1.25, label: "Alt", code: "LEFT_ALT" },
  { x: 3.75, y: 4, label: "無変換", code: "INTERNATIONAL_5" },
  { x: 4.75, y: 4, w: 3.5, label: "Space", code: "SPACE" },
  { x: 8.25, y: 4, label: "変換", code: "INTERNATIONAL_4" },
  { x: 9.25, y: 4, label: "かな", code: "INTERNATIONAL_2" },
  { x: 10.25, y: 4, w: 1.25, label: "Alt", code: "RIGHT_ALT" },
  { x: 11.5, y: 4, w: 1.25, label: "Ctrl", code: "RIGHT_CONTROL" },
];

export const US_LAYOUT: PaletteLayoutItem[] = [
  // Row 0
  { x: 0, y: 0, label: "Esc", code: "ESC" },
  { x: 1, y: 0, label: "1", code: "NUMBER_1" },
  { x: 2, y: 0, label: "2", code: "NUMBER_2" },
  { x: 3, y: 0, label: "3", code: "NUMBER_3" },
  { x: 4, y: 0, label: "4", code: "NUMBER_4" },
  { x: 5, y: 0, label: "5", code: "NUMBER_5" },
  { x: 6, y: 0, label: "6", code: "NUMBER_6" },
  { x: 7, y: 0, label: "7", code: "NUMBER_7" },
  { x: 8, y: 0, label: "8", code: "NUMBER_8" },
  { x: 9, y: 0, label: "9", code: "NUMBER_9" },
  { x: 10, y: 0, label: "0", code: "NUMBER_0" },
  { x: 11, y: 0, label: "-", code: "MINUS" },
  { x: 12, y: 0, label: "=", code: "EQUAL" },
  { x: 13, y: 0, w: 2, label: "Backspace", code: "BACKSPACE" },

  // Row 1
  { x: 0, y: 1, w: 1.5, label: "Tab", code: "TAB" },
  { x: 1.5, y: 1, label: "Q", code: "Q" },
  { x: 2.5, y: 1, label: "W", code: "W" },
  { x: 3.5, y: 1, label: "E", code: "E" },
  { x: 4.5, y: 1, label: "R", code: "R" },
  { x: 5.5, y: 1, label: "T", code: "T" },
  { x: 6.5, y: 1, label: "Y", code: "Y" },
  { x: 7.5, y: 1, label: "U", code: "U" },
  { x: 8.5, y: 1, label: "I", code: "I" },
  { x: 9.5, y: 1, label: "O", code: "O" },
  { x: 10.5, y: 1, label: "P", code: "P" },
  { x: 11.5, y: 1, label: "[", code: "LEFT_BRACKET" },
  { x: 12.5, y: 1, label: "]", code: "RIGHT_BRACKET" },
  { x: 13.5, y: 1, w: 1.5, label: "\\", code: "BACKSLASH" },

  // Row 2
  { x: 0, y: 2, w: 1.75, label: "Caps", code: "CAPSLOCK" },
  { x: 1.75, y: 2, label: "A", code: "A" },
  { x: 2.75, y: 2, label: "S", code: "S" },
  { x: 3.75, y: 2, label: "D", code: "D" },
  { x: 4.75, y: 2, label: "F", code: "F" },
  { x: 5.75, y: 2, label: "G", code: "G" },
  { x: 6.75, y: 2, label: "H", code: "H" },
  { x: 7.75, y: 2, label: "J", code: "J" },
  { x: 8.75, y: 2, label: "K", code: "K" },
  { x: 9.75, y: 2, label: "L", code: "L" },
  { x: 10.75, y: 2, label: ";", code: "SEMICOLON" },
  { x: 11.75, y: 2, label: "'", code: "SINGLE_QUOTE" },
  { x: 12.75, y: 2, w: 2.25, label: "Enter", code: "RETURN" },

  // Row 3
  { x: 0, y: 3, w: 2.25, label: "Shift", code: "LEFT_SHIFT" },
  { x: 2.25, y: 3, label: "Z", code: "Z" },
  { x: 3.25, y: 3, label: "X", code: "X" },
  { x: 4.25, y: 3, label: "C", code: "C" },
  { x: 5.25, y: 3, label: "V", code: "V" },
  { x: 6.25, y: 3, label: "B", code: "B" },
  { x: 7.25, y: 3, label: "N", code: "N" },
  { x: 8.25, y: 3, label: "M", code: "M" },
  { x: 9.25, y: 3, label: ",", code: "COMMA" },
  { x: 10.25, y: 3, label: ".", code: "PERIOD" },
  { x: 11.25, y: 3, label: "/", code: "SLASH" },
  { x: 12.25, y: 3, w: 2.75, label: "Shift", code: "RIGHT_SHIFT" },

  // Row 4
  { x: 0, y: 4, w: 1.25, label: "Ctrl", code: "LEFT_CONTROL" },
  { x: 1.25, y: 4, w: 1.25, label: "Win", code: "LEFT_GUI" },
  { x: 2.5, y: 4, w: 1.25, label: "Alt", code: "LEFT_ALT" },
  { x: 3.75, y: 4, w: 6.25, label: "Space", code: "SPACE" },
  { x: 10, y: 4, w: 1.25, label: "Alt", code: "RIGHT_ALT" },
  { x: 11.25, y: 4, w: 1.25, label: "Win", code: "RIGHT_GUI" },
  { x: 12.5, y: 4, w: 1.25, label: "Menu", code: "K_APPLICATION" },
  { x: 13.75, y: 4, w: 1.25, label: "Ctrl", code: "RIGHT_CONTROL" },
];
