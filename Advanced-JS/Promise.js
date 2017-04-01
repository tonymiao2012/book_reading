/**
 * Created by miaozixiong on 2017/3/28.
 */
//Methods:Promise.all(iterable), Promise.race(iterable), Promise.reject(reason), Promise.resolve(value)

    //Simple example.
let myPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("Make it~ TONY.");
    }, 250);
});

myPromise.then((successmsg) => {
    console.log("Receive: " + successmsg);
});

