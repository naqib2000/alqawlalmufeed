const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const button = document.getElementsByClassName("cta")[0];

toggleButton.addEventListener("click", () => {
  button.classList.toggle("active");
});

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
