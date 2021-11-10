(function () {
  const container = document.querySelector('.accordion');

  if (!container) return;

  const acc = container.querySelectorAll('.accordion__title');

  acc.forEach((el) => {
    el.classList.add('accordion__title--active');

    el.addEventListener('click', function(evt) {
      evt.preventDefault;

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
