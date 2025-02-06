"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const _ = require("lodash");

module.exports = createCoreController("api::shopee-rating.shopee-rating", ({ strapi }) => ({
  async statistics(ctx) {
    try {
      console.log("Fetching Shopee Ratings statistics...");

      const { itemId } = ctx.query; // Get `itemId` from query parameters

      if (!itemId) {
        console.warn("No itemId provided, returning default stats.");
        return ctx.send({
          starCounts: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
          total: 0,
        });
      }

      console.log("Filtering statistics for itemId:", itemId);

      // Fetch ratings filtered by itemId
      const reviews = await strapi.entityService.findMany("api::shopee-rating.shopee-rating", {
        fields: ["star"],
        filters: { itemId }, // ✅ Only fetch ratings for the provided itemId
      });

      console.log("Fetched Reviews for itemId:", itemId, reviews.length);

      if (!reviews || reviews.length === 0) {
        return ctx.send({
          starCounts: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
          total: 0,
        });
      }

      // Count occurrencess of each star rating (1 to 5)
      const starCounts = _.countBy(reviews, "star");

      // Ensure all star ratings (1-5) are included
      const formattedStarCounts = {
        5: starCounts[5] || 0,
        4: starCounts[4] || 0,
        3: starCounts[3] || 0,
        2: starCounts[2] || 0,
        1: starCounts[1] || 0,
      };

      console.log("Returning statistics for itemId:", itemId, formattedStarCounts);

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