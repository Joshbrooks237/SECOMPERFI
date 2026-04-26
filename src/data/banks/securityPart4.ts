import type { Question } from "@/types/quiz";

/** Security+ bank part 4 of 4 */
export const SECURITY_PART4: Question[] = [
  {
    id: "sy-p4-01",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.2",
    stem: "Integrity monitoring on a web server detects unexpected change to index.html. Site still serves content. First containment thought for defacement/hostile takeover:",
    options: [
      "Ignore if TLS is enabled",
      "Take offline/snapshot, validate backups, rotate creds, review WAF and deployment pipeline for compromise path",
      "Increase RAM",
      "Disable file integrity monitoring to stop alerts",
    ],
    correctIndex: 1,
    explanation:
      "Unexpected web root changes imply compromise; preserve evidence and break attacker persistence.",
  },
  {
    id: "sy-p4-02",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.4",
    stem: "A pen tester extracts an encrypted zip with known weak password policy hints. They run offline dictionary attack. What design failed?",
    options: [
      "Human-chosen short passwords defeat entropy assumptions even with zip crypto",
      "ZIP cannot be encrypted",
      "AES cannot be attacked offline",
      "Hashes inside zip prevent cracking",
    ],
    correctIndex: 0,
    explanation:
      "Password-based encryption strength depends on passphrase entropy and KDF hardness.",
  },
  {
    id: "sy-p4-03",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.6",
    stem: "Which scenario best illustrates non-repudiation in a contract workflow?",
    options: [
      "User deletes local browser cache",
      "Signer’s digital signature verified by third parties using PKI and auditable timestamping",
      "AES-GCM encryption of contract at rest only",
      "VPN tunnel confidentiality",
    ],
    correctIndex: 1,
    explanation:
      "Non-repudiation generally needs signatures, identity proof, and process controls—not just encryption.",
  },
  {
    id: "sy-p4-04",
    exam: "security-plus",
    domainId: "threats",
    objectiveRef: "SY0-701 2.18",
    stem: "A help desk analyst runs a “password checker” EXE sent by a user. AV misses it. The EXE exfiltrates creds. Root cause class:",
    options: [
      "Social engineering + unsafe execution of untrusted binaries + endpoint control gaps",
      "BGP dampening",
      "Incorrect DNS TTL",
      "Fiber chromatic dispersion",
    ],
    correctIndex: 0,
    explanation:
      "Human execution of untrusted code bypasses many technical controls; combine training and execution prevention.",
  },
  {
    id: "sy-p4-05",
    exam: "security-plus",
    domainId: "threats",
    objectiveRef: "SY0-701 2.20",
    stem: "A fileless malware technique loads malicious logic only in memory using PowerShell remoting. Strongest detective control pairing:",
    options: [
      "Disable all PowerShell globally without exceptions",
      "PowerShell constrained language / logging + EDR behavioral analytics + least privilege for remoting",
      "Allow WinRM from 0.0.0.0/0",
      "Remove event logs weekly",
    ],
    correctIndex: 1,
    explanation:
      "Fileless needs behavioral detection and hardened scripting surfaces, not blanket bans without alternatives.",
  },
  {
    id: "sy-p4-06",
    exam: "security-plus",
    domainId: "architecture",
    objectiveRef: "SY0-701 3.2",
    stem: "A microservice mesh enforces mTLS between pods. What primary threat is reduced versus plaintext east-west traffic?",
    options: [
      "Passive sniffing and unauthorized service impersonation on the fabric (within trust model)",
      "Phishing email delivery",
      "UPS battery failure",
      "CRT burn-in",
    ],
    correctIndex: 0,
    explanation:
      "mTLS provides mutual authentication and confidentiality for service-to-service traffic inside the mesh scope.",
  },
  {
    id: "sy-p4-07",
    exam: "security-plus",
    domainId: "architecture",
    objectiveRef: "SY0-701 3.4",
    stem: "An API gateway validates OAuth bearer tokens on every request. This primarily enforces:",
    options: [
      "Confidentiality of TCP sequence numbers",
      "Authentication/authorization at the edge before traffic reaches services",
      "RAID stripe size selection",
      "Printer DPI",
    ],
    correctIndex: 1,
    explanation:
      "Gateways centralize token validation and policy enforcement for APIs.",
  },
  {
    id: "sy-p4-08",
    exam: "security-plus",
    domainId: "architecture",
    objectiveRef: "SY0-701 3.6",
    stem: "A DAST scan flags TLS 1.0 enabled on a legacy load balancer. Compliance forbids legacy TLS. Best remediation path:",
    options: [
      "Disable TLS 1.0/1.1 after app compatibility testing; prefer TLS 1.2+ with modern cipher suites",
      "Disable HTTPS entirely",
      "Use self-signed only",
      "Lower cipher strength for speed",
    ],
    correctIndex: 0,
    explanation:
      "Legacy protocols are deprecated due to cryptographic weaknesses; migrate clients or terminate differently.",
  },
  {
    id: "sy-p4-09",
    exam: "security-plus",
    domainId: "operations",
    objectiveRef: "SY0-701 4.2",
    stem: "A CERT notification lists IOC domains and file hashes. SOC ingests into SIEM. What practice is this?",
    options: [
      "Threat intelligence consumption for detection enrichment",
      "Penetration test scoping",
      "Certificate pinning only",
      "DHCP snooping only",
    ],
    correctIndex: 0,
    explanation:
      "IOCs from intel feeds improve detection and hunting queries.",
  },
  {
    id: "sy-p4-10",
    exam: "security-plus",
    domainId: "operations",
    objectiveRef: "SY0-701 4.4",
    stem: "A playbook step says “reset krbtgt twice for AD golden ticket response.” What attack artifact is being addressed?",
    options: [
      "Forged Kerberos TGTs if KRBTGT keys are stolen—double reset invalidates old tickets with planning",
      "RDP rainbow tables",
      "SNMP community strings",
      "BIOS password",
    ],
    correctIndex: 0,
    explanation:
      "KRBTGT key rotation is a known response to golden ticket activity but must be staged to avoid outages.",
  },
  {
    id: "sy-p4-11",
    exam: "security-plus",
    domainId: "operations",
    objectiveRef: "SY0-701 4.6",
    stem: "Log retention is 30 days but regulators require 1 year for certain access logs. What risk is accepted?",
    options: [
      "Inability to investigate older incidents or meet legal hold expectations",
      "Faster CPUs",
      "Better Wi-Fi throughput",
      "Improved RAID parity",
    ],
    correctIndex: 0,
    explanation:
      "Retention policies must align to regulatory and investigative requirements.",
  },
  {
    id: "sy-p4-12",
    exam: "security-plus",
    domainId: "governance",
    objectiveRef: "SY0-701 5.10",
    stem: "NIST CSF “Identify” function includes asset management primarily to:",
    options: [
      "Know what must be protected and prioritized for risk decisions",
      "Replace antivirus",
      "Guarantee zero vulnerabilities",
      "Eliminate need for backups",
    ],
    correctIndex: 0,
    explanation:
      "You cannot protect unknown assets; inventory underpins Identify and Govern.",
  },
  {
    id: "sy-p4-13",
    exam: "security-plus",
    domainId: "governance",
    objectiveRef: "SY0-701 5.12",
    stem: "A DPIA is required before a high-risk GDPR processing activity. What outcome is expected?",
    options: [
      "Document risks to data subjects and mitigations; consult DPA if criteria met",
      "Automatic lawful basis without review",
      "PCI SAQ completion",
      "FIPS 140 validation of laptops",
    ],
    correctIndex: 0,
    explanation:
      "DPIAs analyze privacy impacts and controls for risky processing under GDPR expectations.",
  },
  {
    id: "sy-p4-14",
    exam: "security-plus",
    domainId: "governance",
    objectiveRef: "SY0-701 5.14",
    stem: "A company signs a DPA with a cloud processor under GDPR. The processor subcontracts analytics. Who remains accountable to the controller for compliance chain?",
    options: [
      "Only the subcontractor",
      "The primary processor remains responsible to ensure subprocessors meet obligations via contract",
      "Controllers have no obligations once data leaves premises",
      "GDPR does not apply to cloud",
    ],
    correctIndex: 1,
    explanation:
      "Processor must flow down requirements; accountability chains are contractual and regulatory.",
  },
  {
    id: "sy-p4-15",
    exam: "security-plus",
    domainId: "governance",
    objectiveRef: "SY0-701 5.16",
    stem: "An internal audit finds firewall rule reviews happen never. Which governance gap is clearest?",
    options: [
      "Lack of periodic access/rule recertification violating change and review policies",
      "Need faster SSD",
      "Need more RGB",
      "Need longer DHCP leases",
    ],
    correctIndex: 0,
    explanation:
      "Firewall governance requires periodic review of rules against business need and least privilege.",
  },
];
