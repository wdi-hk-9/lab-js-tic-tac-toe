window.onload = function(){
	var turn = 0;
	document.getElementById("left-player").style.visibility = "visible";
	var result = [[null,null,null],[null,null,null],[null,null,null]];
	// Turn = 0 is X's Turn //
	var pos = document.getElementsByClassName("position");
	for (var i=0;i<pos.length;i++){
		//1. add Event Listener
		document.getElementById(pos[i].id).addEventListener("click",function(){
			if (this.classList[0] == "modified"){
				// Occupied Cell //
			}else{
				this.className = "modified";
				if (turn == 0){
					// X's Turn //
					this.innerHTML = "X";
					this.className += " X";
					turn = 1;
					document.getElementById("right-player").style.visibility = "visible";
					document.getElementById("left-player").style.visibility = "hidden";
					position(result,this.id,"X");
				}else{
					// O's Turn //
					this.innerHTML = "O";
					this.className += " O";
					turn = 0;
					document.getElementById("left-player").style.visibility = "visible";
					document.getElementById("right-player").style.visibility = "hidden";
					position(result,this.id,"O");
				}	
			}
		});
	}

	document.getElementById("reset").addEventListener("click",function(){
		reset();
	});

	function position(statusArray,id,player){
		var idStr = id.split("-");
		var posRef = {
			'top': [0],
			'center': [1],
			'bottom': [2],
			'left':[0],
			'right':[2]
		};
		playerRef = {
			'X': "left-player",
			'O': "right-player",
			'left-player': "X",
			'right-player': "O"
		};
		statusArray[posRef[idStr[0]]][posRef[idStr[1]]] = player;

		if (winner(statusArray) !== ""){
			document.getElementById(playerRef[winner(statusArray)]).style.visibility = "visible";
			document.getElementById(playerRef[winner(statusArray)]).innerHTML = winner(statusArray) + "<br/>is<br/>the<b><br/>W<br/>I<br/>N<br/>N<br/>E<br/>R</b>!";
			if (confirm(winner(statusArray) + " has WON! Restart the Game?")){
				reset();
			}
		} else if(winner(statusArray) == "" && document.getElementsByClassName("modified").length == 9){
			alert("It's a draw!");
			reset();
		}
	}

	function winner(array){
		var i=0;
		var winnerPlayer = "";
		//diagonal
		if (array[1][1] !==null){
			var base = array[1][1];
			if(array[0][0]==base && array[2][2] == base){
				winnerPlayer = base;
			}
			if(array[0][2]==base && array[2][0]==base){
				winnerPlayer = base;
			}
		}
		//Vertical
		do{
			if(array[0][i]!==null){
				var base = array[0][i];
				if(base == array[1][i] == array[2][i]){
					winnerPlayer = base;
				}
			};
			i++;
		}while(i<array.length && winnerPlayer == "")
		//Horizontal
		var i=0;
		do{
			if(array[i][0]!==null){
				var base = array[i][0];
				if(base == array[i][1] == array[i][2]){
					winnerPlayer = base;
				}
			};
			i++;
		}while(i<array.length && winnerPlayer == "")

		return winnerPlayer;
	}

	function reset(){
		var modPos = document.getElementsByClassName("modified");
		for (var n=modPos.length-1;n>=0;n--){
			document.getElementById(modPos[n].id).innerHTML = "";
			document.getElementById(modPos[n].id).className = "position";
		}

		turn = 0;
		result = [[null,null,null],[null,null,null],[null,null,null]];
		Array.prototype.forEach.call(document.getElementsByClassName("player"),function(element){
			document.getElementById(element.id).style.visibility = "hidden";
			document.getElementById(element.id).innerHTML = playerRef[element.id] + "'s Turn";
		});

		document.getElementById("left-player").style.visibility = "visible";
	}
}


