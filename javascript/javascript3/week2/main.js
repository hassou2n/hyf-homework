//Movies exercise

const apiUri = `https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`;

async function movies() {
  const response = await fetch(apiUri);
  const dataMovies = await response.json();
  console.log(dataMovies);

  const badMovies = dataMovies.filter(function (params) {
    return params.rating < 4;
  });

  console.log(badMovies);

  const MoviesSinec = badMovies.filter(function (params) {
    return params.year === 2000;
  });

  console.log(MoviesSinec);
}
movies();

//Promise that resolves after set time

const afterSeacond = new Promise((resolveAfter) => {
  setTimeout(() => {
    resolveAfter("I am the Promise");
  }, 8000);
});

afterSeacond.then((elment) => {
  console.log(elment);
});

//Rewrite time
setTimeout(getCurrentLocation, 3000);
navigator.geolocation.getCurrentPosition(getCurrentLocation);
function getCurrentLocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(`${latitude} ${longitude}`);
}

getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  });

//Fetching and waiting

setTimeout(fet1, 3000);
function fet1() {
  fetch(apiUri)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

setTimeout(fet2, 3000);
async function fet2() {
  const response = await fetch(apiUri);
  const data = response.json();
  console.log(data);
}
