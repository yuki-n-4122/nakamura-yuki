var swiper = new Swiper('.swiper-container_list', {
  slidesPerView: 2,
  centeredSlides: true,
  loop: true,
  spaceBetween: 0,
  speed: 1000,
  freeMode: {
    enabled: true,
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    767: {
      slidesPerView: 4,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
