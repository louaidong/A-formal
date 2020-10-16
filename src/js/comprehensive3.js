require.config({
    paths: {
        "jquery":"../lib/jquery.min",
        "jquery-cookie": "../lib/jquery.cookie",
        "math2":"../js/math2",
        "car":"./car",
        "hui":"./hui"
        


    },
    shim: {
        "jquery-cookie": ['jquery'],
        parabola: {
            exports: "_"
        }
    }
})
require(["header","math2","car","hui"],function(header,math2,car,hui){
header.suckTop();
 header.vvv();
math2.math2();
car.reddian();
hui.hui()
})