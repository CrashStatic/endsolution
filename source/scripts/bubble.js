// import Parallax from 'parallax-js';

// import Parallax from 'parallax';

// const leftBubbles = document.getElementById('bubbles-left');
// const rightBubbles = document.getElementById('bubbles-right');
// new Parallax(leftBubbles);
// let leftBubblesInstance = new Parallax(leftBubbles);
// new Parallax(rightBubbles);

const leftBubbles = document.querySelector('.page__bubbles-left');
const rightBubbles = document.querySelector('.page__bubbles-right');

window.addEventListener('mousemove', (evt) => {
  const x = evt.clientX / window.innerWidth;
  const y = evt.clientY / window.innerHeight;
  leftBubbles.style.transform = `translate(+${ x * 50 }px, -${ y * 50 }px)`;
  rightBubbles.style.transform = `translate(+${ x * 50 }px, -${ y * 50 }px)`;

});
