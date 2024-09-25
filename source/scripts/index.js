/* в этот файл добавляет скрипты*/
import { initMenu } from './nav-toggle.js';
import { initOffersSlider } from './offers-slider.js';
import { renderItem } from './adv.js';
import './stock-counter.js';
import './bubble.js';

const items = document.querySelectorAll('.advantages__item');
const radius = 135; // Радиус круга
const centerX = 105; // Центр по оси X
const centerY = 165; // Центр по оси Y

initMenu();
initOffersSlider();
renderItem();

if (window.innerWidth > 991) {
  items.forEach((item, index) => {
    const angle = (index / items.length) * (2 * Math.PI); // Вычисляем угол
    const x = centerX + radius * Math.cos(angle) - item.offsetWidth / 2; // Вычисляем X координату
    const y = centerY + radius * Math.sin(angle) - item.offsetHeight / 2; // Вычисляем Y координату

    item.style.left = `${x}px`; // Устанавливаем позицию X
    item.style.top = `${y}px`; // Устанавливаем позицию Y
  });
}
