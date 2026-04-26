# CompTIA Diagnostic Question Bank (120 Questions)

_Readable review copy: question text, four options, and labeled correct answer._

## 1. [A+] A help desk remotes into a user PC to test a vendor app. The vendor doc says “open outbound TCP 9443 to license.vendor.com.” Corporate firewall is default-deny outbound. What must happen before the app can activate?

- A. Open inbound UDP 9443 on the workstation
- B. Security approves an explicit outbound allow rule (or proxy exception) for TCP 9443 to the defined destination
- C. Disable Windows Defender Firewall entirely
- D. Map 9443 to 443 in hosts file without firewall change

**Correct Answer:** B. Security approves an explicit outbound allow rule (or proxy exception) for TCP 9443 to the defined destination

## 2. [A+] A Linux admin runs `ss -ltnp | grep :53` and sees `127.0.0.53:53` with `systemd-resolve`. A desktop app says “cannot reach DNS.” What does this usually indicate about local resolver design?

- A. Port 53 is always blocked on Ubuntu
- B. Stub resolver listens locally and forwards; failures may be upstream resolver or split-DNS config—not random port reassignment
- C. BIND must be installed on every laptop
- D. TCP 53 is used exclusively for zone transfers on clients

**Correct Answer:** B. Stub resolver listens locally and forwards; failures may be upstream resolver or split-DNS config—not random port reassignment

## 3. [A+] A legacy app insists on TFTP for PXE boot firmware updates across subnets. Your security team blocks UDP 69 at routed boundaries. What is the correct technical statement?

- A. TFTP rides UDP/69; crossing subnets needs TFTP helper/relay or redesign to a safer transfer mechanism
- B. TFTP uses TCP 69 exclusively
- C. PXE cannot use DHCP options
- D. UDP cannot traverse VLANs ever

**Correct Answer:** A. TFTP rides UDP/69; crossing subnets needs TFTP helper/relay or redesign to a safer transfer mechanism

## 4. [A+] SNMP monitoring polls network printers on UDP 161. After “hardening,” polls fail but ping works. Most likely change that broke polling:

- A. SNMP community strings or ACLs now block UDP 161/162 to/from the poller
- B. ICMP echo requires UDP 161
- C. Printers moved to fiber-only without IP
- D. HTTPS 443 blocked on printers

**Correct Answer:** A. SNMP community strings or ACLs now block UDP 161/162 to/from the poller

## 5. [A+] A user’s FTP client fails in passive mode behind NAT. Control channel on TCP 21 works, but data channel setup fails. Classic fix in passive FTP involves:

- A. Opening/forwarding the ephemeral passive port range and ensuring the client receives the correct external IP in PASV responses
- B. Switching FTP to ICMP
- C. Disabling TLS on port 21 only
- D. Mapping Telnet 23 to FTP data

**Correct Answer:** A. Opening/forwarding the ephemeral passive port range and ensuring the client receives the correct external IP in PASV responses

## 6. [A+] A security scan flags “LDAP cleartext on TCP 389 from an app server to DC.” The app supports LDAPS. What change best protects confidentiality of directory binds in transit?

- A. Keep 389 but rename the service account monthly
- B. Use LDAPS (TCP 636) or StartTLS on 389 with certificate validation and proper account permissions
- C. Disable logging on the DC
- D. Use UDP 389 instead

**Correct Answer:** B. Use LDAPS (TCP 636) or StartTLS on 389 with certificate validation and proper account permissions

## 7. [A+] A kiosk must reach a time source on the internet while blocking all other outbound traffic. Which destination port pair is most relevant for classic NTP?

- A. TCP 123 only
- B. UDP 123 (and return stateful traffic)
- C. TCP 161
- D. UDP 514

**Correct Answer:** B. UDP 123 (and return stateful traffic)

## 8. [A+] A developer’s machine cannot clone from `git@github.com:org/repo.git` on corporate Wi-Fi. Browser GitHub works. Other VLANs succeed. Most probable block:

- A. Outbound TCP 22 (SSH) denied on that SSID/VLAN while 443 is allowed
- B. Git requires SMB 445
- C. DNS over HTTPS broke git
- D. Git uses UDP 22

**Correct Answer:** A. Outbound TCP 22 (SSH) denied on that SSID/VLAN while 443 is allowed

## 9. [A+] A Windows admin enables WinRM for remote management. Host firewalls must allow which listener by default for standard HTTP-based WinRM (not HTTPS transport)?

- A. TCP 135 only
- B. TCP 5985 (and often 5986 for HTTPS listener when configured)
- C. UDP 500
- D. TCP 1723

**Correct Answer:** B. TCP 5985 (and often 5986 for HTTPS listener when configured)

## 10. [A+] A print server uses IPP over HTTPS. Clients must reach `https://print.corp:631`. Corporate proxy intercept breaks certificate trust. What breaks first?

- A. TCP 631 refusal because printers never use TLS
- B. TLS validation failures unless the client trusts the inspection CA or an exception path exists
- C. IPP requires NetBIOS
- D. Port 631 is exclusively for SNMP

**Correct Answer:** B. TLS validation failures unless the client trusts the inspection CA or an exception path exists

## 11. [A+] A remote support tool uses QUIC/HTTP3 to a vendor cloud. A firewall rule allows “TCP 443 outbound” only. Sessions fail. Next step:

- A. Allow UDP 443 (QUIC) or force HTTP/2 over TCP 443 per vendor guidance
- B. Open inbound TCP 3389
- C. Disable IPv6 only
- D. Map QUIC to Telnet

**Correct Answer:** A. Allow UDP 443 (QUIC) or force HTTP/2 over TCP 443 per vendor guidance

## 12. [A+] A legacy line-of-business app listens on TCP 8080 internally. Reverse proxy terminates TLS on 443 and forwards to 8080. External users only need:

- A. Inbound 8080 opened to the internet on the app host
- B. Inbound 443 to the proxy; 8080 stays internal to the DMZ/private network
- C. Inbound 9100 for printing
- D. Inbound 161 for traps

**Correct Answer:** B. Inbound 443 to the proxy; 8080 stays internal to the DMZ/private network

## 13. [A+] A technician explains why storing credit card PANs encrypted with AES but keeping the AES key in the same database table is weak. Which principle is violated?

- A. Key management separation—confidentiality fails if ciphertext and key are co-located for an attacker
- B. Availability of RAID
- C. Integrity of DHCP
- D. Non-repudiation of SMTP

**Correct Answer:** A. Key management separation—confidentiality fails if ciphertext and key are co-located for an attacker

## 14. [A+] A file publisher distributes SHA-256 hashes on HTTPS site A while binaries are on CDN B. Which CIA goal is primarily served if users verify hashes before install?

- A. Confidentiality of CDN TLS keys
- B. Integrity of the downloaded artifact vs tampering
- C. Availability of site A DNS only
- D. Accounting of printer pages

**Correct Answer:** B. Integrity of the downloaded artifact vs tampering

## 15. [A+] A user asks the difference between “signing” and “encrypting” an email with S/MIME when sending to one recipient. Best concise answer:

- A. Signing uses sender private key for integrity/authentication; encryption uses recipient public key for confidentiality
- B. They are identical operations
- C. Signing encrypts and encryption signs automatically
- D. S/MIME cannot provide integrity

**Correct Answer:** A. Signing uses sender private key for integrity/authentication; encryption uses recipient public key for confidentiality

## 16. [A+] A help desk enables BitLocker on laptops. A manager asks which CIA pillar is most directly improved if a stolen laptop’s SSD is encrypted with TPM protection.

- A. Availability of BitLocker recovery keys in AD
- B. Confidentiality of data at rest against offline reading
- C. Integrity of DHCP leases
- D. Non-repudiation of Wi-Fi associations

**Correct Answer:** B. Confidentiality of data at rest against offline reading

## 17. [A+] A web developer uses client-side JavaScript to “encrypt passwords” with AES before POSTing to the server over HTTP. What is fundamentally wrong?

- A. HTTP exposes the page script and traffic to interception; keys in JS are not secret—use HTTPS and server-side password hashing
- B. AES cannot run in browsers
- C. HTTP always encrypts payloads
- D. Client-side AES replaces TLS

**Correct Answer:** A. HTTP exposes the page script and traffic to interception; keys in JS are not secret—use HTTPS and server-side password hashing

## 18. [A+] A SOHO router advertises “WPA3-Personal transition mode.” A tech explains it exists primarily to:

- A. Disable encryption for IoT
- B. Support WPA2-only clients while still offering WPA3 where supported
- C. Guarantee 10 Gbps Wi-Fi
- D. Remove need for passphrases

**Correct Answer:** B. Support WPA2-only clients while still offering WPA3 where supported

## 19. [A+] A ransomware attack encrypts files but backups restore service within RTO. Leadership asks which CIA aspect was most threatened during outage before restore.

- A. Confidentiality of the ransom note
- B. Availability (and integrity of live data until restored)
- C. Integrity of BIOS clock
- D. Non-repudiation of printer logs

**Correct Answer:** B. Availability (and integrity of live data until restored)

## 20. [A+] A technician compares hashing (SHA-256) versus encryption (AES-256) for protecting a file on a USB drive against physical loss. Which statement is correct?

- A. Hashing hides file contents; encryption does not
- B. Hashing proves integrity but does not conceal data; encryption provides confidentiality
- C. Both require the same key size
- D. SHA-256 is symmetric encryption

**Correct Answer:** B. Hashing proves integrity but does not conceal data; encryption provides confidentiality

## 21. [A+] A help desk receives a ticket: a user moved a tower PC across the office. Now it powers on (fans spin) but there is no POST and no video. You open the case and notice the 24-pin ATX connector is partially unseated. What should you do first?

- A. Replace the CMOS battery before re-testing
- B. Fully reseat the 24-pin motherboard power connector and power-cycle
- C. Flash the BIOS to the latest version immediately
- D. Install a discrete GPU because integrated graphics failed

**Correct Answer:** B. Fully reseat the 24-pin motherboard power connector and power-cycle

## 22. [A+] A technician is validating a new DDR5 kit on a board that lists “DDR5-5200 (OC)” in QVL. The system trains at JEDEC default (4800) but fails when XMP/EXPO is enabled. The most likely cause is:

- A. The RAM is counterfeit if it trains at any speed
- B. Memory controller / board limits—disable EXPO or use a validated speed profile
- C. DDR5 cannot run below 5200 MHz on any platform
- D. You must populate all four slots before any speed above 4800 works

**Correct Answer:** B. Memory controller / board limits—disable EXPO or use a validated speed profile

## 23. [A+] A small office server reports a predictive failure on one SATA HDD in RAID 5. The array is still online. Best practice before swapping the drive is to:

- A. Delete the array and rebuild from backups without hot-swap
- B. Identify the failed member, hot-swap if supported, and let the controller rebuild
- C. Convert RAID 5 to RAID 0 for speed, then replace
- D. Shut down and erase all drives to clear SMART errors

**Correct Answer:** B. Identify the failed member, hot-swap if supported, and let the controller rebuild

## 24. [A+] A VoIP engineer says desk phones cannot register when plugged into a new VLAN. DHCP works for PCs on the same switch port profile, but phones never get an offer. You verify the voice VLAN ID on the switch. What is the most common missing piece for IP phones?

- A. A helper address / DHCP scope for the voice VLAN or DHCP relay to the voice subnet
- B. Disabling STP on all uplinks
- C. Forcing half-duplex on phone ports
- D. Blocking UDP 67/68 on the firewall for “security”

**Correct Answer:** A. A helper address / DHCP scope for the voice VLAN or DHCP relay to the voice subnet

## 25. [A+] A remote worker’s laptop can browse HTTPS sites but corporate IMAP email fails on the hotel Wi-Fi. Other users on the same SSID report the same. Which port is most likely blocked by the hotspot captive portal or firewall policy?

- A. TCP 22
- B. TCP 25
- C. TCP 143 or 993
- D. UDP 161

**Correct Answer:** C. TCP 143 or 993

## 26. [A+] You are troubleshooting a Linux kiosk that must reach an internal API at https://api.corp.local:8443. curl shows “Connection refused” while ping succeeds. This most strongly suggests:

- A. DNS failure because ping works
- B. Nothing is listening on 8443 on the target host or a firewall is dropping that port
- C. ICMP is disabled so HTTPS must also be down
- D. The kiosk needs a /24 mask change

**Correct Answer:** B. Nothing is listening on 8443 on the target host or a firewall is dropping that port

## 27. [A+] A printer vendor’s setup guide says the device listens on TCP 9100 for raw printing. Your security lead asks which protocol family that typically maps to in documentation. The best answer is:

- A. SMB/CIFS file sharing
- B. JetDirect / raw socket printing
- C. LDAP directory queries
- D. SNMP traps only

**Correct Answer:** B. JetDirect / raw socket printing

## 28. [A+] A technician configures a SOHO router with port forwarding: external TCP 3389 → internal host 192.168.1.50:3389 for remote support. The CISO rejects the design. What is the primary risk being flagged?

- A. RDP brute-force exposure on a well-known port directly to an internal workstation
- B. NAT cannot forward to private addresses
- C. RDP requires UDP 3389 only
- D. Port forwarding only works for HTTP

**Correct Answer:** A. RDP brute-force exposure on a well-known port directly to an internal workstation

## 29. [A+] A DNS change for www.example.com was published with TTL 300. A user still resolves the old IP after 10 minutes only on one laptop, while others are correct. What should you check first on that laptop?

- A. The authoritative zone’s SOA serial only
- B. Local hosts file entries or a stale DNS client cache / third-party resolver cache
- C. Whether the cable is Cat6A
- D. The monitor refresh rate

**Correct Answer:** B. Local hosts file entries or a stale DNS client cache / third-party resolver cache

## 30. [A+] A Windows admin runs netstat -ano and sees LISTENING on 0.0.0.0:445 with PID 4. What service is most likely bound?

- A. OpenSSH Server
- B. Windows NT kernel / system SMB stack
- C. Google Chrome
- D. Windows Time (W32Time)

**Correct Answer:** B. Windows NT kernel / system SMB stack

## 31. [A+] On Windows 11, a user cannot save to C:\Program Files\App even though they are in the local Administrators group. UAC is at default. The most accurate explanation is:

- A. Administrators run with a filtered token for standard apps; elevation is required for protected locations
- B. NTFS denies Administrators entirely on Program Files
- C. BitLocker blocks writes until recovery key is entered
- D. The account must be Domain Admin, not local admin

**Correct Answer:** A. Administrators run with a filtered token for standard apps; elevation is required for protected locations

## 32. [A+] A Linux server shows disk pressure on /. An admin runs df -h and sees a separate /var mount at 100% while / has space. Logrotate is configured but Apache access logs still grow hourly. What is the best next check?

- A. Whether logrotate postrotate scripts are failing or Apache is holding deleted file descriptors open
- B. Reformat / as btrfs immediately
- C. Disable systemd-journald
- D. Move /boot to /var

**Correct Answer:** A. Whether logrotate postrotate scripts are failing or Apache is holding deleted file descriptors open

## 33. [A+] A company deploys supervised iOS devices. Apps silently disappear after 24 hours. MDM shows the apps as “managed” but the license count is exceeded. What policy issue is most probable?

- A. VPP/Apple Business Manager license assignment exceeded seats, causing revocation
- B. The devices are rooted
- C. APNs certificate expired (would usually remove all MDM control)
- D. iOS cannot install managed apps

**Correct Answer:** A. VPP/Apple Business Manager license assignment exceeded seats, causing revocation

## 34. [A+] A developer’s Type 2 hypervisor VM loses network after the host VPN client connects full-tunnel. Other host apps still reach the internet. What is the most likely virtualization cause?

- A. The VM vNIC is bridged to the host adapter now routed through the VPN tunnel with conflicting subnets
- B. The VM needs a physical serial loopback
- C. Hypervisors cannot use NAT mode
- D. The host CPU lacks AVX-512

**Correct Answer:** A. The VM vNIC is bridged to the host adapter now routed through the VPN tunnel with conflicting subnets

## 35. [A+] Intermittent “cable not connected” on a docked laptop only when the user adjusts the desk height. Cable continuity tests fine when static. Best next step?

- A. Replace the CPU paste
- B. Inspect for micro-bends / strain at the dock connector; swap cable or dock flex point
- C. Increase DHCP lease time
- D. Disable LLMNR globally

**Correct Answer:** B. Inspect for micro-bends / strain at the dock connector; swap cable or dock flex point

## 36. [A+] A workstation GPU hits thermal limit and throttles during renders. GPU fans spin, case filters are clean, ambient is cool. GPU-Z shows hotspot >100°C quickly. The next most logical hardware focus is:

- A. Replace SATA data cable
- B. Inspect cooler mount pressure / thermal paste / VRM cooling on the card
- C. Increase DHCP scope size
- D. Disable Secure Boot

**Correct Answer:** B. Inspect cooler mount pressure / thermal paste / VRM cooling on the card

## 37. [A+] A UPS passes self-test but runtime collapses under 2 minutes with 40% load. Battery age is 5 years. Best recommendation:

- A. Replace UPS batteries per manufacturer lifecycle and retest calibrated runtime
- B. Increase output voltage manually
- C. Disable surge-only outlets
- D. RAID the batteries across two UPS units without replacement

**Correct Answer:** A. Replace UPS batteries per manufacturer lifecycle and retest calibrated runtime

## 38. [A+] A branch office needs time sync to HQ without opening arbitrary inbound ports. Which approach aligns with typical secure NTP practice?

- A. Allow inbound UDP 123 from any source to all desktops
- B. Use authenticated/stratum hierarchy with outbound NTP from clients to approved servers or local stratum-1 appliance
- C. Disable NTP and rely on BIOS clock drift
- D. Forward TCP 445 for time sync

**Correct Answer:** B. Use authenticated/stratum hierarchy with outbound NTP from clients to approved servers or local stratum-1 appliance

## 39. [A+] A Linux admin tests connectivity to a mail relay with `nc -vz smtp.corp 587`. Connection succeeds. What does this primarily confirm?

- A. SMTP authentication succeeded
- B. TCP 587 is reachable to the host (path/firewall permitting); not auth
- C. SPF/DKIM alignment
- D. POP3 retrieval works

**Correct Answer:** B. TCP 587 is reachable to the host (path/firewall permitting); not auth

## 40. [A+] A web app team says “the load balancer health check is green but users get 502.” The LB checks TCP 80 only. The app listens on 8443 with TLS. What design flaw is most likely?

- A. Health checks must validate the actual listener/port/protocol the LB forwards to
- B. TCP health checks always validate TLS certificate chain depth
- C. 502 always means DNS failure
- D. Green checks imply application SQL success

**Correct Answer:** A. Health checks must validate the actual listener/port/protocol the LB forwards to

## 41. [A+] A firewall rule allows “established,related” return traffic. A new outbound SSH session from a server to GitHub (TCP 22) fails. Inbound default deny is in place. Most likely missing rule element?

- A. Allow outbound NEW tcp/22 from the server subnet before expecting return traffic classification
- B. Open inbound UDP 22
- C. Disable conntrack because it breaks SSH
- D. Allow ICMP type 0 only

**Correct Answer:** A. Allow outbound NEW tcp/22 from the server subnet before expecting return traffic classification

## 42. [A+] A help desk script asks users to flush DNS on Windows after an internal cutover. Which command is correct for modern Windows?

- A. netsh interface ip delete arpcache
- B. ipconfig /flushdns
- C. route -f
- D. nbtstat -R

**Correct Answer:** B. ipconfig /flushdns

## 43. [A+] A fiber link shows high errors after a rack move. Light levels are marginal. You suspect contaminated end faces. What is the proper remediation mindset?

- A. Clean connectors with approved tools/method; inspect before re-mating
- B. Crimp harder on RJ-45 ends
- C. Apply isopropyl to copper RJ-45 pins only
- D. Increase transmit power on multimode without limits

**Correct Answer:** A. Clean connectors with approved tools/method; inspect before re-mating

## 44. [A+] A macOS user cannot install a downloaded .pkg because Gatekeeper blocks an unidentified developer. Policy allows only App Store + identified devs. What is the least disruptive compliant path?

- A. Disable SIP permanently
- B. Distribute via MDM/notarization or developer ID signing; adjust policy if business-approved
- C. Run chmod -R 777 on /Applications
- D. Format the APFS container

**Correct Answer:** B. Distribute via MDM/notarization or developer ID signing; adjust policy if business-approved

## 45. [A+] Windows Update repeatedly fails with 0x800f0922 on multiple domain PCs behind a proxy. Microsoft docs correlate this with WinHTTP proxy vs IE proxy mismatch. What should you verify first?

- A. netsh winhttp show proxy and align with required corporate proxy settings
- B. Delete all user profiles
- C. Disable TPM
- D. Convert disks to MBR

**Correct Answer:** A. netsh winhttp show proxy and align with required corporate proxy settings

## 46. [A+] A Linux service fails on boot with “permission denied” writing to /var/log/app.log owned by root:root mode 644. The unit runs as User=app. Best fix pattern:

- A. chmod 777 /var/log
- B. Use log directory with correct ownership/ACL for app, or journald/syslog redirection
- C. Run the service as root always
- D. Disable SELinux without analysis

**Correct Answer:** B. Use log directory with correct ownership/ACL for app, or journald/syslog redirection

## 47. [A+] Android Enterprise work profile devices show “compliance failed: encryption.” Storage is encrypted but a subset fails. Investigation finds OEM removed FDE on budget models. What policy lever applies?

- A. Require encryption-capable hardware/OS builds in compliance rules
- B. Disable all updates
- C. Use personal Apple IDs on Android
- D. Disable lock screen PIN to pass compliance

**Correct Answer:** A. Require encryption-capable hardware/OS builds in compliance rules

## 48. [A+] A tech installs a second NVMe drive. BIOS lists both, but Windows only shows one in Disk Management. The second is listed “offline” with a foreign signature. What is the safest first action before importing?

- A. Import foreign disk immediately without reading labels
- B. Verify physical slot, BIOS NVMe routing, and that the disk is not from another RAID member; then bring online/import with care
- C. Run chkdsk /f on the offline disk
- D. Format the EFI partition

**Correct Answer:** B. Verify physical slot, BIOS NVMe routing, and that the disk is not from another RAID member; then bring online/import with care

## 49. [A+] A workstation randomly powers off under GPU load. PSU is 450W bronze; GPU vendor recommends 650W. You measure 12V sag under load with a PSU tester. Best fix:

- A. Install a PSU meeting headroom and quality recommendations for transient GPU loads
- B. Underclock the monitor refresh rate
- C. Disable page file
- D. Use a Molex-to-PCIe adapter only

**Correct Answer:** A. Install a PSU meeting headroom and quality recommendations for transient GPU loads

## 50. [A+] A user complains USB 3.0 thumb drive speed drops when a 2.4 GHz wireless mouse dongle is plugged adjacent on the front panel. Most likely cause:

- A. USB 2.0/3.0 RF interference and shared front-panel wiring—try rear ports or extension away from USB3 signaling
- B. The mouse uses fiber channel
- C. NTFS cluster size mismatch
- D. GPU VRAM is too low

**Correct Answer:** A. USB 2.0/3.0 RF interference and shared front-panel wiring—try rear ports or extension away from USB3 signaling

## 51. [A+] A site-to-site VPN comes up, but neither side can reach internal web servers by hostname—only by IP. Both sides use AD DNS. What should you verify first in the tunnel policy?

- A. DNS server networks are included in interesting traffic / split tunneling so queries traverse the VPN
- B. Disable HTTPS because it blocks DNS
- C. Increase cable length to 100m beyond spec
- D. Set all clients to 8.8.8.8 only

**Correct Answer:** A. DNS server networks are included in interesting traffic / split tunneling so queries traverse the VPN

## 52. [A+] A Windows print server queues jobs but printers show offline. You find the Print Spooler service stopped and cannot start—Event ID references a corrupt driver. First recovery step aligned with least downtime:

- A. Restart spooler after clearing only pending jobs without backup
- B. Stop spooler, clear spool files after backup/rename, remove/reinstall problematic driver per vendor guidance
- C. Reinstall Windows without exporting queues
- D. Disable printing entirely

**Correct Answer:** B. Stop spooler, clear spool files after backup/rename, remove/reinstall problematic driver per vendor guidance

## 53. [A+] A technician traces intermittent collisions on a modern switched LAN. A hub is discovered hidden under a desk connecting two switch ports. What phenomenon is being reintroduced?

- A. A collision domain shared across multiple devices—remove the hub and use proper switch cabling
- B. VLAN tagging on fiber only
- C. Jumbo frames on Wi-Fi
- D. BGP route reflection

**Correct Answer:** A. A collision domain shared across multiple devices—remove the hub and use proper switch cabling

## 54. [A+] A corporate proxy intercepts TLS for inspection. Internal apps using certificate pinning fail. Who must adjust configuration?

- A. Only the end user’s mouse DPI
- B. Security/proxy team must distribute trusted corporate root or disable pinning-breaking inspection paths for those apps
- C. Disable TLS 1.2 globally
- D. Switch DNS to WINS

**Correct Answer:** B. Security/proxy team must distribute trusted corporate root or disable pinning-breaking inspection paths for those apps

## 55. [A+] A laptop gets APIPA (169.254.x.x) on a DHCP network. Other devices work. Cable and port swap rule out L1. Next best check on the host:

- A. Verify DHCP Client service status and adapter IP settings (static misconfig or rogue static)
- B. Replace CPU
- C. Flash router firmware blindly
- D. Disable IPv6 without testing

**Correct Answer:** A. Verify DHCP Client service status and adapter IP settings (static misconfig or rogue static)

## 56. [A+] A user’s profile loads a blank desktop after migration; files exist under C:\Users\name.DOMAIN. The session loads name.DOMAIN000. Most likely profile issue on Windows:

- A. SID/profile mismatch creating a new profile—inspect ProfileList registry and profile path consistency
- B. GPU driver rollback
- C. BitLocker suspended only
- D. Linux home directory mount failed

**Correct Answer:** A. SID/profile mismatch creating a new profile—inspect ProfileList registry and profile path consistency

## 57. [A+] A Linux container host runs out of inodes while df -h shows free space. Logs implicate millions of tiny files in /var/lib/docker. Technician priority:

- A. Prune unused images/containers per policy and fix logging drivers; consider inode monitoring
- B. mkfs with larger block size only (ignores inode exhaustion)
- C. Disable swap
- D. Set vm.swappiness=0 without analysis

**Correct Answer:** A. Prune unused images/containers per policy and fix logging drivers; consider inode monitoring

## 58. [A+] Corporate Android devices must block sideloaded APKs while allowing Play Store apps. Which management mode conceptually fits best?

- A. Fully managed / work profile with app allowlisting and unknown sources disabled
- B. Root all devices for flexibility
- C. Disable Google Play Services
- D. Use only Apple Configurator on Android

**Correct Answer:** A. Fully managed / work profile with app allowlisting and unknown sources disabled

## 59. [A+] A VM’s clock drifts badly when vMotioned between hosts with different BIOS time. Best practice cluster-wide:

- A. Ignore NTP because VMs inherit host incorrectly
- B. Configure reliable NTP on hosts and guest time sync integration per hypervisor guidance
- C. Set VMs to UTC-12 only
- D. Disable VMware Tools time sync always

**Correct Answer:** B. Configure reliable NTP on hosts and guest time sync integration per hypervisor guidance

## 60. [A+] A user’s Outlook hangs “Contacting the server for information” only on one mailbox. OWA works. Other profiles fine. You test Autodiscover with EXPR/SCP. What should you validate first?

- A. Autodiscover DNS/SRV/HTTPS endpoints and any on-prem SCP mispointing for that mailbox’s SMTP domain
- B. Reinstall printer drivers
- C. Increase screen resolution
- D. Disable TLS on the client

**Correct Answer:** A. Autodiscover DNS/SRV/HTTPS endpoints and any on-prem SCP mispointing for that mailbox’s SMTP domain

## 61. [Security+] A SOC analyst sees beaconing to a C2 on TCP 443 with JA3 matching a known framework but the SNI is a newly registered domain. Firewall allows outbound 443 broadly. Best immediate containment option:

- A. Block outbound TCP 443 globally without review
- B. Use threat intel + selective egress filtering/proxy inspection for unknown domains while coordinating business impact
- C. Disable TLS company-wide
- D. Open UDP 69 for diagnostics

**Correct Answer:** B. Use threat intel + selective egress filtering/proxy inspection for unknown domains while coordinating business impact

## 62. [Security+] An architect must protect bulk database backups at rest in object storage. Keys must rotate yearly without re-encrypting all historical objects immediately. Preferred pattern:

- A. Store one AES key in git
- B. KMS envelope encryption: per-object data keys wrapped by a KMS key supporting rotation/re-wrap strategies
- C. XOR with a fixed string
- D. MD5 the backup for confidentiality

**Correct Answer:** B. KMS envelope encryption: per-object data keys wrapped by a KMS key supporting rotation/re-wrap strategies

## 63. [Security+] A pen tester captures a TLS session and later steals the server’s long-term RSA private key. Which property is *not* protected for past sessions if no PFS was negotiated?

- A. Confidentiality of past ciphertext if only RSA key transport was used without ephemeral DH
- B. Integrity of TCP checksums
- C. Availability of ICMP
- D. Color depth of screenshots

**Correct Answer:** A. Confidentiality of past ciphertext if only RSA key transport was used without ephemeral DH

## 64. [Security+] A company publishes software updates with Ed25519 signatures. Users verify with a public key embedded in the installer. What is primarily assured if verification passes?

- A. Confidentiality of the binary to everyone
- B. Integrity and authenticity of the update under the signer’s key
- C. Availability of the vendor website
- D. PCI DSS compliance automatically

**Correct Answer:** B. Integrity and authenticity of the update under the signer’s key

## 65. [Security+] A DDoS attack saturates uplink bandwidth. Customer-facing HTTPS stays “up” but times out. Which CIA pillar is chiefly impacted for customers?

- A. Confidentiality of TLS keys
- B. Availability
- C. Integrity of BIOS
- D. Non-repudiation of DHCP

**Correct Answer:** B. Availability

## 66. [Security+] Which pair best contrasts symmetric vs asymmetric cryptography for bulk data protection?

- A. AES for bulk encryption speed; RSA/ECC often for key exchange/signatures—not typically for multi-GB bulk encryption alone
- B. RSA encrypts faster than AES for 100GB files always
- C. Symmetric crypto cannot use keys
- D. Asymmetric crypto never uses public keys

**Correct Answer:** A. AES for bulk encryption speed; RSA/ECC often for key exchange/signatures—not typically for multi-GB bulk encryption alone

## 67. [Security+] A security team stores HMAC-SHA256 of audit logs in a WORM device with a secret known only to two SOC leads. What is the primary assurance if an insider tampers logs on the primary SIEM?

- A. Confidentiality of logs to all analysts
- B. Tamper detection (integrity) when recomputed HMACs disagree—assuming key compromise is controlled
- C. Perfect forward secrecy for TLS
- D. Automatic malware removal

**Correct Answer:** B. Tamper detection (integrity) when recomputed HMACs disagree—assuming key compromise is controlled

## 68. [Security+] An attacker replaces a public binary mirror but cannot forge the vendor’s detached GPG signature. Users who verify signatures will detect a failure in:

- A. Availability
- B. Integrity/authenticity of the artifact
- C. DHCP scope
- D. UPS self-test

**Correct Answer:** B. Integrity/authenticity of the artifact

## 69. [Security+] A private PKI issues TLS server certificates. A browser shows ERR_CERT_AUTHORITY_INVALID. Most direct technical cause:

- A. The server is using AES-256-GCM
- B. The client does not trust the issuing CA certificate chain presented by the server
- C. TLS 1.3 is disabled
- D. The certificate is guaranteed expired

**Correct Answer:** B. The client does not trust the issuing CA certificate chain presented by the server

## 70. [Security+] A security engineer configures OCSP stapling on a web server. What user-visible benefit is primarily targeted?

- A. Faster revocation status delivery with privacy/perf improvements vs client-driven OCSP lookups
- B. Eliminates need for TLS certificates
- C. Encrypts DNS queries
- D. Blocks UDP 161

**Correct Answer:** A. Faster revocation status delivery with privacy/perf improvements vs client-driven OCSP lookups

## 71. [Security+] A CSR is submitted to a public CA. What must never be sent to the CA for a TLS server cert request?

- A. The public key / subject details in the CSR
- B. The corresponding private key material
- C. SAN entries for hostnames
- D. Key usage extensions requested

**Correct Answer:** B. The corresponding private key material

## 72. [Security+] A company rotates TLS certificates every 45 days via ACME. An attacker steals an old private key after rotation. With modern TLS 1.3 + ECDHE key exchange configured correctly, what is most true about past sessions?

- A. All past sessions can always be decrypted with the stolen old cert key
- B. Ephemeral session keys limit decryptability of past recordings versus long-term key compromise scenarios (PFS intent)
- C. TLS 1.3 forbids ephemeral keys
- D. Rotation is irrelevant

**Correct Answer:** B. Ephemeral session keys limit decryptability of past recordings versus long-term key compromise scenarios (PFS intent)

## 73. [Security+] An internal API uses mutual TLS. Clients present client certs signed by the org’s private CA. What threat is primarily reduced versus bearer tokens alone?

- A. Stolen static API tokens replayed from anywhere without possession of client private key material
- B. All phishing
- C. SQL injection
- D. ARP storms

**Correct Answer:** A. Stolen static API tokens replayed from anywhere without possession of client private key material

## 74. [Security+] A CRL is huge and clients time out fetching it during TLS handshake. Best operational mitigation:

- A. Disable revocation checking entirely everywhere
- B. Prefer OCSP with stapling and/or shorter-lived certs; partition CRLDP/CDP infrastructure
- C. Publish CRL over TFTP only
- D. Use self-signed roots without CRL/OCSP

**Correct Answer:** B. Prefer OCSP with stapling and/or shorter-lived certs; partition CRLDP/CDP infrastructure

## 75. [Security+] Attackers scan the internet for exposed Elasticsearch on TCP 9200 without auth and exfiltrate indices. Which failure classes apply (choose best combo)?

- A. Only physical security
- B. Insecure service exposure + missing authentication/authorization + poor network segmentation
- C. TLS 1.3 misconfiguration only
- D. Incorrect monitor Hz

**Correct Answer:** B. Insecure service exposure + missing authentication/authorization + poor network segmentation

## 76. [Security+] A malware sample opens outbound TCP 4444 to a VPS. IDS has no signature yet. A behavior rule flags “non-browser process initiating repeated TLS to rare IP on 4444.” This detection leans on:

- A. BGP communities
- B. Anomaly/behavioral analytics on destination reputation and process context
- C. CRT degaussing
- D. RAID stripe size

**Correct Answer:** B. Anomaly/behavioral analytics on destination reputation and process context

## 77. [Security+] During IR, analysts must prove a memory image’s integrity. They compute SHA-256 before analysis and store hashes in a write-once system. This supports:

- A. Confidentiality of RAM contents to analysts
- B. Evidence integrity for chain-of-custody workflows
- C. Availability of attacker C2
- D. Automatic eradication

**Correct Answer:** B. Evidence integrity for chain-of-custody workflows

## 78. [Security+] A firewall change ticket opens inbound TCP 22 to a jump host from 0.0.0.0/0 for “temporary access.” SOC objects. The strongest security objection is:

- A. SSH cannot use port 22
- B. Internet-wide exposure of management plane increases brute force and exploitation blast radius
- C. Jump hosts should never exist
- D. Inbound 22 is safer than outbound 22

**Correct Answer:** B. Internet-wide exposure of management plane increases brute force and exploitation blast radius

## 79. [Security+] A HIPAA-covered entity moves PHI backups to a cloud vendor without a BAA. Which governance failure is most direct?

- A. Using AES-256
- B. Missing required business associate agreement / vendor due diligence for PHI processors
- C. Using TLS 1.3
- D. Using RAID 6

**Correct Answer:** B. Missing required business associate agreement / vendor due diligence for PHI processors

## 80. [Security+] PCI DSS scope includes systems that store, process, or transmit cardholder data. A web server only stores salted password hashes for shoppers but also stores PAN in a separate table. Which statement is accurate?

- A. PAN storage brings the system into PCI scope even if passwords are handled separately
- B. Password hashes imply PAN automatically
- C. PCI never applies to web servers
- D. Hashes of PAN are always out of scope

**Correct Answer:** A. PAN storage brings the system into PCI scope even if passwords are handled separately

## 81. [Security+] A hospital stores patient images on a NAS. The CISO mandates that stolen drives cannot reveal patient data. Which control most directly enforces confidentiality for data at rest?

- A. AES-256 full-disk/volume encryption with protected key material
- B. SHA-256 file hashing without encryption
- C. Load balancers with round-robin only
- D. RAID 6 dual parity

**Correct Answer:** A. AES-256 full-disk/volume encryption with protected key material

## 82. [Security+] An app signs JWTs with HS256 using a long random secret shared between two microservices. Another team proposes RS256 with a key pair instead. What is the primary architectural difference?

- A. HS256 is symmetric (shared secret); RS256 is asymmetric (private sign / public verify)
- B. HS256 cannot be used with HTTPS
- C. RS256 forbids rotation
- D. Both require identical private keys on clients

**Correct Answer:** A. HS256 is symmetric (shared secret); RS256 is asymmetric (private sign / public verify)

## 83. [Security+] A SIEM alert shows TLS 1.2 to a rare cloud region from a domain workstation at 03:00. The session exfiltrated 200MB. Leadership asks which CIA dimension is primarily impacted if sensitive data left the org.

- A. Availability of the SIEM
- B. Confidentiality (and potentially integrity if data was altered)
- C. Only physical security
- D. Accounting non-repudiation to public CAs always

**Correct Answer:** B. Confidentiality (and potentially integrity if data was altered)

## 84. [Security+] Blue team wants to prove a log file was not altered since collection. They store HMAC-SHA256(log) with a secret known only to the SOC. Later verification recomputes HMAC. This primarily provides:

- A. Confidentiality of log plaintext to outsiders who lack the HMAC key
- B. Integrity detection (and authentication of origin for parties that trust key custody)
- C. DDoS protection
- D. Perfect forward secrecy for TLS

**Correct Answer:** B. Integrity detection (and authentication of origin for parties that trust key custody)

## 85. [Security+] A finance employee receives an urgent Teams message from the “CFO” asking to wire funds. The display name matches but the tenant ID is external. This is best classified as:

- A. Buffer overflow
- B. Business email compromise / impersonation via trusted channel
- C. SYN flood
- D. Rowhammer

**Correct Answer:** B. Business email compromise / impersonation via trusted channel

## 86. [Security+] A worm spreads across VLANs by exploiting an unpatched SMB service on workstations. Which mitigation pair best addresses both exploitation and lateral movement?

- A. Disable all logging
- B. Patch/remove legacy SMB exposure + network segmentation/microsegmentation + EDR containment
- C. Increase password length only
- D. Disable HTTPS company-wide

**Correct Answer:** B. Patch/remove legacy SMB exposure + network segmentation/microsegmentation + EDR containment

## 87. [Security+] A red team drops a USB in the parking lot labeled “Q4_Salaries.” An employee plugs it in and a payload phones home. Strongest preventive control combination:

- A. Autoplay/USB restrictions + device control + security awareness + EDR
- B. Post a sign “do not use USB” only
- C. Disable MFA to reduce friction
- D. Allow only NTFS-formatted USB

**Correct Answer:** A. Autoplay/USB restrictions + device control + security awareness + EDR

## 88. [Security+] An enterprise adopts zero trust for SaaS admin consoles. Which control set best matches “never trust, always verify”?

- A. VPN full tunnel to trusted internal zone only
- B. Continuous device posture + MFA + least privilege + session monitoring on each access
- C. Shared admin password rotated yearly
- D. IP allowlist without authentication

**Correct Answer:** B. Continuous device posture + MFA + least privilege + session monitoring on each access

## 89. [Security+] Developers embed AWS access keys in a public GitHub repo. Bots scrape within minutes. Best immediate response sequence:

- A. Ignore if repo is private later
- B. Revoke/rotate keys, audit CloudTrail for misuse, implement secrets scanning + vault
- C. Change DNS TTL
- D. Increase instance size

**Correct Answer:** B. Revoke/rotate keys, audit CloudTrail for misuse, implement secrets scanning + vault

## 90. [Security+] An IdP issues SAML assertions to multiple SaaS apps. A misconfigured SP accepts unsigned assertions. What is the primary risk?

- A. Attackers forge assertions to impersonate users without possession of private keys if assertions aren’t integrity-protected
- B. TLS 1.3 downgrade
- C. CPU branch prediction leaks
- D. SNMP v2c read-only

**Correct Answer:** A. Attackers forge assertions to impersonate users without possession of private keys if assertions aren’t integrity-protected

## 91. [Security+] A PKI admin publishes a new intermediate CA cert. Clients must trust chains issued under it. What must clients receive?

- A. Only the end-entity server certificate
- B. The full chain (server + intermediates) with roots already in trust store; avoid missing intermediate issues
- C. A self-signed root for every TLS session
- D. The private key of the CA to clients

**Correct Answer:** B. The full chain (server + intermediates) with roots already in trust store; avoid missing intermediate issues

## 92. [Security+] SOC sees beaconing to a rare domain over TCP 443 every 60s with JA3 matching a known RAT family. Host EDR is installed but policy is detect-only. Best immediate containment aligned to IR playbooks:

- A. Isolate host at network layer and block outbound C2 while preserving disk for forensics
- B. Reimage without evidence capture
- C. Disable EDR to reduce noise
- D. Publish admin credentials in ticket

**Correct Answer:** A. Isolate host at network layer and block outbound C2 while preserving disk for forensics

## 93. [Security+] A database stores credit card PANs. Policy requires that even DBAs cannot read PANs without a business token. Which primitive best matches “need to know” for confidentiality at the application layer?

- A. Transparent Data Encryption with role-based views / tokenization separating duties
- B. MD5 checksums on PAN column
- C. RAID 10 only
- D. Longer VARCHAR field

**Correct Answer:** A. Transparent Data Encryption with role-based views / tokenization separating duties

## 94. [Security+] A TLS server presents a certificate signed by a private CA not trusted by mobile devices. Browsers fail. The fastest legitimate fix for a pilot cohort is:

- A. Disable certificate validation in the app
- B. Distribute the org root/intermediate via MDM trusted cert profile or use a public-trusted CA chain
- C. Use self-signed server cert forever
- D. Downgrade to HTTP for pilot

**Correct Answer:** B. Distribute the org root/intermediate via MDM trusted cert profile or use a public-trusted CA chain

## 95. [Security+] An architect argues AES-GCM for an API payload because it provides authenticated encryption. What threat class is primarily reduced versus AES-CBC without MAC?

- A. Silent ciphertext tampering leading to oracle/decryption issues
- B. BGP hijacks only
- C. Physical tailgating
- D. UPS battery sulfation

**Correct Answer:** A. Silent ciphertext tampering leading to oracle/decryption issues

## 96. [Security+] A company’s primary DNS resolver is DDoSed. Internal apps cannot resolve names though L3 connectivity remains. Which CIA pillar is primarily impacted for dependent services?

- A. Confidentiality of DNS packets only
- B. Availability (name resolution service)
- C. Integrity of BGP AS_PATH only
- D. Non-repudiation of zone transfers

**Correct Answer:** B. Availability (name resolution service)

## 97. [Security+] A public API returns verbose stack traces including internal library versions. A scanner correlates versions to CVEs. What weakness class is this?

- A. Information disclosure aiding targeted exploitation
- B. Perfect forward secrecy failure
- C. Kerberos double-hop
- D. Immutable backup violation

**Correct Answer:** A. Information disclosure aiding targeted exploitation

## 98. [Security+] A supply-chain compromise replaces a popular npm package minor version with credential-stealing code. Best detective control in CI/CD?

- A. Disable package lockfiles
- B. Dependency pinning + integrity hashes (lockfile) + SCA/subresource reputation scanning + code review for version bumps
- C. Allow any semver range to float
- D. Store npm token in client JS

**Correct Answer:** B. Dependency pinning + integrity hashes (lockfile) + SCA/subresource reputation scanning + code review for version bumps

## 99. [Security+] A phishing kit uses reverse proxy (evilginx-style) to harvest session cookies post-login. MFA push was approved by the victim. Strongest additional control:

- A. Phishing-resistant MFA (FIDO2/WebAuthn) or risk-based step-up tied to origin
- B. Disable HTTPS to see traffic
- C. Use SMS OTP only
- D. Longer passwords only

**Correct Answer:** A. Phishing-resistant MFA (FIDO2/WebAuthn) or risk-based step-up tied to origin

## 100. [Security+] A cloud admin binds an overly permissive IAM policy: s3:* on * for a CI role. An attacker steals OIDC token for that role. What design principle was violated?

- A. Separation of duties for printers
- B. Least privilege / scope minimization for cloud identities
- C. RAID parity planning
- D. Color calibration

**Correct Answer:** B. Least privilege / scope minimization for cloud identities

## 101. [Security+] A Kubernetes cluster exposes the API server to 0.0.0.0/0 with certificate auth only. Attackers scan and attempt client cert brute force. Hardening priority:

- A. Allowlist source IPs/VPN, enable strong authn/authz, audit RBAC, and disable anonymous access
- B. Open 10250 to the internet for convenience
- C. Share kubeconfig in Slack
- D. Use default service account cluster-admin for all pods

**Correct Answer:** A. Allowlist source IPs/VPN, enable strong authn/authz, audit RBAC, and disable anonymous access

## 102. [Security+] An org implements SCIM provisioning from IdP to SaaS. Deprovisioning fails silently for 30 days. What risk increases most?

- A. Orphaned authorized accounts (confidentiality/integrity) for departed users
- B. Faster DHCP leases
- C. GPU coil whine
- D. CRT convergence

**Correct Answer:** A. Orphaned authorized accounts (confidentiality/integrity) for departed users

## 103. [Security+] A WAF rule blocks SQLi patterns but developers concatenate user input into OS commands on the app server. What gap exists?

- A. WAF does not fix command injection class vulnerabilities in application code
- B. WAF replaces need for patching
- C. OS commands cannot be exploited on Linux
- D. Input validation is illegal

**Correct Answer:** A. WAF does not fix command injection class vulnerabilities in application code

## 104. [Security+] A ransomware note appears at 08:05. Backups last night completed. Immutable object storage shows backup objects deleted at 07:50. What tactic is indicated?

- A. Backup destruction / anti-recovery prior to encryption event
- B. Legitimate GDPR erasure
- C. DHCP renewal
- D. RAID scrub

**Correct Answer:** A. Backup destruction / anti-recovery prior to encryption event

## 105. [Security+] A security architect compares encrypting file names on disk versus only file contents. The threat model includes attackers browsing directory trees offline from stolen drives. Which statement is most accurate?

- A. Filename encryption (or full-volume encryption with proper scope) reduces metadata leakage; content-only crypto may still leak structure
- B. File names never contain sensitive information
- C. NTFS permissions protect stolen drives
- D. EFS cannot encrypt individual files

**Correct Answer:** A. Filename encryption (or full-volume encryption with proper scope) reduces metadata leakage; content-only crypto may still leak structure

## 106. [Security+] A developer stores bcrypt hashes of passwords with per-user salts and cost factor 12. An attacker steals the DB offline. What property still holds versus plaintext storage?

- A. Hashes slow guessing but confidentiality of passwords depends on work factor + password entropy + breach response
- B. bcrypt makes passwords impossible to crack
- C. Salts encrypt passwords
- D. bcrypt provides non-repudiation to courts without any process

**Correct Answer:** A. Hashes slow guessing but confidentiality of passwords depends on work factor + password entropy + breach response

## 107. [Security+] A CISO asks which control proves a signed PDF contract was not altered after signing. Best answer:

- A. AES-256 encryption of the PDF only
- B. Digital signature using asymmetric crypto where verifier trusts the signer’s public key / chain
- C. ZIP compression
- D. Watermarking with company logo

**Correct Answer:** B. Digital signature using asymmetric crypto where verifier trusts the signer’s public key / chain

## 108. [Security+] An availability incident: DDoS saturates ISP bandwidth. Which compensating control is most relevant while under attack?

- A. Increase password complexity on laptops
- B. Upstream scrubbing / CDN / ISP anti-DDoS with rerouting and rate controls
- C. Disable MFA for help desk
- D. Delete SIEM to save bandwidth

**Correct Answer:** B. Upstream scrubbing / CDN / ISP anti-DDoS with rerouting and rate controls

## 109. [Security+] A public site reflects user input into HTML without encoding. A researcher executes alert(1) in victims’ browsers. Primary vulnerability class:

- A. Stored XSS
- B. Reflected XSS (or DOM XSS variant depending on sink)
- C. CSRF only
- D. LDAP injection

**Correct Answer:** B. Reflected XSS (or DOM XSS variant depending on sink)

## 110. [Security+] An attacker with valid low-privilege DB credentials uses stacked queries to enable xp_cmdshell. Which weakness enabled OS command execution?

- A. Broken access control / excessive DB privileges + dangerous features not hardened
- B. TLS 1.3 downgrade
- C. Weak monitor contrast
- D. Incorrect fiber polish only

**Correct Answer:** A. Broken access control / excessive DB privileges + dangerous features not hardened

## 111. [Security+] An enterprise deploys private keys in an HSM and performs TLS termination on an LB that only receives wrapped keys—not raw private key export. What benefit is emphasized?

- A. Keys remain in higher-assurance hardware with tamper controls vs filesystem PEM files
- B. HSM removes need for TLS certificates
- C. HSM guarantees application code is safe
- D. HSM stores plaintext passwords by design

**Correct Answer:** A. Keys remain in higher-assurance hardware with tamper controls vs filesystem PEM files

## 112. [Security+] OAuth2 authorization code flow with PKCE is recommended for native mobile apps primarily because:

- A. It prevents public clients from needing any authentication
- B. It mitigates authorization code interception risks on mobile OS redirect handlers
- C. PKCE removes TLS requirement
- D. PKCE is only for SAML

**Correct Answer:** B. It mitigates authorization code interception risks on mobile OS redirect handlers

## 113. [Security+] Integrity monitoring on a web server detects unexpected change to index.html. Site still serves content. First containment thought for defacement/hostile takeover:

- A. Ignore if TLS is enabled
- B. Take offline/snapshot, validate backups, rotate creds, review WAF and deployment pipeline for compromise path
- C. Increase RAM
- D. Disable file integrity monitoring to stop alerts

**Correct Answer:** B. Take offline/snapshot, validate backups, rotate creds, review WAF and deployment pipeline for compromise path

## 114. [Security+] A pen tester extracts an encrypted zip with known weak password policy hints. They run offline dictionary attack. What design failed?

- A. Human-chosen short passwords defeat entropy assumptions even with zip crypto
- B. ZIP cannot be encrypted
- C. AES cannot be attacked offline
- D. Hashes inside zip prevent cracking

**Correct Answer:** A. Human-chosen short passwords defeat entropy assumptions even with zip crypto

## 115. [Security+] Which scenario best illustrates non-repudiation in a contract workflow?

- A. User deletes local browser cache
- B. Signer’s digital signature verified by third parties using PKI and auditable timestamping
- C. AES-GCM encryption of contract at rest only
- D. VPN tunnel confidentiality

**Correct Answer:** B. Signer’s digital signature verified by third parties using PKI and auditable timestamping

## 116. [Security+] A help desk analyst runs a “password checker” EXE sent by a user. AV misses it. The EXE exfiltrates creds. Root cause class:

- A. Social engineering + unsafe execution of untrusted binaries + endpoint control gaps
- B. BGP dampening
- C. Incorrect DNS TTL
- D. Fiber chromatic dispersion

**Correct Answer:** A. Social engineering + unsafe execution of untrusted binaries + endpoint control gaps

## 117. [Security+] A fileless malware technique loads malicious logic only in memory using PowerShell remoting. Strongest detective control pairing:

- A. Disable all PowerShell globally without exceptions
- B. PowerShell constrained language / logging + EDR behavioral analytics + least privilege for remoting
- C. Allow WinRM from 0.0.0.0/0
- D. Remove event logs weekly

**Correct Answer:** B. PowerShell constrained language / logging + EDR behavioral analytics + least privilege for remoting

## 118. [Security+] A microservice mesh enforces mTLS between pods. What primary threat is reduced versus plaintext east-west traffic?

- A. Passive sniffing and unauthorized service impersonation on the fabric (within trust model)
- B. Phishing email delivery
- C. UPS battery failure
- D. CRT burn-in

**Correct Answer:** A. Passive sniffing and unauthorized service impersonation on the fabric (within trust model)

## 119. [Security+] An API gateway validates OAuth bearer tokens on every request. This primarily enforces:

- A. Confidentiality of TCP sequence numbers
- B. Authentication/authorization at the edge before traffic reaches services
- C. RAID stripe size selection
- D. Printer DPI

**Correct Answer:** B. Authentication/authorization at the edge before traffic reaches services

## 120. [Security+] A DAST scan flags TLS 1.0 enabled on a legacy load balancer. Compliance forbids legacy TLS. Best remediation path:

- A. Disable TLS 1.0/1.1 after app compatibility testing; prefer TLS 1.2+ with modern cipher suites
- B. Disable HTTPS entirely
- C. Use self-signed only
- D. Lower cipher strength for speed

**Correct Answer:** A. Disable TLS 1.0/1.1 after app compatibility testing; prefer TLS 1.2+ with modern cipher suites

