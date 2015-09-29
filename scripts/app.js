window.onload() {
/*
when player clicks one of the 9 divs: 
register in JS that it has been clicked
[check that it is free
if free, ]return an "x" in that div
[if not free, alert "that square is not free. please choose another."]

computer then goes and puts an "o" in an unoccupied div
then player clicks an unoccupied div
computer then goes and puts an "x" in an unoccupied div
then player clicks on unoccupied div
check for winner
if winner, alert and stop play
if no winner, continue play. as before, and check after each move.
until all divs are filled. then end game.
*/

/* Get Player Move */
function clicked(id) {
  document.getElementById(id).addEventListener("click", writeX);
}

function writeX(id) {
  document.getElementbyId(id).innerHtml("x");
}

/* Get Computer Move */
function getComputerMove() {
  var randomIndex = Math.round(Math.random() * 9);
  document.getElementById("square"+randomIndex).innerHtml("o");
}

/* Check for winner
get all three if three in a row OR three in a column OR three in diagonal
three in a row if all x's or all o's
three in a column if ditto
three in diagonal if ditto
declare a winner
*/

function getWinner() {
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
	return winsRow(player) || winsColumn(player) || winsDiag(player);
}

function winsRow(player) {
  return allThree(player, "square0", "square1", "square2") || 
  allThree(player, "square3", "square4", "square5") || 
  allThree(player, "square6", "square7", "square8");
}
/* 
function winsColumn(player) {
  return allThree(player, sq("0"), sq("3"), sq("6")) || 
  allThree(player, sq("1"), sq("4"), sq("7")) || 
  allThree(player, sq("2"), sq("5"), sq("8"));	
}

function winsDiag() {
  return allThree(player, sq("0"), sq("4"), sq("8")) || 
  allThree(player, sq("2"), sq("4"), sq("6"));
}
*/
function allThree(player, sqA, sqB, sqC) {
	return (sqA === player) && (sqB === player) && (sqC === player);
}




}