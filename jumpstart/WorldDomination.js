//Create a prompt that asks for the user's name.
var name1 = prompt ("What is your name?")

//Create a prompt that asks the user if they know how to write code.
var question = prompt ("Do you know how to write code?")

//If the user replies "yes" respond with an alert that says, "You will rule the world, name!"
if (question === "yes") { 
    alert ("You will rule the world, " + name1 + "!")

//If the user does not reply "yes" respond with an alert that says, "Well, good luck with that."    
} else if (question === "no") {
    alert("Well, good luck with that.")
}
