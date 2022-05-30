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
    let data = JSON.parse(request.responseText);
    setAllDistances(data.destinations);
  }
};

// destination
let placeHeading = document.querySelector(".place-heading");
let placeText = document.querySelector(".place-text");
let placeDistance = document.querySelector(".place-info .distance");
let placeTravelTime = document.querySelector(".place-info .travel-time");
let placeSwitcher = document.querySelectorAll(".place-switcher li");
let activeDistance = "moon";

placeSwitcher.forEach((place) => {
  place.addEventListener("click", () => {
    console.log("hhhhh");
    placeSwitcher.forEach((place) => {
      place.classList.remove("active");
    });
    place.classList.add("active");
    activeDistance = place.dataset.place;

    switchDistance(activeDistance);
  });
});

function switchDistance(activeDistance) {
  placeHeading.querySelectorAll(".place-img").forEach((img) => {
    if (img.classList.contains("active")) {
      img.classList.remove("active");
    }
    if (img.dataset.place === activeDistance) {
      img.classList.add("active");
    }
  });
}

function setAllDistances(data) {
  data.forEach((place) => {
    console.log(place.name.toLowerCase());
    let placeImg = document.createElement("div");
    placeImg.setAttribute("data-place", place.name.toLowerCase());
    if (placeImg.dataset.place === activeDistance) {
      placeImg.className = "place-img active";
    } else {
      placeImg.className = "place-img";
    }
    let img = document.createElement("img");
    img.src = place.images.png;
    img.alt = place.name;
    console.log(img);
    placeImg.appendChild(img);
    placeHeading.appendChild(placeImg);

    let name = document.createElement("h1");
    name.innerHTML = place.name;
    let description = document.createElement("p");
    description.innerHTML = place.description;
    placeText.appendChild(name);
    placeText.appendChild(description);

    let distance = document.createElement("span");
    distance.innerHTML = place.distance;
    placeDistance.appendChild(distance);

    let travel = document.createElement("h4");
    travel.innerHTML = place.travel;
    placeTravelTime.appendChild(travel);
  });
}
