import { CAREER_START } from "@/data/experience";

/**
 * Whole years since CAREER_START. Mar 2020 -> Sep 2026 is 6, becoming 7 in
 * Mar 2027. Floors rather than rounds: "6+" at six and a half years is a claim
 * anyone can verify against the timeline; "7" would not be.
 */
export function yearsOfExperience(now: Date = new Date()): number {
  const months =
    (now.getFullYear() - CAREER_START.year) * 12 + (now.getMonth() + 1 - CAREER_START.month);
  return Math.floor(months / 12);
}
