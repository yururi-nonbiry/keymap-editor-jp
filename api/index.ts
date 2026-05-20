import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import config from './config.js';
import applicationInit from './routes/application.js';
import keyboards from './routes/keyboards.js';
import github from './routes/github.js';

const app = express();

const { origin } = new URL(config.APP_BASE_URL);

app.use(bodyParser.json());
app.use(cors({ origin }));

if (config.ENABLE_DEV_SERVER) {
  applicationInit(app);
}

app.use(morgan('dev'));
app.get('/health', (req, res) => res.sendStatus(200));

app.use(keyboards);

if (config.ENABLE_GITHUB) {
  app.use('/github', github);
}

export default app;
