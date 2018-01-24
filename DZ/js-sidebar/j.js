
;(function($){
    $('aside').on('mouseenter', function () {
       // function slDown() {
            $('.conteiner')
                .delay(600)
                .stop()
                .slideDown(500);
        //}
        $(this)
            .stop()
            .animate({width: "250px"}, 500);

        // $(this).queue(function () {
        //     slDown()
        // })
        //setTimeout(slDown, 600);

    })
    $('aside').on('mouseleave', function () {
        //function sliU() {
            $('aside')
                .delay(600)
                .stop()
                .animate({width: "15px"}, 500);
        //}
        $('.conteiner')
            .stop()
            .slideUp(500);

        //setTimeout(sliU, 600);
    })
})(jQuery);
