/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
};

module.exports = nextConfig;
