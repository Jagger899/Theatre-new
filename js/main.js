
const swiper = new Swiper('.swiper', {
  loop: true,
  effect: "cards",
  grabCursor: true,
  slidesPerView:1,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
});

const swiper2 = new Swiper('.swiper2', {
  loop: true,
  grabCursor: true,
  slidesPerView: 0,
  spaceBetween:0,
  breakpoints: {
    0: {
      slidesPerView: 1.13,
    },

    576: {
      slidesPerView: 1.13,
    },

    768: {
      slidesPerView: 1.5,
      spaceBetween: 0,
    },

    992: {
      slidesPerView: 1.56,
      spaceBetween: 0,
    },

    1160: {
      slidesPerView:3,
    },

    1200: {
      slidesPerView: 4,
    }
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
  console.log('working')
});


