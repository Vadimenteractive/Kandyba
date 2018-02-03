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
                .children('li')
                .eq(0);
            function animateWidth() {
                if ($firstLi.attr('data-class')) {
                    var i;
                    for (i=4; i<-1; i--) {
                        $ulMenu
                            .children('li')
                            .eq(i)
                            .removeAttr('data-class');
                    }
                }else {
                    for (i=0; i<5; i++) {
                        $ulMenu
                            .children('li')
                            .eq(i)
                            .attr('data-class', 'open-li');
                    }
                }
            }
            $this
                .closest('#main-menu')
                .children('ul')
                .toggleClass('menu-opened')
                .toggle(0, animateWidth());


        })
    })
})(jQuery);