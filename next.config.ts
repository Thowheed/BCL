import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ 
  output: 'export',
  images: {
    domains: ['api.purfull.com'], 
    unoptimized: true
  },
};

export default nextConfig;
