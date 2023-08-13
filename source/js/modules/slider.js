import Swiper from '../vendor/swiper.js';

const coachSlider = new Swiper('[data-coach-slider]', {
  initialSlide: 2,
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    768: {
      initialSlide: 2,
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      initialSlide: 0,
      slidesPerView: 2,
      spaceBetween: 40,
      allowTouchMove: false,
    },
    1366: {
      initialSlide: 0,
      slidesPerView: 4,
      spaceBetween: 40,
      allowTouchMove: false,
    },
  },
  navigation: {
    prevEl: '.coach__button--prev',
    nextEl: '.coach__button--next',
  },
});

const reviewsSlider = new Swiper('[data-reviews-slider]', {
  loop: false,
  navigation: {
    prevEl: '.reviews__button--prev',
    nextEl: '.reviews__button--next',
  },
});

export {coachSlider, reviewsSlider};
