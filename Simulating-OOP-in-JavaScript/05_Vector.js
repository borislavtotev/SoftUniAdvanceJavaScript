'use strict';

var Vector = (function () {
    function Vector(dimensions) {
        if (dimensions == undefined || dimensions.length == 0) {
            throw new Error("Invalid vector dimensions.");
        }
        this._dimensions = dimensions;
    };

    Vector.prototype.add = function(vector) {
        var newDimentions = [],
            i;

        if (this._dimensions.length != vector._dimensions.length) {
            throw new Error("The number of dimensions is different");
        }

        for (i = 0; i < this._dimensions.length; i++) {
            newDimentions.push(this._dimensions[i]+vector._dimensions[i]);
        }

        return new Vector(newDimentions);
    };

    Vector.prototype.subtract = function(vector) {
        var newDimentions = [],
            i;

        if (this._dimensions.length != vector._dimensions.length) {
            throw new Error("The number of dimensions is different");
        }

        for (i = 0; i < this._dimensions.length; i++) {
            newDimentions.push(this._dimensions[i]-vector._dimensions[i]);
        }

        return new Vector(newDimentions);
    };

    Vector.prototype.dot = function(vector) {
        var resultSum = 0,
            i;

        for (i = 0; i < this._dimensions.length; i++) {
            resultSum +=  this._dimensions[i]*vector._dimensions[i];
        }

        return resultSum;
    };

    Vector.prototype.norm = function() {
        var squareSum = 0,
            i;

        for (i = 0; i < this._dimensions.length; i++) {
            squareSum +=  this._dimensions[i]*this._dimensions[i];
        }

        return Math.sqrt(squareSum);
    };

    Vector.prototype.toString = function() {
        return '(' + this._dimensions.toString() + ')';
    };

    return Vector;
})();

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(a.toString());
console.log(c.toString());

// The following throw errors
//var wrong = new Vector();
//var anotherWrong = new Vector([]);

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
var result = a.add(b);
console.log(result.toString());

//a.add(c); // Error

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
var result = a.subtract(b);
console.log(result.toString());

//a.subtract(c); // Error

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
var result = a.dot(b);
console.log(result.toString());

//a.dot(c); // Error

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(a.norm());
console.log(b.norm());
console.log(c.norm());
console.log(a.add(b).norm());