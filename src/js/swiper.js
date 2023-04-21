const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  keyboard: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});
swiper.on('slideChange', function (swiper) {
  console.dir(swiper.realIndex);
  document.querySelector('.pagination-current').innerHTML =
    '0' + (swiper.realIndex + 1);
});
