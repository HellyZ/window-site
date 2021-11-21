const menu = () => {
  const menuMain = document.querySelector("#menu-main-menu");
  const menu = document.querySelector("#navbar-collapse");

  const toggler = (el) => {
    if (el.style.display == "block") {
      el.style.display = "none";
    } else {
      el.style.display = "block";
    }
  };

  const menuBtns = document.querySelectorAll(".collapsed");
  document.addEventListener("DOMContentLoaded", (e) => {
    menu.style.display = "none";
  });

  window.addEventListener("resize", (e) => {
    let navbar = document.querySelector("#navbar-collapse-fixed");
    let navCollapsed = document.querySelector("#navbar-collapse");

    if (window.innerWidth >= 768 || window.innerWidth <= 992) {
      navCollapsed.style.display = "none";
      navbar.style.display = "none";
      menuMain.style.display = "none";
    }
  });

  menuBtns[1].addEventListener("click", (e) => {
    toggler(menu);
  });
};

export default menu;
