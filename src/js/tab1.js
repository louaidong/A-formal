define(["jquery"], function ($) {
    function tab1() {

        $('.lists>li').click(function () {
            $('.lists>li').removeClass('active1');
            $('.lists>li div').css('display', 'none');
            $('.lists>li a').removeClass('font');
            $(this).addClass('active1');
            $(this).find('div').css('display', 'block');
            $(this).find('a').addClass('font');
            console.log($(this))
        })
    }
    return {
        tab1
    }
})