
var starringSwiper = new Swiper(".starring__swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next'
    },
});


var imagesSwiper = new Swiper(".images__swiper", {
  loop: true,
  spaceBetween: 15,
  slidesPerView: "9",
  freeMode: true,
  watchSlidesProgress: true,
  
});
var imagesSwiper2 = new Swiper(".images__swiper-2", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 2,
  centeredSlides: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: imagesSwiper
  }
});



  var elseSwiper = new Swiper(".else__swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next'
    }
});

const aboutlist = document.querySelector ('.about__list');
const aboutBtnMore = document.querySelector ('.about__btn-more')

aboutBtnMore.addEventListener('click', () => {
  aboutlist.classList.toggle('height-auto__about')
});

const factslist = document.querySelector ('.facts__content');
const factsBtnMore = document.querySelector ('.facts__btn-more')

factsBtnMore.addEventListener('click', () => {
  factslist.classList.toggle('height-auto__facts')
});


 


