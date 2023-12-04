// Challenge: Magic 8 Ball
// Create a function that asks the user a question and returns a random answer.

// const magicEight = () => {
//   // Create a prompt where the user can ask a question.
//   var response = prompt("Ask me a question")
  
//   // After the user submits a question, create an alert that gives a random answer from the magic 8 ball.
  
//   // create random numbers to output a random answer
//   // Math.random(): automatically output a decimal number less than 1
//   // Math.random() // Output: 0.47684961667932546
  
//   // // Math.floor(): rounds down the number passed in the () to the nearest whole number
//   // Math.floor(0.57684961667932546) // Output: 0
  
//   // // To get whole numbers for the amount of conditions necessary for our function
//   // Math.floor(Math.random() * 5) // Output: 1
//   var randomNum = Math.floor(Math.random() * 5)

//     // use conditional statements to display an alert with the random answers based on the output of randomNum
//     // Because the Math.random() will always produce a number less than 0 to multiply with 5, we will only have the following possible outcomes: 0, 1, 2, 3, or 4.
//     // Traditional 8 ball answers include the following but creative liberties are always encouraged:
//     // Better not tell you now
//     // It is decidedly so
//     // Don't count on it
//     // Signs point to yes
//     // Outlook not so good

//   if(randomNum === 0) {
//     alert("Better not tell you now")
//   } else if(randomNum === 1) {
//     alert("It is decidedly so")
//   } else if(randomNum === 2) {
//     alert("Don't count on it")
//   } else if(randomNum === 3) {
//     alert("Signs point to yes")
//   } else if(randomNum === 4) {
//     alert("Outlook not so good")
//   } 
// }

// Function declaration without all the comments
const magicEight = () => {
    // Create a prompt where the user can ask a question.
    var response = prompt("Ask me a question")
  
    // After the user submits a question, create an alert that gives a random answer from the magic 8 ball.
    var randomNum = Math.floor(Math.random() * 5)
  
    if(randomNum === 0) {
      alert("Better not tell you now")
    } else if(randomNum === 1) {
      alert("It is decidedly so")
    } else if(randomNum === 2) {
      alert("Don't count on it")
    } else if(randomNum === 3) {
      alert("Signs point to yes")
    } else if(randomNum === 4) {
      alert("Outlook not so good")
    } 
  }
  
  // Function call
  magicEight()
  
  
  

