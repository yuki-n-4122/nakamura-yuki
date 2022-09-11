var swiper = new Swiper('.swiper-container_top', {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
