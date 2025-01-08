/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/i,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    })
    return config
  },
}

module.exports = nextConfig