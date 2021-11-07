(function () {
  const container = document.querySelector('.accordion');

  if (!container) return;

  const acc = container.querySelectorAll('h3');

  acc.forEach((el) => {
    el.classList.add('accordion__title');

    el.addEventListener('click', function() {

      let panel = this.nextElementSibling;
      if (panel.style.display === 'none') {
        panel.style.display = 'block';
        el.classList.remove('accordion__title--close');
      } else {
        panel.style.display = 'none';
        el.classList.add('accordion__title--close');
      }
    });
  });
})();

(function () {
  const link = document.querySelector('.catalog__filter-link');
  const filter = document.querySelector('.filter');

  if (!filter) return;

  const form = filter.querySelector('form');
  const checkboxOn = form.querySelectorAll('input[type=checkbox]:checked');
  const checkboxOff = form.querySelectorAll('input[type=checkbox]:not(:checked)');
  const closeButton = filter.querySelector('.filter__close-button');
  const resetButton = form.querySelector('button[type=reset]');
  const overlay = filter.querySelector('.filter__overlay');


  link.classList.add('catalog__filter-link--show');

  link.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (filter) {
      filter.classList.add('filter--show');
    }
  });

  const closeFilter = () => {
    filter.classList.remove('filter--show');
  }

  closeButton.addEventListener('click', closeFilter);
  overlay.addEventListener('click', closeFilter);

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (filter.classList.contains('filter--show')) {
        evt.preventDefault();
        closeFilter;
      }
    }
  });

  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    checkboxOn.forEach((el) => el.checked = true);
    checkboxOff.forEach((el) => el.checked = false);
  });
})();

(function () {
  const link = document.querySelector('.nav__link--login');
  const modal = document.querySelector('.modal');
  const body = document.querySelector('body');
  const email = modal.querySelector('#email-data');
  const closeButton = modal.querySelector('.login__close-button');
  const form = modal.querySelector('form');

  let isStorageSupport = true;

  closeButton.classList.add('login__close-button--show');

  if (!link) return;

  const focusRestrict = () => {
    document.addEventListener(
      'focus',
      function (event) {
        if (showPopup && !modal.contains(event.target)) {
          event.stopPropagation();
          closeButton.focus();
        }
      },
      true,
    );
  };

  const showPopup = function () {
    modal.classList.add('modal--show');
    body.style.overflow = 'hidden';
    modal.setAttribute('tabindex', '0');
    email.focus();
    focusRestrict();
  };

  const closePopup = function () {
    body.style.overflow = 'visible';
    modal.classList.remove('modal--show');
  };

  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    showPopup();
  });

  closeButton.addEventListener('click', closePopup);

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (modal.classList.contains('modal--show')) {
        evt.preventDefault();
        closePopup();
      }
    }
  });

  form.addEventListener('submit', function () {
    if (isStorageSupport) {
      localStorage.setItem('email', email.value);
    }
    closePopup();
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

  toggler.addEventListener(
    'click',
    function () {
      if (nav.classList.contains('nav--closed')) {
        nav.classList.remove('nav--closed');
        nav.classList.add('nav--opened');
        body.style.overflow = 'hidden';
        nav.style.overflow = 'scroll';
      } else {
        nav.classList.add('nav--closed');
        nav.classList.remove('nav--opened');
        body.style.overflow = 'scroll';
      }
    },
    { passive: true },
    { once: true },
  );
})();

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
