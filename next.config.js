/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn-images-1.medium.com", "cdn.jsdelivr.net"],
  },
};

module.exports = nextConfig;
