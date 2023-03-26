//creates a list with all the possible characters in a hexadecimal list
var letters = '0123456789ABCDEF';
//view the list
console.log(letters);
//creates a variable called colour and assigned a hashtag (which all hexadecimal colours start with)
var colour = '#';
//view the variable
console.log(colour);
//create and show the results of the Math.floor function - does a calculation and returns the nearest integer
var test1 = Math.floor(2.2 * 10.678);
console.log(test1);
//create and show the results of the Math.random function - generates a random number between 0 and 1
var test2 = Math.random();
console.log(test2);
//create and show the results of the Math.floor and Math.random function combined
var test3 = Math.floor(Math.random());
console.log(test3);
//create and show the results of the Math.floor and Math.random function x 16 combined
var test4 = Math.floor(Math.random() * 16)
console.log(test4);
//create and show how this returns one item from the letters list
var test5 = letters[Math.floor(Math.random() * 16)];
console.log(test5);
//this is a loop which returns 6 times (++ means increment)
  for (var i = 0; i < 6; i++) {
//the code returns one item each time from from the letters list and appends it to the colour variable
colour += letters[Math.floor(Math.random() * 16)];
  }
console.log(colour);