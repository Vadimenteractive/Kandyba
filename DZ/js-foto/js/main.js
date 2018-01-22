;(function($){
    $('.library').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinity: true,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false
    })


    $('.item').magnificPopup({
        type : 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery : {
            enabled : true
        }
    });
})(jQuery);