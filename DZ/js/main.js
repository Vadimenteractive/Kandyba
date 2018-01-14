;(function ($) {
    $('div').on('click', function () {
        $(this).toggle(1000).next().toggle(500);
    });
    $('.c4').on('click', function () {
        $('.c1').toggle(500);
    })
})(jQuery);
