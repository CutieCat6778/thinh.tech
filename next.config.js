/** @type {import('next').NextConfig} */
const nextConfig = ({
  reactStrictMode: true,
  siteUrl: process.env.SITE_URL || 'https://thinh.tech',
  generateRobotsTxt: true,
})

module.exports = nextConfig
