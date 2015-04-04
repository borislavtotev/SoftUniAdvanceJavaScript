var changeStyle = (function () {
    'use strict';

    var checkBoxes,
        checkBox,
        i;

    function changeItemsStyle(element) {
        if (element.checked) {
            element.parentNode.style.backgroundColor = 'green';
        } else {
            element.parentNode.style.backgroundColor = 'white';
        }
    };

    checkBoxes = document.getElementsByClassName('itemList');

    for (i = 0; i < checkBoxes.length; i++) {
        checkBox = checkBoxes[i];
        if (checkBox) {
            changeItemsStyle(checkBox);
        }

        checkBox.addEventListener('click', function(event) { changeItemsStyle(event.target) });
    }

    return {
        items: changeItemsStyle
    };
}());