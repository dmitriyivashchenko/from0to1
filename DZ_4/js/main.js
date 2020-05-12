$(function(){
  // $('.slider__inner').slick({
  //   autoplay: true,
  //   arrows: false,
  //   dots: true
  // });
  $('.slider__inner').slick({
    slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: true,
    fade: false,
    autoplay: false
  });
  $('.slider__thumbnails').slick({
    asNavFor: '.slider__inner',
    slidesToShow: 6,
    rows: 1,
    slidesPerRow: 6,
    variableWidth: true,
    arrows: false,
    focusOnSelect: true,
  });

  $('.header__menu-btn').on('click', function(){
    $('.header__menu ul').slideToggle();
  });
});
        