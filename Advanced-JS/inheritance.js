/**
 * Created by miaozixiong on 2017/4/25.
 */

//Prototype chaining extends to the prototype searching mechanism described earlier.
//When a property is accessed in read mode on an instance, the property is first searched for on the instance.
//If the property is not found, then the search continues to the property.
/*Prototype chain*/
function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function () {
    return this.property;
};

function SubType() {
    this.subproperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSuperValue = function () {
    return false;
}

SubType.prototype.getSubValue = function () {
    return this.subproperty;
};

var instance = new SubType();
console.log(instance.getSuperValue());

//The major issue resolves around prototypes that contain reference values.
//Prototype properties containing reference values are shared with all instances; this is why properties are typically defined within the
//constructor instead of on the prototype.

/*Constructor stealing*/
function SuperType() {
    this.colors = ["red", "blue", "green"];
}

function SubType() {
    //The apply() and call() methods can be used to execute a constructor on the newly created object.
    SuperType.call(this);
}

var ins1 = new SubType();
ins1.colors.push("black");
console.log(ins1.colors);

var ins2 = new SubType();
console.log(ins2.colors);

/*
 * Problems with Constructor stealing
 * Methods must be defined inside the constructor, so there's no function reuse.
 */

/*Combination Inheritance*/

function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
    alert(this.name);
};

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

SubType.prototype = new SuperType();

SubType.prototype.sayAge = function () {
    console.log(this.age);
}

var instance1 = new SubType("Tony", 29);
instance1.colors.push("black");
console.log(instance1.colors);
instance1.sayName();
instance1.sayAge();

var instance2 = new SubType("Greg", 27);
console.log(instance2.colors);
instance2.sayName();
instance2.sayAge();

/*Prototypal Inheritance*/

/*
 * This is the way Crockford advocates using prototypal inheritance:
 * you have an object that you want to use as the base of another object.
 */
var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

var person1 = Object(person);
person1.name = "Greg";
person1.friends.push("Rob");

//ECMAScript 5 formalized the concept of prototypal inheritance by adding Object.create() method.
var person2 = Object.create(person);
person2.name = "Tony";
person2.friends.push("Ron");

/*Parasitic Combination Inheritance*/
//The most inefficient part of the pattern is that the supertype constructor is always called twice.
function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
}

function SubType(name, age) {
    SuperType.call(this, name);         //Second call to SuperType()
    this.age = age;
}

SubType.prototype = new SuperType();    //First call to SuperType()
SubType.prototype.constructor = SubType;
SubType.prototype.sayName = function () {
    console.log(this.age);
};

/*Work around*/
function inheritProtoType(subType, superType) {
    var prototype = Object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
};

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

inheritProtoType(SubType, SuperType);

SubType.prototype.sayAge = function () {
    console.log(this.age);
};