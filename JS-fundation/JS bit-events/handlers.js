/**
 * Created by antowa on 11/16/17.
 */
var btn = document.getElementById("button1");

//Dom level 0 event handler
//Note: Chrome forbids any kind of inline code in extensions via content security policy.
//Detail: https://stackoverflow.com/questions/13591983/onclick-within-chrome-extension-not-working
btn.onClick = function(){
    console.log("Button clicked.");
    console.log(this.id);   //The event handler is run within the scope of element. So this could show the id of button.
}

//Dom level 2 event handler
btn.addEventListener("click", function(){
    console.log(this.id);
}, false);     //Three paras: event name, event handler function, bool value
               // indicate whether to call the event handler during capture phase.

btn.addEventListener("click", function(){
    console.log("Hello~!");
}, false);      //More than one event handlers could be added.

btn.addEventListener("click", function(){
    console.log(event.type);    //This object contains basic information such as the element that caused the event
    console.log(event.target);
    console.log(event.eventPhase);
    console.log(event.cancelable);
    console.log(event.clientX);
    console.log(event.clientY);
    //event.stopPropagation();
}, false);

document.body.addEventListener("click", function(){
    console.log("Body clicked.");
},false);
