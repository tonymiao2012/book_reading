/**
 * Created by miaozixiong on 2017-11-2.
 */
let text = "hello world";
text.charAt(1);
text.charCodeAt(3);
text.charCodeAt(100);
text[3];

let str = "string";
let str1 = str.concat(str, "foo", "bar");
let arr = ["foo1", "bar1"];
let str2 = str.concat(str, arr);

str.indexOf('r');

str.substr(1, 4);   //"trin"
str.substr(1, 7);   //"tring"
str.slice(1, 5);    //"trin"

/**String pattern match: match(), search(), replace*/
let text = "cat, bat, eat, fat";
let pattern = /.at/;

text.match(pattern);    //["cat", index: 0, input: "cat, bat, eat, fat"] Match first appearance.
text.search(pattern);

text.replace(/at/, "ony");    //"cony, bat, eat, fat"
text.replace(/at/g, "ony");   //"cony, bony, eony, fony"

//Note: The only way to replace all instances of a substring is to provide a regular expression with global flag specified.
/**String replace(, func) method and split()*/
function HTMLReplaceGame(text){
  return text.replace(/[<>"&]/g, function(match, pos, oriText){
    switch(match){
      case "<":
        return " left ";
      case ">":
        return " right ";
      case "&":
        return " and ";
      case "\"":
        return " quot ";
    }
  });
};

console.log(HTMLReplaceGame("<p class = \"greeting\">Hello world</p>"));

let text = "red, blue, green, yellow";
text.split(",");    //["red", " blue", " green", " yellow"]
text.split(",", 2); //["red", " blue"]

let stringVal = "yellow";
console.log(stringVal.localeCompare("brick"));
console.log(stringVal.localeCompare("yellow"));

