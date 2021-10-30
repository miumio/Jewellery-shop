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


  ul.forEach((el) => {
    el.style.display = 'none';
  });

  acc.forEach((el) => {
    el.addEventListener('click', function() {
      this.classList.toggle('active');
      let panel = this.nextElementSibling;
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
    });
  });
})();

(function () {
  const header = document.querySelector('.page-header');
  const nav = document.querySelector('.nav');
  const toggler = nav.querySelector('.nav__button');

  if (!header) return;

  nav.classList.remove('nav--nojs');
  nav.classList.add('nav--closed');
  toggler.classList.add('nav__button--show');
  header.classList.add('page-header--white');

  toggler.addEventListener('click', function () {
    if (
      nav.classList.contains('nav--closed') &&
      header.classList.contains('page-header--white')
    ) {
      nav.classList.remove('nav--closed');
      nav.classList.add('nav--opened');
      header.classList.remove('page-header--white');
    } else {
      nav.classList.add('nav--closed');
      nav.classList.remove('nav--opened');
      header.classList.add('page-header--white');
    }
  });
})();
