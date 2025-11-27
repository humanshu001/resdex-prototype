/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during Next.js production builds
    // Useful when you want the build to succeed even if lint errors exist
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
