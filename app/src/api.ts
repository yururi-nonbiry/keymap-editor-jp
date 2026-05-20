import * as config from './config';
import zmkBehaviors from './data/zmk-behaviors.json';
import zmkKeycodes from './data/zmk-keycodes.json';

export function healthcheck(): Promise<Response> {
  return fetch(`${config.apiBaseUrl}/health`);
}

export function loadBehaviours(): Promise<any[]> {
  return Promise.resolve(zmkBehaviors);
}

export function loadKeycodes(): Promise<any[]> {
  return Promise.resolve(zmkKeycodes);
}

export function loadKeymap(): Promise<any> {
  return fetch(`${config.apiBaseUrl}/keymap`)
    .then(response => response.json());
}

export function loadLayout(): Promise<any> {
  return fetch(`${config.apiBaseUrl}/layout`)
    .then(response => response.json());
}
