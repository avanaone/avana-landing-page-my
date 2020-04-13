module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/price": {page: "/price"},
      "/event": {page: "/event"},
      "/event/[id]": {page: "/event/[id]"},
      "/about-us": {page: "/about-us"},
      "/promo": {page: "/promo"},
      "/promo/[code]": {page: "/promo/[code]"},
      "/packages-detail": {page: "/packages-detail"},
      "/dashboard": {page: "/dashboard"},
      "/avachat": {page: "/avachat"},
      "/webstore": {page: "/webstore"},
      "/reseller": {page: "/reseller"}
    };
  },
};
