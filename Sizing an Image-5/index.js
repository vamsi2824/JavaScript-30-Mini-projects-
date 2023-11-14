let imageElement = document.getElementById("image");
let widthCount = document.getElementById("widthCount");
let warning = document.getElementById("warning");
let originalImageWidth = "200px";
imageElement.style.width = originalImageWidth;

function decrease() {
    let previous = widthCount.textContent;
    let updated = (parseInt(previous) - parseInt("5"));
    widthCount.textContent = updated + "px";
    if ((updated < 100)) {
        warning.textContent = "Too small size";
        warning.style.color = "red";

    } else if (updated > 95 && updated < 305) {
        warning.textContent = "";
    }

    imageElement.style.width = updated + "px";
}

function increase() {
    let previous = widthCount.textContent;
    let updated = (parseInt(previous) + parseInt("5"));
    widthCount.textContent = updated + "px";
    if (updated > 300) {
        warning.textContent = "Too Big size";
        warning.style.color = "red";
    } else if (updated > 100 && updated < 300) {
        warning.textContent = "";
    }

    imageElement.style.width = updated + "px";



}