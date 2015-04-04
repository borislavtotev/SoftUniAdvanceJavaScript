define(['section'], function(Section) {
    return (function () {
        function Container() {
        }

        Container.prototype.addToDOM = function (parent) {
            var container;
            var section;
            var sectionBtn;
            var sectionTitle;

            container = document.createElement("div");
            container.id = "container";
            sectionTitle = document.createElement("input");
            sectionTitle.placeholder = "Title..";
            sectionBtn = document.createElement("input");
            sectionBtn.type = "button";
            sectionBtn.value = "New Section";
            sectionBtn.addEventListener("click", function () {
                var section = new Section(sectionTitle.value);
                section.addToDOM(document.getElementById('container'));
            });
            section = document.createElement('div');
            section.id = 'newSection';
            section.appendChild(sectionTitle);
            section.appendChild(sectionBtn);
            container.appendChild(section);
            if (!(document.getElementById('container'))) {
                parent.appendChild(container);
            }
        }

        return Container;
    })();
});
