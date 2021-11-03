(function () {
  const link = document.querySelector('.nav__link--login');
  const modal = document.querySelector('.modal');
  const body = document.querySelector('body');
  const email = modal.querySelector('#email-data');
  const closeButton = modal.querySelector('.login__close-button');

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
      true
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
})();
