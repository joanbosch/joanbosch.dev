/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/joanbosch.github.io",
  assetPrefix: "/joanbosch.github.io",
}

module.exports = nextConfig
