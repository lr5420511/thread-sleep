"use strict";

const out = module.exports;

out.SleepAsync = function(timeout, sleeped) {
    if (typeof timeout !== "number" || timeout < 0) {
        throw new Error("SleepAsync: timeout of argument isn't a vaild argument");
    }
    const endMilliSecond = (new Date()).getTime() + timeout;
    (function StartSleep() {
        let nowMilliSecond = (new Date()).getTime();
        if (nowMilliSecond >= endMilliSecond && sleeped instanceof Function) {
            sleeped(endMilliSecond - timeout);
        } else if (nowMilliSecond < endMilliSecond) {
            global.setTimeout(function() { StartSleep(); }, 1);
        }
    })()
};

out.SleepSync = function(timeout) {
    if (typeof timeout !== "number" || timeout < 0) {
        throw new Error("SleepAsync: timeout of argument isn't a vaild argument");
    }
    const endMilliSecond = (new Date()).getTime() + timeout;
    while ((new Date()).getTime() < endMilliSecond);
};