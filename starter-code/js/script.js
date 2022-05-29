let burgerIcon = document.querySelector("header .burger img");
let closeIcon = document.querySelector("header .close img");
let nav = document.querySelector("header nav");

burgerIcon.onclick = showNav;
closeIcon.onclick = closeNav;

function showNav() {
  nav.classList.add("show");
}

function closeNav() {
  nav.classList.remove("show");
}
