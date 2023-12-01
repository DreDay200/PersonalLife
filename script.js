document.querySelector("h1").style.fontSize = "6vw";

function myFunction() {
  document.body.classList.toggle("dark-mode");
}

$(function () {
  $("button").click(function () {
    $("#div1, #div2, #div3").fadeToggle();
  });
});
