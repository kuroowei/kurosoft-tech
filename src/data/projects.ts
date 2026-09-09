// src/data/projects.ts
// Real, already-built projects only. Do not add placeholder/fake projects.
// URLs are sourced from src/config/site.ts so there is a single source of truth.

import {
  WASTE_PICKUP_DEMO_URL,
  GITHUB_WASTE_PICKUP_URL,
  VUEXY_CHAT_DEMO_URL,
  VUEXY_CHAT_GITHUB_URL,
} from "../config/site";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  status: "Completed" | "In Progress";
}

export const projects: Project[] = [
  {
    id: "waste-pickup-scheduler",
    title: "Waste Pickup Scheduler",
    category: "Web Application",
    description:
      "A web-based waste management scheduling solution designed to help users organize and manage waste pickup requests and improve coordination between customers and waste collection services.",
    technologies: [
      "React",
      "TypeScript",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
    demoUrl: WASTE_PICKUP_DEMO_URL,
    githubUrl: GITHUB_WASTE_PICKUP_URL,
    status: "Completed",
  },
  {
    id: "vuexy-chat-app",
    title: "Vuexy Chat App",
    category: "Web Application",
    description:
      "A modern chat application developed as part of Kurosoft Tech's software development portfolio, demonstrating real-time communication interface design, frontend development, and application integration.",
    technologies: ["React", "TypeScript", "Express", "Socket.io"],
    demoUrl: VUEXY_CHAT_DEMO_URL,
    githubUrl: VUEXY_CHAT_GITHUB_URL,
    status: "Completed",
  },
];