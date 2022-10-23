/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/joanbosch.dev",
  assetPrefix: "/joanbosch.dev",
}

module.exports = nextConfig
