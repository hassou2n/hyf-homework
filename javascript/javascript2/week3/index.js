//1
function called() {
  console.log("Called after 2.5 seconde");
}
setTimeout(called, 2500);

//2
function notThisFunctionName(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}
notThisFunctionName(3, "This string logged after 3 seconds");
notThisFunctionName(5, "This string logged after 5 seconds");
notThisFunctionName(8, "This string logged after 8 seconds");

//3
let myButton = document.querySelector("button");
myButton.addEventListener("click", () => {
  notThisFunctionName(5, "Called after 5 seconds");
});

//4
function earthLogger() {
  console.log("Earth");
}
function saturnLogger() {
  console.log("Saturn");
}

function planetLogFunction(C) {
  C();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//5
let logLocation = document.querySelector("#logLocation");
let p = document.querySelector("#p");
logLocation.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    p.innerHTML = ` Latitude:${latitude}, Longitude: ${longitude}`;
  }
  function errorCallback(error) {
    console.log(error);
  }
});

//7
function runAfterDelay(delay, callback) {
  setTimeout(callback, delay * 1000);
}
runAfterDelay(4, function () {
  console.log("should be logged after 4 seconds");
});

runAfterDelay(10, function () {
  console.log("Hi after 10s");
});

//8
const doubleClick = document.querySelector("#doubleclick");

doubleClick.addEventListener("dblclick", () => {
  notThisFunctionName(1, "double click!");
});

//9

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke === true) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}

function logFunnyJoke() {
  console.log(
    "A bear walks into a bar and says, “Give me a whiskey and … cola.” “Why the big pause?” asks the bartender. The bear shrugged. “I’m not sure; I was born with them.”"
  );
}

function logBadJoke() {
  console.log(
    "Knock knock.\nWho’s there?\nInterrupting cow.\nInterrupting c–\nMOO!"
  );
}

jokeCreator(false, logFunnyJoke, logBadJoke);

const fun3 = [
  () => {
    return 1 + 1;
  },
  () => {
    return `Hi HYF`;
  },
  () => {
    return `Hi`;
  },
];

for (let i = 0; i < fun3.length; i++) {
  console.log(fun3[i]());
}

const f = function () {
  console.log("Hi f");
};
f();

function fu() {
  console.log("Hi fu");
}
fu();

const object = {
  o: function () {
    console.log("Hi");
  },
};

object.o();
