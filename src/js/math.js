define(["jquery", "jquery-cookie"], function ($) {
    function download() {
        $.ajax({
            url: "../date/index.json",
            success: function (arr) {

                var str = '';
                for (var i = 0; i < 3; i++) {
                    str += `<a href="javascript:;">
                    <img src="${arr[i].img}">
                </a>`
                }
                $('.title1_img').html(str);


                var str1 = '';
                for (var j = 3; j < 5; j++) {
                    str1 += `<a href="javascript:;">
                    <img src="${arr[j].img}">
                </a>`
                }
                $('.title2_img').html(str1);


                var str2 = '';
                for (var k = 5; k < 7; k++) {
                    str2 += `<a href="javascript:;">
                    <img src="${arr[k].img}">
                </a>`
                }
                $('.title3_img').html(str2);

            }
        })
    }
    return {
        download
    }
})