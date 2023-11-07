function color1() {
  let color = 1;
  if (color === 1) {
      document.getElementById("color1").style.backgroundColor = "#cf1124";
      document.getElementById("color2").style.backgroundColor = "#1f1d41";
      document.getElementById("color3").style.backgroundColor = "#1f1d41";
      document.getElementById("traffic1").style.backgroundColor = "#cf1124";
      document.getElementById("traffic2").style.backgroundColor = "#4b5069";
      document.getElementById("traffic3").style.backgroundColor = "#4b5069";
  }
}

function color2() {
  let color = 2;
  if (color === 2) {
      document.getElementById("color2").style.backgroundColor = "#f7c948";
      document.getElementById("color1").style.backgroundColor = "#1f1d41";
      document.getElementById("color3").style.backgroundColor = "#1f1d41";
      document.getElementById("traffic2").style.backgroundColor = "#f7c948";
      document.getElementById("traffic1").style.backgroundColor = "#4b5069";
      document.getElementById("traffic3").style.backgroundColor = "#4b5069";
  }
}

function color3() {
  let color = 3;
  if (color === 3) {
      document.getElementById("color3").style.backgroundColor = "#199473";
      document.getElementById("color2").style.backgroundColor = "#1f1d41";
      document.getElementById("color1").style.backgroundColor = "#1f1d41";
      document.getElementById("traffic3").style.backgroundColor = "#199473";
      document.getElementById("traffic2").style.backgroundColor = "#4b5069";
      document.getElementById("traffic1").style.backgroundColor = "#4b5069";
  }
}