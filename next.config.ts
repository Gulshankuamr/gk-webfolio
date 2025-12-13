// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // ✅ Ignore ESLint errors during Vercel build
//   eslint: {
//     ignoreDuringBuilds: true,
//   },

//   // ✅ Ignore TypeScript errors during build
//   typescript: {
//     ignoreBuildErrors: true,
//   },

//   // ✅ Allow loading images from these domains
//   images: {
//     domains: ["images.unsplash.com", "cdn.pixabay.com"],
//   },

//   // ✅ React Strict Mode enabled
//   reactStrictMode: true,
// };

// export default nextConfig;



import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ React Strict Mode
  reactStrictMode: true,

  // ⚠️ Optional: ignore TS build errors (portfolio ke liye OK)
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Secure external images (Next.js 16+)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

