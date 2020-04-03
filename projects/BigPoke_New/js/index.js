/*$(document).ready(function(){
  $("#aboutlink").click(function(){
    $("#about .box").show(2000);
  });
  $("#aboutclose").click(function() {
    $("#about .box").hide(2000);
  });
});
*/

$(document).ready(function(){
  $("#about").click(function(){
    $("#bigpoke").load("about.html");
  });
});
