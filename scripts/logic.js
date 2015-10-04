//Global variables + default values

var turn = 1; //even = X's turn. odd = Y's turn
var Xscore = 0;
var Yscore = 0;

//Global function that can be called anytime:

//function 0 to reset the game ....not enough time so just reload the page now
function reloadPage(){
	location.reload()
}

//function 1 - Click a button = turn ++.
function turnCounter(){
	turn += 1;
}

//function 2a
	//- change innerHTML in an element = X
	// - disable button + add a class and change its color to red (by using CSS pseudo style)
function clickElementToLabelX(event){
    event.target.innerHTML = "X";
	event.target.disabled = true;
	event.target.className = "MarkedX";
  };



//function 2a
	//- change innerHTML in an element = O
	// - disable button + add a class and change its color to blue (by using CSS pseudo style)
function clickElementToLabelY(event){
    event.target.innerHTML = "Y";
	event.target.disabled = true;
	event.target.className = "MarkedY";
  };


//function 3 - Check if X is winner
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

	if(Xscore===1){
		alert("X is the Winner!");
		reloadPage();
	};
}




//function 4 - Check if Y is winner. 

function IsYaWinner(){

	if(
	document.getElementById("b1").innerHTML === "Y"
	&& document.getElementById("b2").innerHTML === "Y"
	&& document.getElementById("b3").innerHTML === "Y"
	||
	document.getElementById("b4").innerHTML === "Y"
	&& document.getElementById("b5").innerHTML === "Y"
	&& document.getElementById("b6").innerHTML === "Y"
	||
	document.getElementById("b7").innerHTML === "Y"
	&& document.getElementById("b8").innerHTML === "Y"
	&& document.getElementById("b9").innerHTML === "Y"
	||
	document.getElementById("b1").innerHTML === "Y"
	&& document.getElementById("b4").innerHTML === "Y"
	&& document.getElementById("b7").innerHTML === "Y"
	||
	document.getElementById("b2").innerHTML === "Y"
	&& document.getElementById("b5").innerHTML === "Y"
	&& document.getElementById("b8").innerHTML === "Y"
	||
	document.getElementById("b3").innerHTML === "Y"
	&& document.getElementById("b6").innerHTML === "Y"
	&& document.getElementById("b9").innerHTML === "Y"
	||
	document.getElementById("b1").innerHTML === "Y"
	&& document.getElementById("b5").innerHTML === "Y"
	&& document.getElementById("b9").innerHTML === "Y"
	||
	document.getElementById("b3").innerHTML === "Y"
	&& document.getElementById("b5").innerHTML === "Y"
	&& document.getElementById("b7").innerHTML === "Y"
	){Yscore += 1};

	if(Yscore===1){
		alert("Y is the Winner!");
		reloadPage();
	};
}

//function 5 & 6 - to change the text displayed in H2
function changeH2toX(){
	document.getElementById("whoSTurn").innerHTML = "It is X's turn"
}

function changeH2toY(){
	document.getElementById("whoSTurn").innerHTML = "It is Y's turn"
}

// Function 7 - show alert when draw game 
	function drawGame(){
		if(turn === 10){
		document.getElementById("whoSTurn").innerHTML = "This is a draw game! Please restart the game"
		alert("This is a draw game! Please restart the game");
		reloadPage();
		}
	}

//Make a combo function 7 for the button to trigger
	// Check whether it is X's move or Y's move
	// if turn = even, it is X's moves with following steps
			// -> change innerHTML of button = x && disable the click button
			// -> turn counter +1
			// -> check winner
	// if turn = odd, it is Y's moves with same steps
function combo(){
	
 	if(turn % 2 === 0){
	clickElementToLabelX(event);
	turnCounter();
	IsXaWinner();
	changeH2toY();
	drawGame();
	}
	else {
	clickElementToLabelY(event);
	turnCounter();
	IsYaWinner();
	changeH2toX();
	drawGame();
	}
}



//Add Event on buttons (i.e. apply functions to button) 
window.onload = function(){
	document.getElementById("b1").addEventListener("click", combo);
	document.getElementById("b2").addEventListener("click", combo);
	document.getElementById("b3").addEventListener("click", combo);
	document.getElementById("b4").addEventListener("click", combo);
	document.getElementById("b5").addEventListener("click", combo);
	document.getElementById("b6").addEventListener("click", combo);
	document.getElementById("b7").addEventListener("click", combo);
	document.getElementById("b8").addEventListener("click", combo);
	document.getElementById("b9").addEventListener("click", combo);

	document.getElementById("reset").addEventListener("click", reloadPage);

}




