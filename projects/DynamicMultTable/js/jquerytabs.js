/* Lisa Gieng
Dec 8, 2019
GUI I: Creating Interactive Dynamic Table w/ Sliders and Tabs

This file utilizies the JQuery UI Tabs. It uses the saveTable
function to do all the tab work when the save button is clicked.
There is also a function to delete individual tabs, and then
to delete multiple tabs. There is a lot of toggling of hiding
and unhiding things for the delete multiple options.

jquerytabs.js
Copyright (c) 2019 Lisa Gieng. All rights reserved. */

var tabIndex = 0, tabCount = 0;

function saveTable() {
  // initialize the tabs
  $("#tabs").tabs();

  // increment tab index for ids
  tabIndex++;

  // increment the count of tabs that are added for each saved table
  tabCount++;

  // show mult delete button when tabs activate
  $("#multDelete").css({'visibility':'visible'});

  /* create delete button for tab titles
    the button links the onclick with the tab number so it knows which tab to delete */
  var deleteMe = " <button type='button' class='btn btn-danger btn-sm' onclick='deleteTab(" + tabIndex + ")'><i class='fa fa-close'></i></button>";

  // create checkboxes for multiple deletion
  var deleteMore = " <input type='checkbox' class='hideMe' id='bigboy' name='" + tabIndex + "'>";

  // create tab title
  var title = "<li>" + deleteMore + "<a href='#tab-" + tabIndex + "'>" + colStart + ", " + colEnd + ", " + rowStart + ", " + rowEnd + deleteMe + "</a></li>";
  $("div#tabs ul").append(title);

  // add table to tab
  var saveTable = "<div id='tab-" + tabIndex + "'>" + $("#multTable").html() + "</div>";
  $("div#tabs").append(saveTable);

  // refresh the tabs
  $("#tabs").tabs("refresh");

  // update active tab to most recently saved table
  $("#tabs").tabs("option", "active", -1);
}

/* for deleteTab function, I referenced this code to locate the
  HTML tags for the tab to delete
https://forum.jquery.com/topic/dynamically-remove-tab */
function deleteTab(number) {
  // find which tab to delete using the ID tag
  var numberIndex = "#tab-" +  number;

  // remove the panel
  $(numberIndex).remove();
  $("#tabs").tabs("refresh");

  // remove the tab
  var hrefStr = "a[href='" + numberIndex + "']";
  $(hrefStr).closest("li").remove();

  /* decrement the count of tabs for every deletion
    when all tabs are deleted, destroy the tab ui */
  tabCount--;
  if (tabCount == 0){
    $("#tabs").tabs("destroy");
  }

  /* I wanted to update the current tab to the closest one
  after it's deleted, but I wasn't really sure how to do it. */
  //$("#tabs").tabs("option", "active", 0);
}

// toggle checkboxes, instructions and delete button to show when mult delete button clicked
$("#multDelete").click(function() {
  $(".hideMe").css({'visibility':'visible'});
});

/* to actually delete the multiple selected tabs
  I referenced this code from stack overflow to get the
  names of the selected tabs into an array
  https://stackoverflow.com/questions/2155622/get-a-list-of-checked-checkboxes-in-a-div-using-jquery */
function deleteLot() {
  // creating an array of the selected boxes
  var selected = [];
  $("input:checked").each(function() {
    selected.push($(this).attr('name'));
  });

  // get length of array
  var n = selected.length;

  // for every selected tab, delete it
  for(i = 0; i < n; i++) {
    deleteTab(selected[i]);
  }

  // hide everything again except delete multiple button
  $(".hideMe").css({'visibility':'hidden'});
  $("#multDelete").css({'visibility':'visible'});
}
