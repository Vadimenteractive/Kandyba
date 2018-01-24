
;(function($){
    $('aside').on('mouseenter', function () {
       // function slDown() {
            $('.conteiner')
                .delay(600)
                .slideDown(500);
        //}
        $(this)
            .animate({width: "250px"}, 500);

        // $(this).queue(function () {
        //     slDown()
        // })
        //setTimeout(slDown, 600);

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
