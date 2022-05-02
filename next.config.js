/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  reactStrictMode: true
}

module.exports = withPWA(nextConfig)
