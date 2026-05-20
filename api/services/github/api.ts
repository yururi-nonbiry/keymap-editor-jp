import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const baseUrl = 'https://api.github.com';

interface RequestOptions extends AxiosRequestConfig {
  token?: string;
}

export async function request(options: string | RequestOptions = {}): Promise<AxiosResponse> {
  let opts: RequestOptions;
  if (typeof options === 'string') {
    opts = {
      url: options
    };
  } else {
    opts = { ...options };
  }

  if (opts.url && opts.url.startsWith('/')) {
    opts.url = `${baseUrl}${opts.url}`;
  }

  opts.headers = {
    Accept: 'application/vnd.github.v3+json',
    ...(opts.headers || {})
  };

  if (opts.token) {
    opts.headers.Authorization = `Bearer ${opts.token}`;
  }

  const response = await (axios as any)(opts);
  const limitRemaining = response.headers['x-ratelimit-remaining'];

  if (limitRemaining) {
    console.log('GitHub API ratelimit remaining requests:', limitRemaining);
  }

  return response;
}
