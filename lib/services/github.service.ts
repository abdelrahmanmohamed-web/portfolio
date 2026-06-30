// Get all repositories from github.repository
// Remove repositories that shouldn't appear in portfolio
// Filter only portfolio projects
// Map GitHub response into FeaturedProject shape
// Return clean data ready for UI
import getRepositories from "../repositories/github.repository";
import FeaturedProject from "@/types/project";

const getOrder = (topics: string[]): number => {
  const orderTopic = topics.find((t) => t.startsWith("portfolio-order-"));
  if (!orderTopic) return Infinity;
  return Number(orderTopic.split("-").at(-1));
};

export default async function getFeaturedProjects(): Promise<
  FeaturedProject[]
> {
  const allRepos = await getRepositories();
  const featuredRepos = allRepos
    .filter((repo) => repo.topics?.some((t) => t.startsWith("portfolio-order")))
    .sort((a, b) => getOrder(a.topics ?? []) - getOrder(b.topics ?? []));

  const featuredProjects: FeaturedProject[] = featuredRepos.map((r) => ({
    id: String(r.id),
    title: r.name,
    description: r.description ?? undefined,
    technologies: (r.topics ?? []).filter(
      (t) => !t.startsWith("portfolio-order"),
    ),
    repositoryUrl: r.html_url,
    liveDemoUrl: r.homepage ?? undefined,
    imageUrl: `https://raw.githubusercontent.com/${process.env.GITHUB_USERNAME}/${r.name}/HEAD/assets/Screenshot.png`,
    featured: true,
  }));
  return featuredProjects;
}
