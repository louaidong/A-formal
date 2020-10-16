define(['jquery'], function ($) {
    function move2() {
        var m=document.querySelector('.point_box');
        let flag=true;
        let index=1;
        let looperTimer;
        //设置焦点
const frg=document.createDocumentFragment();
       var l=$('.list5').find('li').length;
       for(let i=0;i<l-2;i++){
        const li=document.createElement('li');
        if(i===0){
            li.className='active';
        }
        frg.appendChild(li);
       }
       var number=l*20*2;
       $('.point_box').css("width",number);
          $('.point_box').html(frg);
       //动起来
        tab();
         function tab(){
           
            looperTimer=setInterval(()=>{
                $('.list5').stop(true,true);
                 index++;
                $('.list5').animate({
                    left :-index*1280
                },800,moveEnd) 
             },3000)
         }
         function moveEnd(){
                if(index==l-1){
                    index=1;
                    var d=-index*1280;
                    $('.list5').css("left",d);
                }
                if(index===0){
                    index=l-2;
                    var b=-index*1280;
                    $('.list5').css('left',b);
                }

                for(let i=0;i<$('.point_box li').length;i++){
                    m.children[i].className='';
                  }
                  m.children[index-1].className='active';
                  flag=true;
         }
            $('.banner2_c').mouseover(function(){
                clearInterval(looperTimer);
            })
            $('.banner2_c').mouseleave(function(){
                tab();
            })
            $('.banner2_c .icon-jiantou').click(function(){
                if(flag===false){
                    return
            }
            flag=false;
            $('.list5').stop(true,true);
                index++;
                $('.list5').animate({
                    left :-index*1280
                },800,moveEnd)
            })
              
            $('.banner2_c .icon-jiantou4').click(function(){
                if(flag===false){
                        return
                }
                flag=false;
                $('.list5').stop(true,true);
                index--;
                $('.list5').animate({
                    left :-index*1280
                },800,moveEnd)
            })
            pointclick();
            function pointclick(){
               
                $('.point_box').on('click','li',function(){
                    if(!flag){
                        return
                }
                flag=false;
                $('.list5').stop(true,true);
                   var a=$(this).index();
                   index=a+1;
                   $('.list5').animate({
                    left :-index*1280
                },800,moveEnd)
                });
            }
    }
    return {
        move2
    }
})