import {type Project} from "../types/project.type";
import rice_leaf_ai_image from "../assets/projects/ai_app.png";
import job_finder from "../assets/projects/job_finder.png";
import erp1 from "../assets/projects/erp1.png";
import erp_customer from "../assets/projects/erp_customer.png";
import portfolio_template_image from "../assets/projects/portfolio.png";
import aris_image from "../assets/projects/aris.png"


export const projects: Project[] = [
  {
    id: 1, // Update to your desired ID number
    title: "Accident Reporting & Investigation System (ARIS)",
    subtitle: "Enterprise Government Vehicle Accident & Statutory Reporting System",
    description:
      "ARIS is an enterprise full-stack web application built for the Southern Provincial Chief Ministry & Health Sector to automate vehicle accident reporting, investigation, evidence management, and statutory financial loss reporting. Features multi-stage approval workflows (F.R. 104(3), F.R. 104(4), and F.R. 109 forms), dynamic approval routing based on loss thresholds, digital signature authorization, multilingual PDF generation (Sinhala, Tamil, English), real-time WebSocket notifications via Laravel Reverb, and GIS hotspot analytics.",
    category: "Web Applications",
    image: aris_image, // Import your screenshot/asset here (e.g. import aris_image from "../assets/projects/aris.png")
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Laravel",
      "PHP",
      "Laravel Sanctum",
      "Spatie Permissions",
      "Laravel Reverb",
      "mPDF",
      "Leaflet GIS",
      "MySQL",
      "REST API"
    ],
    // Update repository URLs if applicable or public
    frontendUrl: "https://github.https://github.com/Chief-Ministry-Southern-Province/ARIShttps://github.com/Chief-Ministry-Southern-Province/ARIS/tree/main/aris-frontendcom/Chief-Ministry-Southern-Province/aris-frontend",
    backendUrl: "https://github.com/Chief-Ministry-Southern-Province/ARIS/tree/main/aris-backend",
    status: "on going"
  },
  {
    id: 2,
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
  },

  {
    id: 3,
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
  },
  {
    id: 4, // Update to your desired ID number
    title: "Rice Leaf AI Ecosystem",
    subtitle: "AI-Powered Agricultural Management, Crop Disease Detection & Farmer Marketplace",
    description:
      "Rice Leaf AI is an enterprise end-to-end agricultural management and disease detection ecosystem. It features a cross-platform React Native (Expo SDK 54) mobile client, a Vite + React system administration portal, a high-performance Go (Gin) Modular Monolith REST API backend with PostgreSQL, and a Python (FastAPI + TensorFlow 2.x) machine learning inference service. The platform delivers instant 5-class rice leaf disease diagnosis, an interactive AI Agronomist chatbot, an agricultural marketplace for crop inputs, a farmer community forum with voting and comments, multilingual remedy knowledge bases, and real-time administrative analytics.",
    category: "Mobile App", // Or "Mobile Applications" / "Full-Stack Applications"
    image: rice_leaf_ai_image,
    tags: [
      "React Native",
      "Expo SDK 54",
      "TypeScript",
      "NativeWind",
      "Go (Gin)",
      "Modular Monolith",
      "PostgreSQL",
      "Python",
      "FastAPI",
      "TensorFlow 2.x",
      "Vite",
      "React",
      "Tailwind CSS",
      "JWT Auth",
      "REST API"
    ],
    frontendUrl: "https://github.com/ThilinaRodrigo/Rice-Leaf-AI-App",
    backendUrl: "https://github.com/ThilinaRodrigo/Rice-Leaf-AI-App/tree/main/backend-go",
    publication: "A Comparative Study on Deep Transfer Learning Based Rice Leaf Disease Detection (Ritscon 2026 - University of Ruhuna)",
    status: "on going" // Or "completed"
  }
  ,
  {
  id: 5,
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
},
{
  id: 6,
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
