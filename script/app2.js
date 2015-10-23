//2nd version. using Event listener.

window.onload = myFunctions;	//can't find the ending of {} so just add a function

function myFunctions(){
	clickMe();
	reset();
}

function getID (id){
	return document.getElementById(id);
}

//loop TD to add listener to each box
var TD = document.getElementsByTagName("td");
function clickMe(){
	for (var i = 0; i <= TD.length; i++){
		TD[i].addEventListener("click", XO); 
	}
}

//add XO to TD (.target)
var player = 1;	
function XO(e){
	if (player == 1){
		e.target.innerHTML = "X";					//.target: actual target that received the event
		getID('message').innerHTML = "O MOVE";
		e.target.style.backgroundColor = "red";
		e.target.removeEventListener("click", XO);	//cannot click again
		player +=1; 
		getWinner();			
	} else {
		e.target.innerHTML = "O";
		getID('message').innerHTML = "X MOVE";
		e.target.style.backgroundColor = "blue";
		e.target.removeEventListener("click", XO);
		player -=1; 
		getWinner();
	}				
}

// loop TD to clear boxes of all functions inserted back to original
var resetButton = getID("resetButton");
resetButton.addEventListener("click", reset);
function reset(){
	for (var i = 0; i <= TD.length; i++){
	TD[i].innerHTML= "";					//ERROR:  Cannot set property 'innerHTML' of undefined
	TD[i].style.backgroundColor = "white";
	TD[i].addEventListener("click", XO);		
	}
}

// getWinner
	// box = document.getElementByID("box" + number).innerHTML
	// get moves of box a && box b && box c
	// see if matches winnerCombo(e.target.innerHTML = "X")
	// if X == winnercombo, x wins else O == winnercombo, O wins

// Draw




/* extra notes below for trying different methods but haven't worked yet */


// get the boxes to click.  NOTE : other alternative, but didn't work to get XO funtion
/*
var theParent = document.querySelector("#content");			
var clickedItem;
theParent.addEventListener("click", doSomething);	//picks the parent (#content) as one event listener as a whole. includs parent + children

function clickMe(e) {		
	//ignore clicks from parent: click from parent should not run.
    if (e.target !== e.currentTarget) {		//.target: actual target that received the event, the object listening for the event .currentTarget: the object listening for the event, assigned your listener to (theParent.addEventListener)
		var clickedItem = e.target.id;	
		}
	e.stopPropagation();					//stopPropagation method: prevents any parent event handlers from being executed
    } 
 */	


 /* Not sure yet how to know if X O got the winnerCombo
var winnerCombo = [	[0,1,2],
					[3,4,5],
					[6,7,8],
					[0,3,6],
					[1,4,7],
					[2,5,8],
					[0,4,8],
					[2,4,6]];

function getWinner(){
for (var i = 0; i <= TD.length; i++){									// loop through TD to know if it's X or O 
	for (var a = 0; a <= winnerCombo.length; a++){						// get into arrays of Winner Combo
		for (var b = 0; b <= winnerCombo[a].length; b++){				// to get into inner inner arrays and check
			if (winnerCombo[a][b] == TD.innerHTML("X")){				// to check if it's X or O that got the winnerCombo[a][b]
			alert("X wins");
			reset();
			}
			if (winnerCombo[a][b] == TD.innerHTML("O")){
			alert("O wins");
			reset();
			}
		}
	}
}
} // end of getWinner
*/

/*  winner combo index starts at 0
	horizontal 	0 && 1 && 2 || 3 && 4 && 5 || 6 && 7 && 8 ||
	vertical 	0 && 3 && 6 || 1 && 4 && 7 || 2 && 5 && 8 ||
	diagonal	0 && 4 && 8 || 2 && 4 && 6 */
