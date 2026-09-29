import { type Certificate } from "../types/certificate.type";

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Full Stack Web Development Certification",
    issuer: "Meta / Coursera",
    issueDate: "2024",
    category: "Web Applications",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    skills: ["React", "Node.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    credentialId: "META-FSWD-98234",
    credentialUrl: "https://coursera.org",
    description: "Comprehensive professional certification covering modern frontend architecture, backend REST APIs, responsive design, and database integration."
  },
  {
    id: 2,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "2024",
    category: "Cloud & DevOps",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    skills: ["AWS EC2", "S3", "Lambda", "Cloud Architecture", "IAM"],
    credentialId: "AWS-CCP-847291",
    credentialUrl: "https://aws.amazon.com/verification",
    description: "Validation of overall understanding of AWS Cloud platform, core security practices, cloud services architecture, and deployment patterns."
  },
  {
    id: 3,
    title: "Mobile App Development with React Native",
    issuer: "Udemy Certified",
    issueDate: "2023",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    skills: ["React Native", "Expo", "Redux Toolkit", "Mobile UI/UX"],
    credentialId: "UC-RN-773910",
    credentialUrl: "https://udemy.com",
    description: "Specialized certification for building cross-platform iOS and Android mobile applications using React Native, Expo, and native device capabilities."
  },
  {
    id: 4,
    title: "PostgreSQL & Database Architecture",
    issuer: "LinkedIn Learning",
    issueDate: "2023",
    category: "Database & Backend",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
    skills: ["PostgreSQL", "SQL Optimization", "Data Modeling", "Prisma ORM"],
    credentialId: "LIL-DB-551029",
    credentialUrl: "https://linkedin.com",
    description: "Advanced training in relational database management, schema design, index optimization, complex SQL queries, and ORM integration."
  },
  {
    id: 5,
    title: "AI & Machine Learning Fundamentals",
    issuer: "DeepLearning.AI",
    issueDate: "2024",
    category: "Mobile & AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
    skills: ["Python", "TensorFlow", "Prompt Engineering", "LLM APIs"],
    credentialId: "DLAI-ML-309182",
    credentialUrl: "https://deeplearning.ai",
    description: "Core concepts of machine learning algorithms, Neural Networks, AI integration in modern web & mobile applications, and model APIs."
  }
];
