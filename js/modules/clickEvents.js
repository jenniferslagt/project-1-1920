export function changeBackground() {
    var colors = ["#e0c3fa", "#c0faee", "#c0ecfa", "#f9c7fc", "#624dfa", "#56fcac"];
    var selectInput = document.querySelector("input")
    selectInput.addEventListener("click", function () {

        selectInput.style.background = colors[Math.floor(Math.random() * colors.length)];

        // var colors = ["#201957", "#e0b9fa"];
        // var selectInput = document.querySelector("body")
        // selectInput.addEventListener("click", function () {
        //     selectInput.style.background = colors[Math.floor(Math.random() * colors.length)];
    })
}