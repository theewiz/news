const hamburgerMenu = document.querySelector(".icon-menus");
const sidebar = document.querySelector(".plain");
const close = document.querySelector(".close");

hamburgerMenu.addEventListener("click", function () {
  sidebar.classList.remove("display");
});

close.addEventListener("click", function () {
  sidebar.classList.add("display");
});

window.addEventListener("click", function (e) {
  if (e.target === sidebar) {
    e.target.classList.add("display");
  }
});
