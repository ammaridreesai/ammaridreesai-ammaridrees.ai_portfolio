/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {},
    output: "export",
    trailingSlash: true,
    reactStrictMode: false,
    images: {
      unoptimized: true,
    },
  }
  
  export default nextConfig