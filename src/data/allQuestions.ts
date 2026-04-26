import { A_PLUS_QUESTIONS } from "@/data/aplusQuestions";
import { SECURITY_PLUS_QUESTIONS } from "@/data/securityQuestions";
import type { Question } from "@/types/quiz";

export const FULL_BANK: Question[] = [...A_PLUS_QUESTIONS, ...SECURITY_PLUS_QUESTIONS];

export const QUESTION_COUNT = FULL_BANK.length;

const AP = A_PLUS_QUESTIONS.length;
const SY = SECURITY_PLUS_QUESTIONS.length;
if (AP !== 60 || SY !== 60) {
  throw new Error(`Expected 60 A+ and 60 Security+ questions (got ${AP} / ${SY})`);
}
if (QUESTION_COUNT !== 120) {
  throw new Error(`Expected 120 questions, found ${QUESTION_COUNT}`);
}
