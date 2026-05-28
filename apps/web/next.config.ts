import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@GitSync/db"],
  serverExternalPackages: ["@prisma/client"],
};

export default nextConfig;
