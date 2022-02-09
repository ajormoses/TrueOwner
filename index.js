const toggle = document.querySelector(".toggle");
const nav = document.querySelector("nav");
const close = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");
const avatar = document.querySelector(".screen-avatar");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
  close.classList.toggle("show");
  hamburger.classList.toggle("show");
  avatar.classList.toggle("show");
});
