import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.BASE_PATH && process.env.BASE_PATH !== "/" ? process.env.BASE_PATH : undefined,
};

export default nextConfig;
