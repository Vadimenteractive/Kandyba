;(function($){
    $(function () {
        $('.hamburger').on('click', function () {
            var $this = $(this);
                 $ulWidth = $this.closest('#main-menu')
                .children('ul')
                .width(),
                 $ulMenu = $this.closest('#main-menu')
                .children('ul'),
                 $firstLi = $ulMenu
                .children('li'),
                 $liLenght = $firstLi.length,
                 $openLiLenght = $ulMenu.find('[data-class="open-li"]').length,

                 i = 0;


            if ($openLiLenght == $liLenght) {
console.log($openLiLenght + ' = ' + $liLenght);
                animOut();

                function animOut() {
                    $openLiLenght = $ulMenu.find('[data-class="open-li"]').length;
                    if ($openLiLenght == 0) {
                        $this
                            .closest('#main-menu')
                            .children('ul')
                            .removeClass('menu-opened')
                            .hide();
                    } else {
                        setTimeout(function () {
                            $ulMenu
                                .children('li')
                                .eq(--$openLiLenght)
                                .removeAttr('data-class');
                            animOut();
                        }, 150);
                    }
                };



            } else if ($openLiLenght == 0){

                $this
                    .closest('#main-menu')
                    .children('ul')
                    .addClass('menu-opened')
                    .show();


anim();


                function anim(n) {
                    if (i<$liLenght) {
                        setTimeout(function () {
            $ulMenu
                .children('li')
                .eq(i++)
                .attr('data-class', 'open-li');

                            anim(n);
                            }, 150);
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

