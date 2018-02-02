;(function($){
    $(function () {
        $('.hamburger').on('click', function () {
            var $this = $(this);
            $this
                .closest('#main-menu')
                .children('ul')
                .toggleClass('menu-opened')
                .slideToggle(500);

        })
    })
})(jQuery);