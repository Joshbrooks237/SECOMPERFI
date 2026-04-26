import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-matrix-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "A+ vs Security+ Diagnostic",
  description:
    "80-question CompTIA A+ (220-1201/1202) vs Security+ (SY0-701) diagnostic with domain-weighted scoring and exam-order verdict.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`matrix-terminal ${jetbrainsMono.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-[#000000] font-mono text-[#00ff41] antialiased">
        <div className="matrix-vignette" aria-hidden />
        <div className="matrix-scanlines" aria-hidden />
        {children}
      </body>
    </html>
  );
}
