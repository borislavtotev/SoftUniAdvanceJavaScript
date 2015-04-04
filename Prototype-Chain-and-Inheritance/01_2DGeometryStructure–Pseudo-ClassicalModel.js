'use strict';

var shapes = (function () {
    var shape = (function() {
        function Shape(x, y, color) {
            this._x = x;
            this._y = y;
            this._color = color;
        };

        Shape.prototype.toString = function () {
            return '(' + this._x + ',' + this._y + ')' + ' color: ' + this._color;
        };

        return Shape;
    }());

    var circle = (function() {
        function Circle(x, y, radius, color) {
            shape.call(this, x, y, color);
            this._radius = radius;
        }

        Circle.prototype = Object.create(shape.prototype);
        Circle.prototype.constructor = Circle;

        Circle.prototype.toString = function () {
            return "Circle: O" + shape.prototype.toString.call(this) +
                ' radius: ' + this._radius;
        };

        return Circle;
    }());

    var rectangle = (function() {
        function Rectangle(x,y, color, width, height) {
            shape.call(this, x, y, color);
            this._width = width;
            this._height = height;
        }

        Rectangle.prototype = Object.create(shape.prototype);
        Rectangle.prototype.constructor = Rectangle;

        Rectangle.prototype.toString = function () {
            return "Rectangle: A" + shape.prototype.toString.call(this) +
                ' width: ' + this._width + ' height: ' + this._height;
        };

        return Rectangle;
    }());

    var triangle = (function() {
        function Triangle (x, y, x2, y2, x3, y3, color) {
            shape.call(this, x, y, color);
            this._x2 = x2;
            this._y2 = y2;
            this._x3 = x3;
            this._y3 = y3;
        }

        Triangle.prototype = Object.create(shape.prototype);
        Triangle.prototype.constructor = Triangle;

        Triangle.prototype.toString = function () {
            return 'Triangle: A' + shape.prototype.toString.call(this) +
                ' B(' + this._x2 + ',' + this._y2 + ')' +
                ' C(' + this._x3 + ',' + this._y3 + ')';
        };

        return Triangle;
    }());

    var line = (function() {
        function Line (x, y, x2, y2, color) {
            shape.call(this, x, y, color);
            this._x2 = x2;
            this._y2 = y2;
        }

        Line.prototype = Object.create(shape.prototype);
        Line.prototype.constructor = Line;

        Line.prototype.toString = function () {
            return 'Line: A' + shape.prototype.toString.call(this) +
                ' B(' + this._x2 + ',' + this._y2 + ')';
        };

        return Line;
    }());

    var segment = (function() {
        function Segment (x, y, x2, y2, color) {
            line.call(this, x, y, x2, y2, color);
        }

        Segment.prototype = Object.create(shape.prototype);
        Segment.prototype.constructor = Segment;

        Segment.prototype.toString = function () {
            return 'Segment: A' + shape.prototype.toString.call(this) +
                ' B(' + this._x2 + ',' + this._y2  + ')';
        };

        return Segment;
    }());

    var module = {
        shape: shape,
        circle: circle,
        rectangle: rectangle,
        triangle: triangle,
        line: line,
        segment: segment
    };

    return module;
}());

var cicleA = new shapes.circle(1,2, 2.3, '#ff0000');
console.log(cicleA.toString());

var rectangleA = new shapes.rectangle(2, 3, "#ff00ff", 12, 4);
console.log(rectangleA.toString());

var triangleA = new shapes.triangle(1, 2, 3, 4, 5, 6, "ffffff");
console.log(triangleA.toString());

var lineA = new shapes.line(1, 2, 3, 4, "#eeeeff");
console.log(lineA.toString());

var segmentA = new shapes.segment(1, 2, 3, 4, "000000");
console.log(segmentA.toString());