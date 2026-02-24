/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/v0-refrigerated-gel-landing-page' : ''

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: isProd ? '/v0-refrigerated-gel-landing-page/' : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
