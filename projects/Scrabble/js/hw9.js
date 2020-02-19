var score = 0;

$(function() {
  // when page loaded, get the hand of 7 tiles
  getHand();

  var word = ["", "", "", "", "", "", ""];
  var draggableName, rmDragged, droppablePosition, val;

  $(".droppable").droppable({
    tolerance: "fit",
    drop: function(event, ui) {
      draggableName = ui.draggable.attr("name");
      droppablePosition = $(this).attr("id");
      word.splice(droppablePosition, 0, draggableName);
      $("div#word").html(word);
      val = Number(ui.draggable.attr("id"));
      score += val;
      if (droppablePosition == 2 || droppablePosition == 6) {
        score += score;
      }
      $("div#score").html(score);
    },
    out: function(event,ui) {
      rmDragged = ui.draggable.attr("name");
      word = $.grep(word, function(value) {
        return value != rmDragged;
      });
      $("div#word").html(word);
    }
  });
});
