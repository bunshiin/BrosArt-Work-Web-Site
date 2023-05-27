let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

const scriptURL =
  "https://script.google.com/macros/s/AKfycbz-NcMVBDoxi6ghJmN-HfaKzI-IX4xPJWgBVjX_c_U2Zfg86QUoN4dfd3ydT8GLa1e02A/exec";
const form = document.forms["Bro'sArt Contact Us"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});


