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

movieDB.movies.sort();
// movieDB.movies.forEach((film, index) => {
//   let title = document.createElement("li");
//   title.classList.add("promo__interactive-item");
//   title.innerText = `${index + 1}.  ${film}`;
//   filmUl.append(title);

//   const del = document.createElement("div");
//   del.classList.add("delete");
//   title.append(del);

// });

filmUl.innerHTML = "";

movieDB.movies.forEach((film, index) => {
  filmUl.innerHTML += `
    <li class="promo__interactive-item">${index + 1}.   ${film}
    <div class="delete"></div>
</li>
    `;
});
