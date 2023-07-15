// eslint-disable-next-line no-undef
const coachSlider = new Swiper('.coach__slider', {
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      initialSlide: 0,
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  navigation: {
    prevEl: '.coach__button--prev',
    nextEl: '.coach__button--next',
  },
});

export {coachSlider};
