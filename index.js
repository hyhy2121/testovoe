const slider = document.getElementById("slider");
const percent = document.getElementById("percent");
slider.addEventListener(
  "input",
  () => (percent.textContent = `${slider.value}%`)
);

const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
burger.addEventListener("click", () => {
  burger.classList.toggle("is-active");
  nav.classList.toggle("is-open");
});
