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

var book = {}
Object.defineProperties(
    book, {
        _year: {
            value: 2004
        },
        edition: {
            value: 1
        },
        year: {
            get: function(){
                return this._year;
            },
            set: function(newYear) {
                if(newYear > 2015) {
                    this._year = newYear;
                    this.edition += newYear - 2015;
                }
            }
        }
    }
);

var dscrpt = Object.getOwnPropertyDescriptor(book, "_year");
console.log(dscrpt.value);  // 2004
console.log(dscrpt.configurable);   // false
console.log(typeof dscrpt.get); // undefined

var dscrpt1 = Object.getOwnPropertyDescriptor(book, "year");
console.log(dscrpt1.value); // undefined
console.log(dscrpt1.enumerable);    // false
console.log(typeof dscrpt1.get);    // function
