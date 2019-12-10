/* Lisa Gieng
Dec 8, 2019
GUI I: Creating Interactive Dynamic Table w/ Sliders and Tabs

This file creates the table by parsing the input numbers numbers
and then populating the table with the multiplication data.

maktable.js
Copyright (c) 2019 Lisa Gieng. All rights reserved. */

// initialize variables
var output="", colStart, colEnd, rowStart, rowEnd;

function makeData() {
  /* get values from form, turn into numbers
    https://www.w3schools.com/jsref/jsref_number.asp */
    colStart = Number(document.getElementById("cStart").value);
    colEnd = Number(document.getElementById("cEnd").value);
    rowStart = Number(document.getElementById("rStart").value);
    rowEnd = Number(document.getElementById("rEnd").value);

    //populate the table!
    output="<tr><th> </th>"; //place holder for 0,0 spot
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
