;(function ($) {
    $(function () {

console.log($('#logo')[0]);
$('#logo').on('click', function (e) {
    // console.log(e);
    // console.log($(this));
            $(this)
            .closest('header')
            .next()
            .find('a')//поиск элемента ссылки в соседнем теге мэин
            // .css({
            //     backgroundColor: '#ccc',
            //     fontSize: '20px'
            // })
            .toggleClass('styled-link')
               // .toggle(1500)

    console.log(
        $(this)
            .closest('header')
            .next()
            .find('a')//поиск элемента ссылки в соседнем теге мэин
            // .css({
            //     backgroundColor: '#ccc',
            //     fontSize: '20px'
            // })
            .hasClass('styled-link')
        // .toggle(1500)
    );

    }

);
$('p:nth-of-type(2)')
    .css('color', 'red')
    .attr('id', 'paragraf-id')
        console.log($('#paragraf-id').attr('id'));
        $('#paragraf-id').removeAttr('style')


    })
})(jQuery);