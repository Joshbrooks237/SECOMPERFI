import type { DomainMeta } from "@/types/quiz";

/**
 * Weights sum to 1.0 per exam. Networking + security_basic are elevated for
 * port/crypto/CIA-heavy items; remaining domains follow 220-1201/1202 emphasis.
 */
export const A_PLUS_DOMAINS: DomainMeta[] = [
  {
    id: "hardware",
    exam: "a-plus",
    label: "Hardware fundamentals",
    examWeight: 0.2,
  },
  {
    id: "networking",
    exam: "a-plus",
    label: "Networking basics (TCP/IP, DHCP, DNS, ports, cabling)",
    examWeight: 0.24,
  },
  {
    id: "os",
    exam: "a-plus",
    label: "OS management (Windows, macOS, Linux)",
    examWeight: 0.16,
  },
  { id: "mobile", exam: "a-plus", label: "Mobile devices", examWeight: 0.06 },
  {
    id: "virtualization",
    exam: "a-plus",
    label: "Virtualization & cloud basics",
    examWeight: 0.06,
  },
  {
    id: "troubleshooting",
    exam: "a-plus",
    label: "Troubleshooting methodology",
    examWeight: 0.11,
  },
  {
    id: "security_basic",
    exam: "a-plus",
    label: "Basic security (A+ scope: crypto awareness, CIA, hardening)",
    examWeight: 0.12,
  },
  {
    id: "remote_ops",
    exam: "a-plus",
    label: "Remote support & operational tools",
    examWeight: 0.05,
  },
];

/** SY0-701-style emphasis; concepts + architecture upweighted for crypto/PKI/CIA items. */
export const SECURITY_PLUS_DOMAINS: DomainMeta[] = [
  {
    id: "concepts",
    exam: "security-plus",
    label: "General security concepts (CIA, cryptography, ports in context)",
    examWeight: 0.2,
  },
  {
    id: "threats",
    exam: "security-plus",
    label: "Threats, vulnerabilities & mitigations (malware, social engineering)",
    examWeight: 0.22,
  },
  {
    id: "architecture",
    exam: "security-plus",
    label: "Security architecture, PKI, zero trust, IAM",
    examWeight: 0.22,
  },
  {
    id: "operations",
    exam: "security-plus",
    label: "Security operations & incident response",
    examWeight: 0.24,
  },
  {
    id: "governance",
    exam: "security-plus",
    label: "Governance & compliance (HIPAA, GDPR, PCI-DSS, NIST)",
    examWeight: 0.12,
  },
];

export const ALL_DOMAINS: DomainMeta[] = [
  ...A_PLUS_DOMAINS,
  ...SECURITY_PLUS_DOMAINS,
];

export function domainLabel(id: string): string {
  return ALL_DOMAINS.find((d) => d.id === id)?.label ?? id;
}
