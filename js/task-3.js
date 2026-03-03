const input = document.querySelector("#name-input");
const ass = document.querySelector("#name-output")

const change = (event) => {
    if (event.target.value.trim() === "") {
        ass.textContent = "Anonymous";
    } else {
         ass.textContent = event.currentTarget.value.trim();

    }
};

input.addEventListener("input", change);
