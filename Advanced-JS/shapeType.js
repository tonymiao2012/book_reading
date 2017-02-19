/**
 * Created by antowa on 9/17/16.
 */
var shape = function(){
    this.x = 0;
    this.y = 0;

    var area = function() {
        return this.x * this.y;
    }
    var constructor = function(x,y){
        this.x = x;
        this.y = y;
    }
}

shape.prototype.move = function(x,y){
    this.x += x;
    this.y += y;
}

