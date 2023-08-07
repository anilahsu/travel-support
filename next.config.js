/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return  [
      {
        source: '/',
        destination: `https://www.pocket-change.jp/userguide`,
      },
    ]
  },
}

module.exports = nextConfig
