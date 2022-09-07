//Code to make submit button disappear and make the next section appear
const btn = document.getElementById("submit-button");

btn.addEventListener("click", () => {
  if (document.querySelector("#name-field").value != "") {
    // 👇️ hide button & hide container
    btn.style.display = "none";
    const roof = document.getElementById("container");
    roof.style.display = "none";

    // 👇️ show div
    const box = document.getElementById("box");
    box.style.display = "block";
  }
});

//Code to make scoreboard appear once a pokemon is clicked
const rock = document.getElementById("rock-button");
rock.addEventListener("click", () => {
  // 👇️ show div
  const box = document.getElementById("scoreboard");
  box.style.display = "block";
});
const paper = document.getElementById("paper-button");
paper.addEventListener("click", () => {
  // 👇️ show div
  const box = document.getElementById("scoreboard");
  box.style.display = "block";
});
const scissors = document.getElementById("scissors-button");
scissors.addEventListener("click", () => {
  // 👇️ show div
  const box = document.getElementById("scoreboard");
  box.style.display = "block";
});

//Code to make scoreboard disappear once a mode is clicked
const normal = document.getElementById("normal-button");
normal.addEventListener("click", () => {
  // 👇️ show div
  const box = document.getElementById("scoreboard");
  box.style.display = "none";
  document.getElementById("rock-button").disabled = false;
  document.getElementById("paper-button").disabled = false;
  document.getElementById("scissors-button").disabled = false;
});
const reverse = document.getElementById("reverse-button");
reverse.addEventListener("click", () => {
  // 👇️ show div
  const box = document.getElementById("scoreboard");
  box.style.display = "none";
  document.getElementById("rock-button").disabled = false;
  document.getElementById("paper-button").disabled = false;
  document.getElementById("scissors-button").disabled = false;
});
const mjp = document.getElementById("korean-button");
mjp.addEventListener("click", () => {
  // 👇️ show div
  const box = document.getElementById("scoreboard");
  box.style.display = "none";
  document.getElementById("rock-button").disabled = false;
  document.getElementById("paper-button").disabled = false;
  document.getElementById("scissors-button").disabled = false;
});

//Global variables
var currentGameMode = "waiting for user name";
var winCount = 0;
var loseCount = 0;
var drawCount = 0;
var totalRounds = 0;
var winningPercentage = 0;
var userName = "";
var currentWinner = "";

//Helper function for computer to generate a choice
var determineComputerChoice = function () {
  var randomDecimal = Math.random() * 3;
  // remove the decimal
  var randomInteger = Math.floor(randomDecimal);
  // add 1 to get a number between 1 and 3 inclusive
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

//Helper function to assign option to computer's choice
var assignComputerResponse = function () {
  var computerNumber = determineComputerChoice();
  var computerResponse;
  if (computerNumber == 1) {
    computerResponse = "rock";
  } else if (computerNumber == 2) {
    computerResponse = "scissors";
  } else {
    computerResponse = "paper";
  }
  return computerResponse;
};

var renameChoice = function (input) {
  if (input == "rock") {
    input = "Bulbasaur";
  } else if (input == "paper") {
    input = "Charmander";
  } else {
    input = "Squirtle";
  }
  return input;
};

//Helper function for winning scenario
var winningScenario = function (input, computerResponse) {
  myOutputValue =
    (input == "rock" && computerResponse == "scissors") ||
    (input == "scissors" && computerResponse == "paper") ||
    (input == "paper" && computerResponse == "rock");
  return myOutputValue;
};

//Helper function to determine winning percentage
var calcWinningPercentage = function (winCount, totalRounds) {
  myOutputValue = (Number(winCount) / Number(totalRounds)) * 100;
  return myOutputValue;
};

//Helper functions for messages
var introMessage = function (userName) {
  myOutputValue =
    "Hello there <b>" +
    userName +
    "</b>!" +
    "</br>" +
    "</br>" +
    "Welcome to the world of <b>Bulb-Char-Squirt</b>! My name is Oak! People call me the Pokémon Prof!" +
    "</br>" +
    "</br>" +
    "Go ahead and choose a game mode.";
  return myOutputValue;
};

var performanceMessage = function (winningPercentage) {
  if (winningPercentage > 50) {
    myOutputValue = "Keep up the good work!";
  } else {
    myOutputValue = "Try harder!";
  }
  return myOutputValue;
};

var choicesMade = function (input, computerResponse) {
  myOutputValue =
    "You chose <b>" +
    input +
    "</b>, while the computer chose <b>" +
    computerResponse +
    "</b>";
  return myOutputValue;
};

//Helper function to output message each time mode is changed
var changeMode = function (input) {
  currentGameMode = input;
  winCount = 0;
  loseCount = 0;
  drawCount = 0;
  totalRounds = 0;
  if (currentGameMode == "normalSPS") {
    myOutputValue =
      "You have chosen <b>Normal</b> mode! " +
      "</br>" +
      "</br>" +
      " In this mode, Bulbasaur wins Squirtle, Squirtle wins Charmander, and Charmander wins Bulbasaur. " +
      "</br>" +
      "</br>" +
      " Go ahead - choose your Pokémon!";
  } else if (currentGameMode == "reverseSPS") {
    myOutputValue =
      "You have chosen <b>Reverse</b> mode! " +
      "</br>" +
      "</br>" +
      " In this mode, Bulbasaur wins Charmander, Charmander wins Squirtle, and Squirtle wins Bulbasaur. " +
      "</br>" +
      "</br>" +
      " Go ahead - choose your Pokémon!";
  } else if (currentGameMode == "muk-jji-ppa") {
    myOutputValue =
      "You have chosen <b>Muk-Jji-Ppa</b> mode! " +
      "</br>" +
      "</br>" +
      " In this mode, you must win one time and draw the next to cement your win! " +
      "</br>" +
      "</br>" +
      " Go ahead - choose your Pokémon!";
  }
  return myOutputValue;
};
//Helper function to output scoreboard message
var scoreboardMessage = function () {
  myOutputValue =
    totalRounds +
    "</b></br>" +
    "You have won: " +
    winCount +
    "x!" +
    "</br>" +
    "The computer has won: " +
    loseCount +
    "x!" +
    "</br>" +
    "Both of you have drawn: " +
    drawCount +
    "x!";
  return myOutputValue;
};

var scoreboard = function () {
  if (currentGameMode == "normalSPS") {
    myOutputValue = "<b>Game mode: Normal | Round: " + scoreboardMessage();
  } else if (currentGameMode == "reverseSPS") {
    myOutputValue = "<b>Game mode: Reverse | Round: " + scoreboardMessage();
  } else {
    myOutputValue =
      "<b>Game mode: MJP | Round: " +
      totalRounds +
      "</b></br>" +
      "You have won: " +
      winCount +
      "x!" +
      "</br>" +
      "The computer has won: " +
      loseCount +
      "x!";
  }
  return myOutputValue;
};

//Helper function for winning code
var winningCode = function (input, computerResponse) {
  winCount = winCount + 1;
  winningPercentage = calcWinningPercentage(winCount, totalRounds);
  input = renameChoice(input);
  computerResponse = renameChoice(computerResponse);
  myOutputValue =
    choicesMade(input, computerResponse) +
    ".</br>" +
    "Congrats " +
    userName +
    ", you win! Your win rate is " +
    winningPercentage.toFixed(0) +
    "%. " +
    performanceMessage(winningPercentage);
  return myOutputValue;
};

//Helper function for losing code
var losingCode = function (input, computerResponse) {
  loseCount = loseCount + 1;
  winningPercentage = calcWinningPercentage(winCount, totalRounds);
  input = renameChoice(input);
  computerResponse = renameChoice(computerResponse);
  myOutputValue =
    choicesMade(input, computerResponse) +
    ".</br>" +
    "Sorry " +
    userName +
    ", you lose! Your win rate is " +
    winningPercentage.toFixed(0) +
    "%. " +
    performanceMessage(winningPercentage);
  return myOutputValue;
};

//Helper function for drawing code
var drawingCode = function (input, computerResponse) {
  drawCount = drawCount + 1;
  winningPercentage = calcWinningPercentage(winCount, totalRounds);
  input = renameChoice(input);
  computerResponse = renameChoice(computerResponse);
  myOutputValue =
    choicesMade(input, computerResponse) +
    ".</br>" +
    userName +
    ", you draw! Your win rate is " +
    winningPercentage.toFixed(0) +
    "%. " +
    performanceMessage(winningPercentage);
  return myOutputValue;
};

//Main function
var main = function (input) {
  var myOutputValue = "";

  if (input === "") {
    myOutputValue = "Surely you must have a name, mystery contender.";
  } else if (currentGameMode == "waiting for user name" && input != "") {
    userName = input;
    currentGameMode = "normalSPS";
    myOutputValue = introMessage(userName);
  } else if (currentGameMode == "normalSPS") {
    var computerResponse = assignComputerResponse();

    console.log("You: ", input, ". Computer: ", computerResponse);

    totalRounds = totalRounds + 1;

    // Check if input is the same as computer choice, draw
    if (input === computerResponse) {
      myOutputValue = drawingCode(input, computerResponse);
      return myOutputValue;
    }

    // Win vs Lose
    if (winningScenario(input, computerResponse)) {
      myOutputValue = winningCode(input, computerResponse);
    } else {
      myOutputValue = losingCode(input, computerResponse);
    }
    return myOutputValue;
  } else if (currentGameMode == "reverseSPS") {
    var computerResponse = assignComputerResponse();

    console.log("You: ", input, ". Computer: ", computerResponse);

    totalRounds = totalRounds + 1;

    // Check if input is the same as computer choice, draw
    if (input === computerResponse) {
      myOutputValue = drawingCode(input, computerResponse);
      return myOutputValue;
    }

    // Win vs Lose
    if (winningScenario(input, computerResponse)) {
      myOutputValue = losingCode(input, computerResponse);
    } else {
      myOutputValue = winningCode(input, computerResponse);
    }
    return myOutputValue;
  } else if (currentGameMode == "muk-jji-ppa") {
    var computerResponse = assignComputerResponse();

    console.log("You: ", input, ". Computer: ", computerResponse);

    // Win vs Lose. Start with "if the input is not the same as computer choice"
    if (input != computerResponse) {
      if (winningScenario(input, computerResponse)) {
        currentWinner = "You";
        input = renameChoice(input);
        computerResponse = renameChoice(computerResponse);
        myOutputValue =
          choicesMade(input, computerResponse) +
          ".</br>" +
          currentWinner +
          " are the current winner!";
      } else {
        currentWinner = "The computer";
        input = renameChoice(input);
        computerResponse = renameChoice(computerResponse);
        myOutputValue =
          choicesMade(input, computerResponse) +
          ".</br>" +
          currentWinner +
          " is the current winner!";
      }
    }
    // Check if input is the same as computer choice, draw
    else {
      if (currentWinner == "You") {
        input = renameChoice(input);
        computerResponse = renameChoice(computerResponse);
        myOutputValue =
          choicesMade(input, computerResponse) +
          ".</br>" +
          "Round over - you win!";
        totalRounds = totalRounds + 1;
        winCount = winCount + 1;
        currentWinner = "";
      } else if (currentWinner == "The computer") {
        input = renameChoice(input);
        computerResponse = renameChoice(computerResponse);
        myOutputValue =
          choicesMade(input, computerResponse) +
          ".</br>" +
          "Round over - the computer won!";
        totalRounds = totalRounds + 1;
        loseCount = loseCount + 1;
        currentWinner = "";
      } else {
        input = renameChoice(input);
        computerResponse = renameChoice(computerResponse);
        myOutputValue =
          choicesMade(input, computerResponse) +
          ".</br>" +
          "There is currently no winner - try again!";
      }
    }
    return myOutputValue;
  }
  return myOutputValue;
};
