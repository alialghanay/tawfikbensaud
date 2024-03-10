/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "http://localhost:1337/",
        port: "",
        pathname: "**",
      },
    ],
  },
  i18n: {
    locales: ["ar", "en-US"],
    defaultLocale: "ar",
  },
  env: {
    API: process.env.API,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/",
        permanent: true,
      },
    ];
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
