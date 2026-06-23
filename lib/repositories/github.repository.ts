// Call GitHub API
// Get repositories for configured user
// Return raw Repository[]

import { Octokit } from "octokit";
import { Endpoints } from "@octokit/types";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
type Repo = Endpoints["GET /users/{username}/repos"]["response"]["data"][0];

export default async function getRepositories(): Promise<Repo[]> {
  const repos = await octokit.paginate("GET /users/{username}/repos", {
    username: process.env.GITHUB_USERNAME as string,
  });

  return repos;
}
