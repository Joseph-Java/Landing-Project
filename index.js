'use strict';

const hamburger = document.getElementById('hamburger');
const navRight = document.querySelector('.nav-right');
const Image = document.querySelector('.header-image');

hamburger.addEventListener('click', () => {
  navRight.classList.toggle('active');
});

Image.addEventListener('click', function() {
  this.classList.add('rotate');
  setTimeout(() => {
    this.classList.remove('rotate');
  }, 800);
})

