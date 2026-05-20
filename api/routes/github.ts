import { Router, Request, Response, NextFunction } from 'express';
import * as github from '../services/github/index.js';
import * as auth from '../services/github/auth.js';
import { MissingRepoFile } from '../services/github/files.js';
import { parseKeymap, validateKeymapJson, KeymapValidationError } from '../services/zmk/keymap.js';
import { validateInfoJson, InfoValidationError } from '../services/zmk/layout.js';

const router = Router();

const authorize = async (req: Request, res: Response) => {
  if (req.query.code) {
    try {
      const { data: oauth } = await auth.getOauthToken(req.query.code as string);
      const { data: user } = await auth.getOauthUser(oauth.access_token);
      const token = auth.getUserToken(oauth, user);
      res.redirect(auth.createOauthReturnUrl(token));
    } catch (err: any) {
      const message = err.response ? err.response.data : err;
      console.error(message);
      res.sendStatus(500);
    }
  } else {
    res.redirect(auth.createOauthFlowUrl());
  }
};

const handleError = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  if (err.response && err.response.status === 401) {
    console.error('Received upstream authentication error', err.response.data);
    return res.sendStatus(401);
  } else {
    const message = err.response ? `[${err.response.status}] ${err.response.data}` : err;
    console.error(message, err);
  }

  res.sendStatus(500);
};

interface AuthenticatedRequest extends Request {
  user?: any;
}

const authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  const token = (header || '').split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    req.user = auth.verifyUserToken(token);
  } catch (err) {
    return res.sendStatus(401);
  }

  next();
};

const getInstallation = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { user } = req;
  const { sub: username, oauth_access_token: userToken } = user;

  try {
    const installationRepos = await github.fetchInstallationRepos(userToken);
    if (installationRepos.installations.length === 0) {
      console.log(`User ${username} does not have an active app installation.`);
    }

    res.json(installationRepos);
  } catch (err) {
    next(err);
  }
};

const getBranches = async (req: Request, res: Response, next: NextFunction) => {
  const { installationId, repository } = req.params;

  try {
    const { data: { token: installationToken } } = await auth.createInstallationToken(installationId as string);
    const branches = await github.fetchRepoBranches(installationToken, repository as string);

    res.json(branches);
  } catch (err) {
    next(err);
  }
};

const getKeyboardFiles = async (req: Request, res: Response, next: NextFunction) => {
  const { installationId, repository } = req.params;
  const { branch } = req.query;

  try {
    const { info, keymap } = await github.fetchKeyboardFiles(installationId as string, repository as string, branch as string);
    validateInfoJson(info);
    validateKeymapJson(keymap);

    res.json({
      info,
      keymap: parseKeymap(keymap)
    });
  } catch (err: any) {
    if (err instanceof MissingRepoFile) {
      console.error(`Validation error in ${repository} (${branch}):`, err.constructor.name, err.errors);
      return res.status(400).json({
        name: err.constructor.name,
        path: err.path,
        errors: err.errors
      });
    } else if (err instanceof InfoValidationError || err instanceof KeymapValidationError) {
      console.error(`Validation error in ${repository} (${branch}):`, err.name, err.errors);
      return res.status(400).json({
        name: err.name,
        errors: err.errors
      });
    }

    next(err);
  }
};

const updateKeyboardFiles = async (req: Request, res: Response, next: NextFunction) => {
  const { installationId, repository, branch } = req.params;
  const { keymap, layout } = req.body;

  try {
    await github.commitChanges(installationId as string, repository as string, branch as string, layout, keymap);
  } catch (err) {
    return next(err);
  }

  res.sendStatus(200);
};

const receiveWebhook = (_req: Request, res: Response) => {
  res.sendStatus(200);
};

router.get('/authorize', authorize);
router.get('/installation/:installationId/:repository/branches', authenticate, getBranches);
router.get('/installation', authenticate, getInstallation);
router.get('/keyboard-files/:installationId/:repository', authenticate, getKeyboardFiles);
router.post('/keyboard-files/:installationId/:repository/:branch', authenticate, updateKeyboardFiles);
router.post('/webhook', receiveWebhook);
router.use(handleError);

export default router;
