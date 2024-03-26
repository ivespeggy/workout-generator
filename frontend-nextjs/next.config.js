/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      host: process.env.NEXT_PUBLIC_SITE_URL,
    },
  };
  
module.exports = nextConfig;