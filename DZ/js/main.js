;(function ($) {
    $('div').on('click', function () {
        $(this).toggle(1000).next().toggle(1000);
    });
    $('.c4').on('click', function () {
        $('.c1').toggle(1000);
    })
})(jQuery);
