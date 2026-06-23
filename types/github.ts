export default interface GitHubRepo {
  id: number;
  title: string
  name: string;
  html_url: string;
  description: string | null;
  topics?: string[];
  stargazers_count: number;
  updated_at: string;
}