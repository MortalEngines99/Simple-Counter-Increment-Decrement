const counterParagraph = document.getElementById("counter");
const increasebtn = document.getElementById("increase");
const resetbtn = document.getElementById("reset");
const decreasebtn = document.getElementById("decrease");

let counter = 0;

document.addEventListener("DOMContentLoaded",() => {
    updateCounterUI(counter);
});

increasebtn.addEventListener("click", () => {
    updateCounterUI(++counter);
});

decreasebtn.addEventListener("click", () => {
    updateCounterUI(--counter);
})
resetbtn.addEventListener("click", () => {
    counter = 0;
    updateCounterUI(counter);
})

function updateCounterUI(counter){

    let color = "black";

    color = counter > 0 ? "green" : 
    counter < 0 ? "red" : "black";

    counterParagraph.innerText = counter;
    counterParagraph.style.color = color;
}