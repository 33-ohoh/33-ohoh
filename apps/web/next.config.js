/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  images: {
    domains: [
      "assets.example.com",
      "13.209.16.46",
      "eb1bir7wdc.execute-api.ap-northeast-2.amazonaws.com",
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "assets.example.com",
        port: "",
        pathname:
          "https://eb1bir7wdc.execute-api.ap-northeast-2.amazonaws.com/**",
      },
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};
