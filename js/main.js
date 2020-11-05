const LIST = {
    screenshot1: {
        hover: `img/screenshot1.png`,
        default: `img/screenshot1_dark.png`
    },
    screenshot2: {
        hover: `img/screenshot2.png`,
        default: `img/screenshot2_dark.png`
    },
    screenshot3: {
        hover: `img/screenshot3.png`,
        default: `img/screenshot3_dark.png`
    },
    screenshot6: {
        hover: `img/screenshot6.png`,
        default: `img/screenshot6_dark.png`
    }
}

function hover(element) {
    const item = element.getAttribute('type');
    this.setAttribute(element, LIST[item]['hover'])
}

function unhover(element) {
    const item = element.getAttribute('type');
    this.setAttribute(element, LIST[item]['default'])
}

function setAttribute(element, value) {
    return element.setAttribute('src', value);
}