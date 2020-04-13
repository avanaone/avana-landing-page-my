module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/price": {page: "/price"},
      "/event": {page: "/event"},
      "/event/1": {page: "/event/[id]", query: { id: '1' }},
      "/about-us": {page: "/about-us"},
      "/promo": {page: "/promo"},
      "/promo/PROMOCERIA": {page: "/promo/[code]", query: {code: 'PROMOCERIA'}},
      "/packages-detail": {page: "/packages-detail"},
      "/dashboard": {page: "/dashboard"},
      "/avachat": {page: "/avachat"},
      "/webstore": {page: "/webstore"},
      "/reseller": {page: "/reseller"}
    };
  },
};
