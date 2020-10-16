console.log(1)
require.config({
    paths: {
        "jquery":"../lib/jquery.min",
        "jquery-cookie": "../lib/jquery.cookie",
        "header": "./header",
        "fasong": "./ajax_login",
        "car":"./car"

    },
    shim: {
        "jquery-cookie": ['jquery'],
        parabola: {
            exports: "_"
        }
    }
})
require(["header","fasong","car"],function(header,fasong,car){
header.suckTop();
 header.vvv();
fasong.fasong();
car.reddian()
})