;(function($){
$(function () {
    $(window).on('resize', function () {
        console.log($(window).outerWidth());
        if ($(window).outerWidth() <= 600) {
            console.log('Width <= 600');
        }
    })
})
})(jQuery);