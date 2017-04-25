/**
 * Created by miaozixiong on 2017/4/25.
 */

//Prototype chaining extends to the prototype searching mechanism described earlier.
//When a property is accessed in read mode on an instance, the property is first searched for on the instance.
//If the property is not found, then the search continues to the property.

function SuperType(){
    this.property = true;
}

SuperType.prototype.getSuperValue = function(){
  return this.property;
};

function SubType(){
    this.subproperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSuperValue = function(){
    return false;
}

SubType.prototype.getSubValue = function(){
    return this.subproperty;
};

var instance = new SubType();
console.log(instance.getSuperValue());


//Constructor stealing
function SuperType() {
    this.colors = ["red", "blue", "green"];
}

function SubType(){
    SuperType.call(this);
}

var ins1 = new SubType();
ins1.colors.push("black");
console.log(ins1.colors);

var ins2 = new SubType();
console.log(ins2.colors);