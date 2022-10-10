const form = document.querySelector("form");
const ul = document.querySelector("ul");
const liTest = document.getElementById("test");
const safeElem = document.querySelector("#safe");
const inputElem = document.querySelector("#eingabetext");

const safeLocal = window.localStorage.getItem("safeLocal");

safeElem.addEventListener("click", (event) => {
    event.preventDefault();

    const safeLocal = [""];

    const newValue = inputElem.value;
    safeLocal.push(newValue);
    console.log(newValue);
    window.localStorage.setItem = newValue;
});

document.addEventListener("click", function (event) {
    console.log("document", event.target, event.currentTarget);
});

ul.addEventListener("click", function (event) {
    console.log("ul", event.target, event.currentTarget);
});

liTest.addEventListener("click", function (event) {
    console.log("li", event.target, event.currentTarget);
});
