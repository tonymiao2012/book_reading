/**
 * Created by miaozixiong on 2017-10-25.
 */
//Variable declaration
/**
 * 1.In a function, the most immediate one is the function's local context.
 * 2.If a variable is initialized without first being declared, it gets added to the global context automatically.
 */

function add(num1, num2){
  var ret = num1 + num2;
  return ret;
}

var result = add(10, 20);
alert(ret);   //Error

function add1(num1, num2){
  sum = num1 + num2;
  return sum;
}

var result1 = add1(10, 20);
alert(sum);


