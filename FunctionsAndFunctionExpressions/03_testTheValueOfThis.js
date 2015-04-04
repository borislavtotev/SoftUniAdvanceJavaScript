'use strict';

function testContext() {
    console.log('this: ' + this);
}

testContext(); //return the

console.log("--------------------------------------------");
var outFunction = function outFunction() {
    console.log("inside the outFunction");
    testContext();
}

outFunction();

console.log("--------------------------------------------");

var test = new testContext();

