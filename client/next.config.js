/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["@mui/x-charts"],
  env: {
    API: process.env.API,
  },
  experimental: {},
  reactStrictMode: false,
};

module.exports = nextConfig;
