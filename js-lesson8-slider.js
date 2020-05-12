const sliderElem = document.querySelector('#slider');
const navigationElem = document.querySelector('#navigation');

let activeItem = 0;
const maxItems = document.querySelectorAll('.slide').length;

const scrollToItem = (id) => {
  const item = document.querySelector(`.slide[data-id="${id}"]`);

  if (!item) {
    return;
  }

  item.scrollIntoView({ behavior: 'smooth' });
};

window.addEventListener(
  'wheel',
  throttle((event) => {
    if (!event.deltaY) {
      return;
    }

    if (event.deltaY < 0) {
      activeItem -= 1;

      if (activeItem < 0) {
        activeItem = 0;
      }
    } else {
      activeItem += 1;

      if (activeItem > maxItems - 1) {
        activeItem = maxItems - 1;
      }
    }

    scrollToItem(activeItem);
  }, 500)
);

navigationElem.addEventListener('click', (event) => {
  const target = event.target;

  if (!target.matches('.navigation-item')) {
    return;
  }

  activeItem = Number(target.dataset.id);
  scrollToItem(activeItem);
});

// THROTTLE helper
function throttle(callback, limit) {
  let wait = false;
  let thCount = 0;
  return function throttledCallback(...throttledArgs) {
    if (!wait) {
      callback(...throttledArgs);
      thCount = 0;
      wait = true;

      setTimeout(() => {
        wait = false;
      }, limit);
    }
  };
}
