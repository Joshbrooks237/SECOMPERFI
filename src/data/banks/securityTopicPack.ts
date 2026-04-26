import type { Question } from "@/types/quiz";

/**
 * 20 scenario items: ports in security context, symmetric/asymmetric, PKI, hashing, CIA (SY0-701 style).
 */
export const SECURITY_TOPIC_PACK: Question[] = [
  {
    id: "sy-tp-01",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.2",
    stem: "A SOC analyst sees beaconing to a C2 on TCP 443 with JA3 matching a known framework but the SNI is a newly registered domain. Firewall allows outbound 443 broadly. Best immediate containment option:",
    options: [
      "Block outbound TCP 443 globally without review",
      "Use threat intel + selective egress filtering/proxy inspection for unknown domains while coordinating business impact",
      "Disable TLS company-wide",
      "Open UDP 69 for diagnostics",
    ],
    correctIndex: 1,
    explanation:
      "Malware hides in permitted ports; combine intel, SSL inspection policy (where legal), and host isolation rather than blind 443 blocks.",
  },
  {
    id: "sy-tp-02",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.4",
    stem: "An architect must protect bulk database backups at rest in object storage. Keys must rotate yearly without re-encrypting all historical objects immediately. Preferred pattern:",
    options: [
      "Store one AES key in git",
      "KMS envelope encryption: per-object data keys wrapped by a KMS key supporting rotation/re-wrap strategies",
      "XOR with a fixed string",
      "MD5 the backup for confidentiality",
    ],
    correctIndex: 1,
    explanation:
      "Envelope encryption separates DEKs from master keys and supports rotation workflows.",
  },
  {
    id: "sy-tp-03",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.6",
    stem: "A pen tester captures a TLS session and later steals the server’s long-term RSA private key. Which property is *not* protected for past sessions if no PFS was negotiated?",
    options: [
      "Confidentiality of past ciphertext if only RSA key transport was used without ephemeral DH",
      "Integrity of TCP checksums",
      "Availability of ICMP",
      "Color depth of screenshots",
    ],
    correctIndex: 0,
    explanation:
      "Without forward secrecy (ephemeral DH), compromise of long-term keys may enable decrypting recorded traffic in some configurations.",
  },
  {
    id: "sy-tp-04",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.8",
    stem: "A company publishes software updates with Ed25519 signatures. Users verify with a public key embedded in the installer. What is primarily assured if verification passes?",
    options: [
      "Confidentiality of the binary to everyone",
      "Integrity and authenticity of the update under the signer’s key",
      "Availability of the vendor website",
      "PCI DSS compliance automatically",
    ],
    correctIndex: 1,
    explanation:
      "Signatures prove the artifact matches the publisher and wasn’t tampered with.",
  },
  {
    id: "sy-tp-05",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.1",
    stem: "A DDoS attack saturates uplink bandwidth. Customer-facing HTTPS stays “up” but times out. Which CIA pillar is chiefly impacted for customers?",
    options: ["Confidentiality of TLS keys", "Availability", "Integrity of BIOS", "Non-repudiation of DHCP"],
    correctIndex: 1,
    explanation:
      "Volumetric attacks primarily deny availability even if cryptography still functions.",
  },
  {
    id: "sy-tp-06",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.3",
    stem: "Which pair best contrasts symmetric vs asymmetric cryptography for bulk data protection?",
    options: [
      "AES for bulk encryption speed; RSA/ECC often for key exchange/signatures—not typically for multi-GB bulk encryption alone",
      "RSA encrypts faster than AES for 100GB files always",
      "Symmetric crypto cannot use keys",
      "Asymmetric crypto never uses public keys",
    ],
    correctIndex: 0,
    explanation:
      "Hybrid cryptosystems use asymmetric for key establishment/signing and symmetric for bulk.",
  },
  {
    id: "sy-tp-07",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.5",
    stem: "A security team stores HMAC-SHA256 of audit logs in a WORM device with a secret known only to two SOC leads. What is the primary assurance if an insider tampers logs on the primary SIEM?",
    options: [
      "Confidentiality of logs to all analysts",
      "Tamper detection (integrity) when recomputed HMACs disagree—assuming key compromise is controlled",
      "Perfect forward secrecy for TLS",
      "Automatic malware removal",
    ],
    correctIndex: 1,
    explanation:
      "HMAC provides integrity/authentication for log streams when keys are tightly controlled.",
  },
  {
    id: "sy-tp-08",
    exam: "security-plus",
    domainId: "concepts",
    objectiveRef: "SY0-701 1.7",
    stem: "An attacker replaces a public binary mirror but cannot forge the vendor’s detached GPG signature. Users who verify signatures will detect a failure in:",
    options: ["Availability", "Integrity/authenticity of the artifact", "DHCP scope", "UPS self-test"],
    correctIndex: 1,
    explanation:
      "Detached signatures validate file integrity and publisher authenticity under web-of-trust/PKI rules.",
  },
  {
    id: "sy-tp-09",
    exam: "security-plus",
    domainId: "architecture",
    objectiveRef: "SY0-701 3.2",
    stem: "A private PKI issues TLS server certificates. A browser shows ERR_CERT_AUTHORITY_INVALID. Most direct technical cause:",
    options: [
      "The server is using AES-256-GCM",
      "The client does not trust the issuing CA certificate chain presented by the server",
      "TLS 1.3 is disabled",
      "The certificate is guaranteed expired",
    ],
    correctIndex: 1,
    explanation:
      "Trust anchor mismatch is the classic cause for unknown/enterprise CA chains without proper distribution.",
  },
  {
    id: "sy-tp-10",
    exam: "security-plus",
    domainId: "architecture",
    objectiveRef: "SY0-701 3.4",
    stem: "A security engineer configures OCSP stapling on a web server. What user-visible benefit is primarily targeted?",
    options: [
      "Faster revocation status delivery with privacy/perf improvements vs client-driven OCSP lookups",
      "Eliminates need for TLS certificates",
      "Encrypts DNS queries",
      "Blocks UDP 161",
    ],
    correctIndex: 0,
    explanation:
      "Stapling attaches signed OCSP responses to TLS handshakes, reducing latency and OCSP privacy leaks.",
  },
  {
    id: "sy-tp-11",
    exam: "security-plus",
    domainId: "architecture",
    objectiveRef: "SY0-701 3.6",
    stem: "A CSR is submitted to a public CA. What must never be sent to the CA for a TLS server cert request?",
    options: [
      "The public key / subject details in the CSR",
      "The corresponding private key material",
      "SAN entries for hostnames",
      "Key usage extensions requested",
    ],
    correctIndex: 1,
    explanation:
      "Private keys must remain on the key owner; CSRs contain public keys and attributes only.",
  },
  {
    id: "sy-tp-12",
    exam: "security-plus",
    domainId: "architecture",
    objectiveRef: "SY0-701 3.8",
    stem: "A company rotates TLS certificates every 45 days via ACME. An attacker steals an old private key after rotation. With modern TLS 1.3 + ECDHE key exchange configured correctly, what is most true about past sessions?",
    options: [
      "All past sessions can always be decrypted with the stolen old cert key",
      "Ephemeral session keys limit decryptability of past recordings versus long-term key compromise scenarios (PFS intent)",
      "TLS 1.3 forbids ephemeral keys",
      "Rotation is irrelevant",
    ],
    correctIndex: 1,
    explanation:
      "Forward secrecy depends on cipher suites and key exchange; ephemeral DH reduces impact of long-term key theft on recorded traffic.",
  },
  {
    id: "sy-tp-13",
    exam: "security-plus",
    domainId: "architecture",
    objectiveRef: "SY0-701 3.10",
    stem: "An internal API uses mutual TLS. Clients present client certs signed by the org’s private CA. What threat is primarily reduced versus bearer tokens alone?",
    options: [
      "Stolen static API tokens replayed from anywhere without possession of client private key material",
      "All phishing",
      "SQL injection",
      "ARP storms",
    ],
    correctIndex: 0,
    explanation:
      "mTLS binds identity to cryptographic possession, improving authentication strength for service clients.",
  },
  {
    id: "sy-tp-14",
    exam: "security-plus",
    domainId: "architecture",
    objectiveRef: "SY0-701 3.12",
    stem: "A CRL is huge and clients time out fetching it during TLS handshake. Best operational mitigation:",
    options: [
      "Disable revocation checking entirely everywhere",
      "Prefer OCSP with stapling and/or shorter-lived certs; partition CRLDP/CDP infrastructure",
      "Publish CRL over TFTP only",
      "Use self-signed roots without CRL/OCSP",
    ],
    correctIndex: 1,
    explanation:
      "Modern PKI operations favor OCSP stapling and shorter lifetimes to reduce CRL fetch pain.",
  },
  {
    id: "sy-tp-15",
    exam: "security-plus",
    domainId: "threats",
    objectiveRef: "SY0-701 2.2",
    stem: "Attackers scan the internet for exposed Elasticsearch on TCP 9200 without auth and exfiltrate indices. Which failure classes apply (choose best combo)?",
    options: [
      "Only physical security",
      "Insecure service exposure + missing authentication/authorization + poor network segmentation",
      "TLS 1.3 misconfiguration only",
      "Incorrect monitor Hz",
    ],
    correctIndex: 1,
    explanation:
      "Exposed databases with weak controls are classic confidentiality/integrity incidents.",
  },
  {
    id: "sy-tp-16",
    exam: "security-plus",
    domainId: "threats",
    objectiveRef: "SY0-701 2.4",
    stem: "A malware sample opens outbound TCP 4444 to a VPS. IDS has no signature yet. A behavior rule flags “non-browser process initiating repeated TLS to rare IP on 4444.” This detection leans on:",
    options: [
      "BGP communities",
      "Anomaly/behavioral analytics on destination reputation and process context",
      "CRT degaussing",
      "RAID stripe size",
    ],
    correctIndex: 1,
    explanation:
      "Unknown C2 ports and unusual process traffic are common behavioral indicators beyond static AV.",
  },
  {
    id: "sy-tp-17",
    exam: "security-plus",
    domainId: "operations",
    objectiveRef: "SY0-701 4.2",
    stem: "During IR, analysts must prove a memory image’s integrity. They compute SHA-256 before analysis and store hashes in a write-once system. This supports:",
    options: [
      "Confidentiality of RAM contents to analysts",
      "Evidence integrity for chain-of-custody workflows",
      "Availability of attacker C2",
      "Automatic eradication",
    ],
    correctIndex: 1,
    explanation:
      "Hashing artifacts supports integrity verification alongside documented custody.",
  },
  {
    id: "sy-tp-18",
    exam: "security-plus",
    domainId: "operations",
    objectiveRef: "SY0-701 4.4",
    stem: "A firewall change ticket opens inbound TCP 22 to a jump host from 0.0.0.0/0 for “temporary access.” SOC objects. The strongest security objection is:",
    options: [
      "SSH cannot use port 22",
      "Internet-wide exposure of management plane increases brute force and exploitation blast radius",
      "Jump hosts should never exist",
      "Inbound 22 is safer than outbound 22",
    ],
    correctIndex: 1,
    explanation:
      "Management interfaces should be restricted by source IP/VPN and hardened with MFA and session recording.",
  },
  {
    id: "sy-tp-19",
    exam: "security-plus",
    domainId: "governance",
    objectiveRef: "SY0-701 5.2",
    stem: "A HIPAA-covered entity moves PHI backups to a cloud vendor without a BAA. Which governance failure is most direct?",
    options: [
      "Using AES-256",
      "Missing required business associate agreement / vendor due diligence for PHI processors",
      "Using TLS 1.3",
      "Using RAID 6",
    ],
    correctIndex: 1,
    explanation:
      "HIPAA requires appropriate contracts and safeguards with business associates handling PHI.",
  },
  {
    id: "sy-tp-20",
    exam: "security-plus",
    domainId: "governance",
    objectiveRef: "SY0-701 5.4",
    stem: "PCI DSS scope includes systems that store, process, or transmit cardholder data. A web server only stores salted password hashes for shoppers but also stores PAN in a separate table. Which statement is accurate?",
    options: [
      "PAN storage brings the system into PCI scope even if passwords are handled separately",
      "Password hashes imply PAN automatically",
      "PCI never applies to web servers",
      "Hashes of PAN are always out of scope",
    ],
    correctIndex: 0,
    explanation:
      "PAN presence drives PCI scope for those systems and connected security dependencies.",
  },
];
