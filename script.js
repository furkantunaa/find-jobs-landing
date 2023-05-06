const button = document.querySelector(".navbar-menu");
const reponsive_menu = document.querySelector(".responsive-menu");
const closeButton = document.querySelector(".close-button");

button.addEventListener("click", function () {
  reponsive_menu.classList.add("open-menu");
});

closeButton.addEventListener("click", function () {
  reponsive_menu.classList.remove("open-menu");
});
