/**
 * Created by antowa on 3/1/17.
 */
function pt(){}

pt.prototype.name = "test1";
pt.prototype.attr = "test2";
pt.prototype.prop = "test3";

pt.prototype.alt = function(){
    alert("Attr: " + this.name);
};

var pt1 = new pt();
var pt2 = new pt();

alert(pt1.name === pt2.name);