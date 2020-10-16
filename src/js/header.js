define(["jquery"], function ($) {
    function suckTop() {

        $(window).on("scroll", function () {
            var c = $('.header-c');
            var d = $('input[name=sousuo]')
            c.removeClass('top_h')
            d.removeClass('aaa')
            var a = $(document).scrollTop();
            if (a > 0) {
                c.addClass('top_h');
                d.addClass('aaa');
            } else if (a = 0) {
                c.removeClass('top_h');
                d.removeClass('aaa');
            }
        })
    }

    function vvv() {
        $('.list2').on('mouseenter', 'a', function () {
            $(this).css({
                color: 'red'
            })
        })

        $('.list2').on('mouseleave', 'a', function () {
            $(this).css({
                color: '#000'
            })
        })
    }
    return {
        suckTop,
        vvv

    }
})