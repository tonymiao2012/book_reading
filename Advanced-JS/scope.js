/**
 * Created by antowa on 2/19/17.
 */

var color = 'blue';
function changeColor() {
    var anotherColor = 'red';
    function swapColors() {
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
    //color, anotherColor, and tempColor are all accessible here }

    //color and anotherColor are accessible here, but not tempColor

    }

    swapColors();
}

changeColor();
console.log(color);

