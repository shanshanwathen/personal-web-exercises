(function() {
    "use strict";
    /*
    Create a function which returns the number of true values there are in an array.

    Examples:
    countTrue([true, false, false, true, false]) ➞ 2
    countTrue([false, false, false, false]) ➞ 0
    countTrue([]) ➞ 0
    Notes
    Return 0 if given an empty array.
    All array items are boolean (true or false).
     */
    function countTrue(arr) {
        var count = 0;
        for (var i = 0; i <= arr.length; i++) {
            if (arr[i] === true) {
                count = count + 1;
            }
        }
        return count;
    }


    /*
    Create a function that takes a number as an argument, increments the number by +1 and returns the result.

    Examples
    addition(0) ➞ 1
    addition(9) ➞ 10
    addition(-3) ➞ -2
     */

    function addition(num) {
        return num + 1;
    }

    /*
    Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

    Examples
    nextEdge(8, 10) ➞ 17
    nextEdge(5, 7) ➞ 11
    nextEdge(9, 2) ➞ 10
    Notes
    (side1 + side2) - 1 = maximum range of third edge.
    The side lengths of the triangle are positive integers.
     */

    function nextEdge(side1, side2) {
        return (side1 + side2) - 1;
    }


    /*
    In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

    Given you and your friend's tile number, create a function that returns if it's possible to earn a bonus when you roll the dice.

    Examples
    possibleBonus(3, 7) ➞ true
    possibleBonus(1, 9) ➞ false
    possibleBonus(5, 3) ➞ false
     */

    function possibleBonus(a, b) {
        return a < b && a + 6 >= b;
    }


    /*
    This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:

    1, 3, 6, 10, 15
    This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.
    Write a function that gives the number of dots with its corresponding triangle number of the sequence.

    Examples
    triangle(1) ➞ 1
    triangle(6) ➞ 21
    triangle(215) ➞ 23220
     */

    function triangle(number) {
        var result = 0;
        for (var i = 1; i <= number; i++) {
            result = result + i;
        }
        return result;
    }


    /*
    Create a function that takes the age and return the age in days.

    Examples
    calcAge(65) ➞ 23725
    calcAge(0) ➞ 0
    calcAge(20) ➞ 7300

    Notes
    Use 365 days as the length of a year for this challenge.
    Ignore leap years and days between last birthday and now.
    Expect only positive integer inputs.
     */

    function calcAge(age) {
        return age * 365;
    }




})();