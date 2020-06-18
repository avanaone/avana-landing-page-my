require('next/dynamic');
const withPlugins = require('next-compose-plugins');
const withStyles = require('@webdeb/next-styles');
const optimizedImages = require('next-optimized-images');
const path = require('path');

const nextConfig = {
  optimizeImagesInDev: true,
  exportTrailingSlash: true,
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
      '/about-us': { page: '/about-us' },
      '/price': { page: '/price' },
      // '/packages-detail': { page: '/packages-detail' },
      '/event': { page: '/event' },
      // '/event/:id': { page: '/event/[id]' },
      // '/promo': { page: '/promo' },
      // '/promo/:code': { page: '/promo/[code]' },
      '/ebook': { page: '/ebook' },
      '/dashboard': { page: '/dashboard' },
      '/avachat': { page: '/avachat' },
      '/webstore': { page: '/webstore' },
      '/reseller': { page: '/reseller' },
    };

    const getPromos = await require('./json/promo.json');
    const getEvents = await require('./json/event.json');

    // getPromos.map((promo) => {
    //   paths[`promo/${promo.code}`] = {
    //     page: 'promo/[code]',
    //     query: { code: promo.code },
    //   };
    // });

    getEvents.map((event) => {
      paths[`event/${event.id}`] = {
        page: 'event/[id]',
        query: { id: event.id },
      };
    });

    return paths;
  },
  webpack: (config, options) => {
    config.resolve.alias['public'] = path.join(__dirname, 'public');
    config.module.rules.push({
      test: /\.(jpe?g|png)$/i,
      use: [
        {
          loader: 'responsive-loader',
          options: {
            adapter: require('responsive-loader/sharp'),
            sizes: [300, 500],
          },
        },
      ],
    });

    return config;
  },
};

module.exports = withPlugins(
  [
    [optimizedImages],
    [
      withStyles,
      {
        sass: true,
        modules: true,
      },
    ],
  ],
  nextConfig
);
