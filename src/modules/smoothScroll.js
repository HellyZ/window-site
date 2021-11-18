const smoothScroll = () => {
  const scrollBtn = document.querySelector(".smooth-scroll")
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  })
};

export default smoothScroll;
