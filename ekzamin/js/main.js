;(function ($) {
    $(function () {
        $('.slide-contein').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 930,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        $('.isotope_1').isotope({
            layoutMode: 'packery',
            itemSelector: '.rectangle'
        });
        $('.carousel').carousel({
            interval: 5000
        });
    })
})(jQuery);

