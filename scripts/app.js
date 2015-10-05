var turn;

function startGame() {
	
	if (Math.random() < 0.5) {
		turn = "X";
	}
	else {
		turn = "O";
	}

	message("Its " + turn + "'s turn");
	
	addClickEvents();
}

function addClickEvents() {
    var squares = document.getElementsByClassName("square");
    var clear = document.getElementById("button");
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", markCell);
    }
    clear.addEventListener("click", clearBoard);

}

function message(msg) {
	document.getElementById("message").innerHTML = msg;
}

var markCell = function () {
	if (this.innerHTML === "") {
		this.innerHTML = turn;
			if (this.innerHTML === "X") {
				this.setAttribute("id", "red_background");
				var cellNum = parseInt(this.id);
				enterSpaceInBoard(cellNum, turn);
			}
			else if (this.innerHTML === "O") {
				this.setAttribute("id", "yellow_background");
				var cellNum = parseInt(this.id);
				enterSpaceInBoard(cellNum, turn);
			}
		switchTurn();
	}
	else {
		message("That cell is marked!");
	}
}

function enterSpaceInBoard(cellNum, turn) {
    var row;
    if (cellNum < 3) {
        row = 0;
    } 
    else if (cellNum < 6) {
        row = 1;
    } 
    else {
        row = 2;
    }
    var col = cellNum % 3;
    board[row][col] = turn;
    checkWinner();
}

function checkWinner(row, col, turn) {
	if (board[0][0] && board[0][1] && board[0][2] === turn) {
		return turn;
		alert(turn + " wins!");
	}
	else if (board[1][0] && board[1][1] && board[1][2] === turn) {
		return turn;
		alert(turn + " wins!");
	}
	else if (board[2][0] && board[2][1] && board[2][2] === turn) {
		return turn;
		alert(turn + " wins!");
	}
	else if (board[0][0] && board[1][0] && board[2][0] === turn) {
		return turn;
		alert(turn + " wins!");
	}
	else if (board[0][1] && board[1][1] && board[2][1] === turn) {
		return turn;
		alert(turn + " wins!");
	}
	else if (board[0][2] && board[1][2] && board[2][2] === turn) {
		return turn;
		alert(turn + " wins!");
	}
	else if (board[0][0] && board[1][1] && board[2][2] === turn) {
		return turn;
		alert(turn + " wins!");
	}
	else if (board[0][2] && board[1][1] && board[2][0] === turn) {
		return turn;
		alert(turn + " wins!");
	}
	else {
		alert("It's a draw");
	}
}

function switchTurn() {
	if (turn == "X") {
		turn = "O";
		message("Its " + turn + "'s turn");
	}
	else {
		turn = "X";
		message("Its " + turn + "'s turn");
	}
}

var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

var clearBoard = function() {
	var squares = document.getElementsByClassName("square");
    for (var i = 0; i < squares.length; i++) {
        squares[i].innerHTML = "";
        squares[i].setAttribute("id", "");
    }
    startGame();
};	




