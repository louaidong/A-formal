define(["jquery", "jquery-cookie"], function ($) {
    function download1() {
        $.ajax({
            url: "../date/tab.json",
            success: function (arr) {
                var str = '';
                for (var i = 0; i < 5; i++) {
                    str += `
                    
                    <li>
                    
                    <img src="${arr[0].toolpage[i].a}">
                    <img src="${arr[0].toolpage[i].ee}">
                    <p class='cloth clr'>
                    <span class="span1">${arr[0].toolpage[i].b}</span>
                    <span class="span2">${arr[0].toolpage[i].c}</span>
                    </p>
                    <p class="cloth1">
                    <span>${arr[0].toolpage[i].d}</span>
                    <span>${arr[0].toolpage[i].e}</span>
                    </p>
                    <p class="cloth2">
                    <span>${arr[0].toolpage[i].f}</span>
                    <span>${arr[0].toolpage[i].g}</span>
                    <span>${arr[0].toolpage[i].h}</span>
                    </p>
                    <p class="cloth3">
                    <span>${arr[0].toolpage[i].i}</span>
                    </p>
                   
                    </li>
                   
                   `
                }

                $('.lists li .div1 ul').html(str);
            }
        })
    }
    return {
        download1
    }
})