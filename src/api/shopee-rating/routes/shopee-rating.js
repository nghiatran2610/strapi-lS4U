"use strict";

module.exports = {
  routes: [
    // ✅ Custom endpoint for review statistics
    {
      method: "GET",
      path: "/shopee-ratings/statistics",
      handler: "shopee-rating.statistics",
      config: {
        auth: false, // Set to true if authentication is required
      },
    },

    // ✅ Restore GET /shopee-ratings (Default "find" method)
    {
      method: "GET",
      path: "/shopee-ratings",
      handler: "shopee-rating.find",
      config: {
        auth: false,
      },
    },

    // ✅ Restore GET /shopee-ratings/:id (Find One)
    {
      method: "GET",
      path: "/shopee-ratings/:id",
      handler: "shopee-rating.findOne",
      config: {
        auth: false,
      },
    },

    // ✅ Restore POST /shopee-ratings (Create a Review)
    {
      method: "POST",
      path: "/shopee-ratings",
      handler: "shopee-rating.create",
      config: {
        auth: false, // Change to true if you want authentication
      },
    },

    // ✅ Restore PUT /shopee-ratings/:id (Update a Review)
    {
      method: "PUT",
      path: "/shopee-ratings/:id",
      handler: "shopee-rating.update",
      config: {
        auth: false, // Change to true if you want authentication
      },
    },

    // ✅ Restore DELETE /shopee-ratings/:id (Delete a Review)
    {
      method: "DELETE",
      path: "/shopee-ratings/:id",
      handler: "shopee-rating.delete",
      config: {
        auth: false, // Change to true if you want authentication
      },
    },
  ],
};
