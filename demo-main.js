"use strict";

const sleep = require("./thread-sleep");
const timeout = 5 * 1000;

sleep.SleepSync(timeout);
console.log("这段文字应该在同步sleep操作之后打印，在此之前主线程阻塞" + timeout + "毫秒");
sleep.SleepAsync(timeout, (callMilliSecond) => {
    console.log("回调函数调用，异步sleep操作完成，异步sleep函数调用时间是：" + (new Date(callMilliSecond)).toLocaleString());
});
console.log("这段文字应该在异步sleep操作之前打印，在此之后" + timeout + "毫秒，主线程调用回调函数");