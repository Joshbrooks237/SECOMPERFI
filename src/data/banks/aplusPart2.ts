import type { Question } from "@/types/quiz";

/** A+ bank part 2 of 3 */
export const A_PLUS_PART2: Question[] = [
  {
    id: "ap-p2-01",
    exam: "a-plus",
    domainId: "hardware",
    objectiveRef: "220-1201 2.2",
    stem: "A workstation GPU hits thermal limit and throttles during renders. GPU fans spin, case filters are clean, ambient is cool. GPU-Z shows hotspot >100°C quickly. The next most logical hardware focus is:",
    options: [
      "Replace SATA data cable",
      "Inspect cooler mount pressure / thermal paste / VRM cooling on the card",
      "Increase DHCP scope size",
      "Disable Secure Boot",
    ],
    correctIndex: 1,
    explanation:
      "Poor cooler contact or dried paste causes rapid hotspot throttling despite spinning fans.",
  },
  {
    id: "ap-p2-02",
    exam: "a-plus",
    domainId: "hardware",
    objectiveRef: "220-1201 2.6",
    stem: "A UPS passes self-test but runtime collapses under 2 minutes with 40% load. Battery age is 5 years. Best recommendation:",
    options: [
      "Replace UPS batteries per manufacturer lifecycle and retest calibrated runtime",
      "Increase output voltage manually",
      "Disable surge-only outlets",
      "RAID the batteries across two UPS units without replacement",
    ],
    correctIndex: 0,
    explanation:
      "Sealed lead-acid batteries degrade; low runtime under load is classic end-of-life behavior.",
  },
  {
    id: "ap-p2-03",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A branch office needs time sync to HQ without opening arbitrary inbound ports. Which approach aligns with typical secure NTP practice?",
    options: [
      "Allow inbound UDP 123 from any source to all desktops",
      "Use authenticated/stratum hierarchy with outbound NTP from clients to approved servers or local stratum-1 appliance",
      "Disable NTP and rely on BIOS clock drift",
      "Forward TCP 445 for time sync",
    ],
    correctIndex: 1,
    explanation:
      "Clients pull time outbound; exposing broad inbound NTP is unnecessary risk.",
  },
  {
    id: "ap-p2-04",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A Linux admin tests connectivity to a mail relay with `nc -vz smtp.corp 587`. Connection succeeds. What does this primarily confirm?",
    options: [
      "SMTP authentication succeeded",
      "TCP 587 is reachable to the host (path/firewall permitting); not auth",
      "SPF/DKIM alignment",
      "POP3 retrieval works",
    ],
    correctIndex: 1,
    explanation:
      "netcat verifies TCP reachability; SMTP AUTH is application-layer after the TCP session.",
  },
  {
    id: "ap-p2-05",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A web app team says “the load balancer health check is green but users get 502.” The LB checks TCP 80 only. The app listens on 8443 with TLS. What design flaw is most likely?",
    options: [
      "Health checks must validate the actual listener/port/protocol the LB forwards to",
      "TCP health checks always validate TLS certificate chain depth",
      "502 always means DNS failure",
      "Green checks imply application SQL success",
    ],
    correctIndex: 0,
    explanation:
      "Superficial TCP checks can pass while the real app port or HTTP semantics fail upstream.",
  },
  {
    id: "ap-p2-06",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A firewall rule allows “established,related” return traffic. A new outbound SSH session from a server to GitHub (TCP 22) fails. Inbound default deny is in place. Most likely missing rule element?",
    options: [
      "Allow outbound NEW tcp/22 from the server subnet before expecting return traffic classification",
      "Open inbound UDP 22",
      "Disable conntrack because it breaks SSH",
      "Allow ICMP type 0 only",
    ],
    correctIndex: 0,
    explanation:
      "Stateful firewalls still need explicit permit for the initial outbound SYN on the service port.",
  },
  {
    id: "ap-p2-07",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A help desk script asks users to flush DNS on Windows after an internal cutover. Which command is correct for modern Windows?",
    options: ["netsh interface ip delete arpcache", "ipconfig /flushdns", "route -f", "nbtstat -R"],
    correctIndex: 1,
    explanation: "ipconfig /flushdns clears the client DNS resolver cache on Windows.",
  },
  {
    id: "ap-p2-08",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A fiber link shows high errors after a rack move. Light levels are marginal. You suspect contaminated end faces. What is the proper remediation mindset?",
    options: [
      "Clean connectors with approved tools/method; inspect before re-mating",
      "Crimp harder on RJ-45 ends",
      "Apply isopropyl to copper RJ-45 pins only",
      "Increase transmit power on multimode without limits",
    ],
    correctIndex: 0,
    explanation:
      "Fiber performance is sensitive to dirt; follow vendor cleaning standards before replacing optics.",
  },
  {
    id: "ap-p2-09",
    exam: "a-plus",
    domainId: "os",
    objectiveRef: "220-1202 1.5",
    stem: "A macOS user cannot install a downloaded .pkg because Gatekeeper blocks an unidentified developer. Policy allows only App Store + identified devs. What is the least disruptive compliant path?",
    options: [
      "Disable SIP permanently",
      "Distribute via MDM/notarization or developer ID signing; adjust policy if business-approved",
      "Run chmod -R 777 on /Applications",
      "Format the APFS container",
    ],
    correctIndex: 1,
    explanation:
      "Gatekeeper enforces code signing; legitimate enterprise distribution uses signing/notarization or MDM.",
  },
  {
    id: "ap-p2-10",
    exam: "a-plus",
    domainId: "os",
    objectiveRef: "220-1202 2.4",
    stem: "Windows Update repeatedly fails with 0x800f0922 on multiple domain PCs behind a proxy. Microsoft docs correlate this with WinHTTP proxy vs IE proxy mismatch. What should you verify first?",
    options: [
      "netsh winhttp show proxy and align with required corporate proxy settings",
      "Delete all user profiles",
      "Disable TPM",
      "Convert disks to MBR",
    ],
    correctIndex: 0,
    explanation:
      "WinHTTP proxy settings affect CBS/Windows Update downloads independent of user IE settings.",
  },
  {
    id: "ap-p2-11",
    exam: "a-plus",
    domainId: "os",
    objectiveRef: "220-1202 3.1",
    stem: "A Linux service fails on boot with “permission denied” writing to /var/log/app.log owned by root:root mode 644. The unit runs as User=app. Best fix pattern:",
    options: [
      "chmod 777 /var/log",
      "Use log directory with correct ownership/ACL for app, or journald/syslog redirection",
      "Run the service as root always",
      "Disable SELinux without analysis",
    ],
    correctIndex: 1,
    explanation:
      "Least privilege services need writable log paths via permissions, ACLs, or logging subsystem.",
  },
  {
    id: "ap-p2-12",
    exam: "a-plus",
    domainId: "mobile",
    objectiveRef: "220-1201 4.4",
    stem: "Android Enterprise work profile devices show “compliance failed: encryption.” Storage is encrypted but a subset fails. Investigation finds OEM removed FDE on budget models. What policy lever applies?",
    options: [
      "Require encryption-capable hardware/OS builds in compliance rules",
      "Disable all updates",
      "Use personal Apple IDs on Android",
      "Disable lock screen PIN to pass compliance",
    ],
    correctIndex: 0,
    explanation:
      "MDM compliance can require device encryption features actually supported by the OEM build.",
  },
  {
    id: "ap-p2-13",
    exam: "a-plus",
    domainId: "virtualization",
    objectiveRef: "220-1201 3.6",
    stem: "A VM snapshot is used before a risky OS patch. After success, the admin forgets the snapshot for 3 months. Storage alerts spike. Why are long-lived snapshots risky?",
    options: [
      "They grow delta disks that can fill datastore and hurt performance",
      "They automatically delete the VM after 30 days",
      "They disable vMotion permanently",
      "They encrypt the guest without keys",
    ],
    correctIndex: 0,
    explanation:
      "Snapshot chains consume space and I/O overhead; commit or delete after validation.",
  },
  {
    id: "ap-p2-14",
    exam: "a-plus",
    domainId: "troubleshooting",
    objectiveRef: "220-1202 4.4",
    stem: "Users report “Wi-Fi connected, no internet” on one SSID only. DHCP works, captive portal is disabled, gateway ping fails. Other VLANs fine. You check the SVI on the L3 switch. What is a prime suspect?",
    options: [
      "Wrong default gateway or missing route on the client VLAN SVI / upstream path",
      "The SSID name is too long",
      "802.11ax requires WPA2-Enterprise always",
      "DNS TTL is 300 seconds",
    ],
    correctIndex: 0,
    explanation:
      "L3 misconfiguration on the VLAN interface or routing breaks internet for that subnet only.",
  },
  {
    id: "ap-p2-15",
    exam: "a-plus",
    domainId: "troubleshooting",
    objectiveRef: "220-1202 4.6",
    stem: "After a Windows patch Tuesday, a line-of-business app crashes on launch. Event Viewer shows a missing VC++ runtime DLL. Fastest mitigation while vendor ships fix:",
    options: [
      "Uninstall the cumulative update without testing rollback impact",
      "Install the required supported VC++ redistributable version side-by-side",
      "Disable Windows Defender only",
      "Delete WinSxS manually",
    ],
    correctIndex: 1,
    explanation:
      "Missing runtime dependencies are commonly resolved by installing the correct redistributable package.",
  },
  {
    id: "ap-p2-16",
    exam: "a-plus",
    domainId: "security_basic",
    objectiveRef: "220-1202 2.8",
    stem: "A help desk resets a domain password over the phone using “something you know” only. Which statement is most accurate regarding MFA alignment?",
    options: [
      "Knowledge-only resets do not satisfy possession factors; process risk remains",
      "Phone resets always count as MFA automatically",
      "MFA removes need for password complexity",
      "Kerberos forbids password resets",
    ],
    correctIndex: 0,
    explanation:
      "True MFA requires independent factors; voice-only verification is weak compared to app/push/hardware token.",
  },
  {
    id: "ap-p2-17",
    exam: "a-plus",
    domainId: "security_basic",
    objectiveRef: "220-1202 2.8",
    stem: "A file’s HMAC-SHA256 matches the published value. A nation-state replaces ciphertext in transit but cannot forge HMAC without the key. Which property is demonstrated for the file contents?",
    options: [
      "Confidentiality of the symmetric key only",
      "Integrity (and authenticity if key is secret to the publisher)",
      "Availability of the CDN",
      "Non-repudiation to third parties without PKI",
    ],
    correctIndex: 1,
    explanation:
      "HMAC verifies integrity/authenticity for parties sharing the MAC key; it is not encryption by itself.",
  },
  {
    id: "ap-p2-18",
    exam: "a-plus",
    domainId: "security_basic",
    objectiveRef: "220-1202 2.8",
    stem: "A SOHO user enables WPA3-Personal on a new AP but an old IoT camera fails to join. Most practical fix while maintaining security for other clients?",
    options: [
      "Downgrade entire network to open Wi-Fi",
      "Segment IoT on WPA2 transitional VLAN or replace incompatible device",
      "Disable AES on all SSIDs",
      "Use WEP for IoT only",
    ],
    correctIndex: 1,
    explanation:
      "Legacy clients may lack WPA3; isolate on separate SSID/VLAN with strongest mutually supported protocol.",
  },
  {
    id: "ap-p2-19",
    exam: "a-plus",
    domainId: "security_basic",
    objectiveRef: "220-1202 2.8",
    stem: "A ransomware note demands payment in 24 hours or keys are deleted. The org’s tested backups are immutable/offline. Which CIA aspect is primarily being attacked against operations?",
    options: [
      "Confidentiality of the ransom note text",
      "Availability of data/systems (and often integrity of files)",
      "Integrity of DHCP leases",
      "Accounting logs of printer usage",
    ],
    correctIndex: 1,
    explanation:
      "Ransomware typically impacts availability (and integrity of data) until recovery or payment.",
  },
  {
    id: "ap-p2-20",
    exam: "a-plus",
    domainId: "remote_ops",
    objectiveRef: "220-1202 5.4",
    stem: "A vendor SSHs into an appliance using shared root credentials stored in a spreadsheet. Audit flags it. Best long-term operational fix:",
    options: [
      "Rotate to per-user accounts with MFA, vault secrets, and session logging",
      "Post the password on the internal wiki for speed",
      "Disable SSH and use Telnet",
      "Use the same password but longer",
    ],
    correctIndex: 0,
    explanation:
      "Shared break-glass credentials are high risk; vaulting, individual accounts, and MFA reduce abuse.",
  },
];
