const smoothScroll = () => {
  const section = document.querySelector("#benefits");
  const scrollBtn = document.querySelector(".smooth-scroll");

  document.addEventListener("scroll", (e) => {
    let domRect = section.getBoundingClientRect();
    
    if (domRect.y > 0) {
      scrollBtn.style.display = "none";
    } else {
      scrollBtn.style.display = "block";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

};

export default smoothScroll;
