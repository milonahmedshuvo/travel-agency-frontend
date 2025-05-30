// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

module.exports = {
  images: {
    // loader: "custom",
    // loaderFile: "./src/components/ui/image-loader.tsx",

    // domains: ["nyc3.digitaloceanspaces.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
      },
    ],
  },
};
