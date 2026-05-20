const keycodesJson = require('./app/src/data/zmk-keycodes.json');

const fnPattern = /^(.+?)\((code)\)$/;

function shortestAlias(aliases) {
  if (!aliases || aliases.length === 0) return '';
  return [...aliases]
    .sort((a, b) => a.length - b.length)[0]
    .replace(/^KC_/, '');
}

function normalizeZmkKeycodes(keycodes) {
  return keycodes.reduce((acc, keycode) => {
    const { description, context, symbol, faIcon } = keycode;
    const aliases = keycode.names.filter(name => !name.match(fnPattern));
    const fnMatch = keycode.names.map(name => name.match(fnPattern)).filter(v => !!v)[0];
    const base = { aliases, description, context, faIcon, symbol: symbol || shortestAlias(aliases), params: [] };

    for (const code of aliases) {
      acc.push(Object.assign({}, base, {
        code,
        isModifier: !!fnMatch
      }));
    }

    if (fnMatch) {
      acc.push(Object.assign({}, base, {
        code: fnMatch[1],
        params: fnMatch[2].split(',')
      }));
    }

    return acc;
  }, []);
}

const normalized = normalizeZmkKeycodes(keycodesJson);

const targets = ['RIGHT_BRACE', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
targets.forEach(code => {
  const matches = normalized.filter(kc => kc.code === code);
  console.log(`${code}: found ${matches.length} times`);
  matches.forEach((m, i) => {
      console.log(`  [${i}] description: ${m.description}, symbol: ${m.symbol}`);
  });
});
