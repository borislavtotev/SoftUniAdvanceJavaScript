var todoModule = todoModule || {};

(function (todoModule) {
    'use strict';

    var items = [];

    function Section (title) {
        this.setTitle(title);
    }

    Section.prototype.setTitle = function (value) {
        if (value) {
            this._title =value;
        } else {
            throw new Error("The title of the new section can't be empty.");
        }
    };

    Section.prototype.getTitle = function () {
        return this._title;
    };

    Section.prototype.addItem = function (value) {
        if (value instanceof Item) {
            items.push(value);
        } else {
            return new Error("Only valid items can be added to the section");
        }
    };

    Section.prototype.getItems = function () {
        return items;
    };

    Section.prototype.addToDOM = function (event) {
        var inputText,
            div,
            newSection,
            newSectionContent,
            button;

        inputText = event.target.previousElementSibling;
        div = inputText.previousElementSibling;
        newSection = document.createElement('section');
        newSectionContent = '<div>' +
            '<h2>' + this._title + '</h2>' +
            '<ul type="none"></ul>' +
            '</div>' +
            '<input class="addNewItemContent" type="text" placeholder="Add item..." />' +
            '<input class="addNewItemButton" type="button" value="+" />';
        newSection.innerHTML = newSectionContent;
        button = newSection.getElementsByClassName('addNewItemButton')[0];
        button.addEventListener('click', function (event) {
            addButtonEvent.item(event);
        });

        div.appendChild(newSection);
    };

    todoModule.section = Section;
}(todoModule));