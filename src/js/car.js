define(["jquery","jquery-cookie"],function($){
    function car(){
        $("tbody").html('');
        var arr=JSON.parse($.cookie("goods"));
        if(arr=[]){
        }
        else{
        $.ajax({
            type:"get",
            url:"../date/prolar.json",
            success:function(result){
                var node='';
                for(var i=0;i<arr.length;i++){
                    var msg=result.find(item=>item.id==arr[i].id);
                    var price=(msg.i).substring(1,msg.i.length);
                    var zong=price*arr[i].num;
                    node+=`
                    <tr class="carlsit">
                        <td>
                            <span >
                                <input type="checkbox" class="jiaru${i}">
                            </span>
                        </td>
                        <td>
                            <a href="javascript:;">修改配送方式</a>
                        </td>
                        <td class="clr">
                            <div class="zhaopian">
                            <img src="${msg.ee}">
                            </div>  
                            <div class="xingqing">
                            <p>
                                <span>${msg.b}</span><span>${msg.d}</span><span>${msg.e}</span>
                            </p>
                            <p>支持30天无理由退货</p>
                        </div>
                        </td>
                        <td>
                            <p>
                                <span>尺码：</span><span></span>
                            </p>
                            <p>
                                <span>颜色：</span><span></span>
                            </p>
                        </td>
                        <td>
                        <p class="jiage">${msg.i}</p>
                        <p>${msg.f}</p>
                        <p>${msg.g}${msg.h}</p>
                        </td>
                        <td>
                        <div>
                        <i class="iconfont icon-jianhao jian${arr[i].id}"></i>
                        <input type="text" value="${arr[i].num}" class="shu${i}">
                        <i class="iconfont icon-jiahao jia${arr[i].id}"></i>
                        </div>
                        </td>
                        <td>
                        <span class="a">￥${zong}.00</span> 
                        </td>
                        <td>
                        <span class="delete${i}">删除</span>
                        </td>
                    </tr>     
                  `

                }
                $("tbody").html(node);
            }
        })
    }
    }
    function jianshao(){
        var arr=JSON.parse($.cookie("goods"));
        for(let i=0;i<arr.length;i++){
            $("tbody").on("click",".jian"+arr[i].id,function(){
                var num=Number($(".shu"+i).val());
                console.log(num);
                var b=$(this).parent().parent().parent();
            
                var e=b.find('.jiage').html();
               
                console.log(arr.length);
                var f=Number(e.substring(1,e.length));
                console.log(f);
                num--;
               
                if(num<1){
                    num=1;
                    alert('最小为1');
                }else{
                    num=num;
                }
                var d="￥"+num*f+'.00';
               
                b.find('.a').html(d);
                $(".shu"+i).val(num);
                

                var num=$(".shu"+i).val();
                for(let j=0;j<arr.length;j++){
                   if(arr[j].id==arr[i].id){
                       arr[j].num=Number(num);
                   }
               }
            $.cookie("goods",JSON.stringify(arr),{
                expires:7
            })
            reddian()
         } )
        }
        
    }
    function zenjia(){
        var arr=JSON.parse($.cookie("goods"));
        for(let i=0;i<arr.length;i++){
            
            $("tbody").on("click",".jia"+arr[i].id,function(){
                var num=Number($(".shu"+i).val());
                console.log(num);
                var b=$(this).parent().parent().parent();
            
                var e=b.find('.jiage').html();
               
                console.log(arr.length);
                var f=Number(e.substring(1,e.length));
                console.log(f);
                
                num++;
               
                if(num>10){
                    num=10;
                    alert("最大为10");
                }else{
                    num=num;
                }
                var d="￥"+num*f+'.00';
               
                b.find('.a').html(d);
                $(".shu"+i).val(num);
                var num=$(".shu"+i).val();
                for(let j=0;j<arr.length;j++){
                   if(arr[j].id==arr[i].id){
                       arr[j].num=Number(num);
                   }
               }
            $.cookie("goods",JSON.stringify(arr),{
                expires:7
            })
            fuqian();
            reddian();
         } ) 
        }
    }
    function del(){
        var arr=JSON.parse($.cookie("goods"));
        for(let i=0;i<arr.length;i++){
           
            $("tbody").on("click",".delete"+i,function(){
            arr.splice(i,1);
            $(this).parent().parent().remove();
            
            $.cookie("goods",JSON.stringify(arr),{
                expires:7
            })
            var arr1=JSON.parse($.cookie("goods"));
            reddian();
           })
        }
       
    }
    function fuqian(){
        var arr=JSON.parse($.cookie("goods"));
        for(let i=0;i<arr.length;i++){
            var num=null;
            $("tbody").on("click",".jiaru"+i,function(){
                if($(this).prop("checked")){
                    var b=$(this).parent().parent().parent().find(".a");
                    var c=b.html();
                    var e=Number(c.substring(1,c.length));
                    
                    console.log(b);
                    num+=Number(e);
                    $('.jiezhang').find('.zongjiage').html("￥"+num);
                
                    num=num;
                }else{
                    $('.jiezhang').find('.zongjiage').html("￥"+0);
                    num=null;
                }
            })  
        }
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
        if(arr.length==0){
            $('.geshu').html(0);
        }
    }
    return{
        car,
        zenjia,
        jianshao,
        del,
        fuqian,
        reddian
    }
    });