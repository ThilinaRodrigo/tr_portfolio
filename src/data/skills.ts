import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPhp,
  SiSpringboot,
  SiGo,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiAmazon,
  SiGithubactions,
  SiGit,
  SiGithub,
  SiPostman,
  SiTailwindcss,
  SiBootstrap,
  SiExpo,
  SiIntellijidea,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { TbBrandReactNative } from "react-icons/tb";
import { PiFileSql } from "react-icons/pi";

import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaTools,
  FaJava,
} from "react-icons/fa";


export const skills = [
    {
      category: "Frontend",
      icon: FaCode,
      items: [
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss3 },
        { name: "JavaScript", icon: SiJavascript },
        { name: "React", icon: SiReact },
        { name: "React Native", icon: TbBrandReactNative },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Bootstrap", icon: SiBootstrap },
      ],
    },
    {
      category: "Backend",
      icon: FaServer,
      items: [
        { name: "Go (Golang)", icon: SiGo },
        { name: "Java", icon: FaJava },
        { name: "Spring Boot", icon: SiSpringboot },
        { name: "PHP", icon: SiPhp },
      ],
    },
    {
      category: "Database",
      icon: FaDatabase,
      items: [
        { name: "SQL", icon: PiFileSql },
        { name: "MySQL", icon: SiMysql },
        { name: "PostgreSQL", icon: SiPostgresql },
      ],
    },
    {
      category: "DevOps & Cloud",
      icon: FaCloud,
      items: [
        { name: "GitHub Actions", icon: SiGithubactions },
        { name: "Docker", icon: SiDocker },
        { name: "AWS", icon: SiAmazon },
      ],
    },
    {
      category: "Tools",
      icon: FaTools,
      items: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Expo", icon: SiExpo },
        { name: "Postman", icon: SiPostman },
        { name: "IntelliJ IDEA", icon: SiIntellijidea },
        { name: "VS Code", icon: VscVscode },
      ],
    },
  ];