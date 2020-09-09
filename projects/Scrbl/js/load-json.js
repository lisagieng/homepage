/* Lisa Gieng
Dec 20, 2019
GUI I: HW9 - Scrabble

This file utilizies the JQuery UI draggable and droppable and a
little bit of AJAX. It has the function getHand which randomly
generates 7 tiles from pieces.json with AJAX.

load-json.js
Copyright (c) 2019 Lisa Gieng. All rights reserved. */

function getHand() {
  // declaring variable for tile rack images
  var myRack = "";

  // reset score counters and word
  baseScore = 0;
  score = 0;
  $("div#score").html("Points: " + score);
  $("div#total").html("Total Points: " + totalPoints);
  for (var x = 0; x < 7; x++){
    if (word[x] != "") {
        word[x] = "";
    }
  }

  /* removing the commas from array display in js
  https://www.quora.com/How-do-I-remove-commas-while-displaying-an-array-in-JavaScript */
  $("div#word").html("Word: " + word.join(""));

  var xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    if(xhttp.status === 200) {
    responseObject = JSON.parse(xhttp.responseText);
    }

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
      temp = responseObject.pieces[j].value;
      myRack += " <img src='scrabbletiles/Scrabble_Tile_" + random + ".jpg' class='tiles' id='" + temp + "' name='" + random + "'>";
    }
    // put tile images to rack
    $("#letterRack").html(myRack);

    // make the tiles draggable
    $(".tiles").draggable({snap: ".droppable", snapMode: "inner", snapTolerance: 15});

    // make droppable targets
    makeDroppable();

  }
  /* load the pieces.json file
    used pieces.json file given in hw9 pdf from ramon meza */
  xhttp.open("GET", "js/pieces.json", true);
  xhttp.send('');
}

/* referenced using math.random to get random items from JSON
  https://stackoverflow.com/questions/19589598/how-to-get-random-values-in-json  */
function get_rand_tile() {
  return Math.floor(Math.random()*27);
}
