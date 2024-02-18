/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true, // 301 redirection
      },
    ];
  },
  reactStrictMode: false,
};

export default nextConfig;
