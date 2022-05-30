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

// Get data from JSON file

let request = new XMLHttpRequest();

request.open("GET", "./data.json");
request.send();

request.onreadystatechange = () => {
  if (request.status === 200 && request.readyState === 4) {
    console.log(request.status);
  }
};

// destination

let placeSwitcher = document.querySelectorAll(".place-switcher l");
let activeDistance = "moon";

placeSwitcher.forEach((place) => {
  place.addEventListener("click", setActiveDistance);
});

function setActiveDistance() {
  console.log("hhhhh");
  placeSwitcher.forEach((place) => {
    place.classList.remove("active");
  });
  place.add("active");
  activeDistance = place.dataset.place;

  switchDistance(activeDistance);
}

function switchDistance(activeDistance) {}

function setAllDistances() {}
