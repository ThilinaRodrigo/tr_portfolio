export interface Publication {
  id: number;
  title: string;
  conference: string;
  institution: string;
  date: string;
  issn?: string;
  authors?: string[];
  description: string;
  tags: string[];
  publicationUrl?: string;
  pdfUrl?: string;
  relatedProjectId?: number;
}
