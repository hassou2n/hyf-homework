// Doubling of number

let numbers = [1, 2, 3, 4];

const newNumbers = numbers
  .filter(function (params) {
    return params % 2 !== 0;
  })
  .map(function (params) {
    return params * 2;
  });

console.log("The doubled numbers are", newNumbers);
// console.log("The doubled numbers are", newNumbers); // [2, 6]

// Working with movies

//1
const moviesSort = movies.filter(function (params) {
  return params.title.length < 5;
});

console.log(moviesSort);

//2
const moviesLong = movies.filter(function (params) {
  return params.title.length > 5;
});

console.log(moviesLong);

//3
const moviesBetween = movies.filter(function (params) {
  return params.year >= 1980 && params.year <= 1989;
});

console.log(moviesBetween.length);

//4
const tagMovie = movies.map((element) => {
  if (element.rating >= 7) {
    element.tag = "Good";
  } else if (element.rating >= 4 && element.rating < 7) {
    element.tag = "Average";
  } else if (element.rating < 4) {
    element.tag = "Bad";
  }
  return element;
});

console.log(movies);

//5
const moviesRatedHigher = movies
  .filter((m) => m.rating > 6)
  .map((m) => m.rating);

console.log(moviesRatedHigher);

//6
const moviesKeyworeds = movies.reduce((n, m) => {
  if (
    m.title.toLowerCase().includes("surfer") ||
    m.title.toLowerCase().includes("alien") ||
    m.title.toLowerCase().includes("benjamin")
  ) {
    return (n += 1);
  }
  return n;
}, 0);

console.log(moviesKeyworeds);

//7
const moviesTitleDuplicated = movies.filter(function (movie) {
  const moviesTitle = movie.title.toLowerCase().split(" ");
  let titleDuplicatedWord = [];
  let duplicateWord;
  moviesTitle.forEach(function (element) {
    if (titleDuplicatedWord.includes(element)) {
      duplicateWord = true;
    } else {
      titleDuplicatedWord.push(element);
      duplicateWord = false;
    }
  });
  return duplicateWord;
});

console.log(moviesTitleDuplicated);

//8

const aR = movies.map(function (m) {
  return m.rating;
});

const rR = aR.reduce(function (a, r) {
  return a + r;
});

let averageRating = rR / aR.length;
averageRating = Math.floor(averageRating);
console.log(averageRating);

//9
const CountTheTotalNumberMovies = tagMovie.reduce(
  (coun, m) => {
    switch (m.tag) {
      case "Good":
        coun.goodMovies += 1;
        break;
      case "Average":
        coun.averageMovies += 1;
        break;
      case "Bad":
        coun.badMovies += 1;
        break;
      default:
        return coun;
    }
    return coun;
  },
  {
    goodMovies: 0,
    averageMovies: 0,
    badMovies: 0,
  }
);
console.log(CountTheTotalNumberMovies);
