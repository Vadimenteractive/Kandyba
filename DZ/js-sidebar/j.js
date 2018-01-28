
;(function($){
    $('aside').on('mouseenter', function () {
       // function slDown() {
            $('.conteiner')
                .stop()
                .delay(600)
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
                .stop()
                .delay(600)
                .animate({width: "15px"}, 500);
        //}
        $('.conteiner')
            .stop()
            .slideUp(500);

        //setTimeout(sliU, 600);
    })
})(jQuery);
