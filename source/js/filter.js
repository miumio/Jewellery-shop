(function () {
  const link = document.querySelector('.catalog__filter-link');
  const filter = document.querySelector('.catalog__filter');
  const form = filter.querySelector('form');
  const checkbox = form.querySelectorAll('input');
  const closeButton = filter.querySelector('.filter__button');
  const resetButton = form.querySelector('button[type=reset]');

  if (!link) return;

  link.classList.add('catalog__filter-link--show');

  link.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (filter) {
      filter.classList.add('catalog__filter--show');
    }
  });

  closeButton.addEventListener('click', function () {
    filter.classList.remove('catalog__filter--show');
  });

  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    checkbox.forEach((el) => el.checked = false);
  });
})();
