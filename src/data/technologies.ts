// src/data/technologies.ts
// Only list technologies the team actually uses. No logos/claims beyond this list.

export interface TechCategory {
  id: string;
  category: string;
  items: string[];
}

export const technologies: TechCategory[] = [
  {
    id: "frontend",
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vite"],
  },
  {
    id: "backend",
    category: "Backend",
    items: ["Node.js", "PHP", "Laravel", "REST APIs"],
  },
  {
    id: "database",
    category: "Database",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    id: "development",
    category: "Development",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    id: "deployment",
    category: "Deployment / Cloud",
    items: ["Vercel", "Render"],
  },
];