const path = require("path");

const _additionalData = `@use 'abstracts' as *;`;

const additionalData = (content) => {
  return `${_additionalData}\n${content}`;
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    additionalData,
  },
};

module.exports = nextConfig;
