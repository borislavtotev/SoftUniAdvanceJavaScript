'use strict';

String.prototype.startsWith = function startsWith(substring) {
    if (this.indexOf(substring) == 0) {
        return true;
    } else {
        return false;
    }
};

String.prototype.endsWith = function endsWith(substring) {
    if (this.lastIndexOf(substring) == this.length-substring.length) {
        return true;
    } else {
        return false;
    }
};

String.prototype.left = function left(count) {
    return this.slice(0,count);
};

String.prototype.right = function right(count) {
    return this.slice(-count);
};

String.prototype.padLeft = function padLeft(count, character) {
    var result = this;
    var char = character || ' ';
    for (var i = 0; i < count-this.length; i=i+1) {
        result = char + result;
    }

    return result;
};

String.prototype.padRight = function padRight(count, character) {
    var result = this;
    var char = character || ' ';
    for (var i = 0; i < count-this.length; i=i+1) {
        result = result + char;
    }

    return result;
};

String.prototype.repeat = function repeat(count) {
    var result = this;
    for (var i = 0; i < count-1; i++) {
        result = result + this;
    }

    return result;
}

var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));

var example = "This is an example string used only for demonstration purposes.";
console.log(example.endsWith("poses."));
console.log(example.endsWith ("example"));
console.log(example.startsWith("something else"));

var example = "This is an example string used only for demonstration purposes.";
console.log(example.left(9));
console.log(example.left(90));

var example = "This is an example string used only for demonstration purposes.";
console.log(example.right(9));
console.log(example.right(90));

// Combinations must also work
var example = "abcdefgh";
console.log(example.left(5).right(2));

var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));

var hello = "hello";
console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));

var character = "*";
console.log(character.repeat(5));
// Alternative syntax
console.log("~".repeat(3));
// Another combination
console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));