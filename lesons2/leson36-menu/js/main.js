;(function($){
    $(function () {
        $('.hamburger').on('click', function () {
            var $this = $(this);
            var $ulWidth = $this.closest('#main-menu')
                .children('ul')
                .width();
            var $ulMenu = $this.closest('#main-menu')
                .children('ul');
            var $firstLi = $ulMenu
                .children('li');
            var i = 0;


            if ($ulMenu.attr('class') == "menu-opened") {

                $firstLi
                    .stop()
                    .animate({'left': '-100%'}, 600, 'linear', function () {
                        $this
                            .closest('#main-menu')
                            .children('ul')
                            .removeClass('menu-opened')

       //почему меню скрывается раньше завершения анимации

                            .delay(1500)
                            .hide();
                    });
            } else {

                $this
                    .closest('#main-menu')
                    .children('ul')
                    .addClass('menu-opened')
                    .show();

        //почему нельзя сделать всё по очереди

                //while (i <5) {
                    $firstLi.eq(i++)
                        .delay(200)
                        .animate({'left': '0'}, 500,
                            function () {
                                $firstLi.eq(i++)
                                    .delay(200)
                                    .animate({'left': '0'}, 500,
                                        function () {
                                            $firstLi.eq(i++)
                                                .delay(200)
                                                .animate({'left': '0'}, 500,
                                                    function () {
                                                        $firstLi.eq(i++)
                                                            .delay(200)
                                                            .animate({'left': '0'}, 500,
                                                                function () {
                                                                    $firstLi.eq(i++)
                                                                        .delay(200)
                                                                        .animate({'left': '0'}, 500,
                                                                            function () {

                                                                            });
                                                                });
                                                    });
                                        });
                            });
               // }
            }


        })
    })
})(jQuery);

// function animateWidth() {
//     if ($firstLi.attr('data-class')) {
//         var i;
//         for (i=4; i<-1; i--) {
//             $ulMenu
//                 .children('li')
//                 .eq(i)
//                 .removeAttr('data-class');
//         }
//     }else {
//         for (i=0; i<5; i++) {
//             $ulMenu
//                 .children('li')
//                 .eq(i)
//                 .attr('data-class', 'open-li');
//         }
//     }
// }

// $this
//     .closest('#main-menu')
//     .children('ul')
//     .toggleClass('menu-opened')
//     .toggle(0, function () {
//         var i;
//         for (i=0; i<5; i++) {
//             $ulMenu
//                 .children('li')
//                 .eq(i)
//                 .animate({'left': '0'}, 800)
//                 //.attr('data-class', 'open-li')
//                 .delay(500);
//         }
//     });

