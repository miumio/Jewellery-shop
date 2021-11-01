(function () {
  const link = document.querySelector('.catalog__filter-link');
  const filter = document.querySelector('.catalog__filter');
  const closeButton = document.querySelector('.filter__button');

  if (!link) return;

  link.classList.add('catalog__filter-link--show');

  link.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (filter) {
      filter.classList.add('catalog__filter--show');
    }
  })

  closeButton.addEventListener('click', function (el) {
    filter.classList.remove('catalog__filter--show');
  })
})();

(function () {
  const container = document.querySelector('.accordion');

  if (!container) return;

  const acc = container.querySelectorAll('h4');
  const ul = container.querySelectorAll('ul');


  Array.from(ul).slice(1).forEach((el) => {
    el.style.display = 'none';
  });

  acc.forEach((el) => {
    el.addEventListener('click', function() {
      this.classList.toggle('active');
      let panel = this.nextElementSibling;
      if (panel.style.display === 'none') {
        panel.style.display = 'block';
      } else {
        panel.style.display = 'none';
      }
    });
  });
})();

(function () {
  const body = document.querySelector('body');

  const header = document.querySelector('.page-header');

  if (!header) return;

  const nav = header.querySelector('.nav');
  const toggler = nav.querySelector('.nav__button');


  nav.classList.remove('nav--nojs');
  nav.classList.add('nav--closed');
  toggler.classList.add('nav__button--show');

  toggler.addEventListener('click', function () {
    if (nav.classList.contains('nav--closed'))
      {
      nav.classList.remove('nav--closed');
      nav.classList.add('nav--opened');
      body.style.overflow = 'hidden';
      nav.style.overflow = 'scroll';
    } else {
      nav.classList.add('nav--closed');
      nav.classList.remove('nav--opened');
      body.style.overflow = 'scroll';
    }
  });
})();

(function () {
  if (!("Swiper" in window)) return;

  let swiperParams = {
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  if (window.innerWidth < 768) {
    swiperParams = {
      type: "custom",
      renderCustom: (sw, ind, tot) => `${ind} of ${tot}`,
    };
  }

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
      ...swiperParams,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
})();
