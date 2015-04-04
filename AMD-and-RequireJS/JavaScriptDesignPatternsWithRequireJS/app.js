define(['factory'], function(Factory) {
    var h1 = document.createElement("h1");
    var h1Content = document.createTextNode("To Do List");

    var h2 = document.createElement("h2");
    var header = document.getElementById('header');
    var h2Content = document.createTextNode(new Date());

    h1.appendChild(h1Content);
    header.appendChild(h1);
    h2.appendChild(h2Content);
    header.appendChild(h2);

    h1.appendChild(h1Content);
    header.appendChild(h1);
    h2.appendChild(h2Content);
    header.appendChild(h2);

    var newContainer = new Factory.container;
    newContainer.addToDOM(document.body);

    var newSection = new Factory.section('Test Section');
    newSection.addToDOM(document.getElementById('container'));
});