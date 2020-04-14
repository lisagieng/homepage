function sorrysearch() {
  var sorry = "Sorry, the search function for the recycling hasn't been linked here yet. Please use the link above to get to the search page!";
  $("#mybutton").prop("disabled", true);
  $("#searchme").append(sorry);
}

// jQuery validation
$.validator.addMethod('selectcheck', function (value) {
    return (value != '0');
});

$(function () {
    $('#myForm').validate({ // initialize the plugin
      errorPlacement: function(error, element) {},
      errorClass: "myselect",
      rules: {
        sel1: {selectcheck: true},
        sel2: {selectcheck: true}
      }
    });
});

// on select box changes
$(function () {
  $("#sel1").change(function() { // when first box changes
    if ($("#sel1").val() == "0" && $("#sel2").val() == "0"){ //if no select
      $("#results").html(" ");
    }
    if ($("#sel1").val() == "0" || $("#sel2").val() == "0"){ //if one select
      $("#results").html(" ");
    }

    ////////// HOW
    if ($("#sel1").val() == "how" && $("#sel2").val() == "planet"){ // how/planet
      $("#results").html("<p>how/planet</p>");
    }
    if ($("#sel1").val() == "how" && $("#sel2").val() == "sustainable"){ // how/sustainable
      $("#results").html("<p>how/sustainable</p>");
    }
    if ($("#sel1").val() == "how" && $("#sel2").val() == "recycle"){ // how/educate
      $("#results").html("<p>how/educate</p>");
    }
    if ($("#sel1").val() == "how" && $("#sel2").val() == "educate"){ // how/educate
      $("#results").html("<p>how/educate</p>");
    }

    ////////// WHERE
    if ($("#sel1").val() == "where" && $("#sel2").val() == "planet"){ // where/planet
      $("#results").html("<p>where/planet</p>");
    }
    if ($("#sel1").val() == "where" && $("#sel2").val() == "sustainable"){ // where/sustainable
      $("#results").html("<p>where/sustainable</p>");
    }
    if ($("#sel1").val() == "where" && $("#sel2").val() == "recycle"){ // where/educate
      $("#results").html("<p>where/educate</p>");
    }
    if ($("#sel1").val() == "where" && $("#sel2").val() == "educate"){ // where/educate
      $("#results").html("<p>where/educate</p>");
    }
  });

  $("#sel2").change(function() { // when second box changes
    if ($("#sel1").val() == "0" && $("#sel2").val() == "0"){ //if no select
      $("#results").html(" ");
    }
    if ($("#sel1").val() == "0" || $("#sel2").val() == "0"){ //if one select
      $("#results").html(" ");
    }

    ////////// HOW
    if ($("#sel1").val() == "how" && $("#sel2").val() == "planet"){ // how/planet
      $("#results").html("<p>how/planet</p>");
    }
    if ($("#sel1").val() == "how" && $("#sel2").val() == "sustainable"){ // how/sustainable
      $("#results").html("<p>how/sustainable</p>");
    }
    if ($("#sel1").val() == "how" && $("#sel2").val() == "recycle"){ // how/recycle
      $("#results").html("<p>how/recycle</p>");
    }
    if ($("#sel1").val() == "how" && $("#sel2").val() == "educate"){ // how/educate
      $("#results").html("<p>how/educate</p>");
    }

    ////////// WHERE
    if ($("#sel1").val() == "where" && $("#sel2").val() == "planet"){ // where/planet
      $("#results").html("<p>where/planet</p>");
    }
    if ($("#sel1").val() == "where" && $("#sel2").val() == "sustainable"){ // where/sustainable
      $("#results").html("<p>where/sustainable</p>");
    }
    if ($("#sel1").val() == "where" && $("#sel2").val() == "recycle"){ // where/recycle
      $("#results").html("<p>where/recycle</p>");
    }
    if ($("#sel1").val() == "where" && $("#sel2").val() == "educate"){ // where/educate
      $("#results").html("<p>where/educate</p>");
    }
  });
});
