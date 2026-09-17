import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },

  devIndicators: false,
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;
