// $(document).ready(function(){

//     $('.tabs-triggers_item').click(function(e){
//         e.preventDefault();

//         $('.tabs-triggers_item').removeClass('tabs-triggers_item--active');
//         $('.tabs-content_item').removeClass('tabs-content_item--active');

//         $(this).addClass('tabs-triggers_item--active');
//         $($(this).attr('href')).addClass('tabs-content_item--active');
//     });
//     $('.tabs-triggers_item:first').click();
    
    
// });

var swiper = new Swiper(".starring__swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next'
    },
});

// var swiper = new Swiper(".images__swiper", {
//     slidesPerView: "auto",
//     navigation: {
//         nextEl: '.swiper-button-prev',
//         prevEl: '.swiper-button-next'
//     },
//     centeredSlides: true,
//     slidesPerGroup: 1,
//     initialSlide: 1,
//     spaceBetween: 0,
//     loop: true,
// });



var swiper = new Swiper(".images__swiper", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 2,
    centeredSlides: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper2 = new Swiper(".images__swiper-2", {
    loop: true,
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });


 


