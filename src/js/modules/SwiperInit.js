import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

Swiper.use([Navigation]);

function SliderInit(sliderSelector, params) {
  const sliderElement = document.querySelector(sliderSelector);

  if (!sliderElement) {
    return;
  }

  const swiper = new Swiper(sliderElement, {
    loop: params.loop,
    speed: 520,
    slidesPerView: 1,
    spaceBetween: 0,
    autoheight: true,
    navigation: {
      nextEl: params.nextEl,
      prevEl: params.prevEl,
    },
    ...params.settings,
  });

  return swiper;
}

function initializeAllSliders() {
  const reviewsSliderParams = {
    loop: true,
    nextEl: '.js-swiper-button-next-1',
    prevEl: '.js-swiper-button-prev-1',
    settings: {
      slidesPerView: 1,
      spaceBetween: 24,
      breakpoints: {
        577: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        }
      }
    }
  };

  SliderInit('.js-reviews-slider-init', reviewsSliderParams);
}

document.addEventListener('DOMContentLoaded', initializeAllSliders);

export default initializeAllSliders;