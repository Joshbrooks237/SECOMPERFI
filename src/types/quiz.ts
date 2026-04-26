export type ExamType = "a-plus" | "security-plus";

export type APlusDomainId =
  | "hardware"
  | "networking"
  | "os"
  | "mobile"
  | "virtualization"
  | "troubleshooting"
  | "security_basic"
  | "remote_ops";

export type SecurityDomainId =
  | "concepts"
  | "threats"
  | "architecture"
  | "operations"
  | "governance";

export type DomainId = APlusDomainId | SecurityDomainId;

export interface Question {
  id: string;
  exam: ExamType;
  domainId: DomainId;
  /** Objective-style reference for transparency */
  objectiveRef: string;
  stem: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
}

export interface DomainMeta {
  id: DomainId;
  exam: ExamType;
  label: string;
  /** Official-style weight for headline score (sums to 1 per exam) */
  examWeight: number;
}

export interface PerDomainScore {
  domainId: DomainId;
  label: string;
  exam: ExamType;
  correct: number;
  total: number;
  /** Fraction correct in this domain, 0–1 */
  fraction: number;
  /** Contribution to weighted exam score */
  weightedPoints: number;
  weak: boolean;
}

export interface QuizResults {
  aPlusWeightedPercent: number;
  securityPlusWeightedPercent: number;
  perDomain: PerDomainScore[];
  verdictTitle: string;
  verdictBody: string;
  weakDomainsDetail: string[];
}
