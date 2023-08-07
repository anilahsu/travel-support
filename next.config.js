/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/',
          destination: `https://www.pocket-change.jp/userguide`,
        },
      ],
    }
  },
}

module.exports = nextConfig
