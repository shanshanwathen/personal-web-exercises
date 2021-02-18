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



/*
Triangular Number Sequence

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
Array of Multiples

Creat a function that takes in two numbers as arguments (num, length) and returns an array  of multiples of num until the array length reaches  length.

Examples
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108,  120]
arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
 */

function arrayOfMultiples(num, length) {
    var array = [];
    for (var i = 1; i <= length; i++) {
        array.push(num * i);
    }
    return array;
}


/*
Burglary Series (01): Calculate Total Losses

You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary(number). If nothing was robbed, return the string "Lucky you!".

Examples

const stolenItems = {
    tv: 30,
    skate: 20,
    stereo: 50,
} ➞ 100

const stolenItems = {
  painting: 20000,
} ➞ 20000

const stolenItems = {} ➞ "Lucky you!"
 */

function calculateLosses(obj) {
    var losses = 0;
    if (Object.keys(obj).length > 0) {
        for (let ele in obj) {
            losses = losses + obj[ele];
        }
        return losses;
    } else {
        return "Lucky you!";
    }
}

/*
Integer Digits Count

Create a function that counts the integer's number of digits.

Examples
count(318) ➞ 3
count(-92563) ➞ 5
count(4666) ➞ 4
count(-314890) ➞ 6
count(654321) ➞ 6
count(638476) ➞ 6
 */

function count(number) {
    if (number < 0) {
        number = number * -1;
    }
    return number.toString().length;
}


/*
Check if All Values Are True

Create a function that returns true if all parameters are truthy, and false otherwise.

Examples
allTruthy(true, true, true) ➞ true
allTruthy(true, false, true) ➞ false
allTruthy(5, 4, 3, 2, 1, 0) ➞ false

Notes
Falsy values include false, 0, "" (empty string), null, undefined, and NaN; everything else is truthy.
You will always be supplied with at least one parameter.
 */

function allTruthy(array) {
    return array.every(function(element) {
        if (array.includes(NaN)) {
            return false;
        } else {
            return element !== false && element !== 0 && element !== "" && element !== null && element !== undefined;
        }
    });
}


/*
Instant JAZZ

Create a function which concantenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

Examples
jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]

jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]

jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

jazzify([]) ➞ []
Notes
Return an empty array if the given array is empty.
You can expect all the tests to have valid chords.
 */

function jazzify(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (!arr[i].includes("7")) {
            arr[i] = arr[i] + "7";
        }
    }
    return arr;
}


/*
Algebra Sequence — Boxes

Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.

Step 0: Start with 0
Step 1: Add 3
Step 2: Subtract 1
Repeat Step 1 & 2 ...
Examples
boxSeq(0) ➞ 0

boxSeq(1) ➞ 3

boxSeq(2) ➞ 2
Notes
Step (the input) is always a positive integer (or zero).
 */

function boxSeq(step) {
    var numberOfBoxes = 0;
    for (var i = 1; i <= step; i++) {
        if (i % 2 === 1) {
            numberOfBoxes = numberOfBoxes + 3;
        } else {
            numberOfBoxes = numberOfBoxes -1;
        }
    }
    return numberOfBoxes;
}


/*
Remove the Letters ABC

Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.

Examples
removeABC("This might be a bit hard") ➞ "This might e  it hrd"

removeABC("hello world!") ➞ null

removeABC("") ➞ null
Notes
If the given string does not contain "a", "b", or "c", return null.
 */

// function removeABC(str) {
//     if (!str.includes("a") && !str.includes("b") && !str.includes("c")) {
//         return null;
//     }
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === "a" || str[i] === "b" || str[i] === "c") {
//             str = str.replace(str[i], "");
//         }
//     }
//     return str;
// }

function removeABC(string) {
    if (!(string.includes("a") || string.includes("b") || string.includes("c"))) {
        return null;
    } else {
        return string.replace(/abc/g, "");
    }
}

/*
Special Arrays

An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.

Examples
isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
// Index 2 has an odd number 9.

isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
// Index 3 has an even number 8.
 */

// function isSpecialArray(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             if (arr[i] % 2 !== 0) {
//                 return false;
//             }
//         } else {
//             if (arr[i] % 2 === 0) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// function isSpecialArray(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if(i % 2 !== arr[i] % 2) {
//             return false;
//         }
//     }
//     return true;
// }

function isSpecialArray(arr) {
    return arr.every(function(element, index) {
        return element % 2 === index % 2;
    })
}


/*
Likes vs. Dislikes

YouTube currently displays a like and a dislike button, allowing you to express your opinions about particular content. It's set up in such a way that you cannot like and dislike a video at the same time.

There are two other interesting rules to be noted about the interface:

Pressing a button, which is already active, will undo your press.
If you press the like button after pressing the dislike button, the like button overwrites the previous "dislike" state. The same is true for the other way round.
Create a function that takes an array of button inputs and returns the final state.

Examples
likeOrDislike(["Dislike"]) ➞ "Dislike"
likeOrDislike(["Like", "Like"]) ➞ "Nothing"
likeOrDislike(["Dislike", "Like"]) ➞ "Like"
likeOrDislike(["Like", "Dislike", "Dislike"]) ➞ "Nothing"

Notes
If no button is currently active, return "Nothing".
If the array is empty, return "Nothing".
 */

// function likeOrDislike(arr) {
//     if (arr.length === 0) {
//         return "Nothing";
//     }
//     var result;
//     for (var i = 0; i < arr.length; i++){
//         if (result === arr[i]) {
//             result = "Nothing";
//         } else {
//             result = arr[i];
//         }
//     }
//     return result;
// }

function likeOrDislike(arr) {
    if (arr.length === 0) {
        return "Nothing";
    } else {
        return arr.reduce(function(elementOne, elementTwo) {
            return (elementOne === elementTwo) ? "Nothing" : elementTwo;
        });
    }
}


/*
Factor Chain

A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

[3, 6, 12, 36]

// 3 is a factor of 6
// 6 is a factor of 12
// 12 is a factor of 36
Create a function that determines whether or not an array is a factor chain.

Examples
factorChain([1, 2, 4, 8, 16, 32]) ➞ true
factorChain([1, 1, 1, 1, 1, 1]) ➞ true
factorChain([2, 4, 6, 7, 12]) ➞ false
factorChain([10, 1]) ➞ false
 */

function factorChain(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] % arr[i] !== 0) {
            return false;
        }
    }
    return true;
}


