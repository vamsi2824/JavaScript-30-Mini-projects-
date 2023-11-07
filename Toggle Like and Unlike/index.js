let color1 = document.getElementById("colorChange1");
let color2 = document.getElementById("colorChange2");

let image = document.getElementById("imageChange");
let selected = false;

function onClickLikeButton() {
    if (selected === false) {
        color1.style.color = "#0967d2";
        color2.style.backgroundColor = "#0967d2";
        color2.style.color = "#cbd2d9";
        image.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        selected = true;
    } else if (selected === true) {
        color1.style.color = "#cbd2d9";
        color2.style.backgroundColor = "#cbd2d9";
        color2.style.color = "#9aa5b1";
        image.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        selected = false;

    }

}