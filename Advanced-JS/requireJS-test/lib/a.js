/**
 * Created by miaozixiong on 2017/4/1.
 */
//Test module a
define(function () {
    //Obey to AMD normalization
    var load = function () {
        console.log("Loading a.js success.");
    };
    var add = function (x, y) {
        return x + y;
    };

    return {
        load: load,
        add: add
    };
});