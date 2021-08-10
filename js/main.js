
const reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.reviews-slider__pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
  });

const benefitsSliderMob = new Swiper(".benefits-mob__container", {
  // Optional parameters
  loop: true,


  // If we need pagination
  pagination: {
    el: '.benefits-mob__pagination',
    clickable: true,
  },
});

let menuButton = document.querySelector('.header-wrapper__button');
menuButton.addEventListener('click', function (){
  document.querySelector('.login').classList.toggle('login--visible');
  document.querySelector('.login__close').classList.toggle('login__close--visible');
});

let closeButton = document.querySelector('.login__close');
closeButton.addEventListener('click', function (){
  document.querySelector('.login').classList.remove('login--visible');
  document.querySelector('.login__close').classList.remove('login__close--visible');
});

let menuMob = document.querySelector('.header-menu-mob__button');
menuMob.addEventListener('click', function(){
  document.querySelector('.header-wrapper').classList.toggle('header-wrapper--visible');
  document.querySelector('.header-menu-mob__close').classList.toggle('header-menu-mob__close--visible');
});

let closeMob = document.querySelector('.header-menu-mob__close');
closeMob.addEventListener('click', function (){
  document.querySelector('.header-wrapper').classList.remove('header-wrapper--visible');
  document.querySelector('.header-menu-mob__close').classList.remove('header-menu-mob__close--visible');
});

let closeLoginMob = document.querySelector('.login__button--close-mob');
closeLoginMob.addEventListener('click', function (){
  document.querySelector('.login').classList.remove('login--visible');
  document.querySelector('.login__close').classList.remove('login__close--visible');
});