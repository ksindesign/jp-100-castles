import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ↓ next build を実行する際に Static Export を利用します。
  output: 'export',
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
};

export default nextConfig;
