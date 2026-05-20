import get from 'lodash/get'
import keyBy from 'lodash/keyBy'
import { Value } from './Keyboard/Keys/keyTypes'

export { loadKeymap } from './api'

interface ParsedParam {
  value: Value;
  [key: string]: any;
}

export function getBehaviourParams(parsedParams: ParsedParam[], behaviour: any) {
  if (!behaviour) return []
  const firstParsedParam = get(parsedParams, '[0]', {}) as ParsedParam
  const commands = keyBy(behaviour.commands, 'code')
  return [].concat(
    behaviour.params,
    get(behaviour, 'params[0]') === 'command'
      ? get(commands[firstParsedParam.value as any], 'additionalParams', [])
      : []
  )
}
