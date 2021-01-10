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
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.catalog__selector').find('div.catalog__blocks').removeClass('catalog__blocks_active').eq($(this).index()).addClass('catalog__blocks_active');
    });

    $('.catalog-block__link').each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-block__main').eq(i).toggleClass('catalog-block__main_active');
        $('.catalog-block__second').eq(i).toggleClass('catalog-block__second_active');
      })
    })
  });