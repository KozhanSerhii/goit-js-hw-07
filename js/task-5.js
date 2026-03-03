const buttonClick = document.querySelector(".change-color");
const color = document.querySelector(".color");

buttonClick.addEventListener("click", () => {
  color.textContent = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    const body = document.querySelector("body");
    body.style.backgroundColor = color.textContent;
});
