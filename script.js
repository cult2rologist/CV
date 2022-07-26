// const fs = require("fs");
// let scheme = JSON.parse(
//   fs.readFileSync(
//     "C:/Users/Ilya Mckay/Desktop/Проект HTML/script/dataJson.json"
//   )
// );

var checkbox = document.querySelector(".theme-switch__checkbox");

checkbox.addEventListener("change", function () {
  transition();
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
});

function transition() {
  document.documentElement.classList.add("transition");
  setTimeout(function () {
    document.documentElement.classList.remove("transition");
  }, 250);
}


