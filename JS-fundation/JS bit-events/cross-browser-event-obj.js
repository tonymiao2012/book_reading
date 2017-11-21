/**
 * Created by antowa on 11/20/17.
 */
var EventUtil = {
    addHandler: function(element, type, handler){

    },
    getEvent: function(event){
        return event ? event : window.event;
    },
    getTarget: function(event){
        return event.target || event.srcElement;
    },
    preventDefault: function(event){
        if(event.preventDefault)
            event.preventDefault();
        else
            event.returnValue = false;
    },
    stopPropagation: function(event){
        if(event.stopPropagation)
            event.stopPropagation();
        else
            event.cancelBubble = true;
    }
};

//Window load event
EventUtil.addHandler(window, "load", function(event){
    console.load("window loaded");
});