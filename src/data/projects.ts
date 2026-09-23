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
    id: "shardrop",
    title: "Shardrop",
    description:
      "Chunked, verified, resumable file transfer straight between two browsers. Shards are SHA-256 hashed and rechecked on arrival, streamed over a WebRTC DataChannel with backpressure, and written at byte offsets into OPFS so an interrupted transfer resumes instead of restarting. One 80-bit pairing code derives both the signaling room id and the AES-256-GCM key, so the relay sees ciphertext it can neither read nor forge. Deployed, and working across networks.",
    image: "/shardrop.png",
    demoUrl: "https://shardrop.vercel.app",
    repoUrl: "https://github.com/ikechukwu-peter/shardrop",
    tags: ["TypeScript", "WebRTC", "Web Crypto", "OPFS", "Web Workers", "Node.js", "Playwright"],
    featured: true,
  },
  {
    id: "bridge",
    title: "Brydge",
    description:
      "A comprehensive fintech application facilitating seamless financial transactions. Built with modern web technologies to ensure security and performance.",
    image: "/brydge.jpg",
    demoUrl: "https://brydgehq.co",
    tags: ["TypeScript", "React", "Next.js", "Node.js", "Express"],
    featured: false,
  },
  {
    id: "ridges",
    title: "Ridges",
    description:
      "A user-friendly hotel booking platform allowing users to search, view, and book accommodations. Features a responsive design and intuitive booking flow.",
    image: "/ridges.jpg",
    demoUrl: "https://ridges-website.vercel.app",
    tags: ["TypeScript", "Next.js", "React", "Node.js", "Express"],
    featured: false,
  },
  {
    id: "webzerve",
    title: "Webzerve",
    description: "API monitoring & analytics system.",
    image: "/webzerve.jpg",
    demoUrl: "https://webzerve.vercel.app",
    tags: ["TypeScript", "Next.js", "NestJS"],
    featured: false,
  },
  {
    id: "aura",
    title: "Aura",
    description:
      "A high-performance premium ticketing platform featuring anti-fraud cryptographic verification, instant ticket holds, and a modern event infrastructure built for speed and security.",
    image: "/aura.png",
    demoUrl: "https://aura-ticket.vercel.app/",
    tags: ["TypeScript", "Next.js", "Prisma", "Supabase", "Tailwind CSS", "Framer Motion"],
    featured: false,
  },
];
