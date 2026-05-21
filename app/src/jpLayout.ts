import keyBy from 'lodash/keyBy';
import { NormalizedKeycode } from './keycodes';

interface JpTranslation {
  symbol?: string;
  description?: string;
  displayName?: string;
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
  MINUS: { symbol: "-", description: "- and = [Equal]", displayName: "マイナス" },
  EQUAL: { symbol: "^", description: "^ [Caret] and ~ [Tilde]", displayName: "キャレット" },
  LEFT_BRACKET: { symbol: "@", description: "@ [At Sign] and ` [Grave]", displayName: "アットマーク" },
  RIGHT_BRACKET: { symbol: "[", description: "[ [Left Bracket] and { [Left Brace]", displayName: "レフトブラケット" },
  BACKSLASH: { symbol: "]", description: "] [Right Bracket] and } [Right Brace]", displayName: "ライトブラケット" },
  SEMICOLON: { symbol: ";", description: "; [Semicolon] and + [Plus]", displayName: "セミコロン" },
  SINGLE_QUOTE: { symbol: ":", description: ": [Colon] and * [Asterisk]", displayName: "コロン" },
  GRAVE: { symbol: "半角/全角", description: "半角/全角 (Hankaku/Zenkaku)", displayName: "半角/全角" },

  // International keys
  INTERNATIONAL_1: { symbol: "\\", description: "\\ [Backslash] and _ [Underscore] (ろ)", displayName: "バックスラッシュ" },
  INTERNATIONAL_3: { symbol: "¥", description: "¥ [Yen] and | [Pipe]", displayName: "円記号" },
  INTERNATIONAL_4: { symbol: "変換", description: "変換 (Henkan)", displayName: "変換" },
  INTERNATIONAL_5: { symbol: "無変換", description: "無変換 (Muhenkan)", displayName: "無変換" },
  INTERNATIONAL_2: { symbol: "かな", description: "ひらがな/カタカナ (Kana)", displayName: "かな" },

  // Shifted symbol keycodes mapping
  AT: { symbol: "\"", description: "@ [At Sign] (Produces \" on JP OS)", displayName: "ダブルクォーテーション" },
  DOUBLE_QUOTE: { symbol: "*", description: "\" [Double Quote] (Produces * on JP OS)", displayName: "アスタリスク" },
  ASTERISK: { symbol: "(", description: "* [Asterisk] (Produces ( on JP OS)", displayName: "丸括弧（開）" },
  LEFT_PARENTHESIS: { symbol: ")", description: "( [Left Parenthesis] (Produces ) on JP OS)", displayName: "丸括弧（閉）" },
  RIGHT_PARENTHESIS: { symbol: "", description: ") [Right Parenthesis] (Not used / produces nothing on JP OS)", displayName: "使用不可" },
  CARET: { symbol: "&", description: "^ [Caret] (Produces & on JP OS)", displayName: "アンパサンド" },
  AMPERSAND: { symbol: "'", description: "& [Ampersand] (Produces ' on JP OS)", displayName: "シングルクォーテーション" },
  COLON: { symbol: "+", description: ": [Colon] (Produces + on JP OS)", displayName: "プラス" },
  PLUS: { symbol: "~", description: "+ [Plus] (Produces ~ on JP OS)", displayName: "チルダ" },
  TILDE: { symbol: "`", description: "~ [Tilde] (Produces ` on JP OS)", displayName: "グレイヴ" },
  UNDERSCORE: { symbol: "=", description: "_ [Underscore] (Produces = on JP OS)", displayName: "イコール" },
  PIPE: { symbol: "}", description: "| [Pipe] (Produces } on JP OS)", displayName: "波括弧（閉）" },
  LEFT_BRACE: { symbol: "`", description: "{ [Left Brace] (Produces ` on JP OS)", displayName: "グレイヴ" },
  RIGHT_BRACE: { symbol: "{", description: "} [Right Brace] (Produces { on JP OS)", displayName: "波括弧（開）" },
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
        description: jpMapping.description !== undefined ? jpMapping.description : kc.description,
        displayName: jpMapping.displayName !== undefined ? jpMapping.displayName : (kc as any).displayName
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
