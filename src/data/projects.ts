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
    id: "blast-radius",
    title: "Blast Radius",
    description:
      "An architecture diagram that runs. Draw it like draw.io — your own components, labelled and bendable links, notes and zones — and requests flow through it as particles from a seeded simulation — rates through the graph plus sampled requests for real p99 — then you kill the database, partition the network or send 10x traffic and watch what survives. A rule-based reviewer grades it, five scripted incidents score it against SLOs and a budget, and a Supabase function re-runs the same engine so scores can't be forged. An open model on WebGPU explains the results, with no API key. It speaks AWS, Azure and Google Cloud with official icons and stage columns, and turns any design into a postable MP4, rendered in the browser with WebCodecs. Deployed.",
    image: "/blast-radius.jpg",
    demoUrl: "https://blastradius.ikechukwupeter.com",
    repoUrl: "https://github.com/ikechukwu-peter/blast-radius",
    tags: [
      "TypeScript",
      "React",
      "Simulation",
      "WebGPU",
      "WebLLM",
      "WebCodecs",
      "Supabase",
      "Deno",
      "Vitest",
    ],
    featured: true,
  },
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
    id: "pushup-quest",
    title: "Pushup Quest",
    description:
      "A pushup and squat RPG where the phone's camera counts the reps. MediaPipe's pose model runs on-device in WebAssembly; a depth signal from elbow angle and shoulder drop is gated on joints seen in frame, posture and planted hands, which took false reps to zero on replayed real footage. A patched MediaPipe and a strict CSP mean nothing it sees leaves the phone. Offline PWA, deployed.",
    image: "/pushup-quest.jpg",
    demoUrl: "https://pushup.ikechukwupeter.com",
    repoUrl: "https://github.com/ikechukwu-peter/pushup-quest",
    tags: ["JavaScript", "MediaPipe", "WebAssembly", "PWA", "Service Worker", "Web Security"],
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
      "A ticketing platform with a four-tier oversell defense: CAS UPDATE … WHERE inside a transaction, DB-enforced idempotency keys, schema-level (eventId, ticketIndex) @@unique, plus a self-healing reconciler. Held seats are counted against capacity for 10 minutes; QR tickets are signed with a separate TICKET_SECRET so photo forgeries fail offline before any DB round-trip. Built to demonstrate what correctness under flash-sale concurrency actually looks like.",
    image: "/aura.png",
    demoUrl: "https://aura-ticket.vercel.app/",
    repoUrl: "https://github.com/ikechukwu-peter/aura",
    tags: [
      "TypeScript",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "JWT",
      "Tailwind CSS",
      "Framer Motion",
      "Archify",
    ],
    featured: true,
  },
];
