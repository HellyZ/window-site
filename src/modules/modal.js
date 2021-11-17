const modal = () => {
  const modal = document.querySelector(".header-modal");
  const overlay = document.querySelector(".overlay");

  const toggler = (elems) => {
    elems.forEach((el) => {
      if (el.style.display == "block") el.style.display = "none";
      else el.style.display = "block";
    });
  };

  document.addEventListener("click", (e) => {
    if (e.target.closest("#header .button")) {
      console.log("#header .button");
      toggler([modal, overlay]);
    } else if (
      e.target.closest(".header-modal__close") ||
      e.target.closest(".overlay")
    ) {
      console.log("header-modal__close or overlay");
      toggler([modal, overlay]);
    }
  });
};

export default modal;
