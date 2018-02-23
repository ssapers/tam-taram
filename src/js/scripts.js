const carousel = $('.gallery__step');


$(function(){
    $('#btnGallery').click(function(){
        $('.gallery__video').toggleClass('gallery__video_enable');
    });
});

$(function(){
    $('#btnSearch').click(function(e){
        e.preventDefault();
        $('.search__text').toggleClass('search__text_enabled');

    });
});

$(function(){
    $('#searchButton').click(function(){
        $('.search__field').toggleClass('search__field_i');
        $('.search-location').toggleClass('search-location_i');
    });
});

$(function(){

    const $menuElem = $('.menu-mobile__content');

    const $menu = $('.menu-content');

    const $header = $('.header');

    $menuElem.click(function(){

        if($menu.hasClass('active')){

            $menu.slideDown('normal').removeClass('active');
            $header.toggleClass('header_i');
        }
        else{
            $header.removeClass('header_i');
            $menu.slideUp('normal').addClass('active');
        }
    });

});

$('[data-fancybox]').fancybox({
    type: 'iframe',
    infinite: false,
    dots: true,
    media : {
        youtube : {
            params : {
                autoplay : 0
            }
        }
    },

});

const $width = $(document).width();

if($width>767) {
    $('.carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: "<img src='../img/right-chevron.png' class='gallery__arrow next-arrow'>",
        prevArrow: "<img src='../img/right-chevron.png' class='gallery__arrow prev-arrow'>",
        responsive:[
            {
                breakpoint: 1199,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

}
else{
    carousel.removeClass('carousel');
}

