/**
 * Created by miaozixiong on 2017/2/22.
 */
var person = function (name, age, birth) {
    this.name = name;
    this.age = age;
    this.birth = birth

    this.showName = function () {
        console.log(this.name);
    }
}

var person1 = new person("T", 29, "1900-01-01");
var person2 = new person("C", 28, "1988-00-01");

console.log(person1.constructor === person);
console.log(person2.birth);
person1.showName();

person("Greg", 27, "2001-01-09");
window.showName();
