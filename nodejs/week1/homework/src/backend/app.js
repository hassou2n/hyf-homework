const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals.json");
const reservations = require("./data/reservations.json");
const reviews = require("./data/reviews.json");

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  response.send(meals);
});

const mealsJS = meals.map((meal) => {
  meal.reviews = [];
  reviews.filter((reviews) => {
    if (meal.id === reviews.mealId){
      meal.reviews.push(reviews)
    }
  });
  return meal;
});

app.get("/cheap-meals", async (request, response) => {
  response.send(mealsJS.filter((meal) => meal.price < 50));
});
app.get("/large-meals", async (request, response) => {
  response.send(mealsJS.filter((meal) => meal.maxNumberOfGuests > 10));
});
app.get("/meal", async (request, response) => {
  response.send(mealsJS[Math.floor(Math.random() * mealsJS.length)]);
});

app.get("/reservations", async (request, response) => {
  response.send(reservations);
});
app.get("/reservation", async (request, response) => {
  response.send(reservations[Math.floor(Math.random() * reservations.length)]);
});

module.exports = app;