define(["jquery","jquery-cookie"],function($){
    function fangda(){
      
        $(".center").on("mouseenter",".left",function(){
            $(".small").css('display',"block");
            $(".big").css("display","block");
            
        });
        $(".center").on('mouseleave',".left",function(){
            $(".small").css('display',"none");
            $(".big").css("display","none")
        });
       $(".center").on("mousemove",".left",function(e){
           var l=e.clientX-$(".left").offset().left-100;
           l=Math.max(0,l);
           l=Math.min(361,l);
           var t=e.clientY-$(".left").offset().top-100;
           t=Math.max(0,t);
           t=Math.min(361,t);
           $(".small").css({
               "left":l,
               "top":t,

           });
           $(".big img").css({
            "left":-1.5*l,
            "top":-1.5*t,
           });
          
       }) 
    }
    
    return{
        fangda
    }
})