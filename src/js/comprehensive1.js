require.config({
    paths:{
        "jquery":"../lib/jquery.min",
        "jquery-cookie":"../lib/jquery.cookie",
        "header": "./header",
        "banner": "./banner",
        "banner1": "./banner1",
        "math": "./math",
        "tab": "tab",
        "tab1": "./tab1",
        "tab2": "./tab2",
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
require(["header", "banner", "banner1", "math", "tab", "tab1", "tab2","car","hui"],function(header, banner, banner1, math, tab, tab1, tab2,car,hui){
    header.suckTop();
    header.vvv();
    banner.move1();
    banner1.move2();
    math.download();
    tab.tab();
    tab1.tab1();
    tab2.download1();
    car.reddian();
    hui.hui();
})