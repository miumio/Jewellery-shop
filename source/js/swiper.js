(function () {
  if (!('Swiper' in window)) return;

  let swiperParams = {
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  if (window.innerWidth < 768) {
    swiperParams = {
      type: 'custom',
      renderCustom: (sw, ind, tot) => `${ind} of ${tot}`,
    };
  }

  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      ...swiperParams,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,
      },
    },
  });
})();
