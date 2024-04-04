/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    API: process.env.API,
    API_URL: process.env.API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
