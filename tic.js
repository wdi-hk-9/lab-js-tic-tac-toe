(function(){

'use strict'

var
	winningComb = [
		[1,2,3],
		[4,5,6],
		[7,8,9],
		[1,4,7],
		[2,5,8],
		[3,6,9],
		[1,5,9],
		[3,5,7]
		],
	currentPlayerIsX = true,
	X_moves = [],
	O_moves = [];


window.onload = function (){
	var board, i;

	document.getElementById("clear")
		.addEventListener('click', clearBoard);

	board = document.getElementById("board");

	for (i = 0; i < board.children.length; i++) {
		board.children[i].addEventListener('click', recordMove);
	}
}



Array.prototype.contains = function (testArr) {
	var i, result = true;

	for (i = 0; i < testArr.length; i++) {
		if (this.indexOf(testArr[i]) === -1) {
			result = false;
			break;
		}
	}
	return result;
};

function hasWon (squaresPlayedArr) {
	return winningComb
		.map(function(winScenario){
			return squaresPlayedArr.contains(winScenario);
		})
		.reduce(function (prev, next) {
			return prev || next;
		})
};

function clearBoard (){
	var board, child, i;

	board = document.getElementById("board");
	for (i = 0; i < board.children.length; i++) {
		board.children[i].innerHTML = "";
	}
	currentPlayerIsX = true;
	X_moves = [];
	O_moves = [];
	document.getElementById('status').innerHTML = "It is X's turn"
}

function recordMove () {
	var
		target = event.target,
		moveSquare = parseInt(target.id);

	// only update move if the square was previously empty
	if (target.children.length === 0 ) {
		if (currentPlayerIsX) {
			X_moves.push(moveSquare);
			target.innerHTML = '<span>X</span>';
			if (hasWon(X_moves)) {
				alert ("Game over, X wins!");
				return true;
			}
			currentPlayerIsX = false;
			document.getElementById('status').innerHTML = "It is O's turn"
		} else {
			O_moves.push(moveSquare);
			target.innerHTML = '<span>O</span>';
			if (hasWon(O_moves)) {
				alert ("Game over, O wins!");
				return true;
			}
			currentPlayerIsX = true;
			document.getElementById('status').innerHTML = "It is X's turn"
		}
	}
}

}())