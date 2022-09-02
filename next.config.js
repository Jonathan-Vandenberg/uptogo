/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = nextConfig;

const withVideos = require("next-videos");

module.exports = withVideos();
