export default interface FeaturedProject {
  id: string;
  title: string;
  description?: string;
  technologies: string[];
  repositoryUrl: string;
  liveDemoUrl?: string ;
  imageUrl?: string;
  featured: boolean;
}
