/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    API: "http://localhost:1337",
    API_URL: "http://localhost:1337/api",
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
