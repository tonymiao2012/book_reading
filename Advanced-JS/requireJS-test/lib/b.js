/**
 * Created by miaozixiong on 2017/4/1.
 */
//Test module b
define(function(){
    var load = function(){
        console.log("Load b success.");
    };
    var multiply = function(x, y){
        return x * y;
    };

    return {
        load: load,
        multiply: multiply
    }
});