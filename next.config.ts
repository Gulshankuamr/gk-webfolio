import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Ignore ESLint errors during Vercel build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Allow loading images from these domains
  images: {
    domains: ["images.unsplash.com", "cdn.pixabay.com"],
  },

  // ✅ React Strict Mode enabled
  reactStrictMode: true,
};

export default nextConfig;
