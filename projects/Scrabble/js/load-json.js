
// testing ajax
// https://www.codeproject.com/Tips/1263247/How-to-Open-a-JSON-File-in-JavaScript-for-Web

var hand = []; // array for the hand
var values = []; // array for values

function getHand() {
  // declaring variable for tile rack images
  var myRack = "";
  // make sure array is empty, if not make it empty
  if(hand.length != 0){
      hand.length = 0;
      values.length = 0;
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    //if(xhttp.status === 200) {
    responseObject = JSON.parse(xhttp.responseText);
    //}

    // getting 7 tiles randomly from the json structure
    for(var i = 0; i < 7; i++) {
      /* get a random piece using math.random then get its letter value
        push the value to the hand array */
      var j = get_rand_tile();
      var random = responseObject.pieces[j].letter;

      // if the chosen letter has already been used up, get another one
      if(responseObject.pieces[j].amount == 0) {
        j = get_rand_tile();
        random = responseObject.pieces[j].letter
      }
      responseObject.pieces[j].amount--;
      hand.push(random);
      temp = responseObject.pieces[j].value;
      values.push(temp);
      myRack += " <img src='scrabbletiles/Scrabble_Tile_" + random + ".jpg' class='tiles' id='" + temp + "' name='" + random + "'>";
    }

    // display the hand
    document.getElementById("letter").innerHTML = hand;
    document.getElementById("letterRack").innerHTML = myRack;
    document.getElementById("value").innerHTML = values;

    // make the tiles draggable
    $(".tiles").draggable();
  }
  // load the pieces.json file
  xhttp.open("GET", "resources/pieces.json", true);
  xhttp.send('');
}

/* referenced using math.random to get random items from JSON
  https://stackoverflow.com/questions/19589598/how-to-get-random-values-in-json  */
function get_rand_tile() {
  return Math.floor(Math.random()*26);
}
