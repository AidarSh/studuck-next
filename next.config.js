/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "/ios-glyphs/30/**",
      },
      {
        protocol: "https",
        hostname: "kpfu.ru",
      },
      {
        protocol: "https",
        hostname: "sun6-23.userapi.com",
      },
      {
        protocol: "https",
        hostname: "tadviser.ru",
      },
      {
        protocol: "https",
        hostname: "kgeu.ru",
      },
      {
        protocol: "https",
        hostname: "kai.ru",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "uel.kgasu.ru",
      },
    ],
  },
};

module.exports = nextConfig;
