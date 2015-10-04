window.onload = function() {
var gameboard = [null, null, null,
				  null, null, null,
				  null, null, null];

var moves;

function setMark(player, position) {
	gameboard[position] = player;
}

function getMarkAt(position) {
	return gameboard[position];
}

function getPersonMove() {
	var personInput = prompt("Please choose a number between 0 to 8, inclusive");
	if (gameboard[personInput] === null) {
		setMark("x", personInput);
	}
	else {
		getPersonMove();
	}
}

function getComputerMove() {
	var randomIndex = Math.floor(Math.random() * 9);
	if (gameboard[randomIndex] === null) {
		setMark("o", randomIndex);
	}
	else {
		getComputerMove();
	}
}

function checkForWinner() {
	if (winnerIs("x")) {
		return "x";
	}
	else if (winnerIs("o")) {
		return "o";
	}
	else {
		return null;
	}
}

function winnerIs(player) {
	return winsRow(player) || winsCol(player) || winsDiag(player);
}

function winsRow(player) {
	return allThree(player, getMarkAt(0), getMarkAt(1), getMarkAt(2)) ||
	allThree(player, getMarkAt(3), getMarkAt(4), getMarkAt(5)) ||
	allThree(player, getMarkAt(6), getMarkAt(7), getMarkAt(8)); 
}

function winsCol(player) {
	return allThree(player, getMarkAt(0), getMarkAt(3), getMarkAt(6)) ||
	allThree(player, getMarkAt(1), getMarkAt(4), getMarkAt(7)) ||
	allThree(player, getMarkAt(2), getMarkAt(5), getMarkAt(8)); 
}

function winsDiag(player) {
	return allThree(player, getMarkAt(0), getMarkAt(4), getMarkAt(8)) ||
	allThree(player, getMarkAt(2), getMarkAt(4), getMarkAt(6));
}

function allThree(player, cellOne, cellTwo, cellThree) {
	return (cellOne === player) && (cellTwo === player) && (cellThree === player);
}

function addXOrO() {
	for(moves = 0; moves <=8; moves++) {
		if (moves % 2 === 0) {
			getPersonMove();
			console.log(gameboard);
		
			var winner = checkForWinner();
			if (winner) {
				alert(winner + " won!");
				resetBoard();
			}
		}
		
		else {
			getComputerMove();
			
			console.log(gameboard);
			var winner = checkForWinner();
			if (winner) {
				alert(winner + " won!");
				resetBoard();
			}
		}
	}
	
	if (moves >= 9) {
		alert("Game Over");
		return;
	}	
}

function resetBoard() {
	for (var i = 0; i < gameboard.length; i++) {
		gameboard[i] = null;
	}
}

document.getElementById("reset-button").addEventListener("click", resetBoard);

for (var i = 0; i < gameboard.length; i++) {
	document.getElementById("sq[i]").addEventListener("click", addXOrO);
}
}