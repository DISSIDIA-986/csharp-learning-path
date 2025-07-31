/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // 配置基础路径，如果部署到子路径需要设置
  // basePath: '/csharp-learning-path',
  // assetPrefix: '/csharp-learning-path',
}

module.exports = nextConfig
