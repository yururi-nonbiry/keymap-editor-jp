import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import jwt from 'jsonwebtoken';

import * as api from './api.js';
import config from '../../config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pemPath = path.join(__dirname, '..', '..', '..', 'private-key.pem');
const privateKey = config.GITHUB_APP_PRIVATE_KEY || (fs.existsSync(pemPath) ? fs.readFileSync(pemPath) : '');

export function createAppToken(): string {
  return jwt.sign({ iss: config.GITHUB_APP_ID }, privateKey, {
    algorithm: 'RS256',
    expiresIn: '10m'
  });
}

export function createInstallationToken(installationId: string | number) {
  const token = createAppToken();
  const url = `/app/installations/${installationId}/access_tokens`;
  return api.request({ url, method: 'POST', token });
}

export function createOauthFlowUrl(): string {
  const redirectUrl = new URL('https://github.com/login/oauth/authorize');

  redirectUrl.search = new URLSearchParams({
    client_id: config.GITHUB_CLIENT_ID || '',
    redirect_uri: config.GITHUB_OAUTH_CALLBACK_URL || '',
    state: 'foo'
  }).toString();

  return redirectUrl.toString();
}

export function createOauthReturnUrl(token: string): string {
  const url = new URL(config.APP_BASE_URL);
  url.search = new URLSearchParams({ token }).toString();
  return url.toString();
}

export function getOauthToken(code: string) {
  return api.request({
    method: 'POST',
    url: 'https://github.com/login/oauth/access_token',
    headers: {
      Accept: 'application/json'
    },
    data: {
      client_id: config.GITHUB_CLIENT_ID,
      client_secret: config.GITHUB_CLIENT_SECRET,
      code
    }
  });
}

export function getOauthUser(token: string) {
  return api.request({ url: '/user', headers: { Accept: 'application/json' }, token });
}

export function getUserToken(oauth: any, user: any): string {
  return jwt.sign({
    oauth_access_token: oauth.access_token,
    sub: user.login
  }, privateKey, {
    algorithm: 'RS256'
  });
}

export function verifyUserToken(token: string): any {
  return jwt.verify(token, privateKey, {
    algorithms: ['RS256']
  });
}
