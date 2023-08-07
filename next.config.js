/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return  [
      {
        source: '/',
        destination: `https://www.pocket-change.jp/userguide`,
      },
    ]
  },
}

module.exports = nextConfig
