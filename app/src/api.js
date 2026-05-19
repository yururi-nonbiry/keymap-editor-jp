import * as config from './config'
import zmkBehaviors from './data/zmk-behaviors.json'
import zmkKeycodes from './data/zmk-keycodes.json'

export function healthcheck() {
  return fetch(`${config.apiBaseUrl}/health`)
}

export function loadBehaviours() {
  return Promise.resolve(zmkBehaviors)
}

export function loadKeycodes() {
  return Promise.resolve(zmkKeycodes)
}

export function loadKeymap() {
  return fetch(`${config.apiBaseUrl}/keymap`)
    .then(response => response.json())
}

export function loadLayout() {
  return fetch(`${config.apiBaseUrl}/layout`)
    .then(response => response.json())
}
