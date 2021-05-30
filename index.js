document.querySelector("#menu").addEventListener("click", function () {
  this.classList.toggle("fa-times");
  document.querySelector("header").classList.toggle("toggle");
});

window.addEventListener("scroll", function () {
  document.querySelector("#menu").classList.remove("fa-times");
  document.querySelector("header").classList.remove("toggle");
});

window.addEventListener("scroll", function () {
  var scroll_y = this.scrollY;
  if (scroll_y > 0) {
    document.querySelector("#rocket").classList.remove("n");
  } else {
    document.querySelector("#rocket").classList.add("n");
  }
});
