// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Hotel 2023"
console.log(cohort.split(" "))

// a) Your answer: ["Hotel", "2023"]
// b) Verify and explain: .split() turns a string into an array. Spacing the quotation marks in the parentheses ensure the strings are seperated by word and not by characters.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: 'Hello, undefined!'
// b) Verify and explain: It came back undefined. "name" isn't declared.

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: 11, 13, 15
// b) Verify and explain: Forgot the []. It came back [11, 13, 15]. The function takes one of the numbers and see if it has a remainder when divided by two. After, with the bang operation, it takes and outputs the numbers that aren't divisible by 2.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: In the Object "myCodingSkills", we are calling for the key "language", and the 0 indexed value which is "JavaScript".

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Learn {student = "George"}
// b) Verify and explain: It came back: Learn { student: 'George', cohort: 'Hotel', year: 2023 }. "George was pushed into the parameter "name", and pushed into the value for "this.student".