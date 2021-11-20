function createModalOverlay(modal) {
  let newOverlay = document.querySelector(".document-overlay").cloneNode();
  Object.assign(newOverlay.style, {
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    opacity: 1,
    "z-index": 0,
  });
  newOverlay.classList.add("col-sm-4");
  newOverlay.addEventListener("click", () => {
    modal.remove();
    newOverlay.style.display = "none";
    newOverlay.remove();
  });
  return newOverlay;
}

function createModal(certImg) {
  let modal = document.createElement("div");
  modal.classList.add("box-modal");
  modal.setAttribute("aria-modal", true);
  Object.assign(modal.style, {
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "z-index": 1,
  });

  let modalBody = document.createElement("div");
  modalBody.style.padding = 0;
  modalBody.classList.add("box-modal_body");
  modalBody.appendChild(certImg);
  modal.appendChild(modalBody);

  let modalOverlay = createModalOverlay(modal);

  certImg.addEventListener("click", () => {
    modal.remove(), modalOverlay.remove();
  });

  document.body.appendChild(modalOverlay);
  return modal;
}

function getOriginalImage(certElement) {
  let img = document.createElement("img");
  img.setAttribute("src", certElement.getAttribute("href"));
  img.style.maxHeight = "80vh";
  return img;
}

const documentGallery = () => {
  const section = document.querySelector("#documents");
  let shit = section.querySelector(".text-center");
  Object.assign(shit.style, {
    display: "flex",
    justifyContent: "space-evenly",
    textAlign: "unset",
    flexWrap: "wrap",
    flexDirection: "col",
  });
  let docs = section.querySelectorAll("img");
  docs.forEach((item) => {
    let ahref = item.parentElement;
    ahref.parentElement.style.maxWidth = "max-content";
    ahref.parentElement.style.margin = "10px";
    let img = getOriginalImage(ahref);
    let overlay = item.nextElementSibling;

    overlay.addEventListener("mouseover", (e) => {
      e.preventDefault();

      if (overlay.style.opacity < 1) {
        Object.assign(overlay.style, {
          opacity: 1,
        });
      }
      e.stopPropagation();
    });

    overlay.addEventListener("mouseout", (e) => {
      e.preventDefault();
      Object.assign(overlay.style, {
        opacity: 0,
      });
    });

    overlay.addEventListener("click", (e) => {
      e.preventDefault();
      let newModal = createModal(img);
      document.body.appendChild(newModal);
    });
  });
};

export default documentGallery;
