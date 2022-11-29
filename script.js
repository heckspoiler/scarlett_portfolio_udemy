const hamburgerContainer = document.querySelector("#header__main-nav");
const hamburger = document.querySelector(".header__main-nav--hamburger");
const links = document.querySelectorAll("ul.header__main-nav--links li");
const block = document.querySelectorAll("div.work__card");
const text = document.querySelectorAll("div.work__card h3");
const workSection = document.querySelectorAll("#work");

console.log(text);

hamburger.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("clicked");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
