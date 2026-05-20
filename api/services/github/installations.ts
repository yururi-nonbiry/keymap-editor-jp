import linkHeader from 'http-link-header';
import * as api from './api.js';
import { createInstallationToken } from './auth.js';

export async function fetchInstallations(userToken: string) {
  const url = '/user/installations';
  const { data: { installations } } = await api.request({ url, token: userToken });
  const active = installations.filter((installation: any) => !installation.suspended_at);

  return active;
}

export async function fetchInstallationRepos(userToken: string) {
  const repositories: any[] = [];
  const installations = await fetchInstallations(userToken);
  const repoInstallationMap: Record<string, number> = {};

  for (const installation of installations) {
    const { data: { token } } = await createInstallationToken(installation.id);

    let url: string | undefined = `/installation/repositories`;
    while (url) {
      const { headers, data } = await api.request({ url, token });
      const paging = linkHeader.parse(headers.link || '');

      repositories.push(...data.repositories);
      for (const repo of data.repositories) {
        repoInstallationMap[repo.full_name] = installation.id;
      }

      url = paging.get('rel', 'next')?.[0]?.uri;
    }
  }

  return {
    installations,
    repositories,
    repoInstallationMap
  };
}

export async function fetchRepoBranches(installationToken: string, repo: string) {
  const initialPage = `/repos/${repo}/branches`;
  const branches: any[] = [];
  
  let url: string | undefined = initialPage;
  while (url) {
    const { headers, data } = await api.request({ url, token: installationToken });
    const paging = linkHeader.parse(headers.link || '');
    branches.push(...data);
    url = paging.get('rel', 'next')?.[0]?.uri;
  }

  return branches;
}
