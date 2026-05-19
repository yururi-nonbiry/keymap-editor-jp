const childProcess = require('child_process')
const path = require('path')

const config = require('../config')

const appDir = path.join(__dirname, '..', '..', 'app')
const API_BASE_URL = 'http://localhost:8080'
const APP_BASE_URL = 'http://localhost:3000'

function init (app) {
  const child = childProcess.spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['start'], {
    cwd: appDir,
    shell: true,
    env: Object.assign({}, process.env, {
      REACT_APP_ENABLE_LOCAL: true,
      REACT_APP_ENABLE_GITHUB: config.ENABLE_GITHUB,
      REACT_APP_GITHUB_APP_NAME: config.GITHUB_APP_NAME,
      REACT_APP_API_BASE_URL: API_BASE_URL,
      REACT_APP_APP_BASE_URL: APP_BASE_URL,
      BROWSER: 'none',
      PORT: '3000'
    })
  })

  child.stdout.on('data', data => {
    console.log(`[app] ${data.toString().trim()}`)
  })

  child.stderr.on('data', data => {
    console.error(`[app err] ${data.toString().trim()}`)
  })

  child.on('error', err => {
    console.error('[app error]', err)
    process.exit(1)
  })

  child.on('exit', code => {
    if (code !== null && code !== 0) {
      console.error(`[app exit] exited with code ${code}`)
      process.exit(1)
    }
  })

  app.get('/', (req, res) => res.redirect(APP_BASE_URL))
}

module.exports = init
