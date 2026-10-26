/**
 * Projects that have earned a page of their own.
 *
 * A project appears here when there is something to say beyond the demo —
 * a decision worth defending, a bug worth describing. The body of each study
 * lives beside the route in src/components/case-studies.
 */
export type CaseStudyMeta = {
  slug: string;
  title: string;
  /** One line, under the title. */
  tagline: string;
  /** Used for search results and social cards, so it must stand alone. */
  summary: string;
  role: string;
  year: string;
  status: string;
  stack: string[];
  /** The projects grid thumbnail: it carries the title itself. */
  image: string;
  /** 1200x630, the ratio Open Graph and Twitter actually crop to. */
  ogImage: string;
  /** The page's own opening shot, where the title is already above it. */
  heroImage: { src: string; width: number; height: number; alt: string };
  /** One sentence under the hero image, saying what to look at. */
  heroCaption?: string;
  /** What the full study adds, shown above the link to it. */
  moreBlurb?: string;
  /** For structured data; defaults to TypeScript. */
  language?: string;
  liveUrl?: string;
  repoUrl?: string;
  /** The long version, for anyone who wants all of it. */
  fullStudyUrl?: string;
};

export const caseStudies: Record<string, CaseStudyMeta> = {
  "blast-radius": {
    slug: "blast-radius",
    title: "Blast Radius",
    tagline:
      "An architecture diagram that runs — break it, score it, and ask an AI on your own GPU why it failed.",
    summary:
      "A browser system-design simulator. A seeded engine pushes request rates through the graph and samples requests for real p99, so failover, autoscaling, circuit breakers, retry storms and cache stampedes emerge instead of being scripted. A rule-based reviewer grades the design, a Supabase edge function re-runs the same engine so leaderboard scores can't be forged, and an open model on WebGPU explains results from the engine's own numbers. Designs can use official AWS, Azure and Google Cloud icons in stage columns, and export as share-ready MP4s encoded in the browser.",
    role: "Solo — product, scenarios, testing; code AI-assisted",
    year: "2026",
    status: "Deployed",
    stack: [
      "TypeScript",
      "React",
      "React Flow",
      "zustand",
      "WebLLM",
      "WebGPU",
      "WebCodecs",
      "Supabase",
      "Postgres RLS",
      "Deno",
      "Vitest",
      "Puppeteer",
      "Archify",
      "Vercel",
    ],
    image: "/blast-radius.jpg",
    ogImage: "/og-blast-radius.jpg",
    heroImage: {
      src: "/blast-radius-screens.jpg",
      width: 2400,
      height: 1440,
      alt: "Three screens: the editor mid-incident with the database failing over and error rate climbing, the on-device AI analyst explaining that the single API replica can't take 10x traffic, and a Black Friday challenge result scored 117 of 1000 with red bands where the SLO broke.",
    },
    heroCaption:
      "Red particles and the jump in the error chart are the database failing over; the analyst on the right runs on the laptop's GPU; the challenge chart shades every second the design was outside its SLO.",
    moreBlurb:
      "The full study covers the rest: the honest trade-offs table, all ten decisions with the options that lost, every bug and what found it, the testing strategy, and what is deliberately not built.",
    language: "TypeScript",
    liveUrl: "https://blastradius.ikechukwupeter.com",
    repoUrl: "https://github.com/ikechukwu-peter/blast-radius",
    fullStudyUrl: "https://github.com/ikechukwu-peter/blast-radius/blob/main/docs/case-study.md",
  },
  "pushup-quest": {
    slug: "pushup-quest",
    title: "Pushup Quest",
    tagline:
      "A pushup RPG where the phone's camera counts the reps, and nothing it sees leaves the phone.",
    summary:
      "A browser pushup and squat RPG that counts reps from the camera with an on-device pose model. A two-cue depth signal and five gates — joints seen and in frame, settled tracking, posture, planted hands or feet, a full cycle — took false reps to zero on replayed real footage, and a patched MediaPipe plus a CSP make 'nothing leaves the phone' something the browser enforces.",
    role: "Solo — product, requirements, testing; code AI-assisted",
    year: "2026",
    status: "Deployed and in use",
    stack: [
      "JavaScript",
      "MediaPipe",
      "WebAssembly",
      "WebGL",
      "PWA",
      "Service Worker",
      "Content-Security-Policy",
      "Node test runner",
      "Archify",
      "Vercel",
    ],
    image: "/pushup-quest.jpg",
    ogImage: "/og-pushup-quest.jpg",
    heroImage: {
      src: "/pushup-quest-screens.jpg",
      width: 2400,
      height: 1440,
      alt: "Three phone screens: the home screen with the next boss, a live battle where the pose skeleton turns green at the bottom of a pushup, and the hero sheet with this week's reps.",
    },
    heroCaption:
      "The skeleton turns green when a rep is deep enough; the depth bar on the right is the signal the counter decides on.",
    moreBlurb:
      "The full study covers the rest: the honest trade-offs table, all seven decisions with the options that lost, the accuracy numbers before and after each fix and how to rerun them, every bug and what found it, and what is deliberately not built.",
    language: "JavaScript",
    liveUrl: "https://pushup.ikechukwupeter.com",
    repoUrl: "https://github.com/ikechukwu-peter/pushup-quest",
    fullStudyUrl: "https://github.com/ikechukwu-peter/pushup-quest/blob/main/docs/case-study.md",
  },
  shardrop: {
    slug: "shardrop",
    title: "Shardrop",
    tagline: "Chunked, verified, resumable file transfer straight between two browsers.",
    summary:
      "A browser-to-browser file transfer built to learn distributed-systems engineering where every constraint is unavoidable: a file is split into shards, each hashed and checked on arrival, sent over a WebRTC DataChannel with backpressure, stored at byte offsets in OPFS so an interrupted transfer resumes, and paired with one code that doubles as the encryption key for signaling.",
    role: "Solo — design, implementation, deployment",
    year: "2026",
    status: "Deployed and in use",
    stack: [
      "TypeScript",
      "WebRTC",
      "Web Crypto",
      "OPFS",
      "Web Workers",
      "Node.js",
      "Vite",
      "Playwright",
      "Fly.io",
      "Vercel",
    ],
    image: "/shardrop.png",
    ogImage: "/og-shardrop.png",
    heroImage: {
      src: "/shardrop-transfer.png",
      width: 1728,
      height: 522,
      alt: "A 114 MB file part-way through: 252 of 458 shards verified and stored, 2.8 MB/s, nothing resent",
    },
    heroCaption:
      "One tile per shard, green once its hash has been checked on arrival — amber if it had to be resent.",
    moreBlurb:
      "The full study covers the rest: why OPFS rather than IndexedDB, why a content id is a hash of the shard hashes, how folders became a loop instead of a new format, the complete table of bugs and which layer of testing caught each one, and what is deliberately not built.",
    liveUrl: "https://shardrop.vercel.app",
    repoUrl: "https://github.com/ikechukwu-peter/shardrop",
    fullStudyUrl: "https://github.com/ikechukwu-peter/shardrop/blob/main/docs/case-study.md",
  },
  aura: {
    slug: "aura",
    title: "Aura",
    tagline:
      "A ticketing platform with a four-tier oversell defense that guarantees no seat is sold twice.",
    summary:
      "A production-leaning event ticketing platform built to answer exactly one question: under flash-sale concurrency, how do you stop two people walking into a venue with the same seat number? Correctness comes from four stacked independent guardrails — CAS UPDATE … WHERE, DB-enforced idempotency keys, a schema-level unique seat index, and a self-healing reconciler — while signed QR tickets reject photo forgeries offline before any DB call.",
    role: "Solo — architecture, implementation, UI, docs",
    year: "2026",
    status: "Portfolio · correctness core, docs, diagrams shipped",
    stack: [
      "TypeScript",
      "Next.js",
      "App Router",
      "Server Actions",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "JWT",
      "bcryptjs",
      "Tailwind CSS",
      "Framer Motion",
      "Archify",
    ],
    image: "/aura.png",
    ogImage: "/aura.png",
    heroImage: {
      src: "/aura.png",
      width: 2286,
      height: 1340,
      alt: "Aura's home screen: an event grid, published event cards and a 10-minute held-seat flow backed by a four-tier oversell defense.",
    },
    moreBlurb:
      "The full study covers the rest: the honest trade-offs, six decisions worth defending, capacity measured rather than assumed, the bugs and what found each one, what only production found, getting through a flash sale, and what is deliberately not built.",
    liveUrl: "https://aura-ticket.vercel.app/",
    repoUrl: "https://github.com/ikechukwu-peter/aura",
    fullStudyUrl: "https://github.com/ikechukwu-peter/aura/blob/main/docs/CASE_STUDY.md",
  },
};

export const caseStudySlugs = Object.keys(caseStudies);

export const hasCaseStudy = (id: string): boolean => id in caseStudies;
