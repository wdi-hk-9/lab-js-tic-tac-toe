window.onload = function(){


	//Global Variables
	var turn = 0;
	var theBox;
	var b;
	var bxt;
	var squaresFilled = 0;
	var w;
	var y;

	var painted = new Array();
	var content = new Array();

	for(var i = 0; i <= 8; i++){
		painted[i] = false;
		content[i] = " ";
	}

	var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],
						   	  [0,3,6],[1,4,7],[2,5,8],
						   	  [0,4,8],[2,4,6]];

	//Trigger
	document.getElementById("box0").addEventListener("click", function(){clickCanvas(0)}, false);
	document.getElementById("box1").addEventListener("click", function(){clickCanvas(1)}, false);
	document.getElementById("box2").addEventListener("click", function(){clickCanvas(2)}, false);
	document.getElementById("box3").addEventListener("click", function(){clickCanvas(3)}, false);
	document.getElementById("box4").addEventListener("click", function(){clickCanvas(4)}, false);
	document.getElementById("box5").addEventListener("click", function(){clickCanvas(5)}, false);
	document.getElementById("box6").addEventListener("click", function(){clickCanvas(6)}, false);
	document.getElementById("box7").addEventListener("click", function(){clickCanvas(7)}, false);
	document.getElementById("box8").addEventListener("click", function(){clickCanvas(8)}, false);

	//Game methods
	function clickCanvas(boxNum){
		var theBox = "box"+boxNum;
		var b = document.getElementById(theBox);
		var bxt = b.getContext("2d");

		if(painted[boxNum] == false){
			if(turn%2 == 0){
				bxt.fillStyle="orange";
				bxt.fillRect(0,0,300,150)
				bxt.beginPath();
				bxt.moveTo(10,10);
				bxt.lineTo(40,40);
				bxt.moveTo(40,10);
				bxt.lineTo(10,40);
				bxt.stroke();
				bxt.closePath();
				content[boxNum]= "X";
			}

			else{
				bxt.fillStyle="green";
				bxt.fillRect(0,0,300,150)
				bxt.beginPath();
				bxt.arc(25,25,20,0,Math.PI*2,true);
				bxt.stroke();
				bxt.closePath();
				content[boxNum] = "O";
				bxt.fillStyle="blue";
			}

		turn++;
		painted[boxNum] = true;
		squaresFilled++;
		checkForWinners(content[boxNum]);

		if(squaresFilled == 9){
			alert("GAME OVER!");
			location.reload(true);
			}
		}
		else{
			alert("That space is already occupied. YOU SILLY!")
		}

	}

	function checkForWinners(mark){

		for(var a = 0; a < winningCombinations.length; a++){
			if(content[winningCombinations[a][0]] == 
				mark&&content[winningCombinations[a][1]] ==
				mark&&content[winningCombinations[a][2]] ==
				mark) {
				alert(mark+" WON!");
			resetGame();
			}
		}
	}

	document.getElementById("resetGame").addEventListener("click", resetGame, false);

	function resetGame(){
		y = confirm("PLAY AGAIN?");
		if (y == true){
			location.reload(true);
		}
		else{
			alert("Break Time!");
		}
	}

	







}