define(["jquery"], function ($) {
function hui(){
    $(window).on("scroll", function () {
        if($(this).scrollTop()>1000){
         $(".guding").fadeIn(500);
        }else{
         $(".guding").fadeOut(500);
        }
     })
        
     $(".guding").click(function(){
         $('html,body').stop().animate({scrollTop:0},500);
     })
}

    return({
    hui
    })
})