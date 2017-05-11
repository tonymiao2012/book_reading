/**
 * Created by antowa on 4/10/16.
 * Be careful when using closures.
 */

//A constructor return an anonymous function to compare two intrinsic value.
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

