import * as childProcess from 'child_process';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { Express, Request, Response } from 'express';
import config from '../config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appDir = path.join(__dirname, '..', '..', 'app');
const API_BASE_URL = 'http://localhost:8080';
const APP_BASE_URL = 'http://localhost:3000';

export function init(app: Express) {
  const child = childProcess.spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['start'], {
    cwd: appDir,
    shell: true,
    env: {
      ...process.env,
      REACT_APP_ENABLE_LOCAL: 'true',
      REACT_APP_ENABLE_GITHUB: String(config.ENABLE_GITHUB),
      REACT_APP_GITHUB_APP_NAME: config.GITHUB_APP_NAME,
      REACT_APP_API_BASE_URL: API_BASE_URL,
      REACT_APP_APP_BASE_URL: APP_BASE_URL,
      BROWSER: 'none',
      PORT: '3000'
    }
  });

  child.stdout.on('data', data => {
    console.log(`[app] ${data.toString().trim()}`);
  });

  child.stderr.on('data', data => {
    console.error(`[app err] ${data.toString().trim()}`);
  });

  child.on('error', err => {
    console.error('[app error]', err);
    process.exit(1);
  });

  child.on('exit', code => {
    if (code !== null && code !== 0) {
      console.error(`[app exit] exited with code ${code}`);
      process.exit(1);
    }
  });

  app.get('/', (_req: Request, res: Response) => res.redirect(APP_BASE_URL));
}

export default init;
