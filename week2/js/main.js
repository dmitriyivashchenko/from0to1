$(function(){
    $('.slider__inner').slick({
      autoplay: true,
      arrows: false,
      dots: true
    });

    $('.works__inner').slick({
      slidesToShow: 4,
      slidesToSctoll: 1,
      prevArrow: ' <button class="slick-arrow slick-prev"><img src="images/icons/slider-left-arrow.svg" alt=""></button>',
      nextArrow: ' <button class="slick-arrow slick-next"><img src="images/icons/slider-right-arrow.svg" alt=""></button>'
      });

  });
          