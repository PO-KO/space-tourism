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
    getData(data);
  }
};

export let jsonData;
function getData(data) {
  jsonData = data;
}

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
