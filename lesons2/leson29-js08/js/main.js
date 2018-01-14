;(function ($) {
    $(function () {
        $('.tabs > ul > li').on('click', function () {
            var $this = $(this);
            var tabIndex = $this.data('id')
            console.log(tabIndex);
            $this
                .addClass('active')
                .siblings()
                .removeClass('active')
                .end() // возвращаемся на предидущую строку программирования
                .parent()
                .next() // див с контентами табов
                .find('> [data-tab-id=' + tabIndex + ']')
                .show(500)
                .siblings()
                .hide(500)
        });

        // изменяемый контент

        $('.ec span').on('click', function () { // нажимаем на кнопку Save
            $this.text('Edit');
            parentEl.prepend($('<p />'));
            parentEl
                .find('p')
                .text(
                    parentEl.find('textarea').val() // берём отредактированный текст из textarea
                );
            parentEl.find('textarea').remove();
        });

        //slider

        $('.slick').slick({
            // appendArrows: $(".slick"),
            // prevArrow: '<div class="arrow-left"><<</div>',
            // nextArrow: '<div class="arrow-right">>></div>'
            dots: true,

        });

    });
})(jQuery);