import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import EventEmitter from 'eventemitter3'

import * as config from '../../config'

import { Repository } from './types'

interface RequestOptions extends AxiosRequestConfig {
  url: string;
}

interface KeyboardFilesResponse {
  info: {
    layouts: {
      [key: string]: {
        layout: any[];
      };
    };
  };
  keymap: any;
}

export class API extends EventEmitter {
  token: string | null = null
  initialized = false
  installations: any[] | null = null
  repositories: Repository[] | null = null
  repoInstallationMap: { [key: string]: string } | null = null

  async _request (options: string | RequestOptions): Promise<AxiosResponse> {
    let requestOptions: RequestOptions;
    if (typeof options === 'string') {
      requestOptions = {
        url: options
      }
    } else {
      requestOptions = options;
    }

    if (requestOptions.url.startsWith('/')) {
      requestOptions.url = `${config.apiBaseUrl}${requestOptions.url}`
    }
  
    requestOptions.headers = Object.assign({}, requestOptions.headers)
    if (this.token && !requestOptions.headers.Authorization) {
      requestOptions.headers.Authorization = `Bearer ${this.token}`
    }
    
    try {
      return await axios(requestOptions)
    } catch (err: any) {
      if (err.response?.status === 401) {
        console.error('Authentication failed.')
        this.emit('authentication-failed', err.response)
      }

      throw err
    }
  }

  async init() {
    if (this.initialized) {
      return
    }

    const installationUrl = `${config.apiBaseUrl}/github/installation`
    const param = new URLSearchParams(window.location.search).get('token')
    if (!localStorage.auth_token && param) {
      window.history.replaceState({}, '', window.location.pathname)
      localStorage.auth_token = param
    }

    if (localStorage.auth_token) {
      this.token = localStorage.auth_token
      const { data } = await this._request(installationUrl)
      this.emit('authenticated')

      if (!data.installation) {
        console.warn('No GitHub app installation found for authenticated user.')
        this.emit('app-not-installed')
      }

      this.installations = data.installations
      this.repositories = data.repositories
      this.repoInstallationMap = data.repoInstallationMap
    }
  }

  beginLoginFlow() {
    localStorage.removeItem('auth_token')
    window.location.href = `${config.apiBaseUrl}/github/authorize`
  }

  beginInstallAppFlow() {
    window.location.href = `https://github.com/apps/${config.githubAppName}/installations/new`
  }
  
  isGitHubAuthorized() {
    return !!this.token
  }

  isAppInstalled() {
    return (this.installations?.length ?? 0) > 0 && (this.repositories?.length ?? 0) > 0
  }

  async fetchRepoBranches(repo: Repository) {
    if (!this.repoInstallationMap) return []
    const installation = encodeURIComponent(this.repoInstallationMap[repo.full_name])
    const repository = encodeURIComponent(repo.full_name)
    const { data } = await this._request(
      `/github/installation/${installation}/${repository}/branches`
    )

    return data
  }

  async fetchLayoutAndKeymap(repo: string, branch: string | null) {
    if (!this.repoInstallationMap) throw new Error('API not initialized')
    const installation = encodeURIComponent(this.repoInstallationMap[repo])
    const repository = encodeURIComponent(repo)
    const url = new URL(`${config.apiBaseUrl}/github/keyboard-files/${installation}/${repository}`)

    if (branch) {
      url.search = new URLSearchParams({ branch }).toString()
    }

    try {
      const { data } = await this._request(url.toString()) as { data: KeyboardFilesResponse }
      const layouts = data.info.layouts
      const defaultLayout = layouts.default || layouts[Object.keys(layouts)[0]]
      return {
        layout: defaultLayout.layout,
        keymap: data.keymap
      }
    } catch (err: any) {
      if (err.response?.status === 400) {
        console.error('Failed to load keymap and layout from github', err.response.data)
        this.emit('repo-validation-error', err.response.data)
      }

      throw err
    }
  }

  commitChanges(repo: string, branch: string, layout: any, keymap: any) {
    if (!this.repoInstallationMap) throw new Error('API not initialized')
    const installation = encodeURIComponent(this.repoInstallationMap[repo])
    const repository = encodeURIComponent(repo)

    return this._request({
      url: `/github/keyboard-files/${installation}/${repository}/${encodeURIComponent(branch)}`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: { layout, keymap }
    })
  }
}

export default new API()
