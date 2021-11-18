const toggler = (modal, overlay) => {
  if (modal.style.display == "none") {
    modal.style.display = "block";
    overlay.style.display = "block";
  } else {
    modal.style.display = "none";
    overlay.style.display = "none";
  }
};

export default toggler;
