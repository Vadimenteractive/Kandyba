;(function($){
    $(document).ready(function () { //говорит о том что функция будет загружвться когда контент прогрузится
        console.log($('main'));
    });
    $(function () { //говорит о том что функция будет загружвться когда контент прогрузится
        //console.log($('main'));
        function doActions() {
            console.log('Action from funktion');
            $('main').append('<h2 class="class-name"> Header </h2>')
        }
        $('span').click(function () {
            console.log('click on span');
        });
        $('span').click(function () {
            console.log(123);
        });
        $('span').on('click', function() { //слушатель событий - добавление функции не затирая старую
            console.log('click in lisrener');

        });
        $('span').on('click', function () {
            doActions()
        });
        $('body').on('click', 'h2.class-name', function () { //для динамически добавленых в DOM элементов. В старых версиях jQuery нужно было передавать селектор $('h2.class-name')
            $('span').css({color: 'red'})
        });

        $('div').on('contextmenu', function () {
            console.log('Клик правой кн. м.');
        });
        $('div').on('dblclick', function () {
            console.log('двойной клик кн. м.');
        });
        // $('div').on('mouseover', function (even) { //even - название не важно
        //     console.log(even.target);
        // });
        // $('div').on('mouseout', function (e) {
        //     console.log('курсор мыши ушёл с элементом');
        //     console.log(e.target);
        // });
        //  $('div').on('mouseenter', function (qwe) {
        //             console.log('курсор зашёл на элемент ' +
        //                 'без учёта внутренне вложенных элементоа');
        //             console.log(qwe.target);
        //         });
        //  $('div').on('mouseleave', function (qwe) {
        //     console.log(qwe.target);
        //             console.log('курсор мыши ушёл с элемента ' +
        //                 'без учёта внутренне вложенных элементоа');
        //         });

         $('div').hover(function (e) {
                    console.log('навели на элемент', e.target);
                },
                function (e) {
                    console.log('убрали с элемента', e.target);
             });
         $('input').on('focus', function () {
               // $(this) - этот элемент
             var $this = $(this) //нужно присвоить переменную если используется более одногораза
             console.log('фокус на элементе с id ' + $this.attr('id'));
         });
         $('input').on('blur', function () {
             console.log('фокус ушёл с элемента');
         });

         // $('form').on('submit', function (e) {
         //     e.stopPropagation(); //отменяет действие предидущих обработчиков
         //     e.preventDefault(); //отменяет стандартное действие браузера
         //     var con = confirm('При отправке формы в ыпокинете эту страницу. Отправить форму?');
         //     if (con) {
         //         console.log($(this).serialize());
         //     }
         // });

        $('form span').on('click', function () {
            $(this).closest('form') //ищет ближайшего родителя
                .submit();
        });
        $('a').on('click', function (e) {
                e.stopPropagation(); //отменяет действие предидущих обработчиков
                e.preventDefault(); //отменяет стандартное действие браузера
                var con = confirm('Вы пытаетесь перейти на внешнюю ссылку. Продолжить?');
                console.log('координаты по оси X:', e.clientX);
                console.log('координаты по оси y:', e.clientY);
                if (con) {
                    console.log(location.href =$(this).attr('href'));
                }
        });

        $(window).on('resize', function () {
            console.log("ширина окна", $(window).width());
            console.log("высота окна", $(window).height());
        });

        $(window).on('scroll', function () {
            console.log($(window).scrollTop());
        });
        $('.up').on('click', function () {
            $(window).scrollTop(0)
        });
        $('.down').on('click', function () {
            $(window).scrollTop($('body').height())
        });
        // $('input').on('keydown', function (e) {
        //     console.log('нажато ', e.keyCode);
        // });
        // $('input').on('keyup', function (e) {
        //     console.log('отжато ', e.key);
        // });
        $('input').on('keypress', function (e) {
            console.log('Hajато ', e.key);
        });
        $('input').on('change keypress click', function (e) {//можно назначать несколько событий в одном обработчике. change - изменили значение и убрали фокус с элемента
            console.log('значение ', $(this).val());
        });


    });
})(jQuery);