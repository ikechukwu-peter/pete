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
  /** The social card and the projects grid: it carries the title itself. */
  image: string;
  /** The page's own opening shot, where the title is already above it. */
  heroImage: { src: string; width: number; height: number; alt: string };
  liveUrl?: string;
  repoUrl?: string;
  /** The long version, for anyone who wants all of it. */
  fullStudyUrl?: string;
};

export const caseStudies: Record<string, CaseStudyMeta> = {
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
    heroImage: {
      src: "/shardrop-transfer.png",
      width: 1728,
      height: 522,
      alt: "A 114 MB file part-way through: 252 of 458 shards verified and stored, 2.8 MB/s, nothing resent",
    },
    liveUrl: "https://shardrop.vercel.app",
    repoUrl: "https://github.com/ikechukwu-peter/shardrop",
    fullStudyUrl: "https://github.com/ikechukwu-peter/shardrop/blob/main/docs/case-study.md",
  },
};

export const caseStudySlugs = Object.keys(caseStudies);

export const hasCaseStudy = (id: string): boolean => id in caseStudies;
