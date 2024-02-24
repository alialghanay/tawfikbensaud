/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true, // 301 redirection
      },
    ];
  },
  reactStrictMode: false,
};

export default nextConfig;