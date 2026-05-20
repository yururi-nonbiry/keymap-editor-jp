const REPOSITORY = 'selectedGithubRepository'
const BRANCH = 'selectedGithubBranch'

export function getPersistedRepository(): string | null {
  try {
    const item = localStorage.getItem(REPOSITORY)
    return item ? JSON.parse(item) : null
  } catch {
    return null
  }
}

export function setPersistedRepository(repository: string | number) {
  localStorage.setItem(REPOSITORY, JSON.stringify(repository))
}

export function getPersistedBranch(repoId: string | number): string | null {
  try {
    const item = localStorage.getItem(`${BRANCH}:${repoId}`)
    return item ? JSON.parse(item) : null
  } catch {
    return null
  }
}

export function setPersistedBranch(repoId: string | number, branch: string) {
  localStorage.setItem(`${BRANCH}:${repoId}`, JSON.stringify(branch))
}
