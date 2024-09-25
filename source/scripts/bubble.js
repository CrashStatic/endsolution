// import Parallax from 'parallax-js';

// import Parallax from 'parallax';

// const leftBubbles = document.getElementById('bubbles-left');
// const rightBubbles = document.getElementById('bubbles-right');
// new Parallax(leftBubbles);
// let leftBubblesInstance = new Parallax(leftBubbles);
// new Parallax(rightBubbles);

const bg = document.querySelector('.page__bubbles-left');
// const fog1 = document.querySelector('.mouse-parallax-fog-1');
// const fog2 = document.querySelector('.mouse-parallax-fog-2');
window.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  bg.style.transform = `translate(-${ x * 50 }px, -${ y * 50 }px)`;
  // fog1.style.transform = `translate(+${ x * 50 }px, -${ y * 50 }px)`;
  // fog2.style.transform = `translate(-${ x * 20 }px, -${ y * 20 }px)`;
});
