import { type Certificate } from "../types/certificate.type";
import goImg from "../assets/certificates/go.jpg";
import springbootImg from "../assets/certificates/springboot.jpg";
import githubActionImg from "../assets/certificates/githubAction.jpg";

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Go: The Complete Guide",
    issuer: "Udemy",
    issueDate: "2026",
    category: "Backend Development",
    image: goImg,
    skills: [
      "Go",
      "Golang",
      "REST APIs",
      "Concurrency",
      "Backend Development",
    ],
    credentialId: "UC-544f329b-6a5a-4e52-a961-040c7dea9b38",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-544f329b-6a5a-4e52-a961-040c7dea9b38/",
    description:
      "Comprehensive Go programming course covering core language fundamentals, concurrency, interfaces, error handling, web development, and backend programming.",
  },

  {
    id: 2,
    title: "Spring Boot & Spring Framework Tutorial for Beginners",
    issuer: "Udemy",
    issueDate: "2026",
    category: "Backend Development",
    image: springbootImg,
    skills: [
      "Java",
      "Spring Boot",
      "Spring Framework",
      "REST APIs",
      "Spring Data JPA",
      "Backend Development",
    ],
    credentialId: "Udemy Course Certificate",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-90825b89-bf36-480c-a84b-a93c8af7e283/",
    description:
      "Practical training in Java backend development using Spring Framework and Spring Boot, covering application development, REST APIs, dependency injection, and backend architecture.",
  },

  {
    id: 3,
    title: "GitHub Actions",
    issuer: "KodeKloud",
    issueDate: "Feb 2026",
    category: "DevOps & CI/CD",
    image: githubActionImg,
    skills: [
      "GitHub Actions",
      "CI/CD",
      "DevOps",
      "Automation",
      "GitHub",
    ],
    credentialId: "048ebab3-bfe0-4c33-b466-8e62aea6443b",
    credentialUrl:
      "https://learn.kodekloud.com/learn/certificate/048ebab3-bfe0-4c33-b466-8e62aea6443b",
    description:
      "Training focused on GitHub Actions and CI/CD automation, covering workflows, automated builds, testing, deployments, and DevOps practices.",
  },
];