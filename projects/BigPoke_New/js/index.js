$(document).ready(function(){
  //about
  $("#about").click(function() {
    $(".boxAbout").fadeToggle("slow");
    $(".boxContact").hide();
    $(".boxMenu").hide();
  });
  $("#aboutclose").click(function() {
    $("#aboutDiv .boxAbout").fadeToggle("slow");
  });

  //menuDiv
  $("#menu").click(function() {
    $(".boxMenu").fadeToggle("slow");
    $(".boxAbout").hide();
    $(".boxContact").hide();
  });
  $("#menuClose").click(function() {
    $("#menuDiv .boxMenu").fadeToggle("slow");
  });

  //contact us
  $("#contact").click(function() {
    $(".boxContact").fadeToggle("slow");
    $(".boxAbout").hide();
    $(".boxMenu").hide();
  });
  $("#contactClose").click(function() {
    $("#contactDiv .boxContact").fadeToggle("slow");
  });

});
