// Use `.map(0)` to iterate over the following array:

// const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// // Create a new array where value is multiplied by 2 and log the new array.
// // Your code here

// const multipliedNums = nums.map((num) => {
//   return num * 2;
// });

// console.log(multipliedNums);

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

// const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];

// // Your code here

// const [toppingOne, toppingTwo] = pizzaToppings;
// console.log(toppingOne);
// console.log(toppingTwo);

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

// const car = {
//   make: "Audi",
//   model: "q5",
// };

// // Your code here

// const { make, model } = car;
// console.log(make);
// console.log(model);

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];

// // Your code here

// const controversialPizzaToppings = [...pizzaToppings];
// console.log(controversialPizzaToppings);

// Duplicate the following object and spread its values into a new variable `myCar`.

// const car = {
//   make: "Audi",
//   model: "q5",
// };

// // Change the `model` property of `myCar` to 'q7'. Log both objects.

// // Your code here

// const myCar = { ...car };
// myCar.model = `q7`;

// console.log(car);
// console.log(myCar);

// Create an object named userProfile.
// Define a variable named propertyName and assign a string to it (like a username, age, or email).
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

// const propertyName = `username`;

// const userProfile = {
//   [propertyName]: `mdoyle91`,
// };

// console.log(userProfile);

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

// function sentenceCompletion(noun = `cat`, adjective = `white`) {
//   console.log(`The ${noun} is ${adjective}`);
// }

// sentenceCompletion();

// sentenceCompletion(`dog`, `black`);

// Convert the following `if...else` statement in to a ternary:

// let pizza = 'tasty';

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

// Your code here

const pizza = `tasty`;
let yumOrYuck = pizza === `tasy` ? `Yum` : `Yuck`;
console.log(pizza);
