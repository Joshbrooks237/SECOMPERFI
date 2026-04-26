import type { Question } from "@/types/quiz";

/** A+ bank part 3 of 3 */
export const A_PLUS_PART3: Question[] = [
  {
    id: "ap-p3-01",
    exam: "a-plus",
    domainId: "hardware",
    objectiveRef: "220-1201 1.8",
    stem: "A tech installs a second NVMe drive. BIOS lists both, but Windows only shows one in Disk Management. The second is listed “offline” with a foreign signature. What is the safest first action before importing?",
    options: [
      "Import foreign disk immediately without reading labels",
      "Verify physical slot, BIOS NVMe routing, and that the disk is not from another RAID member; then bring online/import with care",
      "Run chkdsk /f on the offline disk",
      "Format the EFI partition",
    ],
    correctIndex: 1,
    explanation:
      "Foreign/offline dynamic disks or moved arrays need verification to avoid importing the wrong volume or breaking redundancy.",
  },
  {
    id: "ap-p3-02",
    exam: "a-plus",
    domainId: "hardware",
    objectiveRef: "220-1201 2.3",
    stem: "A workstation randomly powers off under GPU load. PSU is 450W bronze; GPU vendor recommends 650W. You measure 12V sag under load with a PSU tester. Best fix:",
    options: [
      "Install a PSU meeting headroom and quality recommendations for transient GPU loads",
      "Underclock the monitor refresh rate",
      "Disable page file",
      "Use a Molex-to-PCIe adapter only",
    ],
    correctIndex: 0,
    explanation:
      "Inadequate PSU capacity or poor transient response causes shutdowns under GPU spikes.",
  },
  {
    id: "ap-p3-03",
    exam: "a-plus",
    domainId: "hardware",
    objectiveRef: "220-1201 2.5",
    stem: "A user complains USB 3.0 thumb drive speed drops when a 2.4 GHz wireless mouse dongle is plugged adjacent on the front panel. Most likely cause:",
    options: [
      "USB 2.0/3.0 RF interference and shared front-panel wiring—try rear ports or extension away from USB3 signaling",
      "The mouse uses fiber channel",
      "NTFS cluster size mismatch",
      "GPU VRAM is too low",
    ],
    correctIndex: 0,
    explanation:
      "USB 3.x signaling can interfere with 2.4 GHz dongles; physical separation or USB2 ports mitigate.",
  },
  {
    id: "ap-p3-04",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A site-to-site VPN comes up, but neither side can reach internal web servers by hostname—only by IP. Both sides use AD DNS. What should you verify first in the tunnel policy?",
    options: [
      "DNS server networks are included in interesting traffic / split tunneling so queries traverse the VPN",
      "Disable HTTPS because it blocks DNS",
      "Increase cable length to 100m beyond spec",
      "Set all clients to 8.8.8.8 only",
    ],
    correctIndex: 0,
    explanation:
      "If DNS traffic does not cross the tunnel, internal names won’t resolve across sites.",
  },
  {
    id: "ap-p3-05",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A Windows print server queues jobs but printers show offline. You find the Print Spooler service stopped and cannot start—Event ID references a corrupt driver. First recovery step aligned with least downtime:",
    options: [
      "Restart spooler after clearing only pending jobs without backup",
      "Stop spooler, clear spool files after backup/rename, remove/reinstall problematic driver per vendor guidance",
      "Reinstall Windows without exporting queues",
      "Disable printing entirely",
    ],
    correctIndex: 1,
    explanation:
      "Corrupt driver queues often require spooler stop, cleanup, and driver remediation.",
  },
  {
    id: "ap-p3-06",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A technician traces intermittent collisions on a modern switched LAN. A hub is discovered hidden under a desk connecting two switch ports. What phenomenon is being reintroduced?",
    options: [
      "A collision domain shared across multiple devices—remove the hub and use proper switch cabling",
      "VLAN tagging on fiber only",
      "Jumbo frames on Wi-Fi",
      "BGP route reflection",
    ],
    correctIndex: 0,
    explanation:
      "Hubs create shared collision domains; modern switched access should be point-to-point to each endpoint.",
  },
  {
    id: "ap-p3-07",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A corporate proxy intercepts TLS for inspection. Internal apps using certificate pinning fail. Who must adjust configuration?",
    options: [
      "Only the end user’s mouse DPI",
      "Security/proxy team must distribute trusted corporate root or disable pinning-breaking inspection paths for those apps",
      "Disable TLS 1.2 globally",
      "Switch DNS to WINS",
    ],
    correctIndex: 1,
    explanation:
      "Pinning rejects MITM proxies unless the device trusts the inspection CA or app exemptions exist.",
  },
  {
    id: "ap-p3-08",
    exam: "a-plus",
    domainId: "networking",
    objectiveRef: "220-1201 2.8",
    stem: "A laptop gets APIPA (169.254.x.x) on a DHCP network. Other devices work. Cable and port swap rule out L1. Next best check on the host:",
    options: [
      "Verify DHCP Client service status and adapter IP settings (static misconfig or rogue static)",
      "Replace CPU",
      "Flash router firmware blindly",
      "Disable IPv6 without testing",
    ],
    correctIndex: 0,
    explanation:
      "APIPA indicates DHCP failure; Windows DHCP client issues or static misconfigs are common host-side causes.",
  },
  {
    id: "ap-p3-09",
    exam: "a-plus",
    domainId: "os",
    objectiveRef: "220-1202 2.6",
    stem: "A user’s profile loads a blank desktop after migration; files exist under C:\\Users\\name.DOMAIN. The session loads name.DOMAIN000. Most likely profile issue on Windows:",
    options: [
      "SID/profile mismatch creating a new profile—inspect ProfileList registry and profile path consistency",
      "GPU driver rollback",
      "BitLocker suspended only",
      "Linux home directory mount failed",
    ],
    correctIndex: 0,
    explanation:
      "Corrupt or mismatched profile SIDs cause Windows to create temporary profile folders with suffixes.",
  },
  {
    id: "ap-p3-10",
    exam: "a-plus",
    domainId: "os",
    objectiveRef: "220-1202 3.3",
    stem: "A Linux container host runs out of inodes while df -h shows free space. Logs implicate millions of tiny files in /var/lib/docker. Technician priority:",
    options: [
      "Prune unused images/containers per policy and fix logging drivers; consider inode monitoring",
      "mkfs with larger block size only (ignores inode exhaustion)",
      "Disable swap",
      "Set vm.swappiness=0 without analysis",
    ],
    correctIndex: 0,
    explanation:
      "Container layers and logs can exhaust inodes; cleanup and logging limits address root cause.",
  },
  {
    id: "ap-p3-11",
    exam: "a-plus",
    domainId: "mobile",
    objectiveRef: "220-1201 4.6",
    stem: "Corporate Android devices must block sideloaded APKs while allowing Play Store apps. Which management mode conceptually fits best?",
    options: [
      "Fully managed / work profile with app allowlisting and unknown sources disabled",
      "Root all devices for flexibility",
      "Disable Google Play Services",
      "Use only Apple Configurator on Android",
    ],
    correctIndex: 0,
    explanation:
      "Enterprise Android management enforces install sources and policies per deployment model.",
  },
  {
    id: "ap-p3-12",
    exam: "a-plus",
    domainId: "virtualization",
    objectiveRef: "220-1201 3.8",
    stem: "A VM’s clock drifts badly when vMotioned between hosts with different BIOS time. Best practice cluster-wide:",
    options: [
      "Ignore NTP because VMs inherit host incorrectly",
      "Configure reliable NTP on hosts and guest time sync integration per hypervisor guidance",
      "Set VMs to UTC-12 only",
      "Disable VMware Tools time sync always",
    ],
    correctIndex: 1,
    explanation:
      "Consistent host time and guest sync tools reduce drift after migrations.",
  },
  {
    id: "ap-p3-13",
    exam: "a-plus",
    domainId: "troubleshooting",
    objectiveRef: "220-1202 4.8",
    stem: "A user’s Outlook hangs “Contacting the server for information” only on one mailbox. OWA works. Other profiles fine. You test Autodiscover with EXPR/SCP. What should you validate first?",
    options: [
      "Autodiscover DNS/SRV/HTTPS endpoints and any on-prem SCP mispointing for that mailbox’s SMTP domain",
      "Reinstall printer drivers",
      "Increase screen resolution",
      "Disable TLS on the client",
    ],
    correctIndex: 0,
    explanation:
      "Outlook profile creation depends on Autodiscover; misconfigured DNS or SCP breaks only affected domains.",
  },
  {
    id: "ap-p3-14",
    exam: "a-plus",
    domainId: "troubleshooting",
    objectiveRef: "220-1202 4.10",
    stem: "After replacing a motherboard, Windows activation fails on OEM licensed consumer hardware. Legitimate path:",
    options: [
      "Use phone/online activation troubleshooter tied to digital license / OEM key rules; may require Microsoft support for motherboard swap tie",
      "Install a KMS host on the laptop",
      "Borrow a volume key from another org",
      "Run slmgr /ipk with random keys from internet",
    ],
    correctIndex: 0,
    explanation:
      "OEM activation is tied to hardware; motherboard replacement has documented reactivation flows.",
  },
  {
    id: "ap-p3-15",
    exam: "a-plus",
    domainId: "security_basic",
    objectiveRef: "220-1202 2.8",
    stem: "A kiosk browser must show only one intranet site. Which combo best supports integrity/confidentiality of session data on a shared device?",
    options: [
      "Assigned access / kiosk mode + cleared session data + HTTPS + automatic sign-out timers",
      "Save all passwords in the browser for speed",
      "Disable HTTPS to avoid cert warnings",
      "Enable autologon as domain admin",
    ],
    correctIndex: 0,
    explanation:
      "Kiosk hardening limits attack surface; HTTPS protects transit; session cleanup reduces data exposure.",
  },
  {
    id: "ap-p3-16",
    exam: "a-plus",
    domainId: "security_basic",
    objectiveRef: "220-1202 2.8",
    stem: "A technician explains why BIOS admin password is weaker than TPM-backed disk encryption for stolen laptop data. Which distinction is correct?",
    options: [
      "BIOS password may be bypassed with physical attacks; FDE protects data at rest even if drives are removed",
      "BIOS password encrypts all files automatically",
      "TPM prevents all cold boot attacks without any OS config",
      "They are equivalent controls",
    ],
    correctIndex: 0,
    explanation:
      "Layered controls: firmware password deters casual boot changes; BitLocker/FDE addresses offline media attacks.",
  },
  {
    id: "ap-p3-17",
    exam: "a-plus",
    domainId: "security_basic",
    objectiveRef: "220-1202 2.8",
    stem: "A small office router advertises WPS push-button. Security guidance for a regulated client says disable it. What risk is primarily reduced?",
    options: [
      "Brute-forceable WPS PIN attacks and unauthorized wireless pairing",
      "DHCP exhaustion only",
      "Fiber loss budget",
      "CPU thermal paste drying",
    ],
    correctIndex: 0,
    explanation:
      "WPS has known weaknesses; disabling reduces unauthorized WLAN joins.",
  },
  {
    id: "ap-p3-18",
    exam: "a-plus",
    domainId: "security_basic",
    objectiveRef: "220-1202 2.8",
    stem: "A backup job verifies restore monthly. After ransomware, restore completes in SLA. Which statement best ties to availability?",
    options: [
      "Tested restores validate recovery time/objectives supporting business continuity",
      "Backups guarantee confidentiality of stolen laptops",
      "RAID replaces offline backups",
      "Snapshots replace backups",
    ],
    correctIndex: 0,
    explanation:
      "Availability is supported by resilient recovery; backups must be tested and protected from tampering.",
  },
  {
    id: "ap-p3-19",
    exam: "a-plus",
    domainId: "security_basic",
    objectiveRef: "220-1202 2.8",
    stem: "A user asks why website TLS “lock” does not prove the site isn’t malicious. Correct technician answer:",
    options: [
      "TLS proves transport encryption and (with valid PKI) identity of the site operator to the CA rules—not intent or content safety",
      "TLS proves the site is government-approved",
      "TLS removes phishing risk",
      "The lock means code is signed by Apple",
    ],
    correctIndex: 0,
    explanation:
      "Encryption ≠ trustworthiness; look-alike domains can still obtain certificates.",
  },
  {
    id: "ap-p3-20",
    exam: "a-plus",
    domainId: "remote_ops",
    objectiveRef: "220-1202 5.6",
    stem: "After closing a Sev-1 incident, leadership asks for objective evidence that controls operated. What artifact best satisfies auditors?",
    options: [
      "Screenshots in chat only",
      "Timeline with log sources, chain of custody, change tickets, and IR actions mapped to policy",
      "Oral summary in hallway",
      "Deleted logs to save space",
    ],
    correctIndex: 1,
    explanation:
      "Post-incident evidence packages combine technical logs and procedural records for governance.",
  },
];
