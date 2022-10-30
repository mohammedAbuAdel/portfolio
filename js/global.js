let toTop = document.querySelector(".toTop");
window.addEventListener("scroll", function () {
  if (this.scrollY > 1000) {
    toTop.style.right = "30px";
  } else {
    toTop.style.right = "-60px";
  }
});
