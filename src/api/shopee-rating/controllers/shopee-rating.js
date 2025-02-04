"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const _ = require("lodash");

module.exports = createCoreController("api::shopee-rating.shopee-rating", ({ strapi }) => ({
  async statistics(ctx) {
    try {
      console.log("Fetching Shopee Ratings statistics...");

      // Fetch all ratings (use "star" instead of "rating")
      const reviews = await strapi.entityService.findMany("api::shopee-rating.shopee-rating", {
        fields: ["star"], // ✅ Fetch "star" instead of "rating"
      });

      console.log("Fetched Reviews:", reviews);

      if (!reviews || reviews.length === 0) {
        return ctx.send({ starCounts: {}, total: 0 });
      }

      // Count occurrences of each star rating (1 to 5)
      const starCounts = _.countBy(reviews, "star");

      // Ensure all star ratings (1-5) are present in the response
      const formattedStarCounts = {
        5: starCounts[5] || 0,
        4: starCounts[4] || 0,
        3: starCounts[3] || 0,
        2: starCounts[2] || 0,
        1: starCounts[1] || 0,
      };

      console.log("Returning statistics:", formattedStarCounts);

      return ctx.send({
        starCounts: formattedStarCounts,
        total: reviews.length,
      });
    } catch (error) {
      console.error("Error fetching review stats:", error);
      return ctx.internalServerError("Failed to fetch review statistics.");
    }
  },
}));