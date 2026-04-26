import type { Question } from "@/types/quiz";
import { SECURITY_PART1 } from "@/data/banks/securityPart1";
import { SECURITY_PART2 } from "@/data/banks/securityPart2";
import { SECURITY_PART3 } from "@/data/banks/securityPart3";
import { SECURITY_PART4 } from "@/data/banks/securityPart4";
import { SECURITY_TOPIC_PACK } from "@/data/banks/securityTopicPack";

/**
 * 60 Security+ items: dedicated port/crypto/PKI/CIA pack (20) + scenario core (40).
 */
export const SECURITY_PLUS_QUESTIONS: Question[] = [
  ...SECURITY_TOPIC_PACK,
  ...SECURITY_PART1.slice(0, 12),
  ...SECURITY_PART2.slice(0, 12),
  ...SECURITY_PART3.slice(0, 8),
  ...SECURITY_PART4.slice(0, 8),
];
