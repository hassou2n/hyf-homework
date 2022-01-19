//Item array removal
let names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
names = names.filter(function (item) {
  return item !== nameToRemove;
});
// Code done
console.log(names);
// ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

//******************************
//  When will we be there??
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function ArrivalTime(AaTe) {
  let numValue = (AaTe.destinationDistance / AaTe.speed) * 60; // getting number of minutes
  let hours = Math.floor(numValue / 60); // getting hours
  let minutes = Math.floor(numValue % 60); //getting minutes as an integer
  return hours + " hours and " + minutes + " minutes";
}

const travelTime = ArrivalTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

//******************************
// Save a note

const notes = [];

function saveNote(content, id) {
  // write some code here
  notes.push({ content: content, id: id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// Get a note

function getNote(id) {
  // your code here
  if (isNaN(id)) {
    console.log("please enter a vild number");
    return;
  }
  let output = "error the value not exist";

  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      output = notes[i];
      break;
    }
  }
  console.log(output);
}

const firstNote = getNote(1); // {content: 'Pick up groceries', id: 1}

//Log out notes

function logOutNotesFormatted() {
  // your code here

  for (let i = 0; i < notes.length; i++) {
    console.log(
      "The note with id: ",
      notes[i].id,
      "has the following note text:",
      notes[i].content
    );
  }
}

logOutNotesFormatted(); // should log out the text below
// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

//******************************
//Series duration of my life

const seriesDurations = [
  {
    title: "hunter x hunter",
    days: 2,
    hours: 11,
    minutes: 12,
  },
  {
    title: "it",
    days: 0,
    hours: 3,
    minutes: 0,
  },
  {
    title: "Peaky Blinders",
    days: 1,
    hours: 6,
    minutes: 0,
  },
];

function logOutSeriesText() {
  // write code here
  let total = 0;
  for (i = 0; i < seriesDurations.length; i++) {
    let lifespan = 80;
    let days = seriesDurations[i].days * 24 * 60;
    let hours = seriesDurations[i].hours * 60;
    let minutes = seriesDurations[i].minutes;
    let precentage = (days + hours + minutes) / (lifespan * 365 * 24 * 60);

    console.log(
      `${seriesDurations[i].title} took ${precentage.toFixed(8)}% of my life`
    );
    total += precentage;
  }
  console.log(`In total that is ${total.toFixed(8)}% of my life`);
}

logOutSeriesText(); // logs out the text found above

//******************************
// Adding an activity
//Show my status
//Usage limit

const activities = [];
function addActivity(date, activity, duration) {
  activities.push({ date: date, activity: activity, duration: duration });
}

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Instgram", 40);
addActivity("23/7-18", "Faceook", 8);
// addActivity("23/7-18", "Faceook",8);
console.log(activities);

function showStatus(activities) {
  let tatolDs = 0;
  const usageLimit = 80;
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus.");
  } else
    for (let index = 0; index < activities.length; index++) {
      tatolDs += activities[index].duration;
    }
  console.log(
    `You hava added ${activities.length} activities. They amount to ${tatolDs} min. of usage.`
  );
  {
    if (tatolDs >= usageLimit) {
      console.log("You have reached your limit, no more smartphoning for you!");
    } else {
      console.log("You can use smartphoning. You have usage.");
    }
  }
}
showStatus(activities);
