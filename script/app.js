// long version just for me to get the basic understanding
// onClick = "myFunction" is in HTML dox

//so no need to keep typing
function getID(id){
	return document.getElementById(id);
}

// set X and O alternate in the boxes	
var player = 1;							// set to 1 so that there's a condition
function clickMe(id){
	if (player == 1){
		document.getElementById('message').innerHTML = "O MOVE"
		getID(id).innerHTML = "X";		// change text
		getID(id).className = "red";	// change font and bkg color since default of disabled is grey
		getID(id).disabled = true; 		// disabled = true: cannot be clicked again
		player +=1; 					// makes in 2, so that else statement will run
		getWinner();
	} else {
		document.getElementById('message').innerHTML = "X MOVE"
		getID(id).innerHTML = "O";
		getID(id).className = "blue";
		getID(id).disabled = true; 
		player -=1; 					//makes it 1, if 1, text changes to X
		getWinner();
	}
}//end of clickMe


function getHTML(id){
	return getID(id).innerHTML;
}

/*  winner combo 
	horizontal 	1 && 2 && 3 || 4 && 5 && 6 || 7 && 8 && 9 ||
	vertical 	1 && 4 && 7 || 2 && 5 && 8 || 3 && 6 && 9 ||
	diagonal	1 && 5 && 9 || 3 && 5 && 7 */

function getWinner(){
	if (	(getHTML('1') == "X") && (getHTML('2') == "X") && (getHTML('3') == "X") ||
			(getHTML('4') == "X") && (getHTML('5') == "X") && (getHTML('6') == "X") ||
			(getHTML('7') == "X") && (getHTML('8') == "X") && (getHTML('9') == "X") ||

			(getHTML('1') == "X") && (getHTML('4') == "X") && (getHTML('7') == "X") ||
			(getHTML('2') == "X") && (getHTML('5') == "X") && (getHTML('8') == "X") ||
			(getHTML('3') == "X") && (getHTML('6') == "X") && (getHTML('9') == "X") ||

			(getHTML('1') == "X") && (getHTML('5') == "X") && (getHTML('9') == "X") ||
			(getHTML('3') == "X") && (getHTML('5') == "X") && (getHTML('7') == "X") 
		)//end of condition
		{
		alert('X wins');
		reset();
		} 
	if	(	(getHTML('1') == "O") && (getHTML('2') == "O") && (getHTML('3') == "O") ||
			(getHTML('4') == "O") && (getHTML('5') == "O") && (getHTML('6') == "O") ||
			(getHTML('7') == "O") && (getHTML('8') == "O") && (getHTML('9') == "O") ||

			(getHTML('1') == "O") && (getHTML('4') == "O") && (getHTML('7') == "O") ||
			(getHTML('2') == "O") && (getHTML('5') == "O") && (getHTML('8') == "O") ||
			(getHTML('3') == "O") && (getHTML('6') == "O") && (getHTML('9') == "O") ||

			(getHTML('1') == "O") && (getHTML('5') == "O") && (getHTML('9') == "O") ||
			(getHTML('3') == "O") && (getHTML('5') == "O") && (getHTML('7') == "O") 
		)
		{
		alert('O wins');
		reset();
		}
}//end of getWinner

// DRAW (it's a tie)
	// if 9 boxes are full then no one won
	// function to go over all boxes for x || o

// Message X's || O's turn

// function to reset game
function reset(){
	document.getElementById('1').innerHTML = "Box 1";	//inner html back to original text
	document.getElementById('2').innerHTML = "Box 2";
	document.getElementById('3').innerHTML = "Box 3";
	document.getElementById('4').innerHTML = "Box 4";
	document.getElementById('5').innerHTML = "Box 5";
	document.getElementById('6').innerHTML = "Box 6";
	document.getElementById('7').innerHTML = "Box 7";
	document.getElementById('8').innerHTML = "Box 8";
	document.getElementById('9').innerHTML = "Box 9";

	document.getElementById('1').className = "grey";	//background back to orinal color
	document.getElementById('2').className = "grey";
	document.getElementById('3').className = "grey";
	document.getElementById('4').className = "grey";
	document.getElementById('5').className = "grey";
	document.getElementById('6').className = "grey";
	document.getElementById('7').className = "grey";
	document.getElementById('8').className = "grey";
	document.getElementById('9').className = "grey";

	document.getElementById('1').disabled = false;		// since buttons were disabled, need to enable them back again
	document.getElementById('2').disabled = false;
	document.getElementById('3').disabled = false;
	document.getElementById('4').disabled = false;
	document.getElementById('5').disabled = false;
	document.getElementById('6').disabled = false;
	document.getElementById('7').disabled = false;
	document.getElementById('8').disabled = false;
	document.getElementById('9').disabled = false;
}





