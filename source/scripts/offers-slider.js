import Swiper from 'swiper/bundle';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

const initOffersSlider = () => {
  new Swiper('.offers__swiper', {

    modules: [Pagination],
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
