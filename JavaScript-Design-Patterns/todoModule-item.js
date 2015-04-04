var todoModule = todoModule || {};

(function (todoModule) {
    'use strict';

    function Item (content, status) {
        this.setContent(content);
        this.setStatus(status);
    };

    Item.prototype.setContent = function (value) {
        if (value) {
            this._content = value;
        } else {
            throw new Error("The content of the item can't be empty.");
        }
    };

    Item.prototype.getContent = function () {
        return this._content;
    };

    Item.prototype.setStatus = function (value) {
        if (value) {
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
        var inputText,
            div,
            ul,
            newItemElement,
            newInputElement,
            newLabel;

        inputText = event.target.previousElementSibling;
        div = inputText.previousElementSibling;
        ul = div.querySelector("ul");
        newItemElement = document.createElement('li');
        newInputElement = document.createElement('input');

        newInputElement.setAttribute('class', "itemList");
        newInputElement.setAttribute('type', "checkbox");
        newInputElement.setAttribute('id', this._content);
        newInputElement.addEventListener('click', function(event) { changeStyle.items(event.target) });
        newItemElement.appendChild(newInputElement);

        newLabel = document.createElement('label');
        newLabel.setAttribute('for',this._content);
        newLabel.innerHTML = this._content;
        newItemElement.appendChild(newLabel);

        ul.appendChild(newItemElement);
    };

    todoModule.item = Item;
}(todoModule));