// ASSESSMENT 2: Coding Practical Questions with Jest

// const { describe } = require("yargs")

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe("divByThree", () => {
    // "divByThree" is the string arguement for the describe function
    it("decides if the number inside it is evenly divisible by three or not",
    () => {
    // the "it" statement explains that the function should tell us whether the numbers within the variables are divisible by 3
        expect(divByThree(object1.number)).toEqual("15 is divisible by three")
        expect(divByThree(object2.number)).toEqual("0 is divisible by three")
        expect(divByThree(object3.number)).toEqual("-7 is not divisible by three")
    // three expect statements are used to call the function for each variable's number and compares the output
    })
}) // FAIL: ReferenceError: divByThree is not defined

// b) Create the function that makes the test pass.

const divByThree = (number) => {
    // create a function called "divByThree" that takes in the number from one of numbers from the object variables
    if(number % 3 === 0){
        return `${number} is divisible by three`
    // if number is divisible by 3 without remainders, it will return "is divisible by three"
    } else {
        return `${number} is not divisible by three`
    // if not divisible by 3 without remainders, it will return "is not divisible by three"
    }
} // PASS: divByThree ✓ decides if the number inside it is evenly divisible by three or not (1 ms)

// Pseudo code: Embedded


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("randItems", () => {
    // "randItems" is the string arguement for the describe function
    it("takes in an array of words and returns an array with all the words capitalized", () => {
    // the it statement says that the first letter in each element of array randomNouns1 should be capitalized
        expect(randItems).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    // the expect statements calls the function and uses the .toEqual to compare the output
    }) 
}) // FAIL: ReferenceError: randItems is not defined
describe("randItems2", () => {
    // "randItems2" is the string arguement for the describe function
    it("takes in an array of words and returns an array with all the words capitalized", () => {
    // the it statement says that the first letter in each element of array randomNouns2 should be capitalized
        expect(randItems2).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    // the expect statements calls the function and uses the .toEqual to compare the output
    })
}) // FAIL: ReferenceError: randItems2 is not defined

// b) Create the function that makes the test pass.

const randItems = randomNouns1
    // randItems has be declare for randomNouns1
    for (let i = 0; i < randItems.length; i++) {
    // use a for loop to go through each element in the array
        randItems[i] = randItems[i].charAt(0).toUpperCase() + randItems[i].slice(1)
    // .charAt returns the first character of the string elements, then .toUpperCase capitalize the first character, then use concatenation and randItems[i].slice to combine the other characters of the word to the character capitalized
} // PASS: randItems ✓ takes in an array of words and returns an array with all the words capitalized

const randItems2 = randomNouns2
    // randItems has be declare for randomNouns1
    for (let i = 0; i < randItems2.length; i++) {
    // use a for loop to go through each element in the array
        randItems2[i] = randItems2[i].charAt(0).toUpperCase() + randItems2[i].slice(1)
    // .charAt returns the first character of the string elements, then .toUpperCase capitalize the first character, then use concatenation and randItems2[i].slice to combine the other characters of the word to the character capitalized
} // PASS: randItems2 ✓ takes in an array of words and returns an array with all the words capitalized

// Pseudo code: Embedded. The first time doing this I was only able to capitalize all characters in the string elements. After further studying up a little, I added the .charAt() and concat with .slice() to get the pass.