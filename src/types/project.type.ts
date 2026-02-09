export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  frontendUrl?: string;
  backendUrl?: string;
  liveDemoUrl?: string;
}