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

    // Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: "$XX.XX". If either or both inputs are not numeric or numeric strings, calculateTax should return false.

    function calculateTax(totalPaid, taxPercent) {
        if (Number(totalPaid) && Number(taxPercent)) {
            return "$" + (totalPaid * taxPercent + totalPaid).toFixed(2);
        } else {
            return false;
        }
    }

    console.log(calculateTax(100, 0.08));
    console.log(calculateTax(NaN, 0));
    console.log(calculateTax(100, null));

    // Define a function named convertDaysToHours that takes in one input Days. Return the conversion of the number of days into total hours. If the input is not numeric or a numeric string, convertDaysToHours, should return false.

    function convertDaysToHours(days) {
        if (Number(days)) {
            return days + " days is equal to " + days * 24 + " hours.";
        } else {
            return false;
        }
    }

    console.log(convertDaysToHours(10));
    console.log(convertDaysToHours(null));
    console.log(convertDaysToHours(NaN));

    // Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.

    function timesFour(input) {
        if (Number(input)) {
            return input * 4;
        } else {
            return false;
        }
    }

    console.log(timesFour(100));
    console.log(timesFour(null));
    console.log(timesFour(NaN));


})();