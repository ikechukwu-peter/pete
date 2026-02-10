/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
