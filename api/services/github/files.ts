import * as api from './api.js';
import * as auth from './auth.js';
import * as zmk from '../zmk/index.js';
import { Keymap, LayoutItem } from '../../../app/src/shared/keymapUtils.js';

const MODE_FILE = '100644';

export class MissingRepoFile extends Error {
  path: string;
  errors: string[];
  constructor(path: string) {
    super();
    this.name = 'MissingRepoFile';
    this.path = path;
    this.errors = [`Missing file ${path}`];
  }
}

export async function fetchKeyboardFiles(installationId: string | number, repository: string, branch: string) {
  const { data: { token: installationToken } } = await auth.createInstallationToken(installationId);
  const { data: info } = await fetchFile(installationToken, repository, 'config/info.json', { raw: true, branch });
  const keymap = await fetchKeymap(installationToken, repository, branch);
  const originalCodeKeymap = await findCodeKeymap(installationToken, repository, branch);
  
  let originalCode = '';
  try {
    const { data } = await fetchFile(installationToken, repository, originalCodeKeymap.path, { raw: true, branch });
    originalCode = data;
  } catch (err) {
    console.error('Failed to fetch original .keymap file content from GitHub:', err);
  }
  keymap.originalCode = originalCode;

  return { info, keymap, originalCodeKeymap };
}

async function fetchKeymap(installationToken: string, repository: string, branch: string): Promise<Keymap> {
  try {
    const { data: keymap } = await fetchFile(installationToken, repository, 'config/keymap.json', { raw: true, branch });
    return keymap;
  } catch (err) {
    if (err instanceof MissingRepoFile) {
      return {
        keyboard: 'unknown',
        keymap: 'unknown',
        layout: 'unknown',
        layer_names: ['default'],
        layers: [[]]
      };
    } else {
      throw err;
    }
  }
}

async function fetchFile(installationToken: string, repository: string, path: string, options: { raw?: boolean; branch?: string | null } = {}) {
  const { raw = false, branch = null } = options;
  const url = `/repos/${repository}/contents/${path}`;
  const params: any = {};

  if (branch) {
    params.ref = branch;
  }

  const headers = { Accept: raw ? 'application/vnd.github.v3.raw' : 'application/json' };
  try {
    return await api.request({ url, headers, params, token: installationToken });
  } catch (err: any) {
    if (err.response?.status === 404) {
      throw new MissingRepoFile(path);
    }
    throw err;
  }
}

export async function findCodeKeymap(installationToken: string, repository: string, branch: string) {
  const { data: directory } = await fetchFile(installationToken, repository, 'config', { branch });
  const originalCodeKeymap = directory.find((file: any) => file.name.toLowerCase().endsWith('.keymap'));

  if (!originalCodeKeymap) {
    throw new MissingRepoFile('config/*.keymap');
  }

  return originalCodeKeymap;
}

async function findCodeKeymapTemplate(installationToken: string, repository: string, branch: string) {
  const { data: directory } = await fetchFile(installationToken, repository, 'config', { branch });
  const template = directory.find((file: any) => file.name.toLowerCase().endsWith('.keymap.template'));

  if (template) {
    const { data: content } = await fetchFile(installationToken, repository, template.path, { branch, raw: true });
    return content;
  }
}

export async function commitChanges(installationId: string | number, repository: string, branch: string, layout: LayoutItem[], keymap: Keymap) {
  const { data: { token: installationToken } } = await auth.createInstallationToken(installationId);
  const template = await findCodeKeymapTemplate(installationToken, repository, branch);

  const generatedKeymap = zmk.generateKeymap(layout, keymap, template);

  const originalCodeKeymap = await findCodeKeymap(installationToken, repository, branch);
  const { data: { sha, commit } } = await api.request({ url: `/repos/${repository}/commits/${branch}`, token: installationToken });

  const { data: { sha: newTreeSha } } = await api.request({
    url: `/repos/${repository}/git/trees`,
    method: 'POST',
    token: installationToken,
    data: {
      base_tree: commit.tree.sha,
      tree: [
        {
          path: originalCodeKeymap.path,
          mode: MODE_FILE,
          type: 'blob',
          content: generatedKeymap.code
        },
        {
          path: 'config/keymap.json',
          mode: MODE_FILE,
          type: 'blob',
          content: generatedKeymap.json
        }
      ]
    }
  });

  const { data: { sha: newSha } } = await api.request({
    url: `/repos/${repository}/git/commits`,
    method: 'POST',
    token: installationToken,
    data: {
      tree: newTreeSha,
      message: 'Updated keymap',
      parents: [sha]
    }
  });

  await api.request({
    url: `/repos/${repository}/git/refs/heads/${branch}`,
    method: 'PATCH',
    token: installationToken,
    data: {
      sha: newSha
    }
  });
}
