var swiper = new Swiper('.swiper-container_top', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 8000,
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
