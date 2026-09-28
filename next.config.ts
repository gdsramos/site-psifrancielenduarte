import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const githubPagesBasePath = "/site-psifrancielenduarte";

const nextConfig: NextConfig = {
  assetPrefix: isGithubPages ? githubPagesBasePath : undefined,
  basePath: isGithubPages ? githubPagesBasePath : undefined,
  experimental: {
    cpus: 1,
    parallelServerBuildTraces: false,
    parallelServerCompiles: false,
    webpackBuildWorker: false,
    workerThreads: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  poweredByHeader: false,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack: (config) => config,
};

export default nextConfig;
