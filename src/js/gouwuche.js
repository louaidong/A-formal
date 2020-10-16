define(["jquery","jquery-cookie"],function($){

    function gouwuche(){
        var i=1;
        $(".center").on("click",".number p>:nth-child(2)", function(){  
            i++;
            if(i>10){
                i=10;
            }
            $(".number").find("p>:nth-child(3)").html(i);
        });
        $(".center").on("click",".number p>:nth-child(4)", function(){  
            i--;
            if(i<1){
                i=1;
            }
            $(".number").find("p>:nth-child(3)").html(i);
        });
        $(".center").on("click",".go input",function(){
          
          var shuliang=$(".number").find("p>:nth-child(3)").html();
           var id=this.id;
           var first = $.cookie("goods") == null ? true : false;
           if(first){
               var cookieStr = `[{"id":${Number(id)},"num":${Number(shuliang)}}]`;
               $.cookie("goods", cookieStr, {
                   expires: 7
               })
           }else{
               var same = false; 
               var cookieStr = $.cookie("goods");
               var cookieArr = JSON.parse(cookieStr);
               for(var j = 0; j< cookieArr.length; j++){
                   if(cookieArr[j].id == id){
                      
                       cookieArr[j].num=Number(shuliang)+Number(cookieArr[j].num);
                       same = true;
                       break;
                   }
               }
   
               if(!same){
                  
                   var obj = {id:Number(id), num:Number(shuliang)};
                   cookieArr.push(obj);
               }
               $.cookie("goods", JSON.stringify(cookieArr), {
                   expires: 7
               })
           }
   
          reddian();

     })
    }
    function reddian(){
        var arr=JSON.parse($.cookie("goods"));
        var a=0;
        for(let i=0;i<arr.length;i++){
            var b=arr[i].num;
            a+=b;
            a=a;
            $('.geshu').html(a);
        }
    }
    return{
    gouwuche
    }
});