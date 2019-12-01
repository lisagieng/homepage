Lisa Gieng 
lisa_gieng@student.uml.edu
Due: Dec/1/2019

HW7 - Multiplication Table in JS with user input and JQuery validation plugin

INSTRUCTIONS
Input 4 integer values into the form. Hit submit to generate table. 
The table will only take inputs -50 to 50 in integer form.

--------------------------------------------------------------------------------

This assignment was a lot easier than hw6 was, since this assignment built off 
of that one. I made minor changes to the HTML from hw6; I gave the form
an ID for the JQuery validator to locate the inputs and I changed the submit
from an input type button to a button with type submit instead. 

I had minor issues with the JQuery validator; I was unsure of how to keep the 
multiplication table from generating before the inputs were validated. I 
solved this by removing the onclick from the submit button and adding the 
SubmitHandler to the JS file to call the createTable function instead.

There is great amounts of documentation for the plugin on the internet on the
jqueryvalidation.org site. This allowed me to take the GreaterThan function 
from the plugin's github page and was how I created a class for the input
validation since they all had the same requirements instead of putting it
one by one for each one. I also created a class that allowed me to figure out
if the input is an integer or not. I originally used the digit: true for the 
jquery validator, but this does not allow negative integers. I then used the
number: true instead, but this allowed non-integers. Thus, I had to create
my own validator rule that used modulus to check if the number was an int or not.