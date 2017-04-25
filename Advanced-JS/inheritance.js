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