const screenshot = document.getElementsByClassName("project-screenshot")

function hover(screenshot) {
    screenshot.setAttribute('src', `img/screenshot.png`);
}

function unhover(screenshot) {
    screenshot.setAttribute('src', `img/screenshot${"_dark"}.png`);
}