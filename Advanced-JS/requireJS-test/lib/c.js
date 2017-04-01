/**
 * Created by miaozixiong on 2017/4/1.
 */
//Test module c
define(['a', 'b'], function(a, b){
    var load = function(){
        console.log("Loading c success");
    };
    var myAlgo = function(x, y){
        var ares = a.add(x, y);
        var bres = b.multiply(x, y);

        return bres / ares;
    };

    return {
      load: load,
      myAlgo: myAlgo
    };
});