(function () {
    'use strict';

    var buttonAddSelection,
        button,
        newSelectionTitle,
        newSelection,
        i;

    buttonAddSelection = document.getElementsByClassName('addNewSectionButton');
    for (i = 0; i < buttonAddSelection.length; i++) {
        button = buttonAddSelection[i];
        button.addEventListener('click' ,function addSection(event) {
            newSelectionTitle = event.target.previousElementSibling;
            newSelection = new todoModule.section(newSelectionTitle.value);
            newSelection.addToDOM(event);
            newSelectionTitle.value = '';
        }, false);
    };
}());