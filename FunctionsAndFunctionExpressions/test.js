var test = (function () {
    'use strict';

    var Person = (function () {

         function Person() {
             if(this.constructor === Person){
                throw new Error("Can't instantiate abstract class Person");
             }
         }

        // IMPORT TO THE CONSTRUCTOR!
        this.name(name);

        Person.prototype.name = function (value) {
            if (value) {
                // Check The Document for required validation on that property. You may lose some points if you don't have validation!!!!

                this._name = value;
            }
            else {
                return this._name;
            }
        };

         Person.prototype.toString = function () {
            return this.constructor.name ;
         };

         return Person;
    }());

    var Student = (function () {
         function Student() {
            Person.apply(this, arguments);
         }

         Student.inherits(Person);

         Student.prototype.toString = function () {
            return Person.prototype.toString.call(this) + this._name ;
         };

         return Student;
    }());

    return {
        Person: Person,
        Student: Student
    }
}());