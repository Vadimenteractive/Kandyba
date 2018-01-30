
;(function($){
    $('aside').on('mouseenter', function () {
       // function slDown() {

        //}
        $(this)
            .removeClass('sidebar-tern')
            .stop()
            .animate({width: "250px"}, 500, 'swing', function () {
                $('.conteiner')
                    .stop()
                    .slideDown(500);
            });

        // $(this).queue(function () {
        //     slDown()
        // })
        //setTimeout(slDown, 600);

    })
    $('aside').on('mouseleave', function () {
        $(this)
            .addClass('sidebar-tern')
        //function sliU() {

        //}
        $('.conteiner')
            .stop()
            .slideUp(500, function () {
                $('aside')
                    .stop()
                    .animate({width: "25px"}, 500);
            });

        //setTimeout(sliU, 600);
    })
})(jQuery);
