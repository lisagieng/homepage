Lisa Gieng 
lisa_gieng@student.uml.edu
Due: Dec/8/2019

HW8 - Multiplication Table in JS with user input and JQuery validation and UI (tabs+sliders)

INSTRUCTIONS
Input 4 integer values into the form. Hit submit to generate table. 
The table will only take inputs -50 to 50 in integer form.

To save a table, hit the save button and it will be saved into the "saved tables" area.
To delete, press the big red 'X' button on the tab or press the 'delete multiple tabs' 
button to select multiple tables to remove.

--------------------------------------------------------------------------------
README COMMENTS FOR HW8
I hated this assignment. Seriously, so much. It made my brain turn into goo.
But all in all, it was really useful for me learning more about using JQuery so 
I can further my web dev knowledge; this assignment was a curse with a blessing
in disguise I guess.

Creating the sliders was relatively simple, and linking them manually was not
extremely difficult. I just had to make a placeholder for them to go. With the sliders,
I redid the layout of the form for readability so that it is now 4 rows with 3 cols.

The tabs for saving the tables was okay. I just had to figure out how to utilize 
the functions of the tabs and link it to a save button. The method I used shoves
a whole bunch of HTML using JQuery into the tabs <ul>, so I am not sure if it is the 
most efficient method.

Deleting individual tabs was okay as well. I was lucky enough to find documentation
on how to remove tabs. I was initially only able to remove a single tab. I created a
tabIndex variable that then uses HTML appending to label each tab a unique ID number.
This then allowed me to delete the tabs that were clicked on by locating the ID and then
deleting the HTML associated with that ID.

Deleting multiple tabs hurt my soul to figure out. I began by adding checkboxes to
the titles of the tabs. I struggled with this because the checkboxes would not be 
selected if they were inside of the <a> tag in the tab for some reason, so after a
ton of googling, I realized I had to add the <input checkbox> outside of <a>. Now I 
had checkboxes in the tabs, and used a pseudo class to toggle its visibility. Now
a 'delete multiple tabs' button was added, and that toggled the checkboxes to show when it
was clicked. After hours of googling, I found a result on stack overflow about how to
get the names of checked boxes with JQuery!!! Now I just had to put those names into arrays 
(they're the same as the tabIndex IDs mentioned previously) and then run them through 
the delete function. I then added some more visibility toggling for simplicity.

Overall, this assignment was an absolute pain to complete. It took me about 9
hours total. I did learn a lot of JQuery from this assignment though, so I am glad I
managed to finish it. 

--------------------------------------------------------------------------------

README FROM LAST UPDATE (HW7)
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