import type { Question } from "@/types/quiz";

/** A+ bank part 1 of 3 — scenario-heavy items (220-1201/1202 style). */
export const A_PLUS_PART1: Question[] = [
  {
    id: "ap-p1-01",
    exam: "a-plus",
    domainId: "hardware",
    objectiveRef: "220-1201 1.2",
    stem: "A help desk receives a ticket: a user moved a tower PC across the office. Now it powers on (fans spin) but there is no POST and no video. You open the case and notice the 24-pin ATX connector is partially unseated. What should you do first?",
    options: [
      "Replace the CMOS battery before re-testing",
      "Fully reseat the 24-pin motherboard power connector and power-cycle",
      "Flash the BIOS to the latest version immediately",
      "Install a discrete GPU because integrated graphics failed",
    ],
    correctIndex: 1,
    explanation:
      "After physical moves, reseat primary power and data cables before assuming component failure; partial ATX seating can prevent POST.",
  },
  {
    id: "ap-p1-02",
    exam: "a-plus",
    domainId: "hardware",
    objectiveRef: "220-1201 1.4",
    stem: "A technician is validating a new DDR5 kit on a board that lists “DDR5-5200 (OC)” in QVL. The system trains at JEDEC default (4800) but fails when XMP/EXPO is enabled. The most likely cause is:",
    options: [
      "The RAM is counterfeit if it trains at any speed",
      "Memory controller / board limits—disable EXPO or use a validated speed profile",
      "DDR5 cannot run below 5200 MHz on any platform",
      "You must populate all four slots before any speed above 4800 works",
    ],
    correctIndex: 1,
    explanation:
      "EXPO/XMP are overclock profiles; instability usually means margin or IMC limits—validate with JEDEC or a supported profile.",
  },
  {
    id: "ap-p1-03",
    exam: "a-plus",
    domainId: "hardware",
    objectiveRef: "220-1201 1.6",
    stem: "A small office server reports a predictive failure on one SATA HDD in RAID 5. The array is still online. Best practice before swapping the drive is to:",
    options: [
      "Delete the array and rebuild from backups without hot-swap",
      "Identify the failed member, hot-swap if supported, and let the controller rebuild",
      "Convert RAID 5 to RAID 0 for speed, then replace",
      "Shut down and erase all drives to clear SMART errors",
    ],
    correctIndex: 1,
    explanation:
      "Replace the failing member and allow rebuild while preserving redundancy; verify backup health regardless.",
  },
  {
    id: "ap-p1-04",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A VoIP engineer says desk phones cannot register when plugged into a new VLAN. DHCP works for PCs on the same switch port profile, but phones never get an offer. You verify the voice VLAN ID on the switch. What is the most common missing piece for IP phones?",
    options: [
      "A helper address / DHCP scope for the voice VLAN or DHCP relay to the voice subnet",
      "Disabling STP on all uplinks",
      "Forcing half-duplex on phone ports",
      "Blocking UDP 67/68 on the firewall for “security”",
    ],
    correctIndex: 0,
    explanation:
      "Phones often need DHCP on their voice VLAN; without relay or a local scope, they cannot obtain addresses on that segment.",
  },
  {
    id: "ap-p1-05",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A remote worker’s laptop can browse HTTPS sites but corporate IMAP email fails on the hotel Wi-Fi. Other users on the same SSID report the same. Which port is most likely blocked by the hotspot captive portal or firewall policy?",
    options: ["TCP 22", "TCP 25", "TCP 143 or 993", "UDP 161"],
    correctIndex: 2,
    explanation:
      "IMAP uses TCP 143 (STARTTLS) or 993 (IMAPS); hotel networks often allow 443 while blocking legacy mail ports.",
  },
  {
    id: "ap-p1-06",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "You are troubleshooting a Linux kiosk that must reach an internal API at https://api.corp.local:8443. curl shows “Connection refused” while ping succeeds. This most strongly suggests:",
    options: [
      "DNS failure because ping works",
      "Nothing is listening on 8443 on the target host or a firewall is dropping that port",
      "ICMP is disabled so HTTPS must also be down",
      "The kiosk needs a /24 mask change",
    ],
    correctIndex: 1,
    explanation:
      "Ping only proves reachability; refused/dropped to a TCP port indicates service or ACL/firewall behavior on that port.",
  },
  {
    id: "ap-p1-07",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A printer vendor’s setup guide says the device listens on TCP 9100 for raw printing. Your security lead asks which protocol family that typically maps to in documentation. The best answer is:",
    options: ["SMB/CIFS file sharing", "JetDirect / raw socket printing", "LDAP directory queries", "SNMP traps only"],
    correctIndex: 1,
    explanation:
      "TCP 9100 is commonly used for raw printing (JetDirect-style) on networked printers.",
  },
  {
    id: "ap-p1-08",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A technician configures a SOHO router with port forwarding: external TCP 3389 → internal host 192.168.1.50:3389 for remote support. The CISO rejects the design. What is the primary risk being flagged?",
    options: [
      "RDP brute-force exposure on a well-known port directly to an internal workstation",
      "NAT cannot forward to private addresses",
      "RDP requires UDP 3389 only",
      "Port forwarding only works for HTTP",
    ],
    correctIndex: 0,
    explanation:
      "Exposing RDP (TCP 3389) to the Internet invites credential attacks; VPN or gateway with MFA is preferred.",
  },
  {
    id: "ap-p1-09",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A DNS change for www.example.com was published with TTL 300. A user still resolves the old IP after 10 minutes only on one laptop, while others are correct. What should you check first on that laptop?",
    options: [
      "The authoritative zone’s SOA serial only",
      "Local hosts file entries or a stale DNS client cache / third-party resolver cache",
      "Whether the cable is Cat6A",
      "The monitor refresh rate",
    ],
    correctIndex: 1,
    explanation:
      "Per-device hosts overrides and cached records commonly cause isolated resolution drift after a change.",
  },
  {
    id: "ap-p1-10",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A Windows admin runs netstat -ano and sees LISTENING on 0.0.0.0:445 with PID 4. What service is most likely bound?",
    options: ["OpenSSH Server", "Windows NT kernel / system SMB stack", "Google Chrome", "Windows Time (W32Time)"],
    correctIndex: 1,
    explanation:
      "PID 4 is System; TCP 445 is commonly associated with SMB on Windows servers/workstations when file sharing is enabled.",
  },
  {
    id: "ap-p1-11",
    exam: "a-plus",
    domainId: "os",
    objectiveRef: "220-1202 1.3",
    stem: "On Windows 11, a user cannot save to C:\\Program Files\\App even though they are in the local Administrators group. UAC is at default. The most accurate explanation is:",
    options: [
      "Administrators run with a filtered token for standard apps; elevation is required for protected locations",
      "NTFS denies Administrators entirely on Program Files",
      "BitLocker blocks writes until recovery key is entered",
      "The account must be Domain Admin, not local admin",
    ],
    correctIndex: 0,
    explanation:
      "UAC split token behavior means even admins need elevation for protected directories unless the process is elevated.",
  },
  {
    id: "ap-p1-12",
    exam: "a-plus",
    domainId: "os",
    objectiveRef: "220-1202 2.2",
    stem: "A Linux server shows disk pressure on /. An admin runs df -h and sees a separate /var mount at 100% while / has space. Logrotate is configured but Apache access logs still grow hourly. What is the best next check?",
    options: [
      "Whether logrotate postrotate scripts are failing or Apache is holding deleted file descriptors open",
      "Reformat / as btrfs immediately",
      "Disable systemd-journald",
      "Move /boot to /var",
    ],
    correctIndex: 0,
    explanation:
      "Processes keeping deleted log files open prevents space reclamation until restart or HUP/reopen signals.",
  },
  {
    id: "ap-p1-13",
    exam: "a-plus",
    domainId: "mobile",
    objectiveRef: "220-1201 4.2",
    stem: "A company deploys supervised iOS devices. Apps silently disappear after 24 hours. MDM shows the apps as “managed” but the license count is exceeded. What policy issue is most probable?",
    options: [
      "VPP/Apple Business Manager license assignment exceeded seats, causing revocation",
      "The devices are rooted",
      "APNs certificate expired (would usually remove all MDM control)",
      "iOS cannot install managed apps",
    ],
    correctIndex: 0,
    explanation:
      "Managed app licenses from Apple/VPP can revoke installs when seat counts are insufficient.",
  },
  {
    id: "ap-p1-14",
    exam: "a-plus",
    domainId: "virtualization",
    objectiveRef: "220-1201 3.4",
    stem: "A developer’s Type 2 hypervisor VM loses network after the host VPN client connects full-tunnel. Other host apps still reach the internet. What is the most likely virtualization cause?",
    options: [
      "The VM vNIC is bridged to the host adapter now routed through the VPN tunnel with conflicting subnets",
      "The VM needs a physical serial loopback",
      "Hypervisors cannot use NAT mode",
      "The host CPU lacks AVX-512",
    ],
    correctIndex: 0,
    explanation:
      "Bridged networking inherits host routing changes; NAT may behave differently depending on hypervisor and VPN split tunneling.",
  },
  {
    id: "ap-p1-15",
    exam: "a-plus",
    domainId: "troubleshooting",
    objectiveRef: "220-1202 4.2",
    stem: "Intermittent “cable not connected” on a docked laptop only when the user adjusts the desk height. Cable continuity tests fine when static. Best next step?",
    options: [
      "Replace the CPU paste",
      "Inspect for micro-bends / strain at the dock connector; swap cable or dock flex point",
      "Increase DHCP lease time",
      "Disable LLMNR globally",
    ],
    correctIndex: 1,
    explanation:
      "Movement-related link drops often indicate mechanical damage or marginal RJ45 latch engagement at a flex point.",
  },
  {
    id: "ap-p1-16",
    exam: "a-plus",
    domainId: "security_basic",
    objectiveRef: "220-1202 2.8",
    stem: "A clinic workstation stores patient PDFs on disk. Policy requires that stolen drives do not readable data. Which control best maps to the confidentiality leg of CIA for data at rest?",
    options: [
      "Full-disk encryption with TPM-backed keys",
      "RAID 1 mirroring",
      "Weekly defragmentation",
      "Increasing screen timeout to 60 minutes",
    ],
    correctIndex: 0,
    explanation:
      "Encryption protects confidentiality if the device is lost; RAID addresses availability, not confidentiality of stolen media.",
  },
  {
    id: "ap-p1-17",
    exam: "a-plus",
    domainId: "security_basic",
    objectiveRef: "220-1202 2.8",
    stem: "A file server hosts read-only ISO images for installers. Integrity of those ISOs against tampering is the priority; performance is not. Which approach fits integrity best?",
    options: [
      "Publish SHA-256 hashes on a separate authenticated channel for verification",
      "Store ISOs on FAT32 without permissions",
      "Disable logging to improve throughput",
      "Use symmetric AES without any checksum",
    ],
    correctIndex: 0,
    explanation:
      "Cryptographic hashes let clients verify integrity independent of transport confidentiality.",
  },
  {
    id: "ap-p1-18",
    exam: "a-plus",
    domainId: "security_basic",
    objectiveRef: "220-1202 2.8",
    stem: "A user receives an email claiming a shared document needs login. The link uses HTTPS and a look-alike domain. This attack primarily targets:",
    options: ["Availability of DNS root servers", "Human trust (confidentiality of credentials)", "RAID parity speed", "CPU TDP limits"],
    correctIndex: 1,
    explanation:
      "Phishing aims to steal secrets or install malware by deceiving users—confidentiality and integrity of accounts.",
  },
  {
    id: "ap-p1-19",
    exam: "a-plus",
    domainId: "security_basic",
    objectiveRef: "220-1202 2.8",
    stem: "A kiosk must boot only signed OS components. Which UEFI feature directly supports that requirement?",
    options: ["Fast Boot only", "Secure Boot", "CSM legacy mode enabled", "Thunderbolt security “None”"],
    correctIndex: 1,
    explanation:
      "Secure Boot validates bootloader and OS loader signatures in the boot chain.",
  },
  {
    id: "ap-p1-20",
    exam: "a-plus",
    domainId: "remote_ops",
    objectiveRef: "220-1202 5.3",
    stem: "During a change window, a tech applies a driver update remotely. The host bluescreens on reboot. The runbook requires rollback. What documentation item should have existed before the change?",
    options: [
      "A tested rollback plan and checkpoint/backup or vendor recovery steps",
      "Only the technician’s verbal promise",
      "Deleting all restore points for space",
      "Disabling Windows Recovery Environment “to save time”",
    ],
    correctIndex: 0,
    explanation:
      "Change management expects back-out steps and verified recovery paths before production modifications.",
  },
];
