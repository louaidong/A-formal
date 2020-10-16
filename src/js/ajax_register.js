define(['jquery'], function ($) {
    function shouqu() {
        $('.login input').click(function(){
            $.ajax({
                type:'post',
                url: '/list/resgin.php',
                data:{
                    username:$('.zhanghao input').val(),
                    password:$('.mima input').val()
                },
                
                success:function(result){
                  var obj=JSON.parse(result);
                    $('.alert').html(obj.msg);
                    if(obj.code){
                        $('.alert').addClass('alert2');
                     
                    }else{
                        $('.alert').addClass('alert1');
                      $(window).attr('location','../pages/index.html');
                    }
                }
            })
        })
       


    }
    return {
        shouqu
    }
})