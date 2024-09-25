const advList = document.querySelector('.advantages__list');
const fragment = document.createDocumentFragment();
const itemMail = document.querySelector('.advantages__item--mail');

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
  }
};

export { renderItem };
