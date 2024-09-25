const leftBubbles = document.querySelector('.page__bubbles-left');
const rightBubbles = document.querySelector('.page__bubbles-right');

window.addEventListener('mousemove', (evt) => {
  const x = evt.clientX / window.innerWidth;
  const y = evt.clientY / window.innerHeight;
  leftBubbles.style.transform = `translate(+${ x * 50 }px, -${ y * 50 }px)`;
  rightBubbles.style.transform = `translate(+${ x * 50 }px, -${ y * 50 }px)`;

});
