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

  closeButton.addEventListener('click', function () {
    filter.classList.remove('catalog__filter--show');
  })
})();
