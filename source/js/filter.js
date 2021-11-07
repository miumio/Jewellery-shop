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
