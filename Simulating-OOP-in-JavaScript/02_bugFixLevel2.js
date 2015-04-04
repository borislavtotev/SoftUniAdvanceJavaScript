'use strict';

var Person = (function () {
    var Person = function (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };

    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        set: function (value) {
            var names = value.split(" ");
            this.firstName = names[0];
            this.lastName = names[1];
            return this.firstName + " " + this.lastName;
        }
    });

    return Person;
}());

var person = new Person("Peter", "Jackson");
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log();
person.firstName = "Michael";
console.log(person.firstName);
console.log(person.fullName);
console.log();
person.lastName = "Williams";
console.log(person.lastName);
console.log(person.fullName);
console.log();
person.fullName = "Alan Marcus";
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);