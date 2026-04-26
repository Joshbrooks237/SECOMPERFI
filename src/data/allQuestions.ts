import { A_PLUS_QUESTIONS } from "@/data/aplusQuestions";
import { SECURITY_PLUS_QUESTIONS } from "@/data/securityQuestions";
import type { Question } from "@/types/quiz";

export const FULL_BANK: Question[] = [...A_PLUS_QUESTIONS, ...SECURITY_PLUS_QUESTIONS];

export const QUESTION_COUNT = FULL_BANK.length;

if (A_PLUS_QUESTIONS.length !== 40 || SECURITY_PLUS_QUESTIONS.length !== 40) {
  throw new Error(
    `Expected 40 A+ and 40 Security+ questions (got ${A_PLUS_QUESTIONS.length} / ${SECURITY_PLUS_QUESTIONS.length})`,
  );
}
if (QUESTION_COUNT !== 80) {
  throw new Error(`Expected 80 questions, found ${QUESTION_COUNT}`);
}
