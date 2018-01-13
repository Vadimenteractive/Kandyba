;(function ($) {
    $(function () {
        var nTab;
       $('.tab').on('click', function () {
           nTab = $(this).attr('data-tab');
           $('.tab').removeClass('active')
           $('.content')
               .slideUp();
           $(this)
               .addClass('active')
               .closest('.tabs')
               .next()
               .children()
               .eq(nTab)
               .slideDown();
           console.log(nTab);



           // if ($('.content-inner > .content').attr('data-tab') == nTab) {
           //     $('.content')
           //         .eq(nTab)
           //         .slideDown();
           // } else {
           //     $('.content')
           //         .slideUp();
           // }

       })

    });
})(jQuery);