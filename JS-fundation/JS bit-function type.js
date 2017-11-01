/**
 * Created by miaozixiong on 2017-11-1.
 */
/**In JS, each function is an instance of the Function type that has properties and methods just like any other reference type.
Function names are simply pointers to function object.*/

//1
function sum(num1, num2){
  return num1 + num2;
}

//2
var sum = function(num1, num2){
  return num1 + num2;
}

//3.(Not recommended)
var sum = new Function("num1", "num2", "return num1 + num2");

//Keep in mind, function names are pointers, so it also explains why there can be no function overloading in ECMAScript. Like:
var addSome = function(num){
  return num + 100;
}
addSome = function(num){
  return num + 200;
}

var result = addSome(100);  //300

/**
 * Function declaration hoisting: JS engine does a first pass for function declarations and pulls them to the top of the source code.
 * */
alert(sum(10, 20));
function sum(num1, num2){
  return num1 + num2;
}

//But change the function declaration to an equivalent expression as follows, will cause an error
alert(sum(10, 20));
var sum = function(num1, num2){   //Unexpected identifier
  return num1 + num2;
}

/**
 * Also, functions could be used as parameters.
 * */
function createComparisionFunction(propertyName){
  return function(obj1, obj2){
    var val1 = obj1[propertyName];
    var val2 = obj2[propertyName];

    if(val1 < val2){
      return -1;
    }else if(val1 > val2){
      return 1;
    }else{
      return 0;
    }
  }
}

let data = [{name: "Zinc", age: 28}, {name: "Tony", age: 30}];

console.log(data.sort(createComparisionFunction("name")));
console.log(data.sort(createComparisionFunction("age")));
