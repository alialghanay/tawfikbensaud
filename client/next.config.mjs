/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    API: "https://tawfikbensaud.onrender.com",
    API_URL: "https://tawfikbensaud.onrender.com/api",
  },
  images: {
    domains: ["hxnpjxawxebaldzzohxv.supabase.co"], // Add your Supabase hostname here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hxnpjxawxebaldzzohxv.supabase.co",
        port: "443",
        pathname: "/storage/**",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
