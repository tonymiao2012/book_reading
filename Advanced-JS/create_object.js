/**
 * Created by miaozixiong on 2017/4/25.
 */

//1. Factory pattern
function createPerson(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        console.log(this.name);
    };

    return o;
}

//Usage
var person1 = createPerson("Tony", 29, "SDE");
var person2 = createPerson("Greg", 27, "SDET");


//2. Constructor pattern
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){      //Not the same instance of 'Function'
        console.log(this.name);
    };
}

//Usage
var p1 = new Person("Tony", 29, "SDE");
var p2 = new Person ("Greg", 27, "SDET");


//3. Prototype pattern
function Person() {
}

Person.prototype = {
    name: "Tony",
    age: 29,
    job: "SDE",
    sayName: function () {
        console.log(this.name);
    }
};

//Usage
var p3 = new Person();

