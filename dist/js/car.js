"use strict";define(["jquery","jquery-cookie"],function(a){function l(){for(var o=JSON.parse(a.cookie("goods")),n=0;n<o.length;n++){var e=null;a("tbody").on("click",".jiaru"+n,function(){var o,n;a(this).prop("checked")?(n=(o=a(this).parent().parent().parent().find(".a")).html(),n=Number(n.substring(1,n.length)),console.log(o),e+=Number(n),a(".jiezhang").find(".zongjiage").html("￥"+e)):(a(".jiezhang").find(".zongjiage").html("￥0"),e=null)})}}function s(){for(var o=JSON.parse(a.cookie("goods")),n=0,e=0;e<o.length;e++){n+=o[e].num,a(".geshu").html(n)}0==o.length&&a(".geshu").html(0)}return{car:function(){a("tbody").html(""),JSON.parse(a.cookie("goods"))},zenjia:function(){for(var r=JSON.parse(a.cookie("goods")),o=0;o<r.length;o++)!function(t){a("tbody").on("click",".jia"+r[t].id,function(){var o=Number(a(".shu"+t).val());console.log(o);var n=a(this).parent().parent().parent(),e=n.find(".jiage").html();console.log(r.length);e=Number(e.substring(1,e.length));console.log(e),10<++o&&(o=10,alert("最大为10"));e="￥"+o*e+".00";n.find(".a").html(e),a(".shu"+t).val(o);for(var o=a(".shu"+t).val(),i=0;i<r.length;i++)r[i].id==r[t].id&&(r[i].num=Number(o));a.cookie("goods",JSON.stringify(r),{expires:7}),l(),s()})}(o)},jianshao:function(){for(var r=JSON.parse(a.cookie("goods")),o=0;o<r.length;o++)!function(t){a("tbody").on("click",".jian"+r[t].id,function(){var o=Number(a(".shu"+t).val());console.log(o);var n=a(this).parent().parent().parent(),e=n.find(".jiage").html();console.log(r.length);e=Number(e.substring(1,e.length));console.log(e),--o<1&&(o=1,alert("最小为1"));e="￥"+o*e+".00";n.find(".a").html(e),a(".shu"+t).val(o);for(var o=a(".shu"+t).val(),i=0;i<r.length;i++)r[i].id==r[t].id&&(r[i].num=Number(o));a.cookie("goods",JSON.stringify(r),{expires:7}),s()})}(o)},del:function(){for(var n=JSON.parse(a.cookie("goods")),o=0;o<n.length;o++)!function(o){a("tbody").on("click",".delete"+o,function(){n.splice(o,1),a(this).parent().parent().remove(),a.cookie("goods",JSON.stringify(n),{expires:7});JSON.parse(a.cookie("goods"));s()})}(o)},fuqian:l,reddian:s}});