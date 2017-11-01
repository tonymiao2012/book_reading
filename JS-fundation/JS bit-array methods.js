/**
 * Created by antowa on 10/30/17.
 */
let members = [1,2,3,4,5,6,5,7];

//Runs on every item in array and return true/false
let everyresult = members.every(function(item, index, array){
    return (item > 2);
});

//Runs on every item in array and return true/false
let somereuslt = members.some(function(item, index, array){
    console.log(index);
    return (item > 5);
});

//Runs on every item in array and returns the result of each function call in the array
let mapresult = members.map(function(item, index, array){
    return item * 2;
});

//Runs on every item in array and returns an array
let filterresult = members.filter(function(item, index, array){
    return item > 2;
});