/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "images.pexels.com",
      "resortcainta.netlify.app",
      "scontent.fceb3-1.fna.fbcdn.net",
      "firebasestorage.googleapis.com"
    ],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
