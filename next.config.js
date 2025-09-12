/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  trailingSlash: true,
  assetPrefix: '',
}

module.exports = nextConfig
