var todoModule = todoModule || {};

(function (todoModule) {
    'use strict';

    function Container () {
    }

    Container.prototype.addSection = function (value) {
        if (value instanceof  Section) {
            sections.push(value);
        } else {
            throw new Error("Only sections can be added to the container");
        }
    };

    Container.prototype.getSections = function () {
        return sections;
    };

    Container.prototype.addToDOM = function () {
        var containers,
            parent,
            div;

        containers = document.getElementsByClassName('container');
        parent = containers[0].parentElement;
        div = document.createElement('div');
        div.setAttribute('class', 'container');
        parent.appendChild(div);
    };

    todoModule.container = Container;
}(todoModule));