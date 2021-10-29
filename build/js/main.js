(function () {
  const link = document.querySelector('.catalog__filter-link');

  link.classList.add('catalog__filter-link--show')
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
