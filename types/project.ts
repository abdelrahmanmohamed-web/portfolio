export default interface FeaturedProject {
  id: string;
  title: string;
  description: string | null;
  technologies: string[];
  repositoryUrl: string;
  liveDemoUrl: string | null;
  imageUrl: string | null;
  featured: boolean;
}
