;(function($){
    //alert(location.href);
    //alert(location.hostname);
    //location.href = 'http://google.com';
    console.log(document.getElementById('s-1'));
    console.log(document.getElementsByClassName('link')[0]);
    console.log(document.getElementsByTagName('li'));
    console.log(document.querySelector('main section .link'));
    console.log(document.querySelectorAll('main .link')[0]);
    var element = $('main .link');
    console.log(element);
    element.css('color', 'red');
    element.css({color: 'red', fontSize: '20px'});
    element
        .css({
            color: 'red',
            fontSize: '20px'
        })
        .addClass('custom-class')
        .removeClass('link')
    ;
    $('li').toggleClass('li-class');

    $('.li-class')
        .css({bacground: 'green', minWidth: '50px', minHeight: '15PX'})
        .find('a')
        .hide();
        //.hide() - скрыть
        //.find() - найти
    console.log($('span:nth-child(2)').next().prev().prev().text('New span text'));
    //.next() - следующий элемент
    //.text() - выводит текст внутри
    //.prev() - предидущий эл.
    /*
    console.log( $('#s-1').html());//выводит весь штмл внутри айди
     $('#s-1').html('<p>New p-text</p>')//заменили всё что в айди
         .append('asdasfada')//вставить содержимое в конец текста
        .prepend('asdasfada');//вставить содержимое в начало текста
*/
    if ($('span') == 'span text')

})(jQuery);