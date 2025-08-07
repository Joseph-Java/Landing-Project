'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelector('.btn--show-modal');
const btnCloseModal = document.querySelector('.btn--close-modal');
const hamburger = document.getElementById('hamburger');
const navRight = document.querySelector('.nav-right');
const Image = document.querySelector('.header-image');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav-bar');

hamburger.addEventListener('click', () => {
  navRight.classList.toggle('active');
});


// This is for collapsing navigation links & Buttons
Image.addEventListener('click', function() {
  this.classList.add('rotate');
  setTimeout(() => {
    this.classList.remove('rotate');
  }, 800);
})

// Transition for header
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
     document.querySelector('header').classList.add('loaded')}, 1000);
});


// IMPLEMENTING SMOOTH SCROLLING
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({behavior: 'smooth'});
});

// IMPLEMENTING PAGE NAVIGATION
document.querySelector('.nav-links').addEventListener('click', function (e) {
  e.preventDefault();

  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});

// IMPLEMENTING BLUR LINKED WHEN WE HOVER ON ONE OF THE LINKS
const handleHover = function(e) {
   if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav-bar').querySelectorAll('.nav__link');
    const logo = link.closest('.nav-bar').querySelector('.logo');

    siblings.forEach (el => {
      if (el !== link) el.style.opacity = this;
    }); 
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// REVEALING ELEMENTS ON SCROLL
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
   

// Modal Window
const OpenModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
btnOpenModal.addEventListener('click', OpenModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  };
});
