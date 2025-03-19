const img = document.getElementById("img");
const darkmode = document.querySelector(".darkmode");
const colorBg = document.getElementById("colorBg");
const colorText = document.getElementById("colorText");

img.addEventListener("mouseover", function (event) {
  img.src = "./img/lightone.webp";
  darkmode.textContent = "Light mode";
  darkmode.style.color = " #E5BF5C";

});
img.addEventListener("mouseout", function (event) {
  img.src = "./img/lighttwo.webp";
  darkmode.textContent = "dark mode" ;
  darkmode.style.color = "#000"
});


colorBg.addEventListener("input", function (event) {
  document.body.style.background = event.target.value;
});
colorText.addEventListener("input", function (event) {
  document.body.style.color = event.target.value;
});
