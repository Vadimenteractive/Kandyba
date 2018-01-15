;(function($){
    $(function(){
        $(document).keydown(function(e) {
            if (e.ctrlKey && e.keyCode == 13) {
                alert("Вы нажали Ctrl+Enter!");
            }
        });

        $(document).on('keydown', function (e) {


            if (e.ctrlKey && e.keyCode == 69 && $("div").length) {
                e.preventDefault();
                console.log('ctrl + e');

                $('body').append('<textarea/>');
                $('textarea').val($("div").text());
                $('div').remove();

            }
            if (e.ctrlKey && e.keyCode == 83 && $("textarea").length) {
                e.preventDefault();
                console.log('ctrl + s');

                $('body').append('<div/>');
                $('div').text($("textarea").val());
                $("textarea").remove();
            }

        });
        $(document).on('keydown', function (e) {
            console.log('вы нажали ', e.keyCode);
        });
    });

})(jQuery);