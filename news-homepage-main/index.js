console.log("hello");
const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close");

const openModal = function () {
  console.log("menu clicked");
  mobileMenu.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
menu.addEventListener("click", openModal);

const closeModal = function () {
  console.log("iam from the close modal");
  mobileMenu.classList.add("hidden");
  overlay.classList.add("hidden");
};
closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
