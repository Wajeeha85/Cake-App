import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com","apipics.s3.amazonaws.com"], // ✅ Add allowed image domain here
  },
};

export default nextConfig;
