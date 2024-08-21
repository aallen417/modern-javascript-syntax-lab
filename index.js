// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const doubles = nums.map((num) => {
return num * 2
})
console.log(doubles)


// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']

// Your code here
const [firstTopping, secondTopping] = pizzaToppings

console.log(firstTopping)
console.log(secondTopping)


// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: 'Audi',
  model: 'q5',
};

// Your code here
const {make, model} = car

console.log(make)
console.log(model)


// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings2 = ['Pineapple', 'Olives', 'Anchovies']

// Your code here
const controversialPizzaToppings = [...pizzaToppings2]

console.log(controversialPizzaToppings)


// Duplicate the following object and spread its values into a new variable `myCar`.

const car2 = {
  make: 'Audi',
  model: 'q5',
};

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here
const myCar = { ...car2 }
console.log(myCar)
myCar.model = "q7"
console.log(car2)
console.log(myCar)


// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const username = "name"

const userProfile = {
  [username]: "Austin"
}

console.log(userProfile)


// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
sentence("dog", "black")
function sentence(noun = "cat", adjective = "white") {
  console.log(`The ${noun} is ${adjective}`)
}


// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here
pizza === "tasty" ? console.log("yum") : console.log("yuck")

