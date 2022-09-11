var swiper = new Swiper('.swiper-container_top', {
  slidesPerView: 2,
  spaceBetween: 0,
  effect: 'fade',
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
