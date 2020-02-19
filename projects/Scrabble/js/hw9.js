/* Lisa Gieng
Dec 20, 2019
GUI I: HW9 - Scrabble

This file utilizies the JQuery UI draggable and droppable. It has
all of the code needed to activate the droppables. It does the
heavy lifting of the Scrabble by calculating the score and
keeping track of the currently played word.

hw9.js
Copyright (c) 2019 Lisa Gieng. All rights reserved. */

// some global variables to initialize the score and word
var baseScore = 0, score = 0, totalPoints = 0;
var word = ["", "", "", "", "", "", ""];

$(function() {
  // when page loaded, get the hand of 7 tiles
  getHand();
});

function makeDroppable() {
    var draggableName, rmDragged, droppablePosition, val;
    $(".droppable").droppable({
      tolerance: "fit",
      drop: function(event, ui) {
        draggableName = ui.draggable.attr("name");
        droppablePosition = $(this).attr("id");
        word.splice(droppablePosition, 1, draggableName);
        $("div#word").html("Word: " + word.join(""));
        val = Number(ui.draggable.attr("id"));

        baseScore += val;
        $("div#score").html("Points: " + baseScore);

        // check double word tiles
        if ((word[1] != "") || (word[5] != "")) {
          score = baseScore * 2;
          $("div#score").html("Points: " + score);
        }
        if (word[1] != "" && word[5] != "") {
          score = baseScore * 4;
          $("div#score").html("Points: " + score);
        }
        //$("div#score").html("Points: " + baseScore);

        // disable tile after putting it down
        $(ui.draggable).draggable("disable");

        // disable draggable after it's used by getting its ID location
        var disableMe = "#" + droppablePosition;
        $(disableMe).droppable("disable");
      }/*,
      out: function(event,ui) {
        rmDragged = ui.draggable.attr("name");
        word = $.grep(word, function(value) {
          return value != rmDragged;
        });
        $("div#word").html(word);
      } */
    });

    // re-enable all the droppables after tiles generate
    $(".droppable").droppable("enable");
}

function nextWord() {
  // tally total points for played words
  if(score != 0){
    baseScore = score;
  }
  totalPoints += baseScore;
  $("div#total").html("Total Points: " + totalPoints);

  // get new tiles
  getHand();
}
