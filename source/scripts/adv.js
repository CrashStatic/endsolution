const advList = document.querySelector('.advantages__list');
const fragment = document.createDocumentFragment();
const itemMail = document.querySelector('.advantages__item--mail');
const radius = 135; // Радиус круга
const centerX = 105; // Центр по оси X
const centerY = 165; // Центр по оси Y

const renderItem = () => {
  if (window.innerWidth > 991) {
    const newItemMail = itemMail.cloneNode(true);
    newItemMail.textContent = 'Просматривать скрытые фото';
    const newItemSetting = newItemMail.cloneNode(true);
    newItemSetting.classList.add('advantages__item--setting');
    newItemSetting.classList.remove('advantages__item--mail');
    fragment.append(newItemMail);
    fragment.append(newItemSetting);

    advList.appendChild(fragment);

    const items = advList.querySelectorAll('.advantages__item');

    items.forEach((item, index) => {
      const angle = (index / items.length) * (2 * Math.PI); // Вычисляем угол
      const x = centerX + radius * Math.cos(angle) - item.offsetWidth / 2; // Вычисляем X координату
      const y = centerY + radius * Math.sin(angle) - item.offsetHeight / 2; // Вычисляем Y координату

      item.style.left = `${x}px`; // Устанавливаем позицию X
      item.style.top = `${y}px`; // Устанавливаем позицию Y
    });
  }
};

export { renderItem };
