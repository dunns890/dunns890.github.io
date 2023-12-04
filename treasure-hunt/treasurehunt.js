//Create a new file in the treasure-hunt directory called treasurehunt.js.

//Add a script tag to the bottom of the HTML body so the HTML page knows it has a dependency. Notice there is no innerHTML.
//<script type="text/javascript" src="treasurehunt.js"></script>

//Create a function called treasure that returns an alert.
//const treasure = () => {
//    return alert("Here is the function!")
//  }

//Add an onclick attribute to all the game board squares that calls the treasure function (on HTML). If this is done correctly, the alert should appear each time the user clicks on a square.
//<td  onclick="treasure('location')">?</td>
//<td id="peach" onclick="blueBerry('peach')">Peach</td>

// Add a parameter to the function called location and pass the location parameter to the alert.
const treasure = (location) => {
  //Create a variable for the treasure that will store a random number between 0 and 8.
  var randomTreasure = Math.floor (Math.random() * 16)
  //Create a variable for the bomb that will store a random number between 0 and 8.
  var randomBomb = Math.floor (Math.random() * 16) 
  console.log(randomTreasure, randomBomb)

  //bomb emoji appears if randomTreasure and randomBomb values match
  if (randomTreasure===randomBomb) { document.getElementById(location).innerHTML = "&#x2620" }
  //rainbow emoji appears if randomTreasure matches location
  else if (randomTreasure===location) { document.getElementById(location).innerHTML = "&#x1f308" }
  //bomb emoji appears if randomBomb matches location
  else if (randomBomb===location) { document.getElementById(location).innerHTML = "&#x2620" }
  //palm tree emoji appears as catch all if no other conditions met
  else { document.getElementById(location).innerHTML = "&#x1f332"}
//     return alert(location)
}