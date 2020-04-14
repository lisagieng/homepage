$(document).ready(function(){
  //about
  $("#about").click(function() {
    $(".boxAbout").fadeToggle("slow");
    $(".boxContact").hide();
    $(".boxMenu").hide();
    $(".boxOrder").hide();
  });
  $("#aboutclose").click(function() {
    $("#aboutDiv .boxAbout").fadeToggle("slow");
  });

  //menu
  $("#menu").click(function() {
    $(".boxMenu").fadeToggle("slow");
    $(".boxAbout").hide();
    $(".boxContact").hide();
    $(".boxOrder").hide();
  });
  $("#menuClose").click(function() {
    $("#menuDiv .boxMenu").fadeToggle("slow");
  });

  //order
  $("#order").click(function() {
    $(".boxOrder").fadeToggle("slow");
    $(".boxAbout").hide();
    $(".boxContact").hide();
    $(".boxMenu").hide();
  });
  $("#orderClose").click(function() {
    $("#orderDiv .boxOrder").fadeToggle("slow");
  });

  //contact us
  $("#contact").click(function() {
    $(".boxContact").fadeToggle("slow");
    $(".boxAbout").hide();
    $(".boxMenu").hide();
    $(".boxOrder").hide();
  });
  $("#contactClose").click(function() {
    $("#contactDiv .boxContact").fadeToggle("slow");
  });

});
