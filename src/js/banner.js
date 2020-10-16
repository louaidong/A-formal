define(['jquery'], function ($) {
    function move1(){
    let flag=true;
    let index=1;
    let looperTimer;
    var l=$('.list4').find('li').length;
    tab();
    function tab(){
      
       looperTimer=setInterval(()=>{
        $('.list4').stop(true,true);
            index++;
           $('.list4').animate({
               left :-index*1170
           },2000,moveEnd)
         
        },3000)
    }
    function moveEnd(){
           if(index==l-1){
               index=1;
               var d=-index*1170;
               $('.list4').css("left",d);
           }
           if(index===0){
               index=l-2;
               var b=-index*1170;
               $('.list4').css('left',b);
           }  
       
           flag=true;
    }
    $('.banner1_c').mouseover(function(){
        clearInterval(looperTimer);
    })
    $('.banner1_c').mouseleave(function(){
        tab();
    })
    $('.banner1_c .icon-jiantou').click(function(){
       
        if(flag===false){
            return
    }
    flag=false;
    $('.list4').stop(true,true);
        index++;
        $('.list4').animate({
            left :-index*1170
        },2000,moveEnd)
    })
      
    $('.banner1_c .icon-jiantou4').click(function(){
        
        if(flag===false){
                return
        }
        flag=false;
        $('.list4').stop(true,true);
        index--;
        $('.list4').animate({
            left :-index*1170
        },2000,moveEnd)
    })
}

    return {
        move1
    }
})