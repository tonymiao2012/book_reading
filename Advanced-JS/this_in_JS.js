/**
 * Created by miaozixiong on 2017/4/27.
 */
/*
* One of the pitfall in JS is 'this' attribute. It varies according to dynamic running context.
* Let's see a non-sense example about 'this':
*/

//Example 1
function makeNoSense(x){
    this.x = x;
}
makeNoSense(5);
x;      //Here, x turns out to be a global value which is 5.

//Example 2
var point = {
    x: 0,
    y: 0,
    moveTo: function(x, y){
        var moveX = function(x){
            this.x = x;
        };
        var moveY = function(y){
            this.y = y;
        };
        moveX(x);
        moveY(y);
    }
};

point.moveTo(1, 1);
point.x;    //0
point.y;    //0

x;          //1
y;          //1
/*
In the example 2 above, the this.x or this.y doesn't bind any value. Instead, they are both 0.
On the other hand, 2 dummy values are set up in according to the usage of 'this.'
It was the design flaw of JS.
 */

//Example 3: A work around method to solve the problem.
var point = {
    x: 0,
    y: 0,
    moveTo: function(x, y){
        var that = this;
        var moveX = function(x){
            that.x = x;
        };
        var moveY = function(y){
            that.y = y;
        };
        moveX(x);
        moveY(y);
    }
};

point.moveTo(1, 1);
point.x;    //1
point.y;    //1

x;  //Error
y;  //Error

//To bind the running context with value, we could use Function.prototype.call() or Function.prototype.apply().
/* Call method
 * Syntax: function.call(thisArg, arg1, arg2...)
 * thisArg: The value of this provided for the call to a function.
 * arg1, arg2: Arguments for the function.
 * Return value: The result of calling the function with the specified this value and arguments.
 */
//a
var x = 10;

function f()
{
    alert(this.x);
}

f();

//b
var x = 10;
var o = { x: 15 };

function f()
{
    alert(this.x);
}

f();
f.call(o);