console.log(1)
require.config({
    paths: {
        "jquery":"../lib/jquery.min",
        "jquery-cookie": "../lib/jquery.cookie",
        "header": "./header",
        "shouqu": "./ajax_register",
        "car":"./car"

    },
    shim: {
        "jquery-cookie": ['jquery'],
        parabola: {
            exports: "_"
        }
    }
})
require(["header","shouqu","car"],function(header,shouqu,car){
header.suckTop();
 header.vvv();
shouqu.shouqu();
car.reddian();
})