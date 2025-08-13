const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  // Explicitly configure Turbopack (new stable syntax)
  turbopack: {
    // Add any Turbopack-specific config here if needed
  }
};

module.exports = withMDX(nextConfig);
