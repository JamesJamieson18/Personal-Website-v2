/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navDropDown() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

window.addEventListener("DOMContentLoaded", scrollLoop, false);

var comBackground = document.querySelector("#comBackground")

var xScrollPosition;
var yScrollPosition;

function scrollLoop(e) {
  xScrollPosition = window.scrollX;
  yScrollPosition = window.scrollY;

  setTranslate(0, yScrollPosition, comBackground);

  requestAnimationFrame(scrollLoop);
}

function setTranslate(xPos, Ypos, el) {
  el.style.transform = "translate3d(" + xPos + ", " + Ypos + "px, 0";
}