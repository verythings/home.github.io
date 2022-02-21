var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
          clickable: true,
  },

  speed : 1500,
  mousewheel: true,
  keyboard: true,
  loop: true,
  autoplay:{
    delay: 5000,
    disableOnInteraction: false,
  }
  
});