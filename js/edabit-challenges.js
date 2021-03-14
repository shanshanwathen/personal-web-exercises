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
        return string.replace(/[abc]/ig, "");
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

// function factorChain(arr) {
//     for (var i = 0; i < arr.length - 1; i++) {
//         if (arr[i + 1] % arr[i] !== 0) {
//             return false;
//         }
//     }
//     return true;
// }

function factorChain(arr) {
    return arr.every(function(element, index, arr) {
        return index === 0 || element % arr[index - 1] === 0;
    });
}


/*
Is Johnny Making Progress?

To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

Examples
progressDays([3, 4, 1, 2]) ➞ 2
// There are two progress days, (3->4) and (1->2)
progressDays([10, 11, 12, 9, 10]) ➞ 3
progressDays([6, 5, 4, 3, 2, 9]) ➞ 1
progressDays([9, 9])  ➞ 0
Notes
Running the same number of miles as last week does not count as a progress day.
 */

function progressDays(runs) {
    var days = 0;
    for (var i = 0; i < runs.length - 1; i++) {
        if (runs[i + 1] > runs[i]) {
            days += 1;
        }
    }
    return days;
}


/*
Purge and Organize

Given an array of numbers, write a function that returns an array that...
Has all duplicate elements removed.
Is sorted from least to greatest value.
Examples
uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]
uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]
uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]
 */

function uniqueSort(arr) {
    var newArray = [];
    arr.forEach(function(element) {
        if (!newArray.includes(element)) {
            newArray.push(element);
        }
    })
    return newArray.sort(function(a, b) {
        return a - b;
    });
}


/*
Something in the Box?

Create a function that returns true if an asterisk * is inside a box.

Examples
inBox([
  "###",
  "#*#",
  "###"
]) ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) ➞ true

inBox([
  "*####",
  "# #",
  "#  #*",
  "####"
]) ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) ➞ false
Notes
The asterisk may be in the array, however, it must be inside the box, if it exists.
 */

function inBox(arr) {
    var asterisk = false;
    if (arr[0] === arr[arr.length - 1]) {
        for (var i = 1; i < arr.length - 1; i++) {
            if (arr[i].length === arr[0].length && arr[i].charAt(0) === "#" && arr[i].charAt(arr[i].length - 1) === "#" && arr[i].includes("*")) {
                asterisk = true;
            }
        }
    }
    return asterisk;
}



/*
Capitalize the First Letter of Each Word

Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

Examples
makeTitle("This is a title") ➞ "This Is A Title"
makeTitle("capitalize every word") ➞ "Capitalize Every Word"
makeTitle("I Like Pizza") ➞ "I Like Pizza"
makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"
Notes
You can expect a valid string for each test case.
Some words may contain more than one uppercase letter (see example #4).
 */

function makeTitle(str) {
    if (str === "") {
        return "";
    } else {
        var arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        return arr.join(" ");
    }
}


/*
Find the Mean of All Digits

Create a function that returns the mean of all digits.

Examples
mean(42) ➞ 3
mean(12345) ➞ 3
mean(666) ➞ 6
Notes
The mean of all digits is the sum of digits / how many digits there are (e.g. mean of digits in 512 is (5+1+2)/3(number of digits) = 8/3=2).
The mean will always be an integer.
 */

function mean(num) {
    var arr = num.toString().split("");
    var sum = 0;
    arr.every(function(element) {
        return sum = sum + Number(element);
    });
    return sum / arr.length;
}


/*
Capitalize the Names

Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

Examples
capMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]

capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]
Notes
Don't change the order of the original array.
Notice in the second example above, "MABELLE" is returned as "Mabelle".
 */

function capMe(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    return arr;
}


/*
Iterated Square Root

The iterated square root of a number is the number of times the square root function must be applied to bring the number strictly under 2.

Given an integer, return its iterated square root. Return "invalid" if it is negative.

Examples
iSqrt(1) ➞ 0
iSqrt(2) ➞ 1
iSqrt(7) ➞ 2
iSqrt(27) ➞ 3
iSqrt(256) ➞ 4
iSqrt(-1) ➞ "invalid"
Notes
Idea for iterated square root by Richard Spence.
 */

function iSqrt(number) {
    var count = 0;
    if (number < 0) {
        return "invalid";
    } else {
        while (number >= 2) {
            number = Math.sqrt(number);
            count++;
        }
        return count;
    }
}


/*
Neutralisation

Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.
Worked Example
neutralise("+-+", "+--") ➞ "+-0"
// Compare the first characters of each string, then the next in turn.
// "+" against a "+" returns another "+".
// "-" against a "-" returns another "-".
// "+" against a "-" returns "0".
// Return the string of characters.
Examples
neutralise("--++--", "++--++") ➞ "000000"
neutralise("-+-+-+", "-+-+-+") ➞ "-+-+-+"
neutralise("-++-", "-+-+") ➞ "-+00"
Notes
The two strings will be the same length.
 */



/*
Burglary Series (04): Add its Name

Given three arguments (an object obj of the stolen items, the pets name and a value) return an object with that name and value in it (as key-value pairs).

Examples
addName({}, "Brutus", 300) ➞ { Brutus: 300 }
addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }
addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }
Notes
The value argument will be a number.
 */

// function addName(obj, name, value) {
//     Object.assign(obj, {[name]: value});
//     return obj;
// }

function addName(obj, name, value) {
    obj[name] = value;
    return obj;
}


/*
Converting Objects to Arrays

Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

Examples
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
toArray({}) ➞ []
Notes
Return an empty array if the object is empty.
 */

function toArray(obj) {
    return Object.entries(obj);
}


/*
Concatenate Variable Number of Input Arrays

Create a function that concatenates n input arrays, where n is variable.

Examples
concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
*/

function concat(...args) {
    var inputs = Array.from(args);
    return inputs.reduce(function(acc, cur) {
        return acc.concat(cur);
    });
}


/*
Convenience Store

Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

Examples
changeEnough([2, 100, 0, 0], 14.11) ➞ false
changeEnough([0, 0, 20, 5], 0.75) ➞ true
changeEnough([30, 40, 20, 5], 12.55) ➞ true
changeEnough([10, 0, 0, 50], 3.85) ➞ false
changeEnough([1, 0, 5, 219], 19.99) ➞ false
Notes
quarter: 25 cents / $0.25
dime: 10 cents / $0.10
nickel: 5 cents / $0.05
penny: 1 cent / $0.01
 */

function changeEnough(change, amountDue) {
    var total = change[0] * 0.25 + change[1] * 0.10 + change[2] * 0.05 + change[3] * 0.01;
    return total >= amountDue;
}

/*
Convert Key, Values in an Object to Array

Write a function that converts an object into an array of keys and values.

Examples
objectToArray({
  D: 1,
  B: 2,
  C: 3
}) ➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

 */

function objectToArray(obj) {
    return Object.entries(obj);
}


/*
Sort the Unsortable

In this challenge you will be given an array similar to the following:
[[3], 4, [2], [5], 1, 6]
In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:

[1, [2], [3], 4, [5], 6]
Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

Examples
sortIt([4, 1, 3]) ➞ [1, 3, 4]
sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]
sortIt([4, [1], 3]) ➞ [[1], 3, 4]
sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]
sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]
 */

function sortIt(arr) {
    return arr.sort(function(a, b) {
        if (typeof a === "number" && typeof b === "number") {
            return a - b;
        } else if (typeof a === "number" && Array.isArray(b)) {
            return a - b[0];
        } else if (Array.isArray(a) && typeof b === "number") {
            return a[0] - b;
        } else {
            return a[0] - b[0];
        }
    });
}


/*
Finding Nemo

You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".

If you can't find Nemo, return "I can't find Nemo :(".

Examples
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
findNemo("Nemo is me") ➞ "I found Nemo at 1!"
findNemo("I Nemo am") ➞ "I found Nemo at 2!"
Notes
! , ? . are always separated from the last word.
Nemo will always look like Nemo, and not NeMo or other capital variations.
Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
If there are multiple Nemo's in the sentence, only return for the first one.
 */

// function findNemo(sentence) {
//     var arr = sentence.split(" ");
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === "Nemo") {
//             return "I found Nemo at " + (i + 1) + "!";
//         }
//     }
//     return "I can't find Nemo :(";
// }

function findNemo(sentence) {
    var words = sentence.split(" ");
    if (words. includes("Nemo")) {
        return "I found Nemo at " + (words.indexOf("Nemo") + 1) + "!";
    } else {
        return "I can't find Nemo :(";
    }
}


/*
Return the Middle Character(s) of a String

Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

Examples
getMiddle("test") ➞ "es"
getMiddle("testing") ➞ "t"
getMiddle("middle") ➞ "dd"
getMiddle("A") ➞ "A"
 */

// function getMiddle(string) {
//     if (string.length % 2 === 0) {
//         return string.slice(string.length / 2 - 1, string.length / 2 +  1);
//     } else {
//         return string.charAt(Math.floor(string.length / 2));
//     }
// }

function getMiddle(string) {
    return (string.length % 2 === 0) ? string.substr(string.length / 2 - 1, 2) : string.charAt(Math.floor(string.length / 2));
}


/*
Reverse the Odd Length Words

Given a string, reverse all the words which have odd length. The even length words are not changed.

Examples
reverseOdd("Bananas") ➞ "sananaB"
reverseOdd("One two three four") ➞ "enO owt eerht four"
reverseOdd("Make sure uoy only esrever sdrow of ddo length")
➞ "Make sure you only reverse words of odd length"

Notes
There is exactly one space between each word and no punctuation is used.
 */

// function reverseOdd(string) {
//     var words = string.split(" ");
//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length % 2 === 1) {
//             words[i] = words[i].split("").reverse().join("");
//         }
//     }
//     return words.join(" ");
// }


function reverseOdd(string) {
    var words = string.split(" ");
    var array = [];
    words.forEach(function(word) {
        if (word.length % 2 === 1) {
            word = word.split("").reverse().join("");
        }
        array.push(word);
        return array;
    });
    return array.join(" ");
}


/*
Game of Thrones: Character Titles

Write a function that takes a string and returns a string with the correct case for character titles in the Game of Thrones series.

The words and, the, of and in should be lowercase.
All other words should have the first character as uppercase and the rest lowercase.
Examples
correctTitle("jOn SnoW, kINg IN thE noRth.")
➞ "Jon Snow, King in the North."
correctTitle("sansa stark, lady of winterfell.")
➞ "Sansa Stark, Lady of Winterfell."
correctTitle("TYRION LANNISTER, HAND OF THE QUEEN.")
➞ "Tyrion Lannister, Hand of the Queen."

Notes
Punctuation and spaces must remain in their original positions.
Hyphenated words are considered separate words.
Be careful with words that contain and, the, of or in.
See the Resources tab for more info on the various JavaScript string methods.
 */

function correctTitle(string) {
    var words = string.split(" ");
    var exceptions = ["and", "the", "of", "in"];
    var wordsArray = [];
    var subArray = [];
    function capitalize(word) {
        if (exceptions.includes(word.toLowerCase())) {
            word = word.toLowerCase();
        } else {
            word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        subArray.push(word);
        return subArray;
    }
    words.forEach(function(word) {
        if (exceptions.includes(word.toLowerCase())) {
            word = word.toLowerCase();
        } else {
            if(!word.includes("-")) {
                word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            } else {
                word.split("-").forEach(capitalize);
                word = subArray.join("-");
            }
        }
        wordsArray.push(word);
        return wordsArray;
    });
    return wordsArray.join(" ");
}


/*
Is it an Object?

Create a function to check whether the given parameter is an Object or not.

Examples
isObject(function add(x,y) {return x + y}) ➞ true
isObject(new RegExp('^[a-zA-Z0-9]+$', 'g')) ➞ true
isObject(null) ➞ false
isObject("") ➞ false

Notes
Inputs may be null, primitive wrapper types, dates.
 */

function isObject(input) {
    return typeof input === "object" && input !== null;
}


/*
Learn Lodash: matchesProperty, Check if an Object Contains a Key Value Pair

Write your own version of the lodash _.matchesProperty function using vanilla JavaScript. matchesProperty returns a function that that compares the given object and a path, which is a key-value pair, then determines if the object includes the pair.

For instance, when using the regular JavaScript find method you would write it like so:

arrayOfCars.find(car => car.year === 2020)
Because the matchesProperty function returns a function it can be used to replace the callback function written in the find method. Using matchesProperty it could look like this:

arrayOfCars.find(matchesProperty("year", 2020))
This is a helper function that is often used by other more advanced lodash functions that want to check for a match. As we write more lodash functions we will need this helper.

This is very similar to the matches function. The only difference is the way the arguments are passed in, matches requires an object, matchesProperty requires two strings representing a key value pair.

Arguments
path (Array or String): The path key-value pair you are using to see if it is included in the object.
returns: A new function.
Examples
const objects = [
  { "a": 1, "b": 2, "c": 3 },
  { "a": 4, "b": 5, "c": 6 }
]
_.find(objects, _.matchesProperty("a", 4))
➞ [{ "a": 4, "b": 5, "c": 6 }]
Notes
Do not attempt to import lodash; you are simply writing your own version.
This entire series of challenges can be found here.
 */

function matchesProperty_myVersion(key, value) {
    return function(input) {
        for (var i = 0; i < Object.keys(input).length; i++) {
            if(Object.keys(input)[i] === key && Object.values(input)[i] === value) {
                return true;
            }
        }
        return false;
    }
}

function matchesProperty_myVersionx(key, value) {
    var array = [];
    for (var i = 0; i < cars.length; i++) {
        for (var j = 0; j < Object.keys(cars[i]).length; j++) {
            if (Object.keys(cars[i])[j] === key && Object.values(cars[i])[j] === value) {
                array.push(cars[i]);
            }
        }
    }
    return array;
}


/*
Fix the Error: Flattening an Array

I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4]. But...my code doesn't seem to be working! Fix my code so that it correctly flattens the array.

Examples
flatten([[1, 2], [3, 4]]) ➞ []
// Expected: [1, 2, 3, 4]

flatten([["a", "b"], ["c", "d"]]) ➞ []
// Expected: ["a", "b", "c", "d"]

flatten([[true, false], [false, false]]) ➞ []
// Expected: [true, false, false, false]
 */

// Fix this incorrect code so that all tests pass!
function flatten(arr) {
    var arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2 = arr2.concat(arr[i]);
    }
    return arr2;
}


/*
Seven Boom!

Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

Examples
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.
 */

function sevenBoom(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 7 || arr[i].toString().includes("7")) {
            return "Boom!";
        }
    }
    return "there is no 7 in the array";
}


/*
Tower of Hanoi

There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk.
Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.

Examples
towerHanoi(3) ➞ 7
towerHanoi(5) ➞ 31
towerHanoi(0) ➞ 0
Notes
The amount of discs is always a positive integer.
1 disc can be changed per move.
 */

function towerHanoi(numberOfDiscs) {
    var result = 0;
    for (var i = 0; i < numberOfDiscs; i++) {
        result = result + 2 ** i
    }
    return result;
}

/*
How Many Days Between Two Dates

Create a function that takes two dates and returns the number of days between the first and second date.

Examples
getDays(
  new Date("June 14, 2019"),
  new Date("June 20, 2019")
) ➞ 6

getDays(
  new Date("December 29, 2018"),
  new Date("January 1, 2019")
) ➞ 3
// Dates may not all be in the same month/year.

getDays(
  new Date("July 20, 2019"),
  new Date("July 30, 2019")
) ➞ 10
 */

function getDays(date1, date2) {
    return Math.round(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
}


/*
Length of a Nested Array

The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

[1, [2, 3]]
// 2 elements, number 1 and array [2, 3]
Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

Write a function that returns the total number of non-nested items in a nested array.

Examples
getLength([1, [2, 3]]) ➞ 3
getLength([1, [2, [3, 4]]]) ➞ 4
getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
getLength([1, [2], 1, [2], 1]) ➞ 5
Notes
An empty array should return 0.
 */

function getLength(arr) {  // arr.flat() converts nested array to single array
    return arr.flat(Infinity).length;
}


/*
Check If the Brick Fits through the Hole

Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and returns true if this brick can fit into a hole with the width(w) and height(h).

Examples
doesBrickFit(1, 1, 1, 1, 1) ➞ true
doesBrickFit(1, 2, 1, 1, 1) ➞ true
doesBrickFit(1, 2, 2, 1, 1) ➞ false
Notes
You can turn the brick with any side towards the hole.
We assume that the brick fits if its sizes equal the ones of the hole (i.e. brick size should be less than or equal to the size of the hole, not strictly less).
You can't put a brick in at a non-orthogonal angle.
 */

function doesBrickFit(height,width,depth, holeWidth,holeHeight) {
    return (holeWidth >= height && (holeHeight >= width || holeHeight >= depth)) || (holeWidth >= width && (holeHeight >= height || holeHeight >= depth)) || (holeWidth >= depth && (holeHeight >= height || holeHeight >= width));
}

/*
Pentagonal Number

Write a function that takes a positive integer num and calculates how many dots exist in a pentagonal shape around the center dot on the Nth iteration. The first iteration is only a single dot. On the second, there are 6 dots. On the third, there are 16 dots, and on the fourth there are 31 dots.

Return the number of dots that exist in the whole pentagon on the Nth iteration.

Examples
pentagonal(1) ➞ 1
pentagonal(2) ➞ 6
pentagonal(3) ➞ 16
pentagonal(8) ➞ 141
 */

function pentagonal(number) {
    var result = 1;
    if (isNaN(parseInt(number))) {
        return false;
    } else if (number == 0) {
        return 0;
    }
    for (var i = 0; i < number; i++) {
        result = result + 5 * i;
    }
    return result;
}

/*
The Frugal Gentleman

Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.

Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

Examples
chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 }
]) ➞ "Wine 9"

chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"
chosenWine([]) ➞ null
Notes
All wines will be different prices, so there is no confusion in the ordering.
 */

function chosenWine(wines) {
    if (wines.length === 0) {
        return null;
    } else if ( wines.length === 1) {
        return wines[0].name;
    }
    var wineNames = [], winePrices = [];
    for (var i = 0; i < wines.length; i++) {
        wineNames.push(wines[i].name);       // create wineNames array to have all the wine names
        winePrices.push(wines[i].price);     // create winePrices array to have all the wine price
    }
    wineNames.splice(winePrices.indexOf(Math.min(...winePrices)), 1);    // delete the lowest price wine in wineNames array
    winePrices.splice(winePrices.indexOf(Math.min(...winePrices)), 1);   // delete the lowest price in winePrices array
    return wineNames[winePrices.indexOf(Math.min(...winePrices))];   // get second lowest price wine name
}