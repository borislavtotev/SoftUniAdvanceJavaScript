define(['item'], function(Item) {
    return (function () {
        var sectionsCreated = 0;

        function Section(title) {
            if (title === '') {
                throw Error('The section title cannot be empty');
            }

            this._title = title;
            sectionsCreated++;
        }

        Section.prototype.addToDOM = function (parent) {
            var section;
            var title;
            var itemData;
            var itemBtn;
            var item;
            var lastSectionID;

            section = document.createElement('div');
            if(sectionsCreated === 1){
                section.id = 'section';
            } else{
                lastSectionID = document.getElementById('container').lastChild.previousSibling.id;
                section.id = 'section_' + Number(sectionsCreated);
            }

            title = document.createElement('h3');
            title.innerHTML = this._title;
            section.appendChild(title);
            itemData = document.createElement('input');
            itemData.placeholder = 'Add item...';
            itemBtn = document.createElement('input');
            itemBtn.type = 'button';
            itemBtn.value = '+';
            itemBtn.addEventListener("click", function () {
                var item = new Item(itemData.value);
                item.addToDOM(document.getElementById(section.id));
            });
            item = document.createElement('div');
            item.id = 'newSection';
            item.appendChild(itemData);
            item.appendChild(itemBtn);
            section.appendChild(item);

            if (!(document.getElementById(section.id))) {
                parent.insertBefore(section, parent.lastChild);
            }
        };

        return Section;
    })();
});