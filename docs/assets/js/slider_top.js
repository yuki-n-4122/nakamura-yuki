var swiper = new Swiper('.swiper-container_top', {
  effect: 'fade',
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
