$(document).ready(function(){
  //about
  $("#about").click(function() {
    $(".boxAbout").toggle("slow");
    $(".boxContact").hide("slow");
    $(".boxMenu").hide("slow");
  });
  $("#aboutclose").click(function() {
    $("#aboutDiv .boxAbout").hide("slow");
  });

  //menuDiv
  $("#menu").click(function() {
    $(".boxMenu").toggle("slow");
    $(".boxAbout").hide("slow");
    $(".boxContact").hide("slow");
  });
  $("#menuClose").click(function() {
    $("#menuDiv .boxMenu").hide("slow");
  });

  //contact us
  $("#contact").click(function() {
    $(".boxContact").toggle("slow");
    $(".boxAbout").hide("slow");
    $(".boxMenu").hide("slow");
  });
  $("#contactClose").click(function() {
    $("#contactDiv .boxContact").hide("slow");
  });

});
