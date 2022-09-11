var swiper = new Swiper('.swiper-container_top', {
  slidesPerView: 2,
  spaceBetween: 0,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  direction: "vertical",
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
