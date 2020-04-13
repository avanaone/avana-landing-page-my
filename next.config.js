require("next/dynamic");

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function () {
    const paths = {
      "/": { page: "/" },
      "/about-us": { page: "/about-us" },
      "/price": { page: "/price" },
      "/packages-detail": { page: "/packages-detail" },
      "/event": { page: "/event" },
      "/promo": { page: "/promo" },
      "/dashboard": { page: "/dashboard" },
      "/avachat": { page: "/avachat" },
      "/webstore": { page: "/webstore" },
      "/reseller": { page: "/reseller" },
    };

    const getPromo = await require("./json/promo.json");
    const getEvents = await require("./json/event.json");

    getPromo.map((promo) => {
      paths[`promo/${promo.code}`] = {
        page: "promo/[code]",
        query: { code: promo.code },
      };
    });

    getEvents.map((event) => {
      paths[`event/${event.id}`] = {
        page: "event/[id]",
        query: { id: event.id },
      };
    });

    return paths;
  },
};
