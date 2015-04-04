'use strict';

function traverse(selector) {
    var node = document.querySelector(selector);

    if (node !== undefined && node !== null) {
        traverseNode(node, '');
    }

    function traverseNode(node, spacing) {
        var nodeId,
            nodeClass,
            nodeIdString,
            nodeClassString,
            child;


        spacing = spacing || '  ';

        nodeId = node.getAttribute('id');
        nodeClass = node.getAttribute('class');

        if (nodeId) {
            nodeIdString = ' id="' + nodeId + '"';
        } else {
            nodeIdString = '';
        }

        if (nodeClass) {
            nodeClassString = ' class="' + nodeClass + '"';
        } else {
            nodeClassString = '';
        }

        console.log(spacing + node.nodeName.toLowerCase() + ':' + nodeIdString + nodeClassString);

        for (var i = 0; i < node.childNodes.length; i++) {
            child = node.childNodes[i];
            if (child.nodeType === document.ELEMENT_NODE) {
                traverseNode(child, spacing + '  ');
            }
        }
    }
}

traverse('.birds');
