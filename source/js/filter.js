(function () {
  const link = document.querySelector('.catalog__filter-link');
  const filter = document.querySelector('.catalog__filter');
  const closeButton = document.querySelector('.filter__button');

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
