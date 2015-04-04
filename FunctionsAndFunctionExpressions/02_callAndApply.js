'use strict';

function printArgsInfo() {
    for (var i = 0; i< arguments.length; i = i + 1) {
        console.log(arguments[i] + "(" + typeof(arguments[i]) + ")");
    }
}

printArgsInfo.call();
printArgsInfo.call(null, 2, 3, 2.5, -110.5564, false);
console.log();

printArgsInfo.apply();
printArgsInfo.apply(null, [2, 3, 2.5, -110.5564, false]);
