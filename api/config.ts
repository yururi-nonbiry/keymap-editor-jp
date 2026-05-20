import 'dotenv/config';

export const PORT = process.env.PORT || 8080;
export const ENABLE_DEV_SERVER = process.env.ENABLE_DEV_SERVER === 'true';
export const ENABLE_GITHUB = process.env.ENABLE_GITHUB === 'true';
export const GITHUB_APP_NAME = process.env.GITHUB_APP_NAME;
export const GITHUB_APP_PRIVATE_KEY = process.env.GITHUB_APP_PRIVATE_KEY;
export const GITHUB_APP_ID = process.env.GITHUB_APP_ID;
export const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
export const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
export const GITHUB_OAUTH_CALLBACK_URL = process.env.GITHUB_OAUTH_CALLBACK_URL;
export const APP_BASE_URL = process.env.APP_BASE_URL || 'http://localhost:3000';

export default {
  PORT,
  ENABLE_DEV_SERVER,
  ENABLE_GITHUB,
  GITHUB_APP_NAME,
  GITHUB_APP_PRIVATE_KEY,
  GITHUB_APP_ID,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GITHUB_OAUTH_CALLBACK_URL,
  APP_BASE_URL
};
