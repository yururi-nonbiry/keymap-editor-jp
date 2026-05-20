import api from './api/index.js';
import config from './api/config.js';

api.listen(config.PORT);
console.log('listening on', config.PORT);
