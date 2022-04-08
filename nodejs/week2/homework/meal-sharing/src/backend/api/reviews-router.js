const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", async (request, response) => {
  response.send(reviews)

  router.get("/:id", async (request, response) => {
    const reviewsId = request.params.id;
    const resultForReviews = reviews.filter((meal) => meal.id == reviewsId)
    response.send(resultForReviews)
  });
  try {
    console.log(reviews);
    console.log("in /api/reviews");
  } catch (error) {
    throw error;
  }
});

module.exports = router;
