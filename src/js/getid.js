define(["jquery","jquery-cookie"],function($){
    function getid(){
        var product_id=jiequ(location.search,"product_id");
      $.ajax({
          type:"get",
          url:"../date/prolar.json",
          success:function(arr){
              
               var msg=arr.find(item=>item.id==product_id);
               var node=`
               <div class="left">
                    <img src="${msg.ee}">
                    <div class="small"></div>
                </div>
                <div class="big">
                <img src="${msg.ee}">
                </div>
                <div class="right">
                    <h6><span>${msg.b}</span><span>${msg.d}</span><span>${msg.e}</span></h6>
                    <div class="price clr">
                        <p>
                             ${msg.i}
                        </p>
                        <p>
                             ${msg.f}
                             ${msg.g}
                             ${msg.h}
                        </p>
                    </div>
                    <div class="size">
                        <p>尺码:</p>
                        <div>
                        <span>155/80A/S</span>
                        <span>160/88A/L</span>
                        <span>165/92A/XL</span>
                        <span>175/108/3XL</span>
                        </div> 
                    </div>
                    <div class="peisong">
                        <p>配送方式：
                        <label>
                        <input type="radio" name="peisong" id="1" checked> 快递配送</label>
                        
                        <label>
                        <input type="radio" name="peisong" id="2">上门自取</label>
                        
                        </p>
                        
                    </div>
                    <div class="baozhuang">
                        <p>礼品包装选择：<span>￥18.00</span></p>
                        <div>
                            <select>
                                <option>需要</option>
                                <option>不需要</option>
                            </select>
                        </div>
                    </div>
                    <div class="number ">
                        <p class="clr"><span>数量:</span><span>+</span><span>1</span><span>-</span></p>
                    </div>
                    <div class="go">
                    <input type="button" value="加入购物车" id="${msg.id}">
                    </div>
                </div>
               `
               $('.center').html(node);  
          }
      })  
        
    }
    function jiequ(search,goodsid){
        var start=search.indexOf(goodsid+'=');
        if(start==-1){
            return null;
        }else{
            var end=search.indexOf("&",start);
            if(end==-1){
                end=search.length;
            }
            var str=search.substring(start,end);
            var arr=str.split("=");
            return arr[1];
        }
    }
    return{
        getid
    }
})