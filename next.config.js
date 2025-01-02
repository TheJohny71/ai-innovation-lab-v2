/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the GitHub Pages specific configuration
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
