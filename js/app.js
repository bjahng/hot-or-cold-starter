
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	//generate random number to guess
 	var getNewNumber = function() {
 		return Math.floor((Math.random() * 100) + 1);
 	}

 	var numToGuess = getNewNumber();
 	var count = 0;

 	function newGame() {
 		//generate random number to guess
 		numToGuess = getNewNumber();
 	 	
 		//reset guesses list
 		$("#guessList li").remove();
 
 		//reset guess counter
 		count = 0;
 		$("#count").text(count);

 		//reset user guess number
 		document.getElementById("userGuess").value = "";

 		//reset feedback
		$("#feedback").text("Make your Guess!"); 		
 	}

 	//when guess button gets clicked
 	$("#guessButton").click(function(){
  		//get guess and validate
		var userGuess = document.getElementById("userGuess");
		var userGuessVal = userGuess.value;

		if(isNaN(userGuessVal) || userGuessVal < 1 || userGuessVal > 100) {
			$("#feedback").text("Please enter a valid number between 1 and 100.");
		}
		//if validated...
		else {
			//subtract guess from random number and multiply by one if negative
			var numDiff = numToGuess - userGuessVal;

			if (numDiff < 1) {
				numDiff = (numDiff * (-1));
			}

			//compare guess with random number and output feedback
			if (numDiff == 0) {
				$("#feedback").text("You got it right!! Please try a NEW GAME!");
			}
			else if (numDiff < 10) {
				$("#feedback").text("You are VERY HOT!");
			}
			else if (numDiff < 20) {
				$("#feedback").text("You are HOT.");
			}
			else if (numDiff < 30) {
				$("#feedback").text("You are WARM.");
			}
			else if (numDiff < 50) {
				$("#feedback").text("You are COLD.");
			}
			else {
				$("#feedback").text("You are ICE COLD!");
			}

	  		//add to guess counter
	  		count+=1;
	  		$("#count").text(count);
	  		
	  		//add to guess list
	  		$("#guessList").append("<li>" + userGuessVal + "</li>");

	  		document.getElementById("userGuess").value = "";
	  	}
	  	return false;
  	});

  	//when "New Game" is clicked
  	$(".new").click(function(){
  		newGame();
  	});

});