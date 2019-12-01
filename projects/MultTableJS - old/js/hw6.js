/* Lisa Gieng
Nov/14/2019
hw6.js
This file does the math and table production for the Multiplication
table based on the user's input. It handles input errors.
It first parses the inputs into numbers.
It then checks that the inputs are actually integers and not floats, e, etc.
Then it makes the table.
*/

function createTable() {
  /* get values from form, turn into numbers
    https://www.w3schools.com/jsref/jsref_number.asp */
  var colStart = Number(document.getElementById("cStart").value);
  var colEnd = Number(document.getElementById("cEnd").value);
  var rowStart = Number(document.getElementById("rStart").value);
  var rowEnd = Number(document.getElementById("rEnd").value)

  //creating variables for the invalid input message
  var wrongInput = document.getElementById("invalidInput")
  var msg = "";
  /*error handling: error message display for non integers
   for integer checking: https://www.w3schools.com/jsref/jsref_isinteger.asp */
  if(!Number.isInteger(colStart) || !Number.isInteger(colEnd)
    || !Number.isInteger(rowStart) || !Number.isInteger(rowEnd)) {
    msg += "You entered a value that is not an integer!";
    wrongInput.innerHTML = msg;
  }
  else if(colStart > colEnd) // error handling for larger starting values
  {
    msg += "Your starting multiplier is larger than your ending multiplier!";
    wrongInput.innerHTML = msg;
  }
  else if(rowStart > rowEnd) {
    msg += "Your starting multiplicand is larger than your ending multiplicand!";
    wrongInput.innerHTML = msg;
  }
  else { //if inputs are proper, call makeData to process table data
    msg = ""; //clear error message
    wrongInput.innerHTML = msg;
    makeData(colStart, colEnd, rowStart, rowEnd);
  }
}

function makeData(colStart, colEnd, rowStart, rowEnd) {
   //create the table!
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

//thought process
 /*var output="<tr>";
 output+="<th> </th>"; //column headers
 output+="<th>1</th>";
 output+="<th>2</th></tr>";

 output+="<tr><th>1</th>"; //row header
 output+="<td>1*1</td>"; //data
 output+="<td>1*2</td>";
 output+="</tr>";

 output+="<tr><th>2</th>"; //row header
 output+="<td>1*2</td>"; //data
 output+="<td>2*2</td>";
 output+="</tr>";*/
