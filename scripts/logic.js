//Count the turn, the score of X and Y
//Default global var turn = 1.

//function 1 - Click a button = turn ++. 

//function 2a - change innerHTML in an element = x 

//function 2b - change innerHTML in an element = o 

//function 3 - disable the click button

//Check if X is winner
//Default global var Xscore = 0
//Create a function 4 below:
//Are b1 && b2 && b3 are all x? If yes, Xscore ++
//Are b4 && b5 && b6 are all x? If yes, Xscore ++
//Are b7 && b8 && b9 are all x? If yes, Xscore ++
//------
//Are b1 && b4 && b7 are all x? If yes, Xscore ++
//Are b2 && b5 && b8 are all x? If yes, Xscore ++
//Are b3 && b6 && b9 are all x? If yes, Xscore ++
//------
//Are b1 && b5 && b9 are all x? If yes, Xscore ++
//Are b3 && b5 && b7 are all x? If yes, Xscore ++
//------
//If Xscore >3, X is the winner (-->call 2 functions. 1. Announce winner in alert box. 2. An ok button = reset the game)
//Be careful of double counting

//Check if Y is winner. Create another var and function 5 similar to X above

//function 6 to annouce winner

//function 7 to reset the game

//A big function 8 including 4 things below for X (When a button is clicked, it will trigger this function)
// - change innerHTML of button = x
// - turn counter +1
// - disable the click button
// - check winner

// Create a similar big function 9 for Y


//Implement functions to button according to the below case (i.e. toggle x or o to be marked on the buttons)
//If turn = odd, use the "mark o on button" function (Use AddEventListner to call a big function o)
//If turn = even, use the "mark x on button" function (Use AddEventListner to call a big function x)



