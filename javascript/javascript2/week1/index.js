// Find the shortest word
// Write a function that finds the shortest word of an array of words

let danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
danishWords = danishWords.reduce((acc, curr) => {
  return acc.length < curr.length ? acc : curr;
});

console.log(danishWords); // returns 'ø'

// Find and count the Danish letters
// Find the individual number and the total number of Danish letters in a string.

const danishString = "Jeg har en blå bil";

function notThisFunctionName(params) {
  let letterA = params.split(" ").filter((e) => e.includes("å"));

  return console.log(`total: ${letterA.length} å:${letterA.length} `);
}
notThisFunctionName(danishString); // returns {total: 1, å: 1,}

const danishString2 = "Blå grød med røde bær";

function notThisFunctionName2(params) {
  let letterÆ = params.split(" ").filter((e) => e.includes("æ"));
  let letterØ = params.split(" ").filter((e) => e.includes("ø"));
  let letterÅ = params.split(" ").filter((e) => e.includes("å"));

  return console.log(
    `total: ${letterÆ.length + letterØ.length + letterÅ.length} æ:${
      letterÆ.length
    }, ø:${letterØ.length}, å:${letterÅ.length} `
  );
}

notThisFunctionName2(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}


// Spirit animal name generator
// Let's create a page where a user writes his name in an input element. The user then clicks a button. The user will now receive a spirit animal name, fx Benjamin - The fullmoon wolf.

const animalNameG1 = [
  "Pannorsa",
  "Locubocs",
  "Komodaunime",
  "Horeaveaksea",
  "Zaarsecta",
  "Geksican",
  "Dreoxearon",
  "Broorsbat",
  "Qucaapsa",
  "Leopeon",
  "Guinican",
];

const animalNameG2 = [
  "Caricsee",
  "Rhiblotsa",
  "Doneoslead",
  "Octetsire",
  "Kreetsatee",
  "Pakoose",
  "Butsboon",
  "Roocseadine",
  "Xouggoo",
  "Taclaud",
  "Buffuin",
];

const getRandomNumber = (max) => Math.floor(Math.random() * max);
const getRandomAname = () =>
  `${animalNameG1[getRandomNumber(animalNameG1.length)]} ${
    animalNameG2[getRandomNumber(animalNameG2.length)]
  }`;

const setRandomName = () => {
  document.write.innerText = getRandomAname();
};

document.querySelector("button").addEventListener("click",setRandomName);
setRandomName();

const mybutton = document.getElementById("button");
let inputText;

mybutton.onclick = function fname(event) {
  const section = document.getElementById("section");
  const p = document.createElement("p");
  p.innerText = `${inputText} - ${getRandomAname()}`;

  if (inputText.value != ""){
    section.appendChild(p);
  } else {
    p.innerText = "Enter name please!";
  }
};

const myInput = document.querySelector("input");
myInput.oninput = function (event) {
  inputText = event.target.value;
};