window.onload = function() {
var gameboard = [[null, null, null],
				  [null, null, null],
				  [null, null, null]];

function setMark(player, row, col) {
	gameboard[row][col] = player;
}

function getMarkAt(row, col) {
	return gameboard[row][col];
}

function clearBoard() {
	for (var i = 0; i < gameboard.length; i++) {
		for (var j = 0; j < gameboard[i].length; j++) {
			gameboard[i][j] = null;
		}
	}
}

function getWinner(player) {
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
	return allThree(player, getMarkAt(0, 0), getMarkAt(0, 1), getMarkAt(0, 2)) ||
	allThree(player, getMarkAt(1, 0), getMarkAt(1, 1), getMarkAt(1, 2)) ||
	allThree(player, getMarkAt(2, 0), getMarkAt(2, 1), getMarkAt(2, 2)); 
}

function winsCol(player) {
	return allThree(player, getMarkAt(0, 0), getMarkAt(1, 0), getMarkAt(2, 0)) ||
	allThree(player, getMarkAt(0, 1), getMarkAt(1, 1), getMarkAt(2, 1)) ||
	allThree(player, getMarkAt(0, 2), getMarkAt(1, 2), getMarkAt(2, 2)); 
}

function winsDiag(player) {
	return allThree(player, getMarkAt(0, 0), getMarkAt(1, 1), getMarkAt(2, 2)) ||
	allThree(player, getMarkAt(0, 2), getMarkAt(1, 1), getMarkAt(2, 0));
}

function allThree(player, cellOne, cellTwo, cellThree) {
	return (cellOne === player) && (cellTwo === player) && (cellThree === player);
}

document.getElementById("sqA").addEventListener("click", setMark("x", 0, 0));
document.getElementById("sqB").addEventListener("click", setMark("x", 0, 1));
document.getElementById("sqC").addEventListener("click", setMark("x", 0, 2));
document.getElementById("sqD").addEventListener("click", setMark("x", 1, 0));
document.getElementById("sqE").addEventListener("click", setMark("x", 1, 1));
document.getElementById("sqF").addEventListener("click", setMark("x", 1, 2));
document.getElementById("sqG").addEventListener("click", setMark("x", 2, 0));
document.getElementById("sqH").addEventListener("click", setMark("x", 2, 1));
document.getElementById("sqI").addEventListener("click", setMark("x", 2, 2));










};

/*
var a = getMarkAt(0, 0);
var b = getMarkAt(0, 1);
var c = getMarkAt(0, 2);
var d = getMarkAt(1, 0);
var e = getMarkAt(1, 1);
var f = getMarkAt(1, 2);
var g = getMarkAt(2, 0);
var h = getMarkAt(2, 1);
var i = getMarkAt(2, 2);

function winsRow(player) {
	return allThree(player, a, b, c) ||
	allThree(player, d, e, f) ||
	allThree(player, g, h, i); 
}

function winsCol(player) {
	return allThree(player, a, d, g) ||
	allThree(player, b, e, h) ||
	allThree(player, c, f, i); 
}

function winsDiag(player) {
	return allThree(player, a, e, i) ||
	allThree(player, c, e, g); 
}
*/