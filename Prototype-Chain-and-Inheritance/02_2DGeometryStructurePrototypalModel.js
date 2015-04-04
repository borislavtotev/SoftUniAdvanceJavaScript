'use strict';

var shapes = (function() {
    var shape = {
        init: function init(x, y, color) {
            this._x = x;
            this._y = y;
            this._color = color;

            return this;
        },

        toString: function toString() {
            return '(' + this._x + ',' + this._y + ')' + ' color: ' + this._color;
        },

        test: function testShape() {
            return "Testing....";
        }
    };

    var circle = Object.create(shape);

    circle.init = function circleInit(x, y, radius, color) {
            shapes.shape.init.call(this, x, y, color);
            this._radius = radius;

            return this;
    };

    circle.toString = function circleToString() {
            return 'Circle: O' + shapes.shape.toString.call(this) + ' radius: ' + this._radius;
    };

    var rectangle = {
        init: function initrectangle(x, y, width, height, color) {
            shapes.shape.init.call(this, x, y, color);
            this._width = width;
            this._height = height;

            return this;
        },

        toString: function rectangleToString() {
            return 'Rectangle: A' + shapes.shape.toString.call(this) + ' width: ' +
                    this._width + ' height:' + this._width;
        }
    };

    var triangle = {
        init: function initTriangle(x, y, x2, y2, x3, y3, color) {
            shapes.shape.init.call(this, x, y, color);
            this._x2 = x2;
            this._y2 = y2;
            this._x3 = x3;
            this._y3 = y3;

            return this;
        },

        toString: function triangleToString() {
            return 'Triangle: A' + shapes.shape.toString.call(this) +
                    ' B(' + this._x2 + ',' + this._y2 + ')' +
                    ' C(' + this._x2 + ',' + this._y3 + ')';
        }
    };

    var line = {
        init: function line(x, y, x2, y2, color) {
            shapes.shape.init.call(this, x, y, color);
            this._x2 = x2;
            this._y2 = y2;

            return this;
        },

        toString: function toString() {
            return 'Line: A' + shapes.shape.toString.call(this) +
                    ' B(' + this._x2 + ',' + this._y2 + ')';
        }
    }

    var segment = {
        init: function initSegment(x, y, x2, y2, color) {
            shapes.line.init.call(this, x, y, x2, y2, color);

            return this;
        },

        toString: function segmentToString() {
            return 'Segment: A' + shapes.shape.toString.call(this) +
                ' B(' + this._x2 + ',' + this._y2 + ')';
        }
    }

    var self = {
        shape: shape,
        circle: circle,
        rectangle: rectangle,
        triangle: triangle,
        line: line,
        segment: segment
    };

    return self;
}());

var testCircle = Object.create(shapes.circle).init(1, 2, 2.5, "#ff0000");
console.log(testCircle.toString());

var testRectangle = Object.create(shapes.rectangle).init(2, 3, 1.4, 3.4, "#ffffff");
console.log(testRectangle.toString());

var testTriangle = Object.create(shapes.triangle).init(1, 1, 2, 2, 3, 3, "#000000");
console.log(testTriangle.toString());

var testLine = Object.create(shapes.line).init(0, 0, 1, 1, "#ffee00");
console.log(testLine.toString());

var testShape = Object.create(shapes.segment).init(2, 2, 3, 3, "#ffeeee");
console.log(testShape.toString());

console.log(testCircle.test());