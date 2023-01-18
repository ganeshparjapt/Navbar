// index.js
window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    document.getElementById("navbar").style.background = "#fff";
  }

  // index.js
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});