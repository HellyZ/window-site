import Swiper, { Navigation } from "swiper";

const sliderBlock = () => {
  const slider = new Swiper(".swiper", {
    modules: [Navigation],
    enabled: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    autoplay: {
      delay: 2500,
    },
    navigation: {
      nextEl: ".benefits__arrow--right",
      prevEl: ".benefits__arrow--left",
    },
    slideClass: "swiper-slide",
    breakpoints: {
      // when window width is >= 320px
      400: {
        slidesPerView: 1,
        // slidesPerGroup: 1,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
};

export default sliderBlock;
