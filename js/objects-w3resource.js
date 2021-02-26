
"use strict";

/*
Write a JavaScript program to list the properties of a JavaScript object.

Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
 */

var student = {};
student.name = "David Rayy";
student.sclass = "VI";
student.rollno = 12;

console.log(student);

/*
Write a JavaScript program to delete the rollno property from student object. Also print the object before or after deleting the property.
 */

delete student.rollno;
console.log(student);

/*
Write a JavaScript program to get the length of student object.
 */

student.rollno = 12;
var studentLength = Object.keys(student).length;

console.log("Length of student object: " + studentLength);

/*
Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
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
    (book.readingStatus) ? console.log("Already read " + book.title + " by " + book.author + ".") : console.log("You still need to read " + book.title + " by " + book.author);
});


