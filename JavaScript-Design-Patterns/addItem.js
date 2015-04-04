var addButtonEvent = (function (){
    'use strict';

    var i,
        button;

    function addItemButtonEvent(event) {
        var newItemContent,
            newItem;

        newItemContent = event.target.previousElementSibling;
        newItem = new todoModule.item(newItemContent.value, 'false');
        newItem.addToDOM(event);
        newItemContent.value = '';
    }

    var buttonAddItems = document.getElementsByClassName('addNewItemButton');
    for (i = 0; i < buttonAddItems.length; i++) {
        button = buttonAddItems[i];
        button.addEventListener('click' ,function (event) {
            addItemButtonEvent(event);
        });
    };

    return {
        item: addItemButtonEvent
    }
}());
