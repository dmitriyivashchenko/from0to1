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
      nextArrow: ' <button class="slick-arrow slick-next"><img src="images/icons/slider-right-arrow.svg" alt=""></button>',
      responsive:[
        {
          breakpoint: 910,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 681,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 455,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
      });

    $('.header__menu-btn').on('click', function(){
      $('.header__menu > ul').slideToggle();
    });

    $('.header__drop-down.drop-down').on('click', function(){
      $(this).children('.drop-down__list').toggleClass('active');
      $(this).children('.drop-down__link').toggleClass('active');
    });

    // $('.header__drop-down.drop-down')
  });

