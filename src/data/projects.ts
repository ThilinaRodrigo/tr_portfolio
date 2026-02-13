import {type Project} from "../types/project.type";
import ai_app from "../assets/projects/ai_app.png";
import job_finder from "../assets/projects/job_finder.png";
import erp1 from "../assets/projects/erp1.png";
import erp_customer from "../assets/projects/erp_customer.png";
import portfolio_template_image from "../assets/projects/portfolio.png";


export const projects: Project[] = [
 {
  id: 1,
  title: "ERP System for Bridal Wear Shop",
  subtitle: "ERP Solution for Bridal Wear Shop",
  description:
    "Fabriq is a full-stack ERP application for bridal wear shops. The React + TypeScript frontend uses TanStack for tables, Zustand for state management, and Shadcn/UI for modern responsive components. The Spring Boot backend manages REST APIs, database operations, and business logic, with Kafka enabling real-time messaging and event streaming for seamless shop operations.",
  category: "Web Applications",
  image: erp1,
  tags: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "TanStack",
    "Zustand",
    "Shadcn/UI",
    "Spring Boot",
    "REST API",
    "PostgreSQL",
    "Kafka",
  ],
  frontendUrl: "https://github.com/ZentroThread/Fabriq-frontend",
  backendUrl: "https://github.com/ZentroThread/Fabriq-backend",
  status: "on going"
},

  {
  id: 2,
  title: "Client Portal for Bridal Wear ERP",
  subtitle: "Client-Facing Frontend for Bridal Wear ERP",
  description:
    "Fabriq Client Portal is a React + TypeScript frontend built for bridal shop customers. It connects to the existing Fabriq backend to allow clients to view products, track orders, and interact with shop services. The UI uses TanStack for tables, Zustand for state management, and Shadcn/UI for modern responsive components.",
  category: "Web Applications",
  image: erp_customer,
  tags: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "TanStack",
    "Zustand",
  ],
  frontendUrl: "https://github.com/ZentroThread/Client_frontend",
  backendUrl: "https://github.com/ZentroThread/Fabriq-backend",
  status: "on going"
}
,
  {
  id: 3,
  title: "Rice Leaf Disease Detection App",
  subtitle: "Rice Leaf Disease Detection Using AI",
  description:
    "A machine learning‑powered application that detects diseases in rice leaf images using convolutional neural networks (CNN). The system analyzes leaf pictures to classify disease presence and type, helping users identify common rice crop diseases through automated image recognition.",
  category: "Mobile App",
  image: ai_app,
  tags: [
    "React Native + Expo",
    "Python",
    "CNN",
    "Deep Learning",
    "Image Classification",
    "TensorFlow",
    "Keras"
  ],
  frontendUrl: "https://github.com/ThilinaRodrigo/Rice-Leaf-AI-App/tree/main/rice-leaf-app",
  backendUrl: "https://github.com/ThilinaRodrigo/Rice-Leaf-AI-App/tree/main/ml-service",
  status: "on hold"
}
,
  {
  id: 4,
  title: "Job Finder Portal",
  subtitle: "Full-Stack Microservices Job Finder App",
  description:
    "Job Finder Portal is a full-stack job search application built with a microservices architecture. The backend consists of independent Spring Boot services for jobs, users, search, and applications, communicating via REST APIs and designed for scalability. The system supports job listings, user profiles, applications, and authentication. The frontend connects to these APIs to provide a responsive, interactive user interface for job seekers and employers.",
  category: "Web Applications",
  image: job_finder,
  tags: [
    "React",
    "Spring Boot",
    "Java",
    "Microservices",
    "Docker",
    "API Gateway",
    "PostgreSQL",
    "Spring Security"
  ],
  frontendUrl: "https://github.com/ThilinaRodrigo/jobfinderportal",
  backendUrl: "https://github.com/ThilinaRodrigo/job-portal-microservices",
  status: "on hold"
},
{
  id: 5,
  title: "Developer Portfolio",
  subtitle: "Minimal React + TypeScript Developer Portfolio",
  description:
    "A clean and minimal portfolio template built using React, TypeScript, and Vite. This project serves as a modern foundation for showcasing your personal projects and skills. It includes a fast development setup with Hot Module Replacement (HMR), ESLint configuration for TypeScript support, and ready-to-customize structure that helps developers present their work online with ease.",
  category: "Web Applications",
  image: portfolio_template_image,
  tags: [
    "React",
    "TypeScript",
    "Vite",
    "EmailJS",
    "Tailwind CSS",
  ],
  frontendUrl: "https://github.com/ThilinaRodrigo/tr_portfolio",
  liveDemoUrl: "https://www.thilinarodrigo.me/",
}

];
