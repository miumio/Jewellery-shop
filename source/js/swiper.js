(function () {
  if (!("Swiper" in window)) return;

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // renderBullet: function (index, className) {
      //   return '<span class="' + className + '">' + (index + 1) + "</span>";
      // },
      dynamicBullets: true,
      dynamicMainBullets: 3,
      type: 'custom',
      renderCustom: (swiper, current, total) => {
        return `<span>${current} of ${total}</span>`
      }
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
})();
