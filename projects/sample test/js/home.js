// Implementing dropdown menu with hover
//https://stackoverflow.com/questions/42183672/how-to-implement-a-navbar-dropdown-hover-in-bootstrap-v4
function toggleDropdown (e) {
  const _d = $(e.target).closest('.dropdown'),
    _m = $('.dropdown-menu', _d);
  setTimeout(function(){
    const shouldOpen = e.type !== 'click' && _d.is(':hover');
    _m.toggleClass('show', shouldOpen);
    _d.toggleClass('show', shouldOpen);
    $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
  }, e.type === 'mouseleave' ? 50 : 0);
}

$('body')
  .on('mouseenter mouseleave','.dropdown',toggleDropdown)
  .on('click', '.dropdown-menu a', toggleDropdown);
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
// News Feed loader API
// https://rss2json.com/google-feed-api-alternative

$(function () {
google.load("feeds", "1");

   function initialize() {
     var feed = new google.feeds.Feed("https://www.sciencedaily.com/rss/top/environment.xml");
     feed.load(function(result) {
       document.getElementById("feedControl").style.visibility = "hidden";
       if (!result.error) {
         var container = document.getElementById("feed");
         for (var i = 0; i < result.feed.entries.length; i++) {
           var entry = result.feed.entries[i];
           var div = document.createElement("div");
           var readmore = "<a target='_blank' href='" + entry.link + "'><small>  Read more.</small></a>"
           div.innerHTML = "<a target='_blank' href='" + entry.link + "'>" + entry.title + "</a><small> " + entry.publishedDate + "</small><p>" + entry.content + readmore + "</p><hr>";
           container.appendChild(div);
         }
       }
     });
   }
   google.setOnLoadCallback(initialize);
});
///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
// for contact us submission
// hosted by an external server https://formspree.io/
window.addEventListener("DOMContentLoaded", function() {

   // get the form elements defined in your form HTML above

   var form = document.getElementById("my-form");
   var button = document.getElementById("my-form-button");
   var status = document.getElementById("my-form-status");

   // Success and Error functions for after the form is submitted

   function success() {
     form.reset();
     //button.style = "display: none ";
     status.innerHTML = "Your submission has been received.";
   }

   function error() {
     status.innerHTML = "Oops! There was a problem.";
   }

   // handle the form submission event

   form.addEventListener("submit", function(ev) {
     ev.preventDefault();
     var data = new FormData(form);
     ajax(form.method, form.action, data, success, error);
   });
 });

 // helper function for sending an AJAX request

 function ajax(method, url, data, success, error) {
   var xhr = new XMLHttpRequest();
   xhr.open(method, url);
   xhr.setRequestHeader("Accept", "application/json");
   xhr.onreadystatechange = function() {
     if (xhr.readyState !== XMLHttpRequest.DONE) return;
     if (xhr.status === 200) {
       success(xhr.response, xhr.responseType);
     } else {
       error(xhr.status, xhr.response, xhr.responseType);
     }
   };
   xhr.send(data);
 }

////////////////////////////////
$(document).ready(function(){
    $("#div1").load("home.html");
});
