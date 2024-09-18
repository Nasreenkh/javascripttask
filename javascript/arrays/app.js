var fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits); // ["Apple", "Banana", "Orange", "Mango"]



var numbers = [5, 10, 15, 20];
console.log(numbers); // [5, 10, 15, 20]



var colors = ["Red", "Green", "Blue"];
colors.push("Yellow");
console.log(colors); // ["Red", "Green", "Blue", "Yellow"]


var numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]


var colors = ["Red", "Green", "Blue"];
colors.pop();
console.log(colors); // ["Red", "Green"]



var numbers = [1, 2, 3];
var removedNumber = numbers.pop();
console.log(numbers); // [1, 2]
console.log(removedNumber); // 3


var animals = ["Lion", "Tiger", "Elephant"];
animals.shift();
console.log(animals); // ["Tiger", "Elephant"]


var numbers = [10, 20, 30];
numbers.shift();
console.log(numbers); // [20, 30]


var animals = ["Lion", "Tiger"];
animals.unshift("Elephant");
console.log(animals); // ["Elephant", "Lion", "Tiger"]


var numbers = [2, 3];
numbers.unshift(1);
console.log(numbers); // [1, 2, 3]



let fruits = ["Apple", "Banana", "Orange", "Mango"];
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // ["Banana", "Orange"]



let numbers = [10, 20, 30, 40, 50];
let slicedNumbers = numbers.slice(2);
console.log(slicedNumbers); // [30, 40, 50]


let fruits = ["Apple", "Banana", "Orange"];
fruits.splice(1, 1); // Remove 1 element starting at index 1
console.log(fruits); // ["Apple", "Orange"]


let fruits = ["Apple", "Banana", "Orange"];
fruits.splice(1, 0, "Mango"); // Add "Mango" at index 1
console.log(fruits); // ["Apple", "Mango", "Banana", "Orange"]


