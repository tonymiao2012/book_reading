/**
 * Created by miaozixiong on 2017/5/15.
 */
//With static name value
(function () {
    var name = "";      //Private local var
    Person = function (value) {     //Public constructor
        name = value;
    };
    Person.prototype.getName = function () {
        return name;
    };
    Person.prototype.setName = function (val) {
        name = val;
    };
})();

var person1 = new Person("Nick");
console.log(person1.getName());
person1.setName("Tom");
console.log(person1.getName());

var person2 = new Person("Tony");
console.log(person1.getName());
console.log(person2.getName());

//With seperated name value
(function () {
    var name = "";  //Unused local private var
    this_Person = function (value) {
        this.name = value;
    };
    this_Person.prototype.getName = function () {
        return this.name;
    };
    this_Person.prototype.setName = function (val) {
        this.name = val;
    }
})();

var person3 = new this_Person("test1");
var person4 = new this_Person("test2");

console.log(person3.getName());
console.log(person4.getName());

//Module method
var application = function () {
    //private variables and functions
    var components = new Array();
    components.push(new BaseComponents());

    //public interface
    return {
        getComponentCount: function () {
            return components.length;
        },
        registerComponent: function (component) {
            if (typeof component == "object") {
                components.push(component);
            }
        }
    }
}

