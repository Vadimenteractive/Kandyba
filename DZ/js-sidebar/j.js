;(function($){
$('aside').on('mouseenter', function () {
    function sliU() {
        $('.conteiner')
            .slideDown(500);
    };
        $(this)
            .animate({width: "250px"}, 500);
    setTimeout(sliU, 600);

    })
    $('aside').on('mouseleave', function () {
        function sliU() {
            $('aside')
                .animate({width: "15px"}, 500);
        }
        $('.conteiner')
            .slideUp(500);
        setTimeout(sliU, 600);
    })
})(jQuery);