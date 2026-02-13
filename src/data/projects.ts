export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  tags: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "bridge",
    title: "Brydge",
    description:
      "A comprehensive fintech application facilitating seamless financial transactions. Built with modern web technologies to ensure security and performance.",
    image: "/brydge.jpg",
    demoUrl: "https://brydgehq.co",
    tags: ["TypeScript", "React", "Next.js", "Node.js", "Express"],
    featured: true,
  },
  {
    id: "ridges",
    title: "Ridges",
    description:
      "A user-friendly hotel booking platform allowing users to search, view, and book accommodations. Features a responsive design and intuitive booking flow.",
    image: "/ridges.jpg",
    demoUrl: "https://ridges-website.vercel.app",
    tags: ["TypeScript", "Next.js", "React", "Node.js", "Express"],
    featured: true,
  },
  {
    id: "webzerve",
    title: "Webzerve",
    description: "API monitoring & analytics system.",
    image: "/webzerve.jpg",
    demoUrl: "https://webzerve.vercel.app",
    tags: ["TypeScript", "Next.js", "NestJS"],
    featured: true,
  },
  // {
  //   id: "foodie",
  //   title: "Foodie",
  //   description: "A food recipe app.",
  //   image: "/foodie.jpg",
  //   demoUrl: "https://foodie-beta-eight.vercel.app/",
  //   tags: ["TypeScript", "React"],
  //   featured: false,
  // },
  {
    id: "aura",
    title: "Aura",
    description:
      "A high-performance premium ticketing platform featuring anti-fraud cryptographic verification, instant ticket holds, and a modern event infrastructure built for speed and security.",
    image: "/aura.png",
    demoUrl: "https://aura-ticket.vercel.app/",
    tags: ["TypeScript", "Next.js", "Prisma", "Supabase", "Tailwind CSS", "Framer Motion"],
    featured: true,
  },
];
