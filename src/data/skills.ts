import { Code2, Layout, Server, Database, Wrench, Terminal, type LucideIcon } from "lucide-react";

export type SkillCategory = {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: {
    name: string;
    icon?: string; // We might use simple strings or mapping for specific icons later if needed, or just names for now.
  }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Go" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "SQL" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "React" },
      { name: "React Native" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Three.js" },
      { name: "Redux" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "NestJS" },
      { name: "GraphQL" },
      { name: "REST API" },
      { name: "Go" },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "Redis" },
      { name: "Prisma" },
      { name: "DynamoDB" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    icon: Terminal,
    skills: [
      { name: "Docker" },
      { name: "AWS" },
      { name: "Google Cloud" },
      { name: "CI/CD" },
      { name: "Vercel" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git" },
      { name: "VS Code" },
      { name: "Figma" },
      { name: "Postman" },
      { name: "Jest" },
    ],
  },
];
