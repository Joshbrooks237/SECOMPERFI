import type { Question } from "@/types/quiz";

/** Security+ bank part 2 of 4 */
export const SECURITY_PART2: Question[] = [
  {
    id: "sy-p2-01",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.1",
    stem: "A database stores credit card PANs. Policy requires that even DBAs cannot read PANs without a business token. Which primitive best matches “need to know” for confidentiality at the application layer?",
    options: [
      "Transparent Data Encryption with role-based views / tokenization separating duties",
      "MD5 checksums on PAN column",
      "RAID 10 only",
      "Longer VARCHAR field",
    ],
    correctIndex: 0,
    explanation:
      "TDE protects at-rest media; tokenization/strict RBAC enforces application-layer confidentiality against insiders.",
  },
  {
    id: "sy-p2-02",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.3",
    stem: "A TLS server presents a certificate signed by a private CA not trusted by mobile devices. Browsers fail. The fastest legitimate fix for a pilot cohort is:",
    options: [
      "Disable certificate validation in the app",
      "Distribute the org root/intermediate via MDM trusted cert profile or use a public-trusted CA chain",
      "Use self-signed server cert forever",
      "Downgrade to HTTP for pilot",
    ],
    correctIndex: 1,
    explanation:
      "Clients must trust the issuing CA; MDM can deploy roots for corporate PKI or use publicly trusted certs.",
  },
  {
    id: "sy-p2-03",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.5",
    stem: "An architect argues AES-GCM for an API payload because it provides authenticated encryption. What threat class is primarily reduced versus AES-CBC without MAC?",
    options: [
      "Silent ciphertext tampering leading to oracle/decryption issues",
      "BGP hijacks only",
      "Physical tailgating",
      "UPS battery sulfation",
    ],
    correctIndex: 0,
    explanation:
      "AEAD modes like GCM provide confidentiality + integrity for ciphertext; CBC without integrity can be malleable.",
  },
  {
    id: "sy-p2-04",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.7",
    stem: "A company’s primary DNS resolver is DDoSed. Internal apps cannot resolve names though L3 connectivity remains. Which CIA pillar is primarily impacted for dependent services?",
    options: ["Confidentiality of DNS packets only", "Availability (name resolution service)", "Integrity of BGP AS_PATH only", "Non-repudiation of zone transfers"],
    correctIndex: 1,
    explanation:
      "If name resolution fails, dependent services become unreachable—an availability impact.",
  },
  {
    id: "sy-p2-05",
    exam: "security-plus",
    domainId: "threats",
    objectiveRef: "SY0-701 2.8",
    stem: "A public API returns verbose stack traces including internal library versions. A scanner correlates versions to CVEs. What weakness class is this?",
    options: [
      "Information disclosure aiding targeted exploitation",
      "Perfect forward secrecy failure",
      "Kerberos double-hop",
      "Immutable backup violation",
    ],
    correctIndex: 0,
    explanation:
      "Verbose errors are an information disclosure that reduces attacker effort.",
  },
  {
    id: "sy-p2-06",
    exam: "security-plus",
    domainId: "threats",
    objectiveRef: "SY0-701 2.10",
    stem: "A supply-chain compromise replaces a popular npm package minor version with credential-stealing code. Best detective control in CI/CD?",
    options: [
      "Disable package lockfiles",
      "Dependency pinning + integrity hashes (lockfile) + SCA/subresource reputation scanning + code review for version bumps",
      "Allow any semver range to float",
      "Store npm token in client JS",
    ],
    correctIndex: 1,
    explanation:
      "SCA and immutable dependency resolution reduce surprise upgrades from compromised registries.",
  },
  {
    id: "sy-p2-07",
    exam: "security-plus",
    domainId: "threats",
    objectiveRef: "SY0-701 2.12",
    stem: "A phishing kit uses reverse proxy (evilginx-style) to harvest session cookies post-login. MFA push was approved by the victim. Strongest additional control:",
    options: [
      "Phishing-resistant MFA (FIDO2/WebAuthn) or risk-based step-up tied to origin",
      "Disable HTTPS to see traffic",
      "Use SMS OTP only",
      "Longer passwords only",
    ],
    correctIndex: 0,
    explanation:
      "MitM phishing defeats some MFA; FIDO2 binds credentials to origin and resists proxy replay better than OTP alone.",
  },
  {
    id: "sy-p2-08",
    exam: "security-plus",
    domainId: "architecture",
    objectiveRef: "SY0-701 3.10",
    stem: "A cloud admin binds an overly permissive IAM policy: s3:* on * for a CI role. An attacker steals OIDC token for that role. What design principle was violated?",
    options: ["Separation of duties for printers", "Least privilege / scope minimization for cloud identities", "RAID parity planning", "Color calibration"],
    correctIndex: 1,
    explanation:
      "Broad IAM permissions amplify blast radius of token or key compromise.",
  },
  {
    id: "sy-p2-09",
    exam: "security-plus",
    domainId: "architecture",
    objectiveRef: "SY0-701 3.12",
    stem: "A Kubernetes cluster exposes the API server to 0.0.0.0/0 with certificate auth only. Attackers scan and attempt client cert brute force. Hardening priority:",
    options: [
      "Allowlist source IPs/VPN, enable strong authn/authz, audit RBAC, and disable anonymous access",
      "Open 10250 to the internet for convenience",
      "Share kubeconfig in Slack",
      "Use default service account cluster-admin for all pods",
    ],
    correctIndex: 0,
    explanation:
      "Control plane exposure must be tightly network-restricted with least-privilege RBAC.",
  },
  {
    id: "sy-p2-10",
    exam: "security-plus",
    domainId: "architecture",
    objectiveRef: "SY0-701 3.14",
    stem: "An org implements SCIM provisioning from IdP to SaaS. Deprovisioning fails silently for 30 days. What risk increases most?",
    options: [
      "Orphaned authorized accounts (confidentiality/integrity) for departed users",
      "Faster DHCP leases",
      "GPU coil whine",
      "CRT convergence",
    ],
    correctIndex: 0,
    explanation:
      "Lifecycle management failures leave active identities—classic access creep risk.",
  },
  {
    id: "sy-p2-11",
    exam: "security-plus",
    domainId: "architecture",
    objectiveRef: "SY0-701 3.16",
    stem: "A WAF rule blocks SQLi patterns but developers concatenate user input into OS commands on the app server. What gap exists?",
    options: [
      "WAF does not fix command injection class vulnerabilities in application code",
      "WAF replaces need for patching",
      "OS commands cannot be exploited on Linux",
      "Input validation is illegal",
    ],
    correctIndex: 0,
    explanation:
      "Different vulnerability classes need different controls; WAFs are not a substitute for secure coding.",
  },
  {
    id: "sy-p2-12",
    exam: "security-plus",
    domainId: "operations",
    objectiveRef: "SY0-701 4.8",
    stem: "A ransomware note appears at 08:05. Backups last night completed. Immutable object storage shows backup objects deleted at 07:50. What tactic is indicated?",
    options: [
      "Backup destruction / anti-recovery prior to encryption event",
      "Legitimate GDPR erasure",
      "DHCP renewal",
      "RAID scrub",
    ],
    correctIndex: 0,
    explanation:
      "Modern ransomware targets backups; immutability and separate accounts mitigate.",
  },
  {
    id: "sy-p2-13",
    exam: "security-plus",
    domainId: "operations",
    objectiveRef: "SY0-701 4.10",
    stem: "Purple team runs an Atomic Red Team test for T1003 OS credential dumping. Defenders see no alerts. Best conclusion:",
    options: [
      "Detection coverage gap—tune EDR/SIEM use cases and validate sensor health",
      "Atomic tests cannot be detected",
      "MITRE is not real",
      "Disable logging to reduce noise",
    ],
    correctIndex: 0,
    explanation:
      "Assumed-breach testing validates detective controls; silence indicates missing telemetry or rules.",
  },
  {
    id: "sy-p2-14",
    exam: "security-plus",
    domainId: "operations",
    objectiveRef: "SY0-701 4.12",
    stem: "During triage, an analyst pivots from an alert to a full disk image without a written chain of custody. Legal later questions admissibility. What practice failed?",
    options: [
      "Evidence handling documentation for forensic artifacts",
      "Using TLS 1.3",
      "Using VLANs",
      "Using RAID",
    ],
    correctIndex: 0,
    explanation:
      "Forensic integrity includes documented custody and validated imaging procedures.",
  },
  {
    id: "sy-p2-15",
    exam: "security-plus",
    domainId: "governance",
    objectiveRef: "SY0-701 5.4",
    stem: "A EU retailer processes card payments and stores PAN against PCI DSS. They store CVV in a notes field “for refunds.” What violation is most direct?",
    options: [
      "PCI DSS forbids storage of sensitive authentication data such as full magnetic stripe/CVV after authorization",
      "GDPR requires CVV storage",
      "CVV improves integrity hashing",
      "NIST SP 800-53 bans refunds",
    ],
    correctIndex: 0,
    explanation:
      "PCI explicitly restricts storage of sensitive authentication data including CVV.",
  },
];
