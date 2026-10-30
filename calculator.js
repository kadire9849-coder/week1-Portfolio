const prompt = require('prompt-sync')();

const num1 = Number(prompt("Enter first number: "));
const num2 = Number(prompt("Enter second number: "));

// Addition
const addition = num1 + num2;
console.log("Addition: " + addition);

// Subtraction
const subtraction = num1 - num2;
console.log("Subtraction: " + subtraction);

// Multiplication
const multiplication = num1 * num2;
console.log("Multiplication: " + multiplication);

// Division
if (num2 !== 0) {
    const division = num1 / num2;
    console.log("Division: " + division);
} else {
    console.log("Cannot divide by zero");
}