$(document).ready(function(){
    $('.carousel__inner').slick({
        adaptiveHeight: true,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/chevron-left-solid.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/chevron-right-solid.png"></img></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                dots: true
              }
            }
          ]
    });
  });