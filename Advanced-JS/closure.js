/**
 * Created by antowa on 4/10/16.
 * Be careful when using closures.
 */
/*Live example*/
// A constructor return an anonymous function to compare two intrinsic value.
function createComparisonFunction(propertyName){

    return function(obj1, obj2){
        var value1 = obj1[propertyName];    //activation object
        var value2 = obj2[propertyName];

        if(value1 < value2){
            return -1;
        }else if(value1 > value2){
            return 1;
        }else{
            return 0;
        }
    }
}
//Create a method
var compare = createComparisonFunction("name");

//function call. This gives the anonymous function access to all the variable from createComparisonFunction()
var result = compare({name: "Nicholas"}, {name: "Greg"});

//dereference function, memory can now be reclaimed
compare = null;

/*Closures and variables*/
//The closure always gets the last value of any variable from the containing function.
//The closure stores a reference to the entire variable object, not just to a particular variable.

function createFunctions(){
    var result = new Array();

    for(var i = 0; i < 10; i++){
        result[i] = function(){
            return i;
        };
    }

    return result;
}

var r = createFunctions();      //Now every value of r[i]() returns 10.

//Since each function has the createFunctions() activation object in its scope chain, they are all referring to the same variable, i.
//The right way shows as follows:

function createFunctions(){
    var result = new Array();

    for(var i = 0; i < 10; i++){
        result[i] = function(num){
            return function(){      //The anonymous function is defined and called immediately.
                return num;
            };
        }(i);
    }
}

/*'this' object*/
//The this object is bound at runtime based on the context in which a function is executed: when used inside global functions,
//this is equal to window in nonstrict mode and undefined in strict mode, whereas this is equal to the object when called as an object method.
//Anonymous functions are not bound to an object in this context. See this example

var name = "Window";

var obj = {
    name: "My obj",
    getNameFunc: function(){
        return function(){
            return this.name;
        };
    }
};

console.log(obj.getNameFunc()());   //"Window" in non-strict mode

//getNameFunc return a function. Anonymous function returns the value of global name variable. Work around:

var name = "Window";

var obj = {
    name: "My obj",
    getNameFunc: function(){
        var that = this;
        return function(){
            return that.name;
        };
    }
};

console.log(obj.getNameFunc()());

