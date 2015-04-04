'use strict';

var ToDoModule = (function () {
    var Container = (function () {
        var sections = [];

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

        return Container;
    }());

    var Section = (function () {
        var items = [];

        function Section (title) {
            this.setTitle(title);
        }

        Section.prototype.setTitle = function (value) {
            if (value != '' && value != null) {
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
            var inputText = event.target.previousElementSibling;
            var div = inputText.previousElementSibling;
            console.log(div);
            var newSection = document.createElement('section');
            var newSectionContent = '<div>'+
                                    '<h2>' + this._title + '</h2>' +
                                    '<ul type="none"></ul>' +
                                    '</div>' +
                                    '<input class="addNewItemContent" type="text" placeholder="Add item..." />' +
                                    '<input class="addNewItemButton" type="button" value="+" />';
            newSection.innerHTML = newSectionContent;
            var button = newSection.getElementsByClassName('addNewItemButton')[0];
            button.addEventListener('click' ,function (event) {
                addItemButtonEvent(event);
            });

            //console.log(newSection);
            div.appendChild(newSection);
            //console.log(div);
        };

        return Section;
    }());

    var Item = (function () {
        function Item (content, status) {
            this.setContent(content);
            this.setStatus(status);
        };

        Item.prototype.setContent = function (value) {
            if (value != '' && value != null) {
                this._content = value;
            } else {
                throw new Error("The content of the item can't be empty.");
            }
        };

        Item.prototype.getContent = function () {
            return this._content;
        };

        Item.prototype.setStatus = function (value) {
            if (value != '' && value != null) {
                if (value.toLowerCase() == 'completed') {
                    this._status = true;
                } else {
                    this._status = false;
                }
            } else {
                throw new Error("The content of the status can't be empty.");
            }
        };

        Item.prototype.getStatus = function () {
            return this._status;
        };

        Item.prototype.addToDOM = function (event) {
            var inputText = event.target.previousElementSibling;
            var div = inputText.previousElementSibling;
            var ul = div.querySelector("ul");
            var newItemElement = document.createElement('li');
            var newInputElement = document.createElement('input');

            newInputElement.setAttribute('class', "itemList");
            newInputElement.setAttribute('type', "checkbox");
            newInputElement.setAttribute('id', this._content);
            newInputElement.addEventListener('click', function(event) { changeItemsStyle(event.target) });
            newItemElement.appendChild(newInputElement);

            var newLabel = document.createElement('label');
            newLabel.setAttribute('for',this._content);
            newLabel.innerHTML = this._content;
            newItemElement.appendChild(newLabel);

            ul.appendChild(newItemElement);
        };

        return Item;
    }());

    return {
        container: Container,
        section: Section,
        item: Item
    };
}());