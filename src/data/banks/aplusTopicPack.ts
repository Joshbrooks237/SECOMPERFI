import type { Question } from "@/types/quiz";

/**
 * 20 scenario items: TCP/UDP ports, crypto awareness, CIA triad on the job (A+ scope).
 * Pairs with core parts for a 60-item A+ bank.
 */
export const A_PLUS_TOPIC_PACK: Question[] = [
  {
    id: "ap-tp-01",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A help desk remotes into a user PC to test a vendor app. The vendor doc says “open outbound TCP 9443 to license.vendor.com.” Corporate firewall is default-deny outbound. What must happen before the app can activate?",
    options: [
      "Open inbound UDP 9443 on the workstation",
      "Security approves an explicit outbound allow rule (or proxy exception) for TCP 9443 to the defined destination",
      "Disable Windows Defender Firewall entirely",
      "Map 9443 to 443 in hosts file without firewall change",
    ],
    correctIndex: 1,
    explanation:
      "Outbound TCP services need firewall/proxy permits; host file does not bypass network egress controls.",
  },
  {
    id: "ap-tp-02",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A Linux admin runs `ss -ltnp | grep :53` and sees `127.0.0.53:53` with `systemd-resolve`. A desktop app says “cannot reach DNS.” What does this usually indicate about local resolver design?",
    options: [
      "Port 53 is always blocked on Ubuntu",
      "Stub resolver listens locally and forwards; failures may be upstream resolver or split-DNS config—not random port reassignment",
      "BIND must be installed on every laptop",
      "TCP 53 is used exclusively for zone transfers on clients",
    ],
    correctIndex: 1,
    explanation:
      "Many distros use a local stub (127.0.0.53) that forwards; troubleshoot upstream DNS and split horizons.",
  },
  {
    id: "ap-tp-03",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A legacy app insists on TFTP for PXE boot firmware updates across subnets. Your security team blocks UDP 69 at routed boundaries. What is the correct technical statement?",
    options: [
      "TFTP rides UDP/69; crossing subnets needs TFTP helper/relay or redesign to a safer transfer mechanism",
      "TFTP uses TCP 69 exclusively",
      "PXE cannot use DHCP options",
      "UDP cannot traverse VLANs ever",
    ],
    correctIndex: 0,
    explanation:
      "TFTP is UDP-based; routed environments need relays or alternatives (HTTPs, managed tooling).",
  },
  {
    id: "ap-tp-04",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "SNMP monitoring polls network printers on UDP 161. After “hardening,” polls fail but ping works. Most likely change that broke polling:",
    options: [
      "SNMP community strings or ACLs now block UDP 161/162 to/from the poller",
      "ICMP echo requires UDP 161",
      "Printers moved to fiber-only without IP",
      "HTTPS 443 blocked on printers",
    ],
    correctIndex: 0,
    explanation:
      "SNMP uses UDP 161 (agent) and traps often 162; blocking breaks polling while ICMP may still pass.",
  },
  {
    id: "ap-tp-05",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A user’s FTP client fails in passive mode behind NAT. Control channel on TCP 21 works, but data channel setup fails. Classic fix in passive FTP involves:",
    options: [
      "Opening/forwarding the ephemeral passive port range and ensuring the client receives the correct external IP in PASV responses",
      "Switching FTP to ICMP",
      "Disabling TLS on port 21 only",
      "Mapping Telnet 23 to FTP data",
    ],
    correctIndex: 0,
    explanation:
      "Passive FTP requires the server-advertised data ports to be reachable through NAT/firewall and correct external IP substitution.",
  },
  {
    id: "ap-tp-06",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A security scan flags “LDAP cleartext on TCP 389 from an app server to DC.” The app supports LDAPS. What change best protects confidentiality of directory binds in transit?",
    options: [
      "Keep 389 but rename the service account monthly",
      "Use LDAPS (TCP 636) or StartTLS on 389 with certificate validation and proper account permissions",
      "Disable logging on the DC",
      "Use UDP 389 instead",
    ],
    correctIndex: 1,
    explanation:
      "LDAP over TLS (636 or StartTLS) protects credentials and attributes on the wire.",
  },
  {
    id: "ap-tp-07",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A kiosk must reach a time source on the internet while blocking all other outbound traffic. Which destination port pair is most relevant for classic NTP?",
    options: ["TCP 123 only", "UDP 123 (and return stateful traffic)", "TCP 161", "UDP 514"],
    correctIndex: 1,
    explanation: "NTP traditionally uses UDP 123; stateful firewalls allow return traffic from permitted outbound queries.",
  },
  {
    id: "ap-tp-08",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A developer’s machine cannot clone from `git@github.com:org/repo.git` on corporate Wi-Fi. Browser GitHub works. Other VLANs succeed. Most probable block:",
    options: [
      "Outbound TCP 22 (SSH) denied on that SSID/VLAN while 443 is allowed",
      "Git requires SMB 445",
      "DNS over HTTPS broke git",
      "Git uses UDP 22",
    ],
    correctIndex: 0,
    explanation:
      "Git SSH transport uses TCP 22; restrictive guest-style networks often block non-web ports.",
  },
  {
    id: "ap-tp-09",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A Windows admin enables WinRM for remote management. Host firewalls must allow which listener by default for standard HTTP-based WinRM (not HTTPS transport)?",
    options: ["TCP 135 only", "TCP 5985 (and often 5986 for HTTPS listener when configured)", "UDP 500", "TCP 1723"],
    correctIndex: 1,
    explanation:
      "WinRM commonly listens on 5985 (HTTP) and 5986 (HTTPS) depending on configuration.",
  },
  {
    id: "ap-tp-10",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A print server uses IPP over HTTPS. Clients must reach `https://print.corp:631`. Corporate proxy intercept breaks certificate trust. What breaks first?",
    options: [
      "TCP 631 refusal because printers never use TLS",
      "TLS validation failures unless the client trusts the inspection CA or an exception path exists",
      "IPP requires NetBIOS",
      "Port 631 is exclusively for SNMP",
    ],
    correctIndex: 1,
    explanation:
      "IPP can run over HTTPS on 631; TLS interception must be trusted by clients or exempted.",
  },
  {
    id: "ap-tp-11",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A remote support tool uses QUIC/HTTP3 to a vendor cloud. A firewall rule allows “TCP 443 outbound” only. Sessions fail. Next step:",
    options: [
      "Allow UDP 443 (QUIC) or force HTTP/2 over TCP 443 per vendor guidance",
      "Open inbound TCP 3389",
      "Disable IPv6 only",
      "Map QUIC to Telnet",
    ],
    correctIndex: 0,
    explanation:
      "HTTP/3 uses QUIC over UDP 443; TCP-only 443 rules block it.",
  },
  {
    id: "ap-tp-12",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A legacy line-of-business app listens on TCP 8080 internally. Reverse proxy terminates TLS on 443 and forwards to 8080. External users only need:",
    options: [
      "Inbound 8080 opened to the internet on the app host",
      "Inbound 443 to the proxy; 8080 stays internal to the DMZ/private network",
      "Inbound 9100 for printing",
      "Inbound 161 for traps",
    ],
    correctIndex: 1,
    explanation:
      "Expose only the edge TLS port; keep application ports internal behind the proxy/WAF.",
  },
  {
    id: "ap-tp-13",
    exam: "a-plus",
    domainId: "security_basic",
    objectiveRef: "220-1202 2.8",
    stem: "A technician explains why storing credit card PANs encrypted with AES but keeping the AES key in the same database table is weak. Which principle is violated?",
    options: [
      "Key management separation—confidentiality fails if ciphertext and key are co-located for an attacker",
      "Availability of RAID",
      "Integrity of DHCP",
      "Non-repudiation of SMTP",
    ],
    correctIndex: 0,
    explanation:
      "Protect keys in HSM/KMS/vault separate from data at rest encryption targets.",
  },
  {
    id: "ap-tp-14",
    exam: "a-plus",
    domainId: "security_basic",
    objectiveRef: "220-1202 2.8",
    stem: "A file publisher distributes SHA-256 hashes on HTTPS site A while binaries are on CDN B. Which CIA goal is primarily served if users verify hashes before install?",
    options: ["Confidentiality of CDN TLS keys", "Integrity of the downloaded artifact vs tampering", "Availability of site A DNS only", "Accounting of printer pages"],
    correctIndex: 1,
    explanation:
      "Comparing cryptographic hashes verifies the file wasn’t altered in transit or on the mirror.",
  },
  {
    id: "ap-tp-15",
    exam: "a-plus",
    domainId: "security_basic",
    objectiveRef: "220-1202 2.8",
    stem: "A user asks the difference between “signing” and “encrypting” an email with S/MIME when sending to one recipient. Best concise answer:",
    options: [
      "Signing uses sender private key for integrity/authentication; encryption uses recipient public key for confidentiality",
      "They are identical operations",
      "Signing encrypts and encryption signs automatically",
      "S/MIME cannot provide integrity",
    ],
    correctIndex: 0,
    explanation:
      "Asymmetric signing vs encryption roles differ; both may be used together in secure messaging.",
  },
  {
    id: "ap-tp-16",
    exam: "a-plus",
    domainId: "security_basic",
    objectiveRef: "220-1202 2.8",
    stem: "A help desk enables BitLocker on laptops. A manager asks which CIA pillar is most directly improved if a stolen laptop’s SSD is encrypted with TPM protection.",
    options: [
      "Availability of BitLocker recovery keys in AD",
      "Confidentiality of data at rest against offline reading",
      "Integrity of DHCP leases",
      "Non-repudiation of Wi-Fi associations",
    ],
    correctIndex: 1,
    explanation:
      "FDE protects confidentiality when physical media is lost.",
  },
  {
    id: "ap-tp-17",
    exam: "a-plus",
    domainId: "security_basic",
    objectiveRef: "220-1202 2.8",
    stem: "A web developer uses client-side JavaScript to “encrypt passwords” with AES before POSTing to the server over HTTP. What is fundamentally wrong?",
    options: [
      "HTTP exposes the page script and traffic to interception; keys in JS are not secret—use HTTPS and server-side password hashing",
      "AES cannot run in browsers",
      "HTTP always encrypts payloads",
      "Client-side AES replaces TLS",
    ],
    correctIndex: 0,
    explanation:
      "Transport security and proper server-side credential handling are required; client-side crypto alone is not a fix.",
  },
  {
    id: "ap-tp-18",
    exam: "a-plus",
    domainId: "security_basic",
    objectiveRef: "220-1202 2.8",
    stem: "A SOHO router advertises “WPA3-Personal transition mode.” A tech explains it exists primarily to:",
    options: [
      "Disable encryption for IoT",
      "Support WPA2-only clients while still offering WPA3 where supported",
      "Guarantee 10 Gbps Wi-Fi",
      "Remove need for passphrases",
    ],
    correctIndex: 1,
    explanation:
      "Transition mode interoperates legacy WPA2 clients with WPA3-capable ones on the same SSID.",
  },
  {
    id: "ap-tp-19",
    exam: "a-plus",
    domainId: "security_basic",
    objectiveRef: "220-1202 2.8",
    stem: "A ransomware attack encrypts files but backups restore service within RTO. Leadership asks which CIA aspect was most threatened during outage before restore.",
    options: [
      "Confidentiality of the ransom note",
      "Availability (and integrity of live data until restored)",
      "Integrity of BIOS clock",
      "Non-repudiation of printer logs",
    ],
    correctIndex: 1,
    explanation:
      "Ransomware primarily disrupts availability; integrity of original files may be lost without backups.",
  },
  {
    id: "ap-tp-20",
    exam: "a-plus",
    domainId: "security_basic",
    objectiveRef: "220-1202 2.8",
    stem: "A technician compares hashing (SHA-256) versus encryption (AES-256) for protecting a file on a USB drive against physical loss. Which statement is correct?",
    options: [
      "Hashing hides file contents; encryption does not",
      "Hashing proves integrity but does not conceal data; encryption provides confidentiality",
      "Both require the same key size",
      "SHA-256 is symmetric encryption",
    ],
    correctIndex: 1,
    explanation:
      "Hashes are one-way integrity tools; encryption provides confidentiality when keys are protected.",
  },
];
