import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/book",
        destination: "https://calendly.com/arthur-serafimdogtraining/15min",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
