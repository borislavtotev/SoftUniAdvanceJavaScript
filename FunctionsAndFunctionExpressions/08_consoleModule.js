'use strict';

var specialConsole = (function () {
    function writeLine() {
        var inputStr = replacePlaceHolders(arguments);
        if (inputStr != '') {
            console.log(inputStr);
        }
    }

    function writeError() {
        var inputStr = replacePlaceHolders(arguments);
        if (inputStr != '') {
            console.error(inputStr);
        }
    }

    function writeWarning() {
        var inputStr = replacePlaceHolders(arguments);
        if (inputStr != '') {
            console.warn(inputStr);
        }
    }

    function writeInfo() {
        var inputStr = replacePlaceHolders(arguments);
        if (inputStr != '') {
            console.info(inputStr);
        }
    }

    function replacePlaceHolders() {
        var inputArguments,
            inputStr,
            myRegex,
            placeholders,
            i,
            replaceString;

        inputArguments = arguments[0];
        inputStr = inputArguments[0];
        myRegex = /.*({\d+}).*/g;
        placeholders = myRegex.exec(inputStr);

        if (placeholders) {
            if (placeholders.length != inputArguments.length) {
                throw Error("There are not enough arguments passed to the function.");
                inputStr = '';
            } else {
                for (i = 1; i < placeholders.length; i=i+1) {
                    if (inputArguments[i] instanceof  Object) {
                        replaceString = inputArguments[i].toString();
                    } else {
                        replaceString = inputArguments[i];
                    }

                    inputStr = inputStr.replace(placeholders[i], replaceString);
                }
            }
        }

        return inputStr;
    }

    return {
        writeLine: writeLine,
        writeError: writeError,
        writeWarning: writeWarning,
        writeInfo: writeInfo
    };
})();

specialConsole.writeLine("Message: hello");
specialConsole.writeLine("Message: {0}", "hello");
specialConsole.writeLine("Object: {0}", { name: "Gosho", toString: function() { return this.name } });
specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");
specialConsole.writeInfo("Info: {0}", "Hi there! Here is some info for you.");
specialConsole.writeError("Error object: {0}", { msg: "An error happened", toString: function() { return this.msg } });