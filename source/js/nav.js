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
