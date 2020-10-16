define(["jquery"], function ($) {
    function tab() {

        $('.list7 li').click(function () {
            $('.list7 li ').removeClass('active');
            $('.list7 li div').css('display', 'none');
            $('.list7 li a').removeClass('font');
            $(this).addClass('active');
            $(this).find('div').css('display', 'block');
            $(this).find('a').addClass('font');

        })
      
    }
    return {
        tab
    }
})