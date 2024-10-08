/**
 * @type {import('next').NextConfig}
 */

/*****************************************************************************
 * SET YOUR CONFIGURATION HERE
 *****************************************************************************/

const webpackBasePath = process.env.SPA_EXP_BASEPATH;

const nextConfig = {
  basePath: webpackBasePath,
  assetPrefix: webpackBasePath,
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
