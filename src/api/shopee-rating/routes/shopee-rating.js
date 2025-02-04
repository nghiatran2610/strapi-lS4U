"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/shopee-ratings/statistics",
      handler: "shopee-rating.statistics",
      config: {
        auth: false, // Change to true if authentication is required
      },
    },
  ],
};
