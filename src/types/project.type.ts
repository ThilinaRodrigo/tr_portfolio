export interface Project {
  id: number;
  title: string;
  subtitle: string;
  status?: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  frontendUrl?: string;
  backendUrl?: string;
  liveDemoUrl?: string;
}