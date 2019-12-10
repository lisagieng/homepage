/* Lisa Gieng
Dec 8, 2019
GUI I: Creating Interactive Dynamic Table w/ Sliders and Tabs

This file creates the sliders using the JQuery UI Plugin.
It is linked to the input form fields.

jquerysliders.js
Copyright (c) 2019 Lisa Gieng. All rights reserved. */

// slider for starting multiplier
$(function() {
  $("#cStartSlide").slider({
    min: -50,
    max: 50,
    animate: "fast",
    slide: function(event, ui) {
      $("#cStart").val(ui.value);
      checkData();
    }
  });
  $("#cStart").val($("#cStartSlide").slider("value"));
  checkData();
});
// this function links the form fields to the slider values
$("#cStart").change(function() {
    $("#cStartSlide").slider("value", Number(document.getElementById("cStart").value));
});

// slider for ending multiplier
$(function() {
  $("#cEndSlide").slider({
    min: -50,
    max: 50,
    animate: "fast",
    slide: function(event, ui) {
      $("#cEnd").val(ui.value);
      checkData();
    }
  });
  $("#cEnd").val($("#cEndSlide").slider("value"));
  checkData();
});

$("#cEnd").change(function() {
    $("#cEndSlide").slider("value", Number(document.getElementById("cEnd").value));
});

// slider for starting multiplicand
$(function() {
  $("#rStartSlide").slider({
    min: -50,
    max: 50,
    animate: "fast",
    slide: function(event, ui) {
      $("#rStart").val(ui.value);
      checkData();
    }
  });
  $("#rStart").val($("#rStartSlide").slider("value"));
  checkData();
});

$("#rStart").change(function() {
    $("#rStartSlide").slider("value", Number(document.getElementById("rStart").value));
});

// slider for ending multiplicand
$(function() {
  $("#rEndSlide").slider({
    min: -50,
    max: 50,
    animate: "fast",
    slide: function(event, ui) {
      $("#rEnd").val(ui.value);
      checkData();
    }
  });
  $("#rEnd").val($("#rEndSlide").slider("value"));
  checkData();
});

$("#rEnd").change(function() {
    $("#rEndSlide").slider("value", Number(document.getElementById("rEnd").value));
});
