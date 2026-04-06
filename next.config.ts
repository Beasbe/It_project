/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // вместо 'export'
  images: {
    // Для standalone можно оставить remotePatterns, убрать unoptimized (опционально)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
    ],
  },
  // Если нужен basePath — оставьте, но для standalone обычно не требуется, если не хостите в подпапке
  // basePath: '/It_project',
  // trailingSlash: true,
};

module.exports = nextConfig;
