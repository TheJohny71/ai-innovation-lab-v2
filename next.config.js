/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimized image configuration for Vercel
  images: {
    domains: [], // Add any external image domains you use
    formats: ['image/avif', 'image/webp'],
  },
  // Enable React strict mode for better development
  reactStrictMode: true,
  // Specify the output type for better performance
  output: 'standalone',
  // Optimize for Vercel deployment
  poweredByHeader: false,
};

export default nextConfig;
