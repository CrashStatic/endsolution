const navButton = document.querySelector('.header__nav-toggle');
const nav = document.querySelector('.header__navigation');

const initMenu = () => {
  if (!nav || !navButton) {
    return;
  }

  const toggleMenu = () => {
    nav.classList.toggle('header__navigation--opened');
    navButton.classList.toggle('header__nav-toggle--cross');
  };

  navButton.addEventListener('click', toggleMenu);
};

export { initMenu };
