import toggler from "./utils";

const modal = () => {
  let serviceModal = document.querySelector(".services-modal");
  let serviceBtns = document.querySelectorAll(".service-button");
  let serviceClose = document.querySelector(".services-modal__close");

  let headerModal = document.querySelector(".header-modal");
  let headerBtn = document.querySelector("#header .button");
  let headerClose = document.querySelector(".header-modal__close");

  let overlay = document.querySelector(".overlay");

  let showModal = (modal) => {
    toggler(modal, overlay);
  };

  document.addEventListener("DOMContentLoaded", (e) => {
    overlay.style.display = "none";
    serviceModal.style.display = "none";
    headerModal.style.display = "none";
  });

  serviceBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      showModal(serviceModal);
    })
  );

  headerBtn.addEventListener("click", (e) => {
    showModal(headerModal);
  });
  overlay.addEventListener("click", (e) => {
    overlay.style.display = "none";
    if (serviceModal.style.display == "block") {
      serviceModal.style.display = "none";
    } else if (headerModal.style.display == "block") {
      headerModal.style.display = "none";
    }
  });

  headerClose.addEventListener("click", (e) => {
    toggler(headerModal, overlay);
  });

  serviceClose.addEventListener("click", (e) => {
    toggler(serviceModal, overlay);
  });
};

export default modal;
