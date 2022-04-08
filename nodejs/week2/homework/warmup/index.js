const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/numbers/add", (req, res) => {
    const firstNumber = req.query.first;
    const secondNumber = req.query.second;
    res.send(`${firstNumber + secondNumber}`);
  });

  // localhost:3000/numbers/add?first=3&second=7

  app.get("/numbers/multiply/:first/:second", (req, res) => {
    const firstNumber = req.params.first;
    const secondNumber = req.params.second;
    res.send(`${firstNumber * secondNumber}`);
  });

  // http://localhost:3000/numbers/multiply/9/7

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
