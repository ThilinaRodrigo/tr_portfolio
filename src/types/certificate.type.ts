export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  category: string;
  image: string;
  skills: string[];
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
}
