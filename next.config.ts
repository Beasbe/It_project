/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Включает статический экспорт
  images: {
    unoptimized: true, // Нужно для GitHub Pages
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
        pathname: '/**',
      },
      // Добавь другие хосты если нужно
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/**',
      },
    ],
  },

  basePath: '/It_project',
  trailingSlash: true,


}

module.exports = nextConfig