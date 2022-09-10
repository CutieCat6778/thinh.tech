/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['imagecdn.app', 'cdn.thinh.tech'],
  },
}

module.exports = nextConfig
