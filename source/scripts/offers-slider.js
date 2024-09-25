// import Swiper from '../vendor/swiper-bundle.mjs';
// import { Pagination } from '../vendor/swiper/modules';
import Swiper from './vendor/swiper-bundle.mjs';

const initOffersSlider = () => {
  new Swiper('.offers__swiper', {

    loop: true,
    slidesPerView: 'auto',
    slidesPerGroup: 1,

    pagination: {
      el: '.offers__pagination',
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      320: {
        spaceBetween: 20,
      },

      992: {
        enabled: false,
      },
    },
  });
};

export { initOffersSlider };
