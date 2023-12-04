// Connect the external javascript file to the index.html file
  // place the script tag with a type and src attribute on the html file
  // <script type="text/javascript" src="dutchBaby.js"> </script>

// Verify that the files are connected
  // use alert to inform that the files are connected
  // alert("The html and js files are connected")

// Create a function that take in the location that a user is clicking on the table and returning an emoji that will replace the innerhtml on the table data cell.

  // declare a function name blueBerry
  // const blueBerry = () => {}

  // parameter named id
  // const blueBerry = (id) => {}

  // assign unique ids to the data cells on the table
    // use id attribute on the applicable data cells on the html file
    // innerhtml    id    emoji
    // Peach        peach "🍑"
    // Apple        apple "🍎"
    // Brown Sugar  sugar "🥞"

  // use conditional statements to respond with an emoji based on the location that the user clicks on
  // utilize document.getElementById().innerHTML to replace the innerhtml on the data cell with an emoji

  const blueBerry = (id) => {
    if(id === "peach") {
      document.getElementById("peach").innerHTML = "🍑"
    } else if(id === "apple") {
      document.getElementById("apple").innerHTML = "🍎"
    } else if(id === "sugar") {
      document.getElementById("sugar").innerHTML = "🥞"
    }
  }

  // instead of the function call immediately outputting the emoji
  // blueBerry("peach")

  // allow a user to click on the table to trigger the function call
    // use onclick attribute on the html file
    // assign the function call to that attribute
      // onclick="blueBerry('peach')"