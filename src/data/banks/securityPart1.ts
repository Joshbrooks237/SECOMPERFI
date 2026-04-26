import type { Question } from "@/types/quiz";

/** Security+ bank part 1 of 4 — SY0-701 scenario style */
export const SECURITY_PART1: Question[] = [
  {
    id: "sy-p1-01",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.2",
    stem: "A hospital stores patient images on a NAS. The CISO mandates that stolen drives cannot reveal patient data. Which control most directly enforces confidentiality for data at rest?",
    options: [
      "AES-256 full-disk/volume encryption with protected key material",
      "SHA-256 file hashing without encryption",
      "Load balancers with round-robin only",
      "RAID 6 dual parity",
    ],
    correctIndex: 0,
    explanation:
      "Symmetric encryption protects confidentiality at rest; hashing alone does not conceal content.",
  },
  {
    id: "sy-p1-02",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.4",
    stem: "An app signs JWTs with HS256 using a long random secret shared between two microservices. Another team proposes RS256 with a key pair instead. What is the primary architectural difference?",
    options: [
      "HS256 is symmetric (shared secret); RS256 is asymmetric (private sign / public verify)",
      "HS256 cannot be used with HTTPS",
      "RS256 forbids rotation",
      "Both require identical private keys on clients",
    ],
    correctIndex: 0,
    explanation:
      "HMAC-based JWTs use a shared symmetric key; RSA uses a private key for signing and public for verification.",
  },
  {
    id: "sy-p1-03",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.6",
    stem: "A SIEM alert shows TLS 1.2 to a rare cloud region from a domain workstation at 03:00. The session exfiltrated 200MB. Leadership asks which CIA dimension is primarily impacted if sensitive data left the org.",
    options: ["Availability of the SIEM", "Confidentiality (and potentially integrity if data was altered)", "Only physical security", "Accounting non-repudiation to public CAs always"],
    correctIndex: 1,
    explanation:
      "Unauthorized data egress is first a confidentiality failure; integrity depends on whether data was modified.",
  },
  {
    id: "sy-p1-04",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.8",
    stem: "Blue team wants to prove a log file was not altered since collection. They store HMAC-SHA256(log) with a secret known only to the SOC. Later verification recomputes HMAC. This primarily provides:",
    options: [
      "Confidentiality of log plaintext to outsiders who lack the HMAC key",
      "Integrity detection (and authentication of origin for parties that trust key custody)",
      "DDoS protection",
      "Perfect forward secrecy for TLS",
    ],
    correctIndex: 1,
    explanation:
      "HMAC detects tampering; it does not encrypt logs. Key custody determines who can forge valid MACs.",
  },
  {
    id: "sy-p1-05",
    exam: "security-plus",
    domainId: "threats",
    objectiveRef: "SY0-701 2.2",
    stem: "A finance employee receives an urgent Teams message from the “CFO” asking to wire funds. The display name matches but the tenant ID is external. This is best classified as:",
    options: [
      "Buffer overflow",
      "Business email compromise / impersonation via trusted channel",
      "SYN flood",
      "Rowhammer",
    ],
    correctIndex: 1,
    explanation:
      "Impersonation using plausible sender metadata is BEC/social engineering, not a memory corruption attack.",
  },
  {
    id: "sy-p1-06",
    exam: "security-plus",
    domainId: "threats",
    objectiveRef: "SY0-701 2.4",
    stem: "A worm spreads across VLANs by exploiting an unpatched SMB service on workstations. Which mitigation pair best addresses both exploitation and lateral movement?",
    options: [
      "Disable all logging",
      "Patch/remove legacy SMB exposure + network segmentation/microsegmentation + EDR containment",
      "Increase password length only",
      "Disable HTTPS company-wide",
    ],
    correctIndex: 1,
    explanation:
      "Worms need vulnerabilities and paths; patching and segmentation limit spread.",
  },
  {
    id: "sy-p1-07",
    exam: "security-plus",
    domainId: "threats",
    objectiveRef: "SY0-701 2.6",
    stem: "A red team drops a USB in the parking lot labeled “Q4_Salaries.” An employee plugs it in and a payload phones home. Strongest preventive control combination:",
    options: [
      "Autoplay/USB restrictions + device control + security awareness + EDR",
      "Post a sign “do not use USB” only",
      "Disable MFA to reduce friction",
      "Allow only NTFS-formatted USB",
    ],
    correctIndex: 0,
    explanation:
      "Technical controls block weaponized removable media; training reduces human risk.",
  },
  {
    id: "sy-p1-08",
    exam: "security-plus",
    domainId: "architecture",
    objectiveRef: "SY0-701 3.2",
    stem: "An enterprise adopts zero trust for SaaS admin consoles. Which control set best matches “never trust, always verify”?",
    options: [
      "VPN full tunnel to trusted internal zone only",
      "Continuous device posture + MFA + least privilege + session monitoring on each access",
      "Shared admin password rotated yearly",
      "IP allowlist without authentication",
    ],
    correctIndex: 1,
    explanation:
      "ZT emphasizes per-request verification with strong identity, device health, and least privilege.",
  },
  {
    id: "sy-p1-09",
    exam: "security-plus",
    domainId: "architecture",
    objectiveRef: "SY0-701 3.4",
    stem: "Developers embed AWS access keys in a public GitHub repo. Bots scrape within minutes. Best immediate response sequence:",
    options: [
      "Ignore if repo is private later",
      "Revoke/rotate keys, audit CloudTrail for misuse, implement secrets scanning + vault",
      "Change DNS TTL",
      "Increase instance size",
    ],
    correctIndex: 1,
    explanation:
      "Exposed long-lived cloud keys must be revoked urgently; prevent recurrence with secret management.",
  },
  {
    id: "sy-p1-10",
    exam: "security-plus",
    domainId: "architecture",
    objectiveRef: "SY0-701 3.6",
    stem: "An IdP issues SAML assertions to multiple SaaS apps. A misconfigured SP accepts unsigned assertions. What is the primary risk?",
    options: [
      "Attackers forge assertions to impersonate users without possession of private keys if assertions aren’t integrity-protected",
      "TLS 1.3 downgrade",
      "CPU branch prediction leaks",
      "SNMP v2c read-only",
    ],
    correctIndex: 0,
    explanation:
      "SAML integrity (signing) and validation are critical; unsigned assertions enable assertion injection if other checks fail.",
  },
  {
    id: "sy-p1-11",
    exam: "security-plus",
    domainId: "architecture",
    objectiveRef: "SY0-701 3.8",
    stem: "A PKI admin publishes a new intermediate CA cert. Clients must trust chains issued under it. What must clients receive?",
    options: [
      "Only the end-entity server certificate",
      "The full chain (server + intermediates) with roots already in trust store; avoid missing intermediate issues",
      "A self-signed root for every TLS session",
      "The private key of the CA to clients",
    ],
    correctIndex: 1,
    explanation:
      "TLS clients validate paths; missing intermediates cause trust failures or insecure workarounds.",
  },
  {
    id: "sy-p1-12",
    exam: "security-plus",
    domainId: "operations",
    objectiveRef: "SY0-701 4.2",
    stem: "SOC sees beaconing to a rare domain over TCP 443 every 60s with JA3 matching a known RAT family. Host EDR is installed but policy is detect-only. Best immediate containment aligned to IR playbooks:",
    options: [
      "Isolate host at network layer and block outbound C2 while preserving disk for forensics",
      "Reimage without evidence capture",
      "Disable EDR to reduce noise",
      "Publish admin credentials in ticket",
    ],
    correctIndex: 0,
    explanation:
      "Containment limits spread; preserve forensic artifacts before remediation.",
  },
  {
    id: "sy-p1-13",
    exam: "security-plus",
    domainId: "operations",
    objectiveRef: "SY0-701 4.4",
    stem: "After malware execution, legal wants emails preserved. IT already purged mailboxes. What governance/control failed most clearly?",
    options: [
      "Legal hold / retention policy not applied before destructive actions",
      "DNSSEC misconfiguration",
      "Low monitor refresh rate",
      "Incorrect cable category",
    ],
    correctIndex: 0,
    explanation:
      "eDiscovery/legal hold processes must precede deletion when litigation/investigation is anticipated.",
  },
  {
    id: "sy-p1-14",
    exam: "security-plus",
    domainId: "operations",
    objectiveRef: "SY0-701 4.6",
    stem: "A DFIR analyst hashes a memory dump before analysis. What property is being supported for later court admissibility workflows?",
    options: [
      "Integrity evidence of the artifact as collected",
      "Encryption of memory at rest automatically",
      "Availability of the attacker C2",
      "Non-repudiation without any custody record",
    ],
    correctIndex: 0,
    explanation:
      "Cryptographic hashing demonstrates the evidence file hasn’t changed if chain-of-custody is maintained.",
  },
  {
    id: "sy-p1-15",
    exam: "security-plus",
    domainId: "governance",
    objectiveRef: "SY0-701 5.2",
    stem: "A US healthcare SaaS vendor signs a BAA and stores PHI. They move backups to an EU region without BAAs for subprocessors. Which framework is most directly implicated?",
    options: ["PCI DSS only", "HIPAA business associate obligations and permitted uses/disclosures", "FIPS-140 for GPUs", "IEEE 802.11ax"],
    correctIndex: 1,
    explanation:
      "HIPAA governs PHI handling; cross-border subprocessors require appropriate safeguards and agreements.",
  },
];
