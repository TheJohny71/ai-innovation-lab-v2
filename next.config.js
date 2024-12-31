/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ai-innovation-lab-v2',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Add this to ensure consistent build output
  generateBuildId: async () => {
    return process.env.GITHUB_SHA || 'development'
  },
}

module.exports = nextConfig
