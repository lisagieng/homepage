/* Lisa Gieng
Dec/1/2019
hw7.js
This file does the math and table production for the Multiplication
table based on the user's input.
This is an extension of my original HW6.
This handles errors through the JQuery validation plugin. The table Will
not generate if the inputs are not valid. The inputs will only be
accepted if they are valid integers.
*/

/* greaterthan method from jquery plugin reference github
https://github.com/jquery-validation/jquery-validation/blob/master/src/additional/greaterThan.js */
$.validator.addMethod( "greaterThan", function( value, element, param ) {
  var target = $( param );

  if ( this.settings.onfocusout && target.not( ".validate-greaterThan-blur" ).length ) {
      target.addClass( "validate-greaterThan-blur" ).on( "blur.validate-greaterThan", function() {
          $( element ).valid();
      } );
  }
  return Number(value) >= Number(target.val());
  /* adjusted the code slightly to >= instead of just >
  also adjusted to use Number() function because inputs sometimes doesn't properly parse
  had errors with 10 as end for some reason, this fixes it */
});

/* I was unable to figure out how to restrict numbers: true to non-decimals.
using digits: true did not allow me to allow negative numbers
so I made my own rule to allow this. It checks for decimals using modulus. */
$.validator.addMethod( "noDecimals", function( value, element ) {
    return !(value % 1);
}, "Please enter an integer.");

/* class rules for all inputs to be required and numbers
 I used number instead of digits because digits only allows positive ints
 limits range of inputs from -50 to 50 */
$.validator.addClassRules("inputNum", {
    required: true,
    number: true,
    min: -50,
    max: 50
});

$(function() {
  //look for form id multiplication
  $("#multiplication").validate({
    /* used stack overflow to figure out how to place error messages separately
    https://stackoverflow.com/questions/15292568/placing-jquery-validate-plugin-messages-in-new-line */
    wrapper: 'div',

    rules: {
      cStart: {noDecimals: [cStart, cStart]},
      rStart: {noDecimals: [rStart, rStart]},
      cEnd: {
        noDecimals: [cEnd, cEnd],
        greaterThan: [cStart, cStart]
      },
      rEnd: {
        noDecimals: [rEnd, rEnd],
        greaterThan: [rStart, rStart]
      }
    },

    //error messages, will use default jquery plugin error messages otherwise
    messages: {
      cEnd: {greaterThan: "Please enter a larger ending multiplier."},
      rEnd: {greaterThan: "Please enter a larger ending multiplicand."}
    },

    //execute table when inputs are valid!!!
    submitHandler: function(form){
      makeData();
    }
  });
});


//MAKE THE TABLE!
function makeData() {
    /* get values from form, turn into numbers
      https://www.w3schools.com/jsref/jsref_number.asp */
    var colStart = Number(document.getElementById("cStart").value);
    var colEnd = Number(document.getElementById("cEnd").value);
    var rowStart = Number(document.getElementById("rStart").value);
    var rowEnd = Number(document.getElementById("rEnd").value)

    //populate the table!
    var output="<tr><th> </th>"; //place holder for 0,0 spot
    for(var i = colStart; i <= colEnd; i++){
      output += "<th>" + i + "</th>"; //add the column headers
    }
    output += "</tr>";
    for(var j = rowStart; j <= rowEnd; j++) {
      output += "<tr><th>" + j + "</th>"; //add the row headers
      for(var x = colStart; x <= colEnd; x++) {
      output += "<td>" + j * x + "</td>"; //populate with data!
      }
      output += "</tr>"; //finish it off!
    }
    //now print the output to where the table is situated in the html file
    var table = document.getElementById("myTable").innerHTML = output;
}
