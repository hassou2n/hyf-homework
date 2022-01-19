// Age-ify (A future age calculator)
const yearOfBirth = 1999;
const yearFuture = 2060;

let age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in " + yearFuture + ".");

// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2021;
const dogYearFuture = 2031;

let dogYear = dogYearOfBirth - dogYearFuture;

const dogYear = dogYearOfBirth - dogYearFuture;

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

let Phousewide = 8;
let Phousedeep = 10;
let Phousehigh = 10;
let Phousegarden = 100;
let Phousecost = 2.5;

let Jhousewide = 5;
let Jhousedeep = 11;
let Jhousehigh = 8;
let Jhousegarden = 70;
let Jhousecost = 1.0;

let PVolumeInMeters =
  Phousewide * Phousedeep * Phousehigh * Phousegarden * Phousecost;

let JVolumeInMeters =
  Jhousewide * Jhousedeep * Jhousehigh * Jhousegarden * Jhousecost;

housePrice = PVolumeInMeters * 2.5 * 1000 + Phousegarden * 300;

housePrice = JVolumeInMeters * 2.5 * 1000 + Jhousegarden * 300;

let priceDifference = Phousecost - housePrice;

if (priceDifference > 0) {
  console.log(
    "Peter" +
      ", you will pay more than the real house price! " +
      priceDifference
  );
} else {
  console.log("Julia" + ", You got a great deal!");
}

// Ez Namey (Startup name generator) Optional
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

};
