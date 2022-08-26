'use strict'
// BURGER
let burger = document.querySelector(".burger__btn");
let menu = document.querySelector(".nav");
let menuLinks = menu.querySelectorAll(".nav__link");

burger.addEventListener("click", function () {
  burger.classList.toggle("b-active");
  menu.classList.toggle("n-active");
  // document.body.classList.toggle("stop-scroll"); - включение стоп-скролла
});

// закрывает меню при клике на элемент меню
menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("b-active");
    menu.classList.remove("n-active");
    // document.body.classList.remove("stop-scroll"); - отключения стоп-скролла
  });
});


// SEARCH
var search = document.querySelector(".search__form");
var btn = document.querySelector(".search__btn");

btn.addEventListener("click", function () {
  search.classList.toggle("s-active")
});
