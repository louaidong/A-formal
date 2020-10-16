require.config({
    paths: {
        "jquery":"../lib/jquery.min",
        "jquery-cookie": "../lib/jquery.cookie",
        "header": "./header",
        "getid":"../js/getid",
        "fangda":"../js/fangdajing",
        "gouwuche":"../js/gouwuche",
        "car":"./car"

    },
    shim: {
        "jquery-cookie": ['jquery'],
        parabola: {
            exports: "_"
        }
    }
})
require(["header","getid","fangda","gouwuche","car"],function(header,getid,fangda,gouwuche,car){
header.suckTop();
 header.vvv();
 getid.getid();
 fangda.fangda();
 gouwuche.gouwuche();
 car.reddian();
})