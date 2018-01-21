$('aside').on('mouseenter', function () {
    function slDown() {
        $('.conteiner')
            .slideDown(500);
    }
    $(this)
        .animate({width: "250px"}, 500);

    $(this).queue(function () {
        slDown()
    });

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