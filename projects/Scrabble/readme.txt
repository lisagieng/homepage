Lisa Gieng
lisa_gieng@student.uml.edu
Due: Dec/20/19

HW9 - Scrabble

---------------------------------------------------------------
The features currently working are:
-7 tiles are randomly generated from the piece set
-Letter tiles can be dragged an dropped onto targets
-The program identifies which letter is dropped in the "Word:" section
-The score is correctly tallied, including bonus tiles
-The user can play as many words as they'd like
-Board clears after each 'round'
-The total score is kept for multiple words

Partially implemented:
-New tiles are randomly generated, but every time, 7 new tiles are generated
I did not have time to figure out how to bring back only the number of tiles
needed to get to 7.

----------------------------------------------------------------
I implemented this code using AJAX to load the tiles in. I made use of
Ramon Meza's "pieces.json" file provided to use to pull the relevant
information for the generated tiles. I used the math.random function to
get random indexes for the tiles.

The score is kept track of in two score variables, score and baseScore.
baseScore is the score for the tiles if bonusess are not utilized.
The score variable is used if bonuses are used. I kept track of this by
making an array for the word that stored 7 spaces. Then, at index 1 and 5, 
if they are not empty spaces, then the score is doubled. The total score is
kept track of in the nextWord function. nextWord tallies the total score
by checking is score is 0 or not (bonus tiles never played) and then
setting baseScore to score if needed. 

When the tiles are randomly generated, the values of the letter and the
points it is worth is stored in the image's attributes id and name. I 
utilized jQuery's attr function many times to get the proper values and
letters for everything. 

After the tile is dropped onto a space, it is disabled so it can no
longer be moved. I was going to implement it being able to be taken out
and moved to another tile, but it ended up being too much work in this
time frame so I commented my current code for it out since I did not
finish that portion. This was not a required element anyways.

The droppable target is also disabled after a tile is dragged onto it
so that multiple letter tiles cannot sit in the same space. The tiles
reactivate later by just basically setting it to enable droppable again
after the play functions.

Overall, this assignment was not fun. But I learned a lot about jQuery 
and UI and even AJAX in the process, so it will serve very valuable
knowledge for my web development career. 