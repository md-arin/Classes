"use strict";
function greet(firstname) {
    console.log("Hello" + firstname);
}
//type inference
function sum(a, b) {
    return a + b;
}
// const value = sum(1,2)
// console.log(value);
function isLegal(a) {
    if (a > 18) {
        return true;
    }
    else {
        return false;
    }
}
// let x = isLegal(18)
function runAfter1S(fn) {
    setTimeout(fn, 1000);
}
runAfter1S(function () {
    console.log("hi there");
});
