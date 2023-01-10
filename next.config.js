/** @type {import('next').NextConfig} */
const NextWorkboxWebpackPlugin = require('next-workbox-webpack-plugin');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, distDir }) => {
    if (!isServer && !dev) {
      config.plugins.push(
        new NextWorkboxWebpackPlugin({
          distDir,
          buildId,
          swDestRoot: './static/',
          swURLRoot: '/static',
          precacheManifest: true,
        })
      );
    }

    return config;
  }
}

module.exports = nextConfig
