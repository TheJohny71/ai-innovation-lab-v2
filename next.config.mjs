/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.css$/i,
        use: ['postcss-loader'],
      });
      return config;
    },
  };
  
  export default nextConfig;