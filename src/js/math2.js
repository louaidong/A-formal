define(['jquery','jquery-cookie'],function($){
    function math2(){
        $.ajax({
            url:"../date/prolar.json",
            success:function(result){
               var str=JSON.stringify(result);
               var arr=JSON.parse(str);
                var str1='';
                for (var i = 0; i < 20; i++) {
                    str1 += `
                    <li>
                    <a href="one.html?product_id=${arr[i].id}">
                    <img src="${arr[i].a}">
                    <img src="${arr[i].ee}">
                    <p class='cloth clr'>
                    <span class="span1">${arr[i].b}</span>
                    <span class="span2">${arr[i].c}</span>
                    </p>
                    <p class="cloth1">
                    <span>${arr[i].d}</span>
                    <span>${arr[i].e}</span>
                    </p>
                    <p class="cloth2">
                    <span>${arr[i].f}</span>
                    <span>${arr[i].g}</span>
                    <span>${arr[i].h}</span>
                    </p>
                    <p class="cloth3">
                    <span>${arr[i].i}</span>
                    </p>
                    </a>
                    </li>
                   `
                }
                $('.women ul').html(str1);
                
                var str2='';
                for (var i = 20; i <40; i++) {
                    str2+= `
                    <li>
                    <a href="one.html?product_id=${arr[i].id}">
                    <img src="${arr[i].a}">
                    <img src="${arr[i].ee}">
                    <p class='cloth clr'>
                    <span class="span1">${arr[i].b}</span>
                    <span class="span2">${arr[i].c}</span>
                    </p>
                    <p class="cloth1">
                    <span>${arr[i].d}</span>
                    <span>${arr[i].e}</span>
                    </p>
                    <p class="cloth2">
                    <span>${arr[i].f}</span>
                    <span>${arr[i].g}</span>
                    <span>${arr[i].h}</span>
                    </p>
                    <p class="cloth3">
                    <span>${arr[i].i}</span>
                    </p>
                    </a>
                    </li>
                   `
                }
                $('.men ul').html(str2);

                var str3='';
                for (var i = 40; i <60; i++) {
                    str3+= `
                    <li>
                    <a href="one.html?product_id=${arr[i].id}">
                    <img src="${arr[i].a}">
                    <img src="${arr[i].ee}">
                    <p class='cloth clr'>
                    <span class="span1">${arr[i].b}</span>
                    <span class="span2">${arr[i].c}</span>
                    </p>
                    <p class="cloth1">
                    <span>${arr[i].d}</span>
                    <span>${arr[i].e}</span>
                    </p>
                    <p class="cloth2">
                    <span>${arr[i].f}</span>
                    <span>${arr[i].g}</span>
                    <span>${arr[i].h}</span>
                    </p>
                    <p class="cloth3">
                    <span>${arr[i].i}</span>
                    </p>
                    </a>
                    </li>
                   `
                }
                $('.kids ul').html(str3);

                var str4='';
                for (var i = 60; i <80; i++) {
                    str4+= `
                    <li>
                    <a href="one.html?product_id=${arr[i].id}">
                    <img src="${arr[i].a}">
                    <img src="${arr[i].ee}">
                    <p class='cloth clr'>
                    <span class="span1">${arr[i].b}</span>
                    <span class="span2">${arr[i].c}</span>
                    </p>
                    <p class="cloth1">
                    <span>${arr[i].d}</span>
                    <span>${arr[i].e}</span>
                    </p>
                    <p class="cloth2">
                    <span>${arr[i].f}</span>
                    <span>${arr[i].g}</span>
                    <span>${arr[i].h}</span>
                    </p>
                    <p class="cloth3">
                    <span>${arr[i].i}</span>
                    </p>
                    </a>
                    </li>
                   `
                }
                $('.baby ul').html(str4);
            }
        })
    }
    return{
math2
    }
})