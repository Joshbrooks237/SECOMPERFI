/** Port drill deck — CompTIA A+ / Security+ style reference ports only. */

export interface PortFlashcard {
  id: string;
  /** Shown in SERVICE_TO_PORT mode and on answer reveal */
  portDisplay: string;
  /** Primary service name for PORT_TO_SERVICE mode */
  serviceName: string;
}

export const PORT_FLASHCARDS: PortFlashcard[] = [
  { id: "p22", portDisplay: "TCP 22", serviceName: "SSH (secure remote shell)" },
  { id: "p23", portDisplay: "TCP 23", serviceName: "Telnet (cleartext remote terminal)" },
  { id: "p25", portDisplay: "TCP 25", serviceName: "SMTP (mail transfer)" },
  { id: "p53", portDisplay: "TCP/UDP 53", serviceName: "DNS (name resolution)" },
  { id: "p67", portDisplay: "UDP 67", serviceName: "DHCP server (bootstrap offers)" },
  { id: "p68", portDisplay: "UDP 68", serviceName: "DHCP client (bootstrap requests)" },
  { id: "p69", portDisplay: "UDP 69", serviceName: "TFTP (trivial file transfer)" },
  { id: "p80", portDisplay: "TCP 80", serviceName: "HTTP (web, cleartext)" },
  { id: "p110", portDisplay: "TCP 110", serviceName: "POP3 (mail retrieval)" },
  { id: "p123", portDisplay: "UDP 123", serviceName: "NTP (network time)" },
  { id: "p143", portDisplay: "TCP 143", serviceName: "IMAP (mail access)" },
  { id: "p161", portDisplay: "UDP 161", serviceName: "SNMP (agent queries)" },
  { id: "p162", portDisplay: "UDP 162", serviceName: "SNMP traps (to manager)" },
  { id: "p389", portDisplay: "TCP/UDP 389", serviceName: "LDAP (directory services)" },
  { id: "p443", portDisplay: "TCP 443", serviceName: "HTTPS (TLS web)" },
  { id: "p445", portDisplay: "TCP 445", serviceName: "SMB (Windows file sharing)" },
  { id: "p587", portDisplay: "TCP 587", serviceName: "SMTP submission (authenticated mail client relay)" },
  { id: "p636", portDisplay: "TCP 636", serviceName: "LDAPS (LDAP over TLS)" },
  { id: "p993", portDisplay: "TCP 993", serviceName: "IMAPS (IMAP over TLS)" },
  { id: "p995", portDisplay: "TCP 995", serviceName: "POP3S (POP3 over TLS)" },
  { id: "p1433", portDisplay: "TCP 1433", serviceName: "Microsoft SQL Server" },
  { id: "p3306", portDisplay: "TCP 3306", serviceName: "MySQL / MariaDB" },
  { id: "p3389", portDisplay: "TCP 3389", serviceName: "RDP (Remote Desktop Protocol)" },
  { id: "p5985", portDisplay: "TCP 5985", serviceName: "WinRM (HTTP listener)" },
  { id: "p5986", portDisplay: "TCP 5986", serviceName: "WinRM over HTTPS" },
  { id: "p8080", portDisplay: "TCP 8080", serviceName: "HTTP alternate / common proxy dev port" },
  { id: "p8443", portDisplay: "TCP 8443", serviceName: "HTTPS alternate / app TLS" },
  { id: "p9200", portDisplay: "TCP 9200", serviceName: "Elasticsearch HTTP API" },
  { id: "p20", portDisplay: "TCP 20", serviceName: "FTP data channel" },
  { id: "p21", portDisplay: "TCP 21", serviceName: "FTP control channel" },
];

export const PORT_FLASHCARD_COUNT = PORT_FLASHCARDS.length;
