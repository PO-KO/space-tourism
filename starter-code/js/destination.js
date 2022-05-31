import { jsonData as data } from "./home.js";

let placeHeading = document.querySelector(".place-heading");
let placeText = document.querySelector(".place-text");
let placeDistance = document.querySelector(".place-info .distance");
let placeTravelTime = document.querySelector(".place-info .travel-time");
let placeSwitcher = document.querySelectorAll(".place-switcher li");
let activeDistance = "moon";

setTimeout(() => {
  // destination

  // setAllDistances(parseJson)

  setAllDistances(data.destinations);

  placeSwitcher.forEach((place) => {
    place.addEventListener("click", () => {
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

    placeText.querySelectorAll("h1").forEach((name) => {
      if (name.classList.contains("active")) {
        name.classList.remove("active");
        name.nextElementSibling.classList.remove("active");
      }
      if (name.dataset.place === activeDistance) {
        name.classList.add("active");
        name.nextElementSibling.classList.add("active");
      }
    });
    placeDistance.querySelectorAll("span").forEach((distance) => {
      if (distance.classList.contains("active")) {
        distance.classList.remove("active");
      }
      if (distance.dataset.place === activeDistance) {
        distance.classList.add("active");
      }
    });

    placeTravelTime.querySelectorAll("span").forEach((travel) => {
      if (travel.classList.contains("active")) {
        travel.classList.remove("active");
      }
      if (travel.dataset.place === activeDistance) {
        travel.classList.add("active");
      }
    });
  }

  function setAllDistances(data) {
    data.forEach((place) => {
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
      placeImg.appendChild(img);
      placeHeading.appendChild(placeImg);

      let name = document.createElement("h1");
      name.setAttribute("data-place", place.name.toLowerCase());
      name.innerHTML = place.name;
      let description = document.createElement("p");
      description.setAttribute("data-place", place.name.toLowerCase());
      description.innerHTML = place.description;
      placeText.appendChild(name);
      placeText.appendChild(description);

      if (name.dataset.place === activeDistance) {
        name.className = "active";
        description.className = "active";
      }

      let distance = document.createElement("span");
      distance.setAttribute("data-place", place.name.toLowerCase());
      distance.innerHTML = place.distance;
      placeDistance.appendChild(distance);

      let travel = document.createElement("span");
      travel.setAttribute("data-place", place.name.toLowerCase());
      travel.innerHTML = place.travel;
      placeTravelTime.appendChild(travel);

      if (name.dataset.place === activeDistance) {
        distance.className = "active";
        travel.className = "active";
      }
    });
  }
}, 300);
