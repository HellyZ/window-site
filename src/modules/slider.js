import Swiper, { Navigation } from "swiper";

const newSlider = (sliderId, breakpoints) => {
  let slider = new Swiper(`#${sliderId} .swiper`, {
    modules: [Navigation],
    enabled: true,
    centeredSlidesBounds: true,
    navigation: {
      nextEl: `.${sliderId}__arrow--right`,
      prevEl: `.${sliderId}__arrow--left`,
    },
    breakpoints: breakpoints,
  });
  
  return slider;
};

const sliderBlock = () => {
  let benefitSlider = newSlider("benefits", {
     400: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  });

  let serviceSlider = newSlider("services", {
    400: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  });
};

export default sliderBlock;
