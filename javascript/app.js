// Solution to Question 1
alert("Nasreen");


// Solution to Question 2
var name = "Nasreen";

// Show name using alert and concatenation
alert("My name is " + name);

// Log name to the console
console.log("My name is " + name);

// Ternary operator example
var message = (name === "Nasreen") ? "Welcome, Nasreen!" : "User not recognized!";
alert(message);
console.log(message);



// Solution to Question 3
var a = 4;
var b = 2;

var result = (a++ + --b - --a + b++ + a + b);
console.log("The result of the equation is: " + result);



// Solution to Question 5

// Example of an if-else statement (Check if a number is positive, negative, or zero)
var number = 10;

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}



// Solution to Calculator using if-else or else-if

var num1 = parseFloat(prompt("Enter first number:"));
var num2 = parseFloat(prompt("Enter second number:"));
var operation = prompt("Enter operation (+, -, *, /):");

if (operation === "+") {
    alert("Result: " + (num1 + num2));
} else if (operation === "-") {
    alert("Result: " + (num1 - num2));
} else if (operation === "*") {
    alert("Result: " + (num1 * num2));
} else if (operation === "/") {
    if (num2 !== 0) {
        alert("Result: " + (num1 / num2));
    } else {
        alert("Error: Division by zero is not allowed.");
    }
} else {
    alert("Invalid operation. Please use +, -, *, or /.");
}



