/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable React strict mode to avoid double hydration issues
  reactStrictMode: false,
}

module.exports = nextConfig