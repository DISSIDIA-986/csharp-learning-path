/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages 部署到子路径需要配置
  basePath: '/csharp-learning-path',
  assetPrefix: '/csharp-learning-path',
}

module.exports = nextConfig
