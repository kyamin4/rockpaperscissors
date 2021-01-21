// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
let userScore = 0;
let compScore = 0;


//event handlers
$("#shoot").click(function() {
  runGame();
});

function OnKeyEnterPressDoThis() {
  runGame();
}

addEventListener("keypress", function(e) {
  var key = e.which || e.keyCode || 0;

  if (key === 13) {
    OnKeyEnterPressDoThis();
  }
});


//game function
function runGame() {
  let message = "";
  let usrChoice;

  let compChoice = Math.floor(Math.random() * (3 - 0) + 0);
  message = $("#input").val();
  message.toLowerCase();
  console.log(message);
  $("#userChoice").text(message);

  //sets user choice to a number

  if (message == "rock") {
    usrChoice = 0;
  } else if (message == "paper") {
    usrChoice = 1;
  } else if (message == "scissors") {
    usrChoice = 2;
  } else {
    $("#result").text("Please enter a valid input!");
  }
  console.log("User Chose: " + usrChoice);

  //sets random computer number to an option

  if (compChoice == 0) {
    $("#computerChoice").text("Rock!");
  } else if (compChoice == 1) {
    $("#computerChoice").text("Paper!");
  } else if (compChoice == 2) {
    $("#computerChoice").text("Scissors!");
  }
  console.log("Computer Choice: " + compChoice);

  //rock is 0, paper is 1, scissors is 2

  //if both user and computer choose same choice then tie
  if (usrChoice == compChoice) {
    $("#result").text("Tie!");
  }
  //user chooses rock
  else if (usrChoice == 0 && compChoice == 1) {
    $("#result").text("Computer Wins!");
    compScore++;
  } else if (usrChoice == 0 && compChoice == 2) {
    $("#result").text("User Wins!");
    userScore++;
  }
  //user chooses paper
  else if (usrChoice == 1 && compChoice == 2) {
    $("#result").text("Computer Wins!");
    compScore++;
  } else if (usrChoice == 1 && compChoice == 0) {
    $("#result").text("User Wins!");
    userScore++;
  }
  //user chooses scissors
  else if (usrChoice == 2 && compChoice == 0) {
    $("#result").text("Computer Wins!");
    compScore++;
  } else if (usrChoice == 2 && compChoice == 1) {
    $("#result").text("User Wins!");
    userScore++;
  }
  
  $("#score").text("User: " + userScore + " Computer Score: " + compScore);
}
