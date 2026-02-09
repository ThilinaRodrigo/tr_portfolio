import {type Project} from "../types/project.type";

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    subtitle: "Personal Portfolio",
    description:
      "A responsive web application showcasing personal projects, skills, and contact info. Supports dark/light mode and smooth animations.",
    category: "Web Applications",
    image: "/images/portfolio.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    frontendUrl: "https://github.com/username/portfolio-frontend",
    liveDemoUrl: "https://username.github.io/portfolio",
  },
  {
    id: 2,
    title: "E-commerce App",
    subtitle: "Online Shopping Platform",
    description:
      "A full-stack web application for e-commerce with product listings, shopping cart, checkout, and payment integration.",
    category: "Web Applications",
    image: "/images/ecommerce.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    frontendUrl: "https://github.com/username/ecommerce-frontend",
    backendUrl: "https://github.com/username/ecommerce-backend",
    liveDemoUrl: "https://myecommerceapp.com",
  },
  {
    id: 3,
    title: "Chat App",
    subtitle: "Real-time Messaging",
    description:
      "A web-based chat application supporting private and group messaging in real-time using WebSockets.",
    category: "Web Applications",
    image: "/images/chat-app.png",
    tags: ["React", "Node.js", "Socket.IO", "TypeScript"],
    frontendUrl: "https://github.com/username/chat-frontend",
    backendUrl: "https://github.com/username/chat-backend",
    liveDemoUrl: "https://mychatapp.com",
  },
  {
    id: 4,
    title: "Task Manager Mobile",
    subtitle: "Productivity Mobile App",
    description:
      "A mobile app to create, track, and organize tasks with notifications and priority levels.",
    category: "Mobile App",
    image: "/images/task-manager-mobile.png",
    tags: ["React Native", "TypeScript", "Expo", "Redux"],
    frontendUrl: "https://github.com/username/task-manager-mobile",
    liveDemoUrl: "https://play.google.com/store/apps/details?id=com.taskmanager",
  },
  {
    id: 5,
    title: "Fitness Tracker",
    subtitle: "Health & Fitness Mobile App",
    description:
      "A mobile app to log workouts, track calories, and monitor progress with charts and statistics.",
    category: "Mobile App",
    image: "/images/fitness-tracker.png",
    tags: ["Flutter", "Dart", "Firebase"],
    frontendUrl: "https://github.com/username/fitness-tracker",
    liveDemoUrl: "https://play.google.com/store/apps/details?id=com.fitnesstracker",
  },
];
