/**
 * Created by antowa on 4/12/16.
 */
//Super class.
function Shape(){
    this.x = 0;
    this.y = 0;
}

Shape.prototype.move = function(x, y){
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
}

function Rectangle(){
    Shape.call(this);   //call superclass constructor.
}
//This method can be very useful, because it allows you to choose the prototype object
// for the object you want to create, without having to define a constructor function.
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log(rect.prototype);
rect.move(2,1);