(function () {
  const container = document.querySelector('.accordion');

  if (!container) return;

  const acc = container.querySelectorAll('.accordion__button');
  const price = document.querySelector('.accordion--catalog');
  const arr = Array.from(acc);

  acc.forEach((el) => {
    el.classList.add('accordion__button--active');
  });

  if (price) {
    arr.slice(1, -1).forEach((el) => {
      el.classList.add('accordion__button--close');
    });
  } else
    arr.slice(1).forEach((el) => {
      el.classList.add('accordion__button--close');
    });

  acc.forEach((el) => {
    el.addEventListener('click', function (evt) {
      evt.preventDefault;

      el.classList.toggle('accordion__button--close');
    });
  });
})();
