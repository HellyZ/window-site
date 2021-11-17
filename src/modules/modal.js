const modal = () => {
  const btn = document.querySelector("#header .button");
  const modal = document.querySelector(".header-modal");
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.querySelector(".header-modal__close");

  btn.addEventListener("click", () => {
    modal.style.display = "block";
    overlay.style.display = "block";
  });
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
  });
  overlay.addEventListener("click", (e) => {
    modal.style.display = "none";
    overlay.style.display = "none";
  });
};

export default modal;
