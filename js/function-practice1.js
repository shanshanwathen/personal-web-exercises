(function () {
    "use strict";
    // Make a function called returnTwo() that returns the number 2 when called
    function returnTwo() {
        return 2;
    }

    // Test this function with console.log(returnTwo())
    console.log(returnTwo());

    // Make a function called sayHowdy() which console.logs the string “Howdy!”
    function sayHowdy() {
        console.log("Howdy!");
    }

    // Test this function by directly calling sayHowdy()
    sayHowdy();

    // Remember this function does not need a defined return value
    // Make a function called returnName() that returns the string of your name
    function returnName() {
        return ("Shanshan");
    }

    // Test this function with console.log(returnName())
    console.log(returnName());

    // Make a function called addThree() which takes in a number input and returns the number plus 3.
    function addThree(number) {
        return number + 3;
    }

    // Test this function with console.log(addThree(5))
    console.log(addThree(5));

    // Make a function called sayString() which returns the string input passed in.
    function sayString(string) {
        return string;
    }

    // Test this function with console.log(sayString('codeup'))
    console.log(sayString("codeup"));

})();