/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["ru-RU"],
    defaultLocale: "ru-RU",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "swiperjs.com",
        pathname: "/demos/images/**",
      },
    ],
  },
  transpilePackages: ["@pqina/pintura", "@pqina/react-pintura"],
};

export default nextConfig;
