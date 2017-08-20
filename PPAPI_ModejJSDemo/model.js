/**
 * Created by miaozixiong on 8/1/2017.
 */
var table = function(m_field, m_cond, m_value){
    let fieldAttr = m_field;
    let condAttr = m_cond;
    let valueAttr = m_value;

    function getField(){
        return fieldAttr;
    }

    function getCondition() {
        return m_cond;
    }

    function getValue() {
        return m_value;
    }

    function HandleMessage(message_event) {
        if (message_event.data) {
            alert("The string was a palindrome.");
        } else {
            alert("The string was not a palindrome.");
        }
    }

    function getTableObject(){
        //Send table message here.
        if(!modeljs || modeljs === undefined){
            console.log("Cannot get modeljs plugin object.");
            return;
        }

        let message = [
            fieldAttr,
            condAttr,
            valueAttr
        ];

        let retVal = modeljs.postMessageAndAwaitResponse(message);

        //Create an object after tableSelection in plugin is done. Otherwise do not create tableSelection object on JS.
        let tableObj = {};
        if(retVal === true){
            tableObj = parseMesageToObj(message);
        }else{
            console.log("Create table selection object failed on plugin.");
        }

        return tableObj;
    }

    function parseMesageToObj(val){
        let tempObj = {};
        tempObj.field = val[0];
        tempObj.cond = val[1];
        tempObj.value = val[2];

        return tempObj;
    }

    return {
        getTableSelection: getTableObject,
        getField: getField,
        getCondition: getCondition,
        getValue: getValue
    }
};

//Plugin object
let modeljs = document.getElementById("modeljs");
let table1 = new table(1, "FIELD_COND_NONE", "aaa");
let table2 = new table(2, "FIELD_COND_EQUAL", "bbb");
let table3 = new table(3, "FIELD_COND_CONTAINS", "ccc");


//Add object attribute
modeljs.tableSelection1 = table1.getTableSelection();
modeljs.tableSelection2 = table2.getTableSelection();
modeljs.tableSelection3 = table3.getTableSelection();


