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
    infinite: true,
    autoplay: true
  });
  $('.slider__thumbnails').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider__inner',
    infinite: true,
    variableWidth: true,
    arrows: false,
    focusOnSelect: true
  });
});
        