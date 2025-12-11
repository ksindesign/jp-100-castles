import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'demo.smart-jp.net/tabipal',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/:slug',
        destination: '/page/:slug',
      },
    ];
  },
};

export default nextConfig;
