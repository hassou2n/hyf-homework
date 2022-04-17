const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.get("/calculator/add", (req, res) => {
  const firstNumber = Number(req.query.firstParam);
  const secondNumber = Number(req.query.secondParam);
  if (firstNumber == 0) {
    res.send(`firstNumber is not valid`)
  } else if (secondNumber == 0) {
    res.send(`secondNumber is not valid`)
  } else { res.send(`${firstNumber + secondNumber}`) }
});

app.get("/calculator/Subtract", (req, res) => {
  const firstNumber = Number(req.query.firstParam);
  const secondNumber = Number(req.query.secondParam);
  if (firstNumber == 0) {
    res.send(`firstNumber is not valid`)
  } else if (secondNumber == 0) {
    res.send(`secondNumber is not valid`)
  } else { res.send(`${firstNumber - secondNumber}`) }
});


app.post("/calculator/multiply", (req, res) => {
  const firstNumber = Number(req.query.firstParam);
  const secondNumber = Number(req.query.secondParam);
  if (firstNumber == 0) {
    res.send(`firstNumber is not valid`)
  } else if (secondNumber == 0) {
    res.send(`secondNumber is not valid`)
  } else { res.send(`${firstNumber * secondNumber}`) }
});

app.get("/calculator/div", (req, res) => {
  const firstNumber = Number(req.query.firstParam);
  const secondNumber = Number(req.query.secondParam);
  if (firstNumber == 0) {
    res.send(`firstNumber is not valid`)
  } else if (secondNumber == 0) {
    res.send(`secondNumber is not valid`)
  } else { res.send(`${firstNumber / secondNumber}`) }
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
