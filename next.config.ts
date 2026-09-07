import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/hello-world',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
