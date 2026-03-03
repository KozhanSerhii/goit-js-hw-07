const buttonClick = document.querySelector(".change-color");
const color = document.querySelector(".color");

buttonClick.addEventListener("click", () => {
    color.textContent = getRandomHexColor();
    const body = document.querySelector("body");
    body.style.backgroundColor = color.textContent;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}