/**
 * Created by antowa on 4/10/16.
 */
var createPeople = function(name){
    var sex;
    var name;
    return {
        setName: function(newName){
            name = newName;
        },
        getName: function(){
            return name;
        },
        getSex: function(){
            return sex;
        },
        setSex: function(newSex){
            if(typeof newSex === "string" && (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")){
                sex = newSex;
            }
        }
    }
}

var newguy = createPeople("Tony");
console.log(newguy.getName());
newguy.setName("Zixiong");
console.log(newguy.getName());

newguy.setSex("Male");
console.log(newguy.getSex());
