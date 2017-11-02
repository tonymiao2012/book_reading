/**
 * Created by miaozixiong on 2017-11-2.
 * JS执行机制：执行JS时基于事件循环的。
 * 由于JS是单现成的，所以同一时间只能执行一个任务。其他任务就得排队。为了避免长时间等待，JS引入异步概念，
 * 用一个县城来管理异步任务。
 * 原理：同步任务在主线程队列中顺序执行，异步任务就会进入另一个任务队列，不阻塞主线程。等到主线程队列空了，
 * 就回去异步队列查询是否有可执行的异步任务，如果有异步任务可以执行就加入主线程队列，以此循环。
 * JS定时器目前有三个：setTimeout, setInterval和setImmediate
 * */

/**
 * SetTimeout(fn, x)
 * 表示延迟x毫秒后执行fn。延迟的时间总的来说是大于x毫秒的。HTML5规范规定最小延迟时间不能小于4ms，不过不同的浏览器实现是不同的。
 * 比如Chrome可以设置为1ms。
 * */

(function(){
  const label = "setTimeout";

  console.time(label);
  setTimeout(() => {
    console.timeEnd(label);   //setTimeout: 113.39697265625ms, 结果远不止10ms。原因是队列前面还有for循环没有执行完。
  },10);


})();

/**
 * setInterval(fn, x)
 * setInterval机制与setTimeout类似，不过setInterval是重复执行的。
 * 注意，setInterval并不是上一次fn执行完后过x毫秒再开始下一次执行的。实际上，setInterval不管上一次fn执行结果，每隔x毫秒
 * 就将fn放入主线程队列。
 * */

(function(){
  let i =0;
  const start = Date.now();
  const timer = setInterval(() => {
    i += 1;
    i === 5 && clearInterval(timer);
    console.log(`第${i}次开始`, Date.now() - start);
    for(let i = 0; i < 100000000; i++){}
    console.log(`第${i}次结束`, Date.now() - start);
  }, 100);
})()

/**
 * Result:
 第1次开始 101
 10:41:23.356 VM226:9 第1次结束 219
 10:41:23.358 VM226:7 第2次开始 221    可以看到后面的结束时间和开始时间没有太多间隔了
 10:41:23.443 VM226:9 第2次结束 306
 10:41:23.443 VM226:7 第3次开始 306
 10:41:23.528 VM226:9 第3次结束 391
 10:41:23.537 VM226:7 第4次开始 401
 10:41:23.622 VM226:9 第4次结束 485
 10:41:23.637 VM226:7 第5次开始 501
 10:41:23.725 VM226:9 第5次结束 588
 * */

/**
 *
 *这算一个比较新的定时器，目前IE11/Edge支持、Nodejs支持，Chrome不支持。
 * 在IE11/Edge中，setImmediate延迟可以在1ms以内，而setTimeout有最低4ms的延迟，
 * 所以setImmediate比setTimeout(0)更早执行回调函数。
 * 不过在Nodejs中，两者谁先执行都有可能，原因是Nodejs的事件循环和浏览器的略有差异。
 * */

(function testSetImmediate() {
  const label = 'setImmediate';
  console.time(label);

  setImmediate(() => {
    console.timeEnd(label);
  });
})();

/**
 * 其他异步模型实现定时器
 * */

/**
 * requestAnimationFrame
 * 这个方法并不是定时器，但是和setTimeout很相似。
 * 它是根据屏幕刷新同步，大多数屏幕的刷新频率都是60Hz，对应的requestAnimationFrame大概每隔16.6ms触发一次。
 * 如果屏幕刷新率更高，那么requestAnimationFrame刷新更快。
 * */

(function testRequestAnimationFrame(){
  const label = "requestAnimationFrame";
  console.time(label);
  requestAnimationFrame(() => {
    console.timeEnd(label);   //Chrome result: 0.31982421875ms, Edge result: 16.7ms
  });
})()

/**
 * Promise
 * 常用的异步模型。Promise的延迟比setImmediate还要低。意味着Promise比setImmediate先执行。
 * */
(function(){
  const label = "Promise";
  console.time(label);
  new Promise((resolve, reject) => {
    resolve();
  }).then(() => {
    console.timeEnd(label);   //Result: Promise: 0.10498046875ms
  });
})()