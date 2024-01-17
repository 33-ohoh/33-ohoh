/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
};

const stylexPlugin = require("@stylexjs/nextjs-plugin");

module.exports = stylexPlugin({
  rootDir: __dirname,
})({});
