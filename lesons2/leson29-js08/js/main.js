;(function($){
    $(function () {
        // tabs
        $('.tabs > ul > li').on('click', function () {
            var $this = $(this),
                tabIndex = $this.data('id');
            // console.log(tabIndex);
            $this
                .addClass('active')
                .siblings()
                .removeClass('active')
                .end() // возвращаемся к $this
                .parent()
                .next() // div с контентами табов
                // .find('> :nth-child(' + tabIndex + ')') // '> :nth-child(1)'
                .find('> [data-tab-id=' + tabIndex + ']') // '> [data-tab-id=2]'
                // .children()
                // .eq(--tabIndex)
                .addClass('active')
                .siblings()
                .removeClass('active')
        });

        // editable content
        $('.ec span').on('click', function () {
            var $this = $(this),
                parentEl = $this.parent();
            if ($this.text() == 'Edit') {
                $this.text('Save');
                // $('<textarea />').appendTo('.ec');
                parentEl.prepend($('<textarea />')); // добавили элемент textarea
                parentEl
                    .find('textarea') // находим только что созданный textarea
                    .val(
                        parentEl.find('p').text() // берём текущий текст из параграфа
                    );
                parentEl.find('p').remove(); // удалили параграф из дом дерева
            } else { // нажимаем на кнопку Save
                $this.text('Edit');
                parentEl.prepend($('<p />'));
                parentEl
                    .find('p')
                    .text(
                        parentEl.find('textarea').val() // берём отредактированный текст из textarea
                    );
                parentEl.find('textarea').remove();
            }
        });

        // slider
        $('.slick').slick({
            dots: true
        });
    });
})(jQuery);