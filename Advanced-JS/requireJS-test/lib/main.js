/**
 * Created by miaozixiong on 2017/4/1.
 */
//Main JS module for test project. The entry of whole web page. Like main() method in C programming.

require(['a', 'b', 'c'], function (a, b, c) {
    console.log("Main JS. Dependency requirement: a, b, c");
    console.log(c.myAlgo(100, 35));
});