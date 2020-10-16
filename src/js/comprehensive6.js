require.config({
    paths: {
        "jquery":"../lib/jquery.min",
        "jquery-cookie": "../lib/jquery.cookie",
        "car":"../js/car",
        

    },
    shim: {
        "jquery-cookie": ['jquery'],
        parabola: {
            exports: "_"
        }
    }
})
require(["header","math2","car"],function(header,math2,car,){
header.suckTop();
 header.vvv();
math2.math2();
car.car();
car.zenjia();
car.jianshao();
car.del();
car.fuqian();
car.reddian();

})