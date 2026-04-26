import type { Question } from "@/types/quiz";

/** Security+ bank part 3 of 4 */
export const SECURITY_PART3: Question[] = [
  {
    id: "sy-p3-01",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.2",
    stem: "A security architect compares encrypting file names on disk versus only file contents. The threat model includes attackers browsing directory trees offline from stolen drives. Which statement is most accurate?",
    options: [
      "Filename encryption (or full-volume encryption with proper scope) reduces metadata leakage; content-only crypto may still leak structure",
      "File names never contain sensitive information",
      "NTFS permissions protect stolen drives",
      "EFS cannot encrypt individual files",
    ],
    correctIndex: 0,
    explanation:
      "Metadata like paths/names can reveal business context; design EDR/FDE and app crypto accordingly.",
  },
  {
    id: "sy-p3-02",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.4",
    stem: "A developer stores bcrypt hashes of passwords with per-user salts and cost factor 12. An attacker steals the DB offline. What property still holds versus plaintext storage?",
    options: [
      "Hashes slow guessing but confidentiality of passwords depends on work factor + password entropy + breach response",
      "bcrypt makes passwords impossible to crack",
      "Salts encrypt passwords",
      "bcrypt provides non-repudiation to courts without any process",
    ],
    correctIndex: 0,
    explanation:
      "Salted slow hashes protect stored passwords but offline cracking remains a race against entropy and rotation.",
  },
  {
    id: "sy-p3-03",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.6",
    stem: "A CISO asks which control proves a signed PDF contract was not altered after signing. Best answer:",
    options: [
      "AES-256 encryption of the PDF only",
      "Digital signature using asymmetric crypto where verifier trusts the signer’s public key / chain",
      "ZIP compression",
      "Watermarking with company logo",
    ],
    correctIndex: 1,
    explanation:
      "Digital signatures provide integrity and signer authenticity under a PKI/trust model.",
  },
  {
    id: "sy-p3-04",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.8",
    stem: "An availability incident: DDoS saturates ISP bandwidth. Which compensating control is most relevant while under attack?",
    options: [
      "Increase password complexity on laptops",
      "Upstream scrubbing / CDN / ISP anti-DDoS with rerouting and rate controls",
      "Disable MFA for help desk",
      "Delete SIEM to save bandwidth",
    ],
    correctIndex: 1,
    explanation:
      "Volumetric attacks are mitigated at network edge with specialized scrubbing and capacity partners.",
  },
  {
    id: "sy-p3-05",
    exam: "security-plus",
    domainId: "threats",
    objectiveRef: "SY0-701 2.14",
    stem: "A public site reflects user input into HTML without encoding. A researcher executes alert(1) in victims’ browsers. Primary vulnerability class:",
    options: ["Stored XSS", "Reflected XSS (or DOM XSS variant depending on sink)", "CSRF only", "LDAP injection"],
    correctIndex: 1,
    explanation:
      "Reflected XSS executes in victim context when crafted input is returned unsanitized; fix with encoding/CSP.",
  },
  {
    id: "sy-p3-06",
    exam: "security-plus",
    domainId: "threats",
    objectiveRef: "SY0-701 2.16",
    stem: "An attacker with valid low-privilege DB credentials uses stacked queries to enable xp_cmdshell. Which weakness enabled OS command execution?",
    options: [
      "Broken access control / excessive DB privileges + dangerous features not hardened",
      "TLS 1.3 downgrade",
      "Weak monitor contrast",
      "Incorrect fiber polish only",
    ],
    correctIndex: 0,
    explanation:
      "Database hardening and least privilege block privileged features from application roles.",
  },
  {
    id: "sy-p3-07",
    exam: "security-plus",
    domainId: "architecture",
    objectiveRef: "SY0-701 3.2",
    stem: "An enterprise deploys private keys in an HSM and performs TLS termination on an LB that only receives wrapped keys—not raw private key export. What benefit is emphasized?",
    options: [
      "Keys remain in higher-assurance hardware with tamper controls vs filesystem PEM files",
      "HSM removes need for TLS certificates",
      "HSM guarantees application code is safe",
      "HSM stores plaintext passwords by design",
    ],
    correctIndex: 0,
    explanation:
      "HSMs protect key material and offer audited cryptographic operations.",
  },
  {
    id: "sy-p3-08",
    exam: "security-plus",
    domainId: "architecture",
    objectiveRef: "SY0-701 3.4",
    stem: "OAuth2 authorization code flow with PKCE is recommended for native mobile apps primarily because:",
    options: [
      "It prevents public clients from needing any authentication",
      "It mitigates authorization code interception risks on mobile OS redirect handlers",
      "PKCE removes TLS requirement",
      "PKCE is only for SAML",
    ],
    correctIndex: 1,
    explanation:
      "PKCE binds the auth code exchange to the original request, helping public clients without client secrets.",
  },
  {
    id: "sy-p3-09",
    exam: "security-plus",
    domainId: "architecture",
    objectiveRef: "SY0-701 3.6",
    stem: "A company rotates TLS server certificates every 30 days using ACME. What operational security outcome is primarily improved?",
    options: [
      "Reduced window of exposure if a key is compromised; encourages automation hygiene",
      "Eliminates need for cipher suites",
      "Guarantees no browser warnings without DNS ownership",
      "Removes requirement for logging",
    ],
    correctIndex: 0,
    explanation:
      "Short-lived certs plus automation limits stale keys and speeds incident-driven rotation.",
  },
  {
    id: "sy-p3-10",
    exam: "security-plus",
    domainId: "operations",
    objectiveRef: "SY0-701 4.2",
    stem: "Firewall logs show repeated inbound SYNs to TCP 3389 from botnets. No successful handshakes. Risk posture note:",
    options: [
      "No risk because handshakes failed",
      "Exposure still wastes resources and signals misconfiguration; move RDP behind VPN/gateway with MFA",
      "Open 3389 globally for monitoring",
      "SYN packets cannot be logged",
    ],
    correctIndex: 1,
    explanation:
      "Internet-exposed RDP attracts noise and occasional breakthroughs; remove unnecessary exposure.",
  },
  {
    id: "sy-p3-11",
    exam: "security-plus",
    domainId: "operations",
    objectiveRef: "SY0-701 4.4",
    stem: "A SOC uses Sigma rules mapped to MITRE ATT&CK. Leadership asks what ATT&CK provides. Best answer:",
    options: [
      "A taxonomy of adversary tactics/techniques to align detections, hunts, and coverage gaps",
      "A certificate authority root program",
      "A Wi-Fi channel plan",
      "A PCI ASV scanning vendor list",
    ],
    correctIndex: 0,
    explanation:
      "ATT&CK is a knowledge base for adversary behavior, not a crypto standard.",
  },
  {
    id: "sy-p3-12",
    exam: "security-plus",
    domainId: "operations",
    objectiveRef: "SY0-701 4.6",
    stem: "An IR play says “isolate host.” NetOps asks what that means technically. Most precise option:",
    options: [
      "Change user password only",
      "Remove host route to internet / move to quarantine VLAN / agent network block while preserving disk",
      "Delete all logs on host",
      "Grant local admin to analyst forever",
    ],
    correctIndex: 1,
    explanation:
      "Isolation limits lateral movement and C2 while preserving forensic state.",
  },
  {
    id: "sy-p3-13",
    exam: "security-plus",
    domainId: "operations",
    objectiveRef: "SY0-701 4.8",
    stem: "A threat hunter queries proxy logs for rare User-Agent strings hitting /owa/auth. What hypothesis aligns with MITRE initial access?",
    options: [
      "Password spraying or automated credential attacks against exposed mail services",
      "Legitimate printer firmware update",
      "RAID parity recalculation",
      "GPU thermal throttling",
    ],
    correctIndex: 0,
    explanation:
      "External auth endpoints are common spray targets; hunting focuses on anomalous auth patterns.",
  },
  {
    id: "sy-p3-14",
    exam: "security-plus",
    domainId: "governance",
    objectiveRef: "SY0-701 5.6",
    stem: "A vendor SOC2 report is due diligence for a SaaS purchase. What does SOC2 primarily attest to?",
    options: [
      "PCI DSS card data compliance only",
      "Service organization controls relevant to security/availability/etc. based on TSC criteria",
      "HIPAA for all vendors globally",
      "FIPS 140 level of a laptop CPU",
    ],
    correctIndex: 1,
    explanation:
      "SOC2 reports address trust services criteria for service organizations, not only PCI.",
  },
  {
    id: "sy-p3-15",
    exam: "security-plus",
    domainId: "governance",
    objectiveRef: "SY0-701 5.8",
    stem: "GDPR Article 33 breach notification expectation to supervisory authority is generally:",
    options: [
      "Within 72 hours of becoming aware without undue delay where feasible",
      "Annual summary only",
      "Never if encryption is used",
      "10 business days after press release",
    ],
    correctIndex: 0,
    explanation:
      "GDPR sets a 72-hour notification expectation to regulators for many breaches (with exceptions/documentation).",
  },
];
