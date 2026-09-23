export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  /**
   * For work that cannot be linked to: a local stack, or a client project
   * that is not public. Better than a button that goes nowhere.
   */
  demoNote?: string;
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
    id: "switchyard",
    title: "Switchyard",
    description:
      "Flagship African payment switch with exactly-once semantics: UPSERT idempotency, double-entry ledger with a PostgreSQL CHECK constraint that literally rejects unbalanced writes, per-rail circuit breakers with half-open single probe, cheapest-route engine across NIBSS STP/NIP, Flutterwave, Paga, BIN+velocity fraud, and a 96.8% fee-savings live proof demo. 500 concurrent same-reference retries → exactly 1 ledger movement.",
    image: "/screenshot.jpg",
    demoNote: "Runs locally on Docker Compose — walkthrough on request",
    tags: ["TypeScript", "Node.js", "Fastify", "PostgreSQL", "Redis", "Next.js", "Docker"],
    featured: true,
  },
  {
    id: "fossa",
    title: "Fossa",
    description:
      "Exactly-once distributed job queue & DAG workflow engine. Postgres `SELECT … FOR UPDATE SKIP LOCKED` atomic claim, heartbeat-based zombie recovery (<35s reclaim after worker SIGKILL), distributed cron via `pg_try_advisory_xact_lock` (exactly 1 fire across 5 servers over 60 min), transactional outbox, Redis rate-limited queues, DLQ replay, fan-out 10 → fan-in waits for all 10. Dual Node 22 + Deno 2 SDKs with identical public API.",
    image: "/brydge.jpg",
    demoNote: "Runs locally on Docker Compose — walkthrough on request",
    tags: ["TypeScript", "Node.js", "Deno", "PostgreSQL", "Redis", "Next.js", "Docker"],
    featured: true,
  },
  {
    id: "kycveritas",
    title: "KycVeritas",
    description:
      "CBN tiered-KYC orchestration engine. 3 Nigerian tiers (BVN → BVN+NIN+Liveness → Proof-of-Address), 3 KYC providers (Smile Identity, Appruve, VerifyMe) with failover routing, mismatch tiebreak-to-third/3-way manual queue, hash-chain audit log with tamper-proof CLI verifier, midnight document-expiry auto tier-downgrade alerts, one-click CBN reconciliation CSV with all 14 mandated columns.",
    image: "/ridges.jpg",
    demoNote: "Runs locally on Docker Compose — walkthrough on request",
    tags: ["TypeScript", "Node.js", "Fastify", "PostgreSQL", "Redis", "Next.js"],
    featured: true,
  },
  {
    id: "orchestrai",
    title: "OrchestrAI",
    description:
      "Multi-agent LLM orchestration & memory platform. DAG workflows with `.after()/.if(loopBackTo)` thresholds, ReAct agent loop, 2-tier memory (Redis short-term + pgvector long-term with hierarchical summarization), Zod tool registry with targeted 2-round arg repair (no full-context resend), provider-abstraction circuit-breaker failover, integer micro-dollar cost accounting, eval gate that BLOCKS output on NEWLY failing individual cases (not just average decline).",
    image: "/webzerve.jpg",
    demoNote: "Runs locally on Docker Compose — walkthrough on request",
    tags: ["TypeScript", "Node.js", "Next.js", "PostgreSQL", "pgvector", "Redis", "Docker"],
    featured: true,
  },
  {
    id: "vergesync",
    title: "VergeSync",
    description:
      "CRDT realtime collaboration engine. LSeq total-order for text insert/delete, Map CRDT with causal vector clocks, snapshot every 100 ops + append-only op log, 50ms cursor batching over Redis pub/sub. 10 000 random-disconnect op pairs between 2 clients → SHA-256 doc state equality. React `<Contenteditable />` + React Native drop-in SDK (zero native modules). Console debugger: timeline scrubber, convergence proof panel, vector-clock per-actor SVG graph.",
    image: "/short.jpg",
    demoNote: "Runs locally on Docker Compose — walkthrough on request",
    tags: ["TypeScript", "Node.js", "Fastify", "WebSocket", "React Native", "PostgreSQL", "Redis"],
    featured: true,
  },
  {
    id: "lumen",
    title: "Lumen",
    description:
      "Premium 3D product configurator with realtime co-design. 4 parametric products (sofa, desk chair, gaming PC, sports car) built in react-three/fiber with drei Environment/ContactShadows/Stage for HDRI photoreal look, SSAO + Bloom postprocessing. Zustand state with VergeSync multi-user co-design TODO, micro-dollar SKU BOM live price, Stripe Payment Intents test-mode + signed webhook + advisory-lock idempotency, Apple USDZ / Android WebXR AR QuickLook export. Strict instrument-panel aesthetic with zero box-shadows.",
    image: "/aura.png",
    demoNote: "Runs locally on Docker Compose — walkthrough on request",
    tags: ["TypeScript", "Next.js", "Three.js", "R3F", "Drei", "Stripe", "Zustand"],
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
