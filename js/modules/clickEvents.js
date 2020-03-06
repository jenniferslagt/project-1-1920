export function changeBackground() {
    var colors = ["#e0c3fa", "#c0faee", "#c0ecfa", "#f9c7fc", "#ffed69", "#56fcac"];
    var selectInput = document.querySelector("input")
    selectInput.addEventListener("click", function () {
        selectInput.style.background = colors[Math.floor(Math.random() * colors.length)];
    })
}