const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function () {
    personalMovieDB.count = +prompt("How much films you have already watched?");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(numberOfFilms)
    ) {
      personalMovieDB.count = +prompt(
        "How much films you have already watched?"
      );
    }
  },
  detect: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено мало фильмов");
    } else if (personalMovieDB.count < 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  showMyDB: () => {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    } else {
      console.log("Приватная информация");
    }
  },
  toggleVisibleMyDB: () => {
    return (personalMovieDB.privat = !personalMovieDB.privat);
  },
  rememberMyFilms: () => {
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
  },
  rememberMyGenres: () => {
    for (let i = 1; i <= 3; i++) {
      let favoriteGenre = prompt(`Ваш любимый жанр под номерм ${i}?`);

      if (
        favoriteGenre != null &&
        favoriteGenre.length < 50 &&
        favoriteGenre != ""
      ) {
        personalMovieDB.genres[i - 1] = favoriteGenre
      } else {
        i--;
      }
    }

    let favGenres = '';
    personalMovieDB.genres.forEach((genre, i)  => {
      favGenres += `Любимый жанр под номером ${i+1} - это ${genre} \n`
    })
    return favGenres;
  },
};

console.log(personalMovieDB.rememberMyGenres());

