const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
  response.send(reservations);

  router.get("/:id", async (request, response) => {
    const reservationsId = request.params.id;
    const resultForReservations = reservations.filter((meal) => meal.id == reservationsId)
    response.send(resultForReservations)
  });

  try {
    console.log(reservations);
    console.log("in /api/reservations");
  } catch (error) {
    throw error;
  }
});

module.exports = router;
