const swiper1 = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },

});

const swiper2 = new Swiper('.recommendet-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  // Navigation arrows
  navigation: {
    nextEl: '.recommendet-button-next',
    prevEl: '.recommendet-button-prev',
  },

});

const swiper3 = new Swiper('.recommendet-channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  // Navigation arrows
  navigation: {
    nextEl: '.recommendet-channel-button-next',
    prevEl: '.recommendet-channel-button-prev',
  },

});