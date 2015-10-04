//Global variables + default values

var turn = 2;
var Xscore = 0;
var Yscore = 0;


	//Count the turn, the score of X and Y
	//Default global var turn = 1.
	//function 1 - Click a button = turn ++. 
	function turnCounter(){
		turn += 1;
	}

	//function 2a
		//- change innerHTML in an element = x
		// - disable button + change color to red (by using CSS pseudo style)
	function clickElementToLabelX(event){
	    event.target.innerHTML = "X";
		event.target.disabled = true;
	  };



	//function 2b - change innerHTML in an element = o & change color to blue



	//Check if X is winner
		//Default global var Xscore = 0
		//Create a function 3 below:
			//reset global var Xscore = 0 everytime to avoid double counting
			//Are b1 && b2 && b3 are all x? If yes, Xscore +=1
			//Are b4 && b5 && b6 are all x? If yes, Xscore +=1
			//Are b7 && b8 && b9 are all x? If yes, Xscore +=1
			//------
			//Are b1 && b4 && b7 are all x? If yes, Xscore +=1
			//Are b2 && b5 && b8 are all x? If yes, Xscore +=1
			//Are b3 && b6 && b9 are all x? If yes, Xscore +=1
			//------
			//Are b1 && b5 && b9 are all x? If yes, Xscore +=1
			//Are b3 && b5 && b7 are all x? If yes, Xscore +=1
			//------
			//If Xscore == 1, X is the winner (-->call announce winner function)
	function IsXaWinner(){

		if(
		document.getElementById("b1").innerHTML === "X"
		&& document.getElementById("b2").innerHTML === "X"
		&& document.getElementById("b3").innerHTML === "X"
		||
		document.getElementById("b4").innerHTML === "X"
		&& document.getElementById("b5").innerHTML === "X"
		&& document.getElementById("b6").innerHTML === "X"
		||
		document.getElementById("b7").innerHTML === "X"
		&& document.getElementById("b8").innerHTML === "X"
		&& document.getElementById("b9").innerHTML === "X"
		||
		document.getElementById("b1").innerHTML === "X"
		&& document.getElementById("b4").innerHTML === "X"
		&& document.getElementById("b7").innerHTML === "X"
		||
		document.getElementById("b2").innerHTML === "X"
		&& document.getElementById("b5").innerHTML === "X"
		&& document.getElementById("b8").innerHTML === "X"
		||
		document.getElementById("b3").innerHTML === "X"
		&& document.getElementById("b6").innerHTML === "X"
		&& document.getElementById("b9").innerHTML === "X"
		||
		document.getElementById("b1").innerHTML === "X"
		&& document.getElementById("b5").innerHTML === "X"
		&& document.getElementById("b9").innerHTML === "X"
		||
		document.getElementById("b3").innerHTML === "X"
		&& document.getElementById("b5").innerHTML === "X"
		&& document.getElementById("b7").innerHTML === "X"
		){Xscore += 1};

		if(Xscore===1){alert("X is the Winner!")};
	}




	//Check if Y is winner. Create another var and function 4 similar to X above

	//function 5 to reset the game


	//A big function 6 including 4 things below for X (When a button is clicked, it will trigger this function)
		// - change innerHTML of button = x
		// - turn counter +1
		// - disable the click button
		// - check winner
	function comboFunctionX(){
	clickElementToLabelX(event);
	turnCounter();
	IsXaWinner();
	}


	// Create a similar big function 7 for Y

window.onload = function(){
	//Implement functions to button according to the below case (i.e. toggle x or o to be marked on the buttons)
	//If turn = odd
		//change innerHTML of h2 into "o's turn"
		//AddEventListner to the button to call a big function o

	// if(turn % 2 == 0){
	// 	// document.getElementById("h2").innerHTML = "X's Turn"
	// 	document.getElementById("b1").addEventListener("click", comboFunctionX);
	// 	document.getElementById("b2").addEventListener("click", comboFunctionX);
	// 	document.getElementById("b3").addEventListener("click", comboFunctionX);
	// 	document.getElementById("b4").addEventListener("click", comboFunctionX);
	// 	document.getElementById("b5").addEventListener("click", comboFunctionX);
	// 	document.getElementById("b6").addEventListener("click", comboFunctionX);
	// 	document.getElementById("b7").addEventListener("click", comboFunctionX);
	// 	document.getElementById("b8").addEventListener("click", comboFunctionX);
	// 	document.getElementById("b9").addEventListener("click", comboFunctionX);
	// } 

	//If turn = even, 
		//change innerHTML of h2 into "x's turn"
		//AddEventListner to the button to call a big function x
	// if(turn %2 === 0){
		// document.getElementById("h2").innerHTML = "X's Turn"
		document.getElementById("b1").addEventListener("click", comboFunctionX);
		document.getElementById("b2").addEventListener("click", comboFunctionX);
		document.getElementById("b3").addEventListener("click", comboFunctionX);
		document.getElementById("b4").addEventListener("click", comboFunctionX);
		document.getElementById("b5").addEventListener("click", comboFunctionX);
		document.getElementById("b6").addEventListener("click", comboFunctionX);
		document.getElementById("b7").addEventListener("click", comboFunctionX);
		document.getElementById("b8").addEventListener("click", comboFunctionX);
		document.getElementById("b9").addEventListener("click", comboFunctionX);
	// }





}
