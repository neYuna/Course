//task1

const numberOfFilms = +prompt("How much films you have already watched?");
if (numberOfFilms < 10) {
  alert("Просмотрено мало фильмов");
} else if (numberOfFilms < 30) {
  alert("Вы классический зритель");
} else if (numberOfFilms > 30) {
  alert("Вы киноман");
} else {
  alert("Произошла ошибка");
}

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let lastWatchedFilm = prompt("Which film you watched the last time?");
  let lastFilmRate = prompt("What is yout rate for this film?");

  if (
    lastWatchedFilm != null &&
    lastFilmRate != null &&
    lastWatchedFilm.length < 50 &&
    lastWatchedFilm != "" &&
    lastFilmRate != ""
  ) {
    personalMovieDB.movies[lastWatchedFilm] = lastFilmRate;
  } else {
    i--;
  }
}
console.log(personalMovieDB.movies);
