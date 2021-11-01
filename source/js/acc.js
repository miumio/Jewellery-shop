(function () {
  const container = document.querySelector('.accordion');

  if (!container) return;

  const acc = container.querySelectorAll('h4');
  const ul = container.querySelectorAll('ul');

  Array.from(acc).slice(1, -1).forEach((el) => {
    el.classList.add('accordion__title--close');
  })


  Array.from(ul).slice(1).forEach((el) => {
    el.style.display = 'none';
  });

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
