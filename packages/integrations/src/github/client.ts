import { Octokit } from 'octokit';

export class GitHubClient {
  private octokit: Octokit;

  constructor(token: string) {
    this.octokit = new Octokit({
      auth: token,
    });
  }

  async getReadme(owner: string, repo: string): Promise<string> {
    try {
      const response = await this.octokit.rest.repos.getReadme({
        owner,
        repo,
        mediaType: {
          format: 'raw',
        },
      });
      // The response.data will be string if mediaType raw is specified
      return response.data as unknown as string;
    } catch (error: any) {
      if (error.status === 404) {
        return '';
      }
      throw error;
    }
  }

  async getCommits(owner: string, repo: string, perPage = 10) {
    const response = await this.octokit.rest.repos.listCommits({
      owner,
      repo,
      per_page: perPage,
    });
    return response.data;
  }

  async getLanguages(owner: string, repo: string): Promise<Record<string, number>> {
    const response = await this.octokit.rest.repos.listLanguages({
      owner,
      repo,
    });
    return response.data as Record<string, number>;
  }
}
