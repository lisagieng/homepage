$(document).ready(function(){
  $("#about").click(function() {
    $(".boxAbout").toggle(2000);
  });
  $("#aboutclose").click(function() {
    $("#aboutDiv .boxAbout").hide(2000);
  });

});
