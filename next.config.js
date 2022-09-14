/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "platform-lookaside.fbsbx.com",
      "picsum.photos",
    ],
  },
};

const withImages = require("next-images");
module.exports = withImages();

module.exports = nextConfig;
