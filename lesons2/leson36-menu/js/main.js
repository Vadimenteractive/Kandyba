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

                            .delay(0)
                            .hide(600);
                    });
            } else {

                $this
                    .closest('#main-menu')
                    .children('ul')
                    .addClass('menu-opened')
                    .show();

        //почему нельзя сделать всё по очереди
anim();
var delay = 0
                //while (i <5) {
                function anim(n) {
                    if (i<5) {
                        setTimeout(function () {
            $ulMenu
                .children('li')
                .eq(i++)
                .attr('data-class', 'open-li');
                            // $firstLi.eq(i++)
                            //     .animate({'left': '0'}, 500, anim(delay));
                            anim(n);}, 500);
                        delay+=500;

                    }

                }


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
//                 .delay(200);
//         }
//     });

