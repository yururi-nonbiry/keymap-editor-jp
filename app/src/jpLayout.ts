import keyBy from 'lodash/keyBy';
import { NormalizedKeycode } from './keycodes';

interface JpTranslation {
  symbol?: string;
  description?: string;
}

const jpKeycodeTranslations: Record<string, JpTranslation> = {
  // Number row
  NUMBER_1: { symbol: "1", description: "1 and ! [Exclamation]" },
  NUMBER_2: { symbol: "2", description: "2 and \" [Double Quote]" },
  NUMBER_3: { symbol: "3", description: "3 and # [Hash / Pound]" },
  NUMBER_4: { symbol: "4", description: "4 and $ [Dollar]" },
  NUMBER_5: { symbol: "5", description: "5 and % [Percent]" },
  NUMBER_6: { symbol: "6", description: "6 and & [Ampersand]" },
  NUMBER_7: { symbol: "7", description: "7 and ' [Single Quote]" },
  NUMBER_8: { symbol: "8", description: "8 and ( [Left Parenthesis]" },
  NUMBER_9: { symbol: "9", description: "9 and ) [Right Parenthesis]" },
  NUMBER_0: { symbol: "0" },

  // Symbols
  MINUS: { symbol: "-", description: "- and = [Equal]" },
  EQUAL: { symbol: "^", description: "^ [Caret] and ~ [Tilde]" },
  LEFT_BRACKET: { symbol: "@", description: "@ [At Sign] and ` [Grave]" },
  RIGHT_BRACKET: { symbol: "[", description: "[ [Left Bracket] and { [Left Brace]" },
  BACKSLASH: { symbol: "]", description: "] [Right Bracket] and } [Right Brace]" },
  SEMICOLON: { symbol: ";", description: "; [Semicolon] and + [Plus]" },
  SINGLE_QUOTE: { symbol: ":", description: ": [Colon] and * [Asterisk]" },
  GRAVE: { symbol: "半角/全角", description: "半角/全角 (Hankaku/Zenkaku)" },

  // International keys
  INTERNATIONAL_1: { symbol: "\\", description: "\\ [Backslash] and _ [Underscore] (ろ)" },
  INTERNATIONAL_3: { symbol: "¥", description: "¥ [Yen] and | [Pipe]" },
  INTERNATIONAL_4: { symbol: "変換", description: "変換 (Henkan)" },
  INTERNATIONAL_5: { symbol: "無変換", description: "無変換 (Muhenkan)" },
  INTERNATIONAL_2: { symbol: "かな", description: "ひらがな/カタカナ (Kana)" },

  // Shifted symbol keycodes mapping
  AT: { symbol: "\"", description: "@ [At Sign] (Produces \" on JP OS)" },
  DOUBLE_QUOTE: { symbol: "*", description: "\" [Double Quote] (Produces * on JP OS)" },
  ASTERISK: { symbol: "(", description: "* [Asterisk] (Produces ( on JP OS)" },
  LEFT_PARENTHESIS: { symbol: ")", description: "( [Left Parenthesis] (Produces ) on JP OS)" },
  RIGHT_PARENTHESIS: { symbol: "", description: ") [Right Parenthesis] (Not used / produces nothing on JP OS)" },
  CARET: { symbol: "&", description: "^ [Caret] (Produces & on JP OS)" },
  AMPERSAND: { symbol: "'", description: "& [Ampersand] (Produces ' on JP OS)" },
  COLON: { symbol: "+", description: ": [Colon] (Produces + on JP OS)" },
  PLUS: { symbol: "~", description: "+ [Plus] (Produces ~ on JP OS)" },
  TILDE: { symbol: "`", description: "~ [Tilde] (Produces ` on JP OS)" },
  UNDERSCORE: { symbol: "=", description: "_ [Underscore] (Produces = on JP OS)" },
  PIPE: { symbol: "}", description: "| [Pipe] (Produces } on JP OS)" },
  LEFT_BRACE: { symbol: "`", description: "{ [Left Brace] (Produces ` on JP OS)" },
  RIGHT_BRACE: { symbol: "{", description: "} [Right Brace] (Produces { on JP OS)" },
};

export interface Definitions {
  keycodes: (NormalizedKeycode & { indexed?: Record<string, NormalizedKeycode> })[];
  [key: string]: any;
}

export function getJpDefinitions(definitions: any): any {
  if (!definitions || !definitions.keycodes) return definitions;

  const keycodes = (definitions.keycodes as NormalizedKeycode[]).map(kc => {
    const translationKey = [kc.code, ...(kc.aliases || [])].find(alias => jpKeycodeTranslations[alias]);
    const jpMapping = translationKey ? jpKeycodeTranslations[translationKey] : undefined;
    if (jpMapping) {
      return {
        ...kc,
        symbol: jpMapping.symbol !== undefined ? jpMapping.symbol : kc.symbol,
        description: jpMapping.description !== undefined ? jpMapping.description : kc.description
      };
    }
    return kc;
  });

  (keycodes as any).indexed = keyBy(keycodes, 'code');

  return {
    ...definitions,
    keycodes
  };
}
