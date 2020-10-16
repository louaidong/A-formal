define(['jquery'], function ($) {
    function fasong() {
       $('.login2').click(function(){
          $.ajax({
              type:'post',
              url:'/list/login.php',
              data:{
                  username:$('.main3_e .zhanghao2 input').val(),
                  password:$('.main3_e .mima2 input').val(),
                  repassword:$('.main3_e .mima3 input').val()
              },
             success:function(result){
                 var obj=JSON.parse(result);
                 $('.alert').html(obj.msg);
                 $('.alert').removeClass('alert2');
                 $('.alert').removeClass('alert1');
                    if(obj.code){
                        $('.alert').addClass('alert2');
                    }else{
                        $('.alert').addClass('alert1');
                       
                    }
                    
                 }
                
                 

             })
          })
       }
    
    return {
        fasong
    }
})