import { ALL_DOMAINS } from "@/data/domains";
import type { DomainId, ExamType, Question, QuizResults } from "@/types/quiz";
import { getVerdict } from "@/lib/verdict";

const WEAK_THRESHOLD = 0.7;

export function computeResults(
  questions: Question[],
  answers: (number | null)[],
): QuizResults {
  const byDomain = new Map<
    DomainId,
    { correct: number; total: number; exam: ExamType }
  >();

  for (const d of ALL_DOMAINS) {
    byDomain.set(d.id, { correct: 0, total: 0, exam: d.exam });
  }

  questions.forEach((q, i) => {
    const bucket = byDomain.get(q.domainId);
    if (!bucket) return;
    bucket.total += 1;
    const chosen = answers[i];
    if (chosen !== null && chosen === q.correctIndex) {
      bucket.correct += 1;
    }
  });

  const perDomain = ALL_DOMAINS.map((meta) => {
    const stats = byDomain.get(meta.id)!;
    const fraction = stats.total > 0 ? stats.correct / stats.total : 0;
    const weightedPoints = meta.examWeight * fraction;
    return {
      domainId: meta.id,
      label: meta.label,
      exam: meta.exam,
      correct: stats.correct,
      total: stats.total,
      fraction,
      weightedPoints,
      weak: stats.total > 0 && fraction < WEAK_THRESHOLD,
    };
  });

  const aPlusWeightedPercent =
    perDomain
      .filter((p) => p.exam === "a-plus")
      .reduce((s, p) => s + p.weightedPoints, 0) * 100;

  const securityPlusWeightedPercent =
    perDomain
      .filter((p) => p.exam === "security-plus")
      .reduce((s, p) => s + p.weightedPoints, 0) * 100;

  const verdict = getVerdict(aPlusWeightedPercent, securityPlusWeightedPercent, perDomain);

  const weakDomainsDetail = perDomain
    .filter((p) => p.weak)
    .map((p) => `${p.label}: ${Math.round(p.fraction * 100)}% (${p.correct}/${p.total})`);

  return {
    aPlusWeightedPercent,
    securityPlusWeightedPercent,
    perDomain,
    verdictTitle: verdict.title,
    verdictBody: verdict.body,
    weakDomainsDetail,
  };
}
