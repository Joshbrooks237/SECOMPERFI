import type { Question } from "@/types/quiz";
import { A_PLUS_PART1 } from "@/data/banks/aplusPart1";
import { A_PLUS_PART2 } from "@/data/banks/aplusPart2";
import { A_PLUS_PART3 } from "@/data/banks/aplusPart3";
import { A_PLUS_TOPIC_PACK } from "@/data/banks/aplusTopicPack";

/**
 * 60 A+ items: dedicated port/crypto/CIA pack (20) + scenario core (40) from audited parts.
 */
export const A_PLUS_QUESTIONS: Question[] = [
  ...A_PLUS_TOPIC_PACK,
  ...A_PLUS_PART1.slice(0, 15),
  ...A_PLUS_PART2.slice(0, 12),
  ...A_PLUS_PART3.slice(0, 13),
];
