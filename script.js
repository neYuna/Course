const numberOfFilms = +prompt('How much films you have already watched?')

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

const lastWatchedFilm = prompt('Which film you watched the last time?')
const lastFilmRate = prompt('What is yout rate for this film?')


const lastWatchedFilm2 = prompt('Which film you watched the last time?')
const lastFilmRate2 = prompt('What is yout rate for this film?')

personalMovieDB.movies[lastWatchedFilm] = lastFilmRate;
personalMovieDB.movies[lastWatchedFilm2] = lastFilmRate2;

console.log(personalMovieDB.movies)