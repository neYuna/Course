let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How much films you have already watched?");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How much films you have already watched?");
  }
}

start();

function detectPersonalLevel() {
  if (numberOfFilms < 10) {
    alert("Просмотрено мало фильмов");
  } else if (numberOfFilms < 30) {
    alert("Вы классический зритель");
  } else if (numberOfFilms > 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}

detectPersonalLevel();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
};

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  } else {
    console.log("Приватная информация");
  }
}

showMyDB();

function rememberMyFilms(){
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
}

rememberMyFilms();
console.log(personalMovieDB.movies);

function rememberMyGenres() {
  for (let i = 1; i <= 3; i++) {
    let favoriteGenre = prompt(`Ваш любимый жанр под номерм ${i}?`);

    if (
      favoriteGenre != null &&
      favoriteGenre.length < 50 &&
      favoriteGenre != ""
    ) {
      personalMovieDB.genres[i -1] = favoriteGenre;
    } else {
      i--;
    }
  }
}

rememberMyGenres();
console.log(personalMovieDB.genres);
