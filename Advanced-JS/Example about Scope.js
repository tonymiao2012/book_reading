/**
 * Created by miaozixiong on 2017/4/19.
 */
//The following part of code shows the scope of 'var' value.
const Greeters = [];

for (var i = 0; i < 10; i++){
    Greeters.push(
        function () {
            return console.log(i);
        }
    );
}

///Test Greeters here.
Greeters[0]();  //IIEF way
Greeters[1]();
Greeters[2]();

//The result is: 10 10 10. Not 0, 1, 2...
//That means var i is polluted by its scope.
//The following methods indicate how to resolve the scope problem above.

//1. Use 'let' instead of 'var'. The difference is scoping. var is scoped to the nearest function block and let is scoped
//to the nearest enclosing block(both are global if outside any block), which can be smaller than a function block.
//Also, variables declared with let are not accessible before they are declared in their enclosing block.
//Read this for further: http://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable
const Greeters1 = [];

for (let i = 0; i < 10; i++){
    Greeters1.push(
        function () {
            return console.log(i);
        }
    );
}

///Test Greeters here.
Greeters1[0]();  //IIEF way
Greeters1[1]();
Greeters1[2]();

//2.Another method is using 'bind'
const Greeters2 = [];

for (let i = 0; i < 10; i++){
    Greeters2.push(
        function () {
            return console.log.bind(null, i);
        }
    );
}

///Test Greeters here.
Greeters2[0]();  //IIEF way
Greeters2[1]();
Greeters2[2]();
