/**
 * Created by antowa on 12/10/17.
 */
//Two types of properties: data property and accessor property

/**
 * Data property: Contains a single location for a data value.
 * 1.Configurable
 * 2.Enumerable
 * 3.Writable
 * 4.Value
 */

var person = {};
Object.defineProperty(person, "name", {
    writable: false,
    value: "Tony"
});

console.log(person.name);
person.name = "Foo";
console.log(person.name);

Object.defineProperty(person, "name1", {
    configurable: false,
    value: 1
});

console.log(person.name1);
delete person.name;
console.log(person.name1);

