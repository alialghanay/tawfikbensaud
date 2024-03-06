/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ["en", "ar"],
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
