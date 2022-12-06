/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const promo = document.querySelectorAll(".promo__adv img");

promo.forEach((item) => {
  item.remove();
});
const genre = document.querySelector(".promo__genre");
genre.textContent = "Драма";

const bg = document.querySelector(".promo__bg");
bg.style.backgroundImage = "url('img/bg.jpg')";

console.log(bg);

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

const filmUl = document.querySelector(".promo__interactive-list");

const addingInput = document.querySelector(".adding__input");
const form = document.querySelector("form.add");
const checkbox = document.querySelector('[type="checkbox"]');

const addNewFilm = (event) => {
  event.preventDefault();
  if (checkbox.checked) {
    console.log("Добавляем любимый фильм");
  }

  if (addingInput.value.length > 21) {
    movieDB.movies.push(addingInput.value.slice(0, 22) + "...");
  } else {
    movieDB.movies.push(addingInput.value);
  }
  drawMovie(movieDB);
};

form.addEventListener("submit", addNewFilm);

function drawMovie(movieDB) {
  movieDB.movies.sort();
  filmUl.innerHTML = "";
  movieDB.movies.forEach((film, index) => {
    filmUl.innerHTML += `
      <li class="promo__interactive-item">${index + 1}.   ${film}
      <div class="delete"></div>
  </li>
      `;
  });

  document.querySelectorAll(".delete").forEach((btn, i) => {
    btn.addEventListener("click", () => {
      btn.parentElement.remove();
      movieDB.movies.splice(i, 1);

      drawMovie(movieDB);
    });
  });
}

drawMovie(movieDB);
