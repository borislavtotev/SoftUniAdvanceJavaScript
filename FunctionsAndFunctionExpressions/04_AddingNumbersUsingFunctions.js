'use strict';

function add(a) {
    var sum = a;

    function addInner(b) {
        sum += b;
        return addInner;
    }

    addInner.toString = function() {
        return sum;
    };

    return addInner;
}

var addTwo = add(2);
console.log(+addTwo); //2

var addTwo = add(2);
console.log(+addTwo(3)(5)(1)(7)); //18