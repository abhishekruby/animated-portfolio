/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  // Add this configuration to support @react-three/fiber and @react-three/drei
  experimental: {
    reactRoot: true,
  },
  // Optional: If you're using a custom document component, you may need to add this configuration
  // pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
};

export default nextConfig;