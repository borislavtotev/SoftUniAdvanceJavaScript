'use strict';

var domModule = (function () {
    function appendChild() {
        var element,
            child;

        element = arguments[0];
        child = document.querySelector(arguments[1]);
        child.appendChild(element);
    }

    function removeChild() {
        var parent,
            childForRemoved;

        parent = document.querySelector(arguments[0]);
        childForRemoved = document.querySelector(arguments[1]);
        parent.removeChild(childForRemoved);
    }

    function addHandler() {
        var elements,
            i;

        elements = document.querySelectorAll(arguments[0]);
        for (i = 0; i < elements.length; i=i+1) {
            elements[i].addEventListener(arguments[1], arguments[2]);
        }
    }

    function retrieveElements() {
        return document.querySelectorAll(arguments[0]);
    }


    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        retrieveElements: retrieveElements
    };
}());

var liElement = document.createElement("li");
// Appends a list item to ul.birds-list
domModule.appendChild(liElement,".birds-list");

// Removes the first li child from the bird list
domModule.removeChild("ul.birds-list","li:first-child");

// Adds a click event to all bird list items
domModule.addHandler("li.bird", 'click', function(){ alert("I'm a bird!") });

// Retrives all elements of class "bird"
var elements = domModule.retrieveElements(".bird");