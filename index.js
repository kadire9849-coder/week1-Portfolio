console.log("This is my first program");

console.log("Welcome John your monthly salary is 500000");
const num1 = 5;
const num2 = 3;

// add two numbers
const sum = num1 + num2;

// display the sum
console.log(
    'The sum of ' + num1 +
    ' and ' + num2 + ' is: ' + sum
);
const prompt = require('prompt-sync')();

console.log("starting");

const name = prompt('Enter your name: ');

console.log(`Hello, ${name}`);

// Enter a number
const number = parseInt(prompt("Enter a number: "));

// Check the number
if (number > 0) {
    console.log("The number is positive");
}
else if (number == 0) {
    console.log("The number is zero");
}
else {
    console.log("The number is negative");
}