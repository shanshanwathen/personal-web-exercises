
"use strict";

/*
1. Write a JavaScript program to list the properties of a JavaScript object.

Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
 */

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(student);

/*
2. Write a JavaScript program to delete the rollno property from student object. Also print the object before or after deleting the property.
 */

delete student.rollno;
console.log(student);

/*
3. Write a JavaScript program to get the length of student object.
 */

student.rollno = 12;
var studentLength = Object.keys(student).length;

console.log("Length of student object: " + studentLength);

/*
4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
 */

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

library.forEach(function(book) {
    (book.readingStatus) ? console.log("Already read '" + book.title + "' by " + book.author + ".") : console.log("You still need to read '" + book.title + "' by " + book.author);
});

/*
5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
Volume of a cylinder : V = πr**2h
where r is the radius and h is the height of the cylinder.
 */

var cylinder = {
    radius: 12,
    height: 10
}

function getVolume(input) {
    return Math.PI * input.radius ** 2 * input.height;
}

console.log("Volume of the cylinder: " + getVolume(cylinder).toFixed(4));

/*
6. Write a Bubble Sort algorithm in JavaScript.
Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
Sample Data: [6,4,0, 3,-2,1]
Expected Output : [-2, 0, 1, 3, 4, 6]
 */

var numbers = [6,4,0, 3,-2,1];
numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers);

/*
7. Write a JavaScript program to sort library array.
Expected Output:

[[object Object] {
  author: "Walter Isaacson",
  libraryID: 4264,
  title: "Steve Jobs"
}, [object Object] {
  author: "Suzanne Collins",
  libraryID: 3245,
  title: "Mockingjay: The Final Book of The Hunger Games"
}, [object Object] {
  author: "The Road Ahead",
  libraryID: 1254,
  title: "Bill Gates"
}]
 */

library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

library.sort(function(bookOne, bookTwo) {
    return bookTwo.libraryID - bookOne.libraryID;
});

console.log(library);



