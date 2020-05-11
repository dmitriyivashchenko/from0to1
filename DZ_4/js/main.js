$(function(){
  // $('.slider__inner').slick({
  //   autoplay: true,
  //   arrows: false,
  //   dots: true
  // });
  $('.slider__inner').slick({
    // slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: '.slider__thumbnails',
    autoplay: false
  });
  $('.slider__thumbnails').slick({
    slidesToShow: 6,
    // slidesToScroll: 12,
    asNavFor: '.slider__inner',
    variableWidth: true,
    arrows: false,
    focusOnSelect: true
  });
});
        