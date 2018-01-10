;(function($){
    $(document).keydown(function(e) {
        if (e.ctrlKey && e.keyCode == 13) {
            alert("Вы нажали Ctrl+Enter!");
        }
    });
    $(document).on('keydown', function (e) {


       if (e.ctrlKey && e.keyCode == 69) {
           e.preventDefault();
            $("div").replaceWith(function(index, oldHTML){
                return $("<textarea>").html(oldHTML);
            });

        }
        if (e.ctrlKey && e.keyCode == 83) {

            $("textarea").replaceWith(function(index, oldHTML){
                return $("<div>").html(oldHTML);
            });

        }

    });
    $(document).on('keydown', function (e) {
        console.log('вы нажали ', e.keyCode);
    })
})(jQuery);