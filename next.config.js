/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
   /**
     * Using the tailingSlash option is recommended when exporting it to S3
     * since S3 is only able to rewrite routes to /index.html
     */
   trailingSlash: true,
};

module.exports = nextConfig;
