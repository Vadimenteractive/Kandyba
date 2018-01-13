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
            //.toggleClass('styled-link')
              .toggle(1500)

    console.log(
        $(this)
            .closest('header')
            .next()
            .find('a')//поиск элемента ссылки в соседнем теге мэин
            // .css({
            //     backgroundColor: '#ccc',
            //     fontSize: '20px'
            // })
        //.hasClass('styled-link')
         .toggle(1500)
    );

    }

);
$('p:nth-of-type(2)')
    .css('color', 'red')
    .attr('id', 'paragraf-id')
        console.log($('#paragraf-id').attr('id'));
        $('#paragraf-id').removeAttr('style')

        $(window).on('resize', function () {
            console.log('ширина', window.innerWidth);
            console.log('внешняя ширина', window.outerWidth);
            console.log('высота', window.innerHeight);
        });

        var bannerTop;
        function setBannerTop() {
            bannerTop = $('.banner').offset().top;
        }
        setBannerTop();
        $(window).on('resize', function (){
            setBannerTop();
            console.log(bannerTop);
        });

        $(window).on('scroll', function () {
            console.log($(window).scrollTop());
            if ($(window).scrollTop() >= bannerTop) {
                $('.banner').addClass('fixed')
                $('body').addClass('pt')
            }else{
                $('.banner').removeClass('fixed')
                $('body').removeClass('pt')
            }
        });

        $('#accordion > li > a').on('click', function () {
            $(this)
                .closest('li')
                .addClass('active')
                .find('a')
                .next()
                .slideDown()
                .closest('li')
                .siblings()
                .removeClass('active')
                .find('a')
                .next()
                .slideUp();

        })

    });
})(jQuery);