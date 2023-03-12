/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placedog.net'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./lib/cache')
    }

    return config
  },

}

module.exports = nextConfig
