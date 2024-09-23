/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STRAPI_BASE_URL: process.env.STRAPI_BASE_URL,
  },
};

export default nextConfig;
