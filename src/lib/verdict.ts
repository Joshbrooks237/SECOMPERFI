import type { PerDomainScore } from "@/types/quiz";

export interface Verdict {
  title: string;
  body: string;
}

function formatWeakSecurityDomains(perDomain: PerDomainScore[]): string {
  const weak = perDomain.filter(
    (p) => p.exam === "security-plus" && p.weak && p.total > 0,
  );
  if (weak.length === 0) {
    return "Review any missed items in your weakest objective areas before scheduling.";
  }
  const lines = weak.map((p) => `• ${p.label} (${Math.round(p.fraction * 100)}%)`);
  return `Prioritize:\n${lines.join("\n")}`;
}

export function getVerdict(
  aPlusPercent: number,
  securityPercent: number,
  perDomain: PerDomainScore[],
): Verdict {
  const sec = securityPercent;
  const ap = aPlusPercent;

  if (sec >= 85) {
    return {
      title: "Skip A+. You're ready for Security+. Book the exam.",
      body: `Your Security+ weighted score is ${Math.round(sec)}%. That indicates strong readiness for SY0-701 regardless of A+ (${Math.round(ap)}%). Focus on exam logistics and practice tests, then schedule.`,
    };
  }

  if (sec >= 70 && sec < 85) {
    return {
      title: "Almost there. Two weeks on these specific domains, then test.",
      body: `Security+ is ${Math.round(sec)}%—close to exam-ready. ${formatWeakSecurityDomains(perDomain)}`,
    };
  }

  if (sec < 70 && ap >= 80) {
    return {
      title: "Take A+ first. Solid foundation, build up.",
      body: `Security+ sits at ${Math.round(sec)}%, while A+ is ${Math.round(ap)}%. Your IT fundamentals look stronger than your security depth—sequence A+ (220-1201/1202) before pushing deep into SY0-701.`,
    };
  }

  if (sec < 70 && ap < 70) {
    return {
      title: "Start with A+ study materials. No shame, just sequence.",
      body: `Both weighted scores are under 70% (A+ ${Math.round(ap)}%, Security+ ${Math.round(sec)}%). Build vocabulary, hardware, OS, and networking comfort with A+ objectives first; Security+ will feel less abstract afterward.`,
    };
  }

  // Security+ <70% and A+ between 70–79%
  return {
    title: "Strengthen Security+ domains next.",
    body: `Security+ is ${Math.round(sec)}% with A+ at ${Math.round(ap)}%. You are not yet in the “take A+ first” band, but Security+ needs structured study. ${formatWeakSecurityDomains(perDomain)}`,
  };
}
