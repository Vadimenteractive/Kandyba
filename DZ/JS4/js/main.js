;(function($){
    $(document).keydown(function(e) {
        if (e.ctrlKey && e.keyCode == 13) {
            alert("Вы нажали Ctrl+Enter!");
        }

    // $(document).on('keypress', function (e) {
    //     if (e.ctrlKey) { console.log('ctrlKey');}
    //
    //     if (e.ctrlKey && e.key==a) {console.log('Урааа!');}

    })
})(jQuery);