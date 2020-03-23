const humburgerMenu = document.querySelector(".header__burgerMenu");
const menu = document.querySelector(".menu");

humburgerMenu.addEventListener("click", function() {
  menu.classList.toggle("menu__hamburger");
  humburgerMenu.classList.toggle("header__burgerMenu-close");
});