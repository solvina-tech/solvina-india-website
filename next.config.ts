import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",

  basePath: basePath || undefined,

  assetPrefix: basePath || undefined,

  images: {
    unoptimized: true,
  },

  devIndicators: false,

  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;