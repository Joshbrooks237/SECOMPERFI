import type { DomainMeta } from "@/types/quiz";

/** Weights align with blended 220-1201/1202 style emphasis (hardware, networking, OS, troubleshooting dominant). */
export const A_PLUS_DOMAINS: DomainMeta[] = [
  {
    id: "hardware",
    exam: "a-plus",
    label: "Hardware fundamentals",
    examWeight: 0.22,
  },
  {
    id: "networking",
    exam: "a-plus",
    label: "Networking basics (TCP/IP, DHCP, DNS, ports, cabling)",
    examWeight: 0.2,
  },
  {
    id: "os",
    exam: "a-plus",
    label: "OS management (Windows, macOS, Linux)",
    examWeight: 0.18,
  },
  { id: "mobile", exam: "a-plus", label: "Mobile devices", examWeight: 0.08 },
  {
    id: "virtualization",
    exam: "a-plus",
    label: "Virtualization & cloud basics",
    examWeight: 0.08,
  },
  {
    id: "troubleshooting",
    exam: "a-plus",
    label: "Troubleshooting methodology",
    examWeight: 0.12,
  },
  {
    id: "security_basic",
    exam: "a-plus",
    label: "Basic security (A+ scope)",
    examWeight: 0.07,
  },
  {
    id: "remote_ops",
    exam: "a-plus",
    label: "Remote support & operational tools",
    examWeight: 0.05,
  },
];

/** Weights mirror SY0-701 domain emphasis (Operations & Threats weighted higher). */
export const SECURITY_PLUS_DOMAINS: DomainMeta[] = [
  {
    id: "concepts",
    exam: "security-plus",
    label: "General security concepts (CIA, cryptography fundamentals)",
    examWeight: 0.12,
  },
  {
    id: "threats",
    exam: "security-plus",
    label: "Threats, vulnerabilities & mitigations (malware, social engineering)",
    examWeight: 0.24,
  },
  {
    id: "architecture",
    exam: "security-plus",
    label: "Security architecture & zero trust / IAM",
    examWeight: 0.2,
  },
  {
    id: "operations",
    exam: "security-plus",
    label: "Security operations & incident response",
    examWeight: 0.28,
  },
  {
    id: "governance",
    exam: "security-plus",
    label: "Governance & compliance (HIPAA, GDPR, PCI-DSS, NIST)",
    examWeight: 0.16,
  },
];

export const ALL_DOMAINS: DomainMeta[] = [
  ...A_PLUS_DOMAINS,
  ...SECURITY_PLUS_DOMAINS,
];

export function domainLabel(id: string): string {
  return ALL_DOMAINS.find((d) => d.id === id)?.label ?? id;
}
