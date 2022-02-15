const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1100: {
      slidesPerView: 4,
    },
    850:{
      slidesPerView: 3,
    },
    600:{
      slidesPerView: 2,
    },
    320:{
      slidesPerView: 1,
    }

  }

});