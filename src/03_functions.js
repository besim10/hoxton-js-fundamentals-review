/*
 How well you understand functions in javascript, bruh?
*/

// 1. create a function called "getMyName" that returns your name. It takes no arguments.
const getMyName = () => 'besim'
getMyName()
// 2. Create a function called "add". It takes 2 numbers as arguments and returns its sum.
const sum = (num1,num2) => num1 + num2
// 3. Create a function called "subtractWithCheck". This time:
//  - It can expect any 2 arguments
//  - It should return the difference of the 2 arguments if they are numbers
//  - If one of the arguments is not a number, it should return "Yo dawg you can't subtract us!"
const subtractWithCheck = (arg1, arg2) => {
    if(typeof arg1 === 'number' && typeof arg2 === 'number') return arg1 - arg2
    return `Yo dawg you can't substract us!`
}

// 4. now call the functions with some arguments of your choice.
// 4.1 assign results to variables.
const expectedNumber = subtractWithCheck(5,3)
const expectedError = subtractWithCheck(5,'haha')
// 4.2 print the results to the console.

// console.log(expectedNumber)
// console.log(expectedError)

// 5. Create a function called getAge. It takes a person object as an argument.

const getAge = (obj) => {
//   - It should return the person's name and age as one single string, like "John is 26".
return `${obj.name} is ${2022 - obj.bornIn}`
}

//   - The person's shape is { id: number, bornIn: number, name: string }
// 5.1 Call the function with a person argument of your choosing.

getAge({id: 1, bornIn: 1995, name: 'Besim'})

// 6. Yo, this is a brain picker. Move on for now if you can't solve it ;P
// Create a function called "getGreet" that takes a boolean (you can call it `shouldCapitalise`) and:
const getGreet = (shouldCapitalise) => {
    if(shouldCapitalise) return function (string) { return string.toUpperCase()}
    return function (string) { return string} 
}

//   - returns a function that greets the person with the given string.
const functionThatUpperCaseName = getGreet(true)
const functionThatNotUpperCaseName = getGreet(false)
//   - if `shouldCapitalise` is true, it should greet the person with a capitalised name.
// 6.1 Using this new function, say hello to yourself in uppercase, and console.log it
console.log(functionThatUpperCaseName('Hello Besim'))

console.log(functionThatNotUpperCaseName('Hello Besim'))