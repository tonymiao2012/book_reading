/**
 * Created by miaozixiong on 2017/6/1.
 */
var superClass = function () {
    var attr1 = "";
    var attr2 = "";

    this.setAttr = function (val1, val2) {
        attr1 = val1;
        attr2 = val2;
    }

    this.getAttr = function () {
        var obj = {
            a1: attr1,
            a2: attr2
        };
        return obj;
    }
};

var subClass = function () {
    var attr3 = "attr";

    //Add a method with same name in subclass.
    /*
    this.setAttr = function (val1, val2) {
        attr3 = val1;
    };
    */
};

var subClass1 = function () {
    this.attr4 = "unknown";

    this.setAttr = function (val1, val2) {
        this.attr4 = val1;
    };
};

subClass.prototype = new superClass();
subClass1.prototype = new superClass();

var obj = new subClass();
var obj1 = new subClass1();

obj.setAttr.apply(this, [3, 4]);    //Run obj.getAttr(), will see result is Object {a1: 1, a2: 2}
obj1.attr4 = "unknown1";            //Object {a1: "", a2: ""}
obj1.setAttr.apply(this, [3, 4]);   //Object {a1: "", a2: ""} result
obj1.setAttr.apply(obj, [5, 6]);    //obj.getAttr(): obj.getAttr()