// Age-ify (A future age calculator)
let yearOfBirth = 1999;
let yearFuture = 2060;

let age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in " + yearFuture + ".");

// Goodboy-Oldboy (A dog age calculator)

let dogYearOfBirth = 2021;
let dogYearFuture = 2031;
let dogYear = dogYearOfBirth - dogYearFuture;

const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  dogYear = (dogYearOfBirth - dogYearFuture) * 10;
  console.log(
    "Your dog will be " + dogYear + " human years old in " + dogYearFuture + "."
  );
} else {
  dogYear = dogYearOfBirth - dogYearFuture;
  console.log(
    "Your dog will be " + dogYear + " years old in " + dogYearFuture + "."
  );
}

// Housey pricey (A house price estimator)

let firstWords = [
  "Easy",
  "Awesome",
  "Corporate",
  "Admit",
  "Age",
  "Again",
  "Camera",
  "Bring",
  "Blue",
];
let secondWords = [
  "Card",
  "Certain",
  "Develop",
  "Difficult",
  "Event",
  "Free",
  "Herself",
  "Manage",
  "Note",
];
let startupName = [];

for (let h = 0; h < firstWords.length; h++) {
  startupName.push(
    firstWords[Math.floor(Math.random() * 9)] +
      " " +
      secondWords[Math.floor(Math.random() * 9)]
  );
  console.log(
    "The startup: " +
      startupName[h] +
      " contains " +
      startupName[h].length +
      " characters."
  );
}
