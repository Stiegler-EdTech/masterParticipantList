let sidePanel = document.querySelector(".side-panel")
let exitButton = document.querySelector(".btn-danger")
exitButton.addEventListener("click", () => {
    sidePanel.style.display = "none"
})
