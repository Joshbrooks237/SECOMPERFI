import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Smaller deploy image for Railway/Docker-style hosts. Safe for Vercel. */
  output: "standalone",
};

export default nextConfig;
