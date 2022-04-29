const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  let maxPrice = request.query.maxPrice;
  let title = request.query.title;
  let createdAfter = request.query.createdAfter;
  let limit = request.query.limit;
  if (maxPrice) {
    const resultForMaxPrice = meals.filter((meal) => meal.price < maxPrice)
    response.send(resultForMaxPrice);
  } else if (title) {
    const resultForTitle = meals.filter((meal) => meal.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
    )
    response.send(resultForTitle)
  } else if (createdAfter) {
    const resultForCreatedAfter = meals.filter((meal) => meal.createdAt.valueOf > createdAfter)
    response.send(resultForCreatedAfter)
  }
  else {
    try {
      console.log(meals);
      console.log("in /api/meals");
      response.send(meals)
    } catch (error) {
      throw error;
    }
  }
});

router.get("/:id", async (request, response) => {
  const mealsId = request.params.id
  const resultForMealsId = meals.filter((meal) => meal.id == mealsId)
  response.send(resultForMealsId)
});

module.exports = router;
