var swiper = new Swiper('.swiper-container_top', {
  effect: 'fade',
  speed: 1000,
  preloadImages: false,
  lazy: true,
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
