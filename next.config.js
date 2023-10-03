/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Handle canvas.node
    config.module.rules.push({ test: /\.node$/, use: "raw-loader" });

    if (!isServer) config.externals.push("canvas");
    return config;
  },
};

module.exports = nextConfig;
