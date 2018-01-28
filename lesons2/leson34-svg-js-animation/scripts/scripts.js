;(function($){
    $(function () {
        $('.hide').on('click', function () {
            $('.child').hide(1000);
        });
        $('.show').on('click', function () {
            $('.child').show(1000);
        });
        $('.toggle').on('click', function () {
            $('.child').toggle(1000);
        });
        //как работает тоггл:
        $('.my-toggle').on('click', function () {
            if ($('.child').is(':visible')){
                $('.child').hide(1000);
            } else {
                $('.child').show(1000);
            }
        });

        $('.slideUp').on('click', function () {
            $('.child').slideUp(1000);
        });
        $('.slideDown').on('click', function () {
            $('.child').slideDown(1000);
        });
        $('.slideToggle').on('click', function () {
            $('.child').slideToggle(1000);
        });

        $('.fadeOut').on('click', function () {
            $('.child').fadeOut(1000, function () {
                console.log(6541233);
            });
        });
        $('.fadeIn').on('click', function () {
            $('.child').fadeIn(1000);
        });
        $('.fadeTo').on('click', function () {
            $('.child').fadeTo(1000, 0.5);
        });
        $('.fadeToggle').on('click', function () {
            $('.child').fadeToggle(1000);
        });


        $('.animate').on('click', function () {
            $('.child').animate(
                {
                    backgroundColor: "#ccc",
                    width: "50%",
                    height: "-=250",
                    borderRadius: "50%",
                    margin: "125px"
                },
                {
                  duration: 500,
                  complete: function () {
                      console.log(123456789);
                  }
                }

            )
        })

    })
})(jQuery);