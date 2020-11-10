require("next/dynamic");
const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withStyles = require("@webdeb/next-styles");
const optimizedImages = require("next-optimized-images");
const path = require("path");

const nextConfig = {
  optimizeImagesInDev: true,
  trailingSlash: true,
  exportPathMap: async function () {
    const paths = {
      "/": { page: "/" },
      "/about-us": { page: "/about-us" },
      "/privacy-policy": { page: "/privacy-policy" },
      "/price": { page: "/price" },
      // '/packages-detail': { page: '/packages-detail' },
      "/event": { page: "/event" },
      // '/event/:id': { page: '/event/[id]' },
      // '/promo': { page: '/promo' },
      // '/promo/:code': { page: '/promo/[code]' },
      "/career": { page: "/career" },
      "/ebook": { page: "/ebook" },
      "/dashboard": { page: "/dashboard" },
      "/avachat": { page: "/avachat" },
      "/whatsapp-commerce": { page: "/whatsapp-commerce" },
      "/liveautoreply": { page: "/liveautoreply" },
      "/webstore": { page: "/webstore" },
      // '/reseller': { page: '/reseller' },
    };

    const getPromos = await require("./json/promo.json");
    const getEvents = await require("./json/event.json");

    // getPromos.map((promo) => {
    //   paths[`promo/${promo.code}`] = {
    //     page: 'promo/[code]',
    //     query: { code: promo.code },
    //   };
    // });

    // getEvents.map((event) => {
    //   paths[`event/${event.id}`] = {
    //     page: 'event/[id]',
    //     query: { id: event.id },
    //   };
    // });

    return paths;
  },
  webpack: (config, options) => {
    config.resolve.alias["public"] = path.join(__dirname, "./public");
    config.module.rules.push({
      test: /\.(jpe?g|png)$/i,
      use: [
        {
          loader: "responsive-loader",
          options: {
            adapter: require("responsive-loader/sharp"),
            sizes: [300, 500],
          },
        },
      ],
    });

    return config;
  },
};

module.exports = withPlugins(
  [[optimizedImages]],
  withStyles,
  withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 2,
    },
  }),
  nextConfig
);
