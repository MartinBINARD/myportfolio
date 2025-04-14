import { ChevronLeft, ChevronRight, createIcons } from 'lucide';
import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const swipeSlidesOnPortfolio = () => {
  document.addEventListener('DOMContentLoaded', () => {
    createIcons({
      icons: {
        ChevronLeft,
        ChevronRight
      }
    });
  });

  const swiper = new Swiper('.portfolio__container', {
    modules: [Navigation, Pagination, Mousewheel, Keyboard],
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    mousewheel: true,
    keyboard: true,
    on: {
      init: function() {
        // Customize buttons after initialization
        setTimeout(() => {
          const prevButton = document.querySelector('.swiper-button-prev');
          const nextButton = document.querySelector('.swiper-button-next');
          
          prevButton.innerHTML = '';
          nextButton.innerHTML = '';
          
          const prevIcon = document.createElement('i');
          const nextIcon = document.createElement('i');
          
          prevIcon.dataset.lucide = 'chevron-left';
          nextIcon.dataset.lucide = 'chevron-right';
          
          prevButton.appendChild(prevIcon);
          nextButton.appendChild(nextIcon);
          
          createIcons({
            icons: {
              ChevronLeft,
              ChevronRight
            }
          });
        }, 0);
      }
    }
  });
}