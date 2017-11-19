/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var game = {
  playerOneName: document.getElementById("name-0"),
  playerOneScore: document.getElementById("score-0"),
  playerOneCurrentScore: document.getElementById("current-0"),
  playerOnePanel: document.getElementsByClassName("player-0-panel")[0],
  playerTwoName: document.getElementById("name-1"),
  playerTwoScore: document.getElementById("score-1"),
  playerTwoCurrentScore: document.getElementById("current-1"),
  playerTwoPanel: document.getElementsByClassName("player-1-panel")[0],
  buttonNew: document.getElementsByClassName("btn-new")[0],
  buttonRoll: document.getElementsByClassName("btn-roll")[0],
  buttonHold: document.getElementsByClassName("btn-hold")[0],
  dice: document.getElementsByClassName("dice")[0]
}

var scores = {
  gameOn: true,
  playerOneScore: 0,
  playerOneCurrentScore: 0
}


// Starts game and initializes values
function init() {

  scores.gameOn = true;
  scores.playerOneScore = 0;
  scores.playerOneCurrentScore = 0;

  game.playerOneScore.innerHTML = 0;
  game.playerOneCurrentScore.innerHTML = 0;
  game.playerTwoScore.innerHTML = 0;
  game.playerTwoCurrentScore.innerHTML = 0;
  game.playerOneName.innerHTML = "Player 1";
}


// Generates a random number from 1 - 6
function generateRandom() {

  var random = Math.floor(Math.random() * 6) + 1;

  return random;
}


game.buttonRoll.addEventListener('click', function() {

  if (scores.gameOn === true) {

    var number = generateRandom();
    game.dice.src = "dice-" + number + ".png";

    if (number === 1) {
      scores.playerOneCurrentScore = 0;
    } else {
      scores.playerOneCurrentScore += number;
    }

    game.playerOneCurrentScore.innerHTML = scores.playerOneCurrentScore;
  }
});


game.buttonHold.addEventListener('click', function() {

  if (scores.gameOn === true) {

    // update playerOneScore with playerOneCurrentScore amount
    scores.playerOneScore += scores.playerOneCurrentScore;
    game.playerOneScore.innerHTML = scores.playerOneScore;

    // reset playerOneCurrentScore to zero
    scores.playerOneCurrentScore = 0;
    game.playerOneCurrentScore.innerHTML = scores.playerOneCurrentScore;

    // check for win
    if (scores.playerOneScore >= 50) {
      game.playerOneName.innerHTML = "<b>You Won!</b>"; 
      scores.gameOn = false;
    }
  }
});


game.buttonNew.addEventListener('click', function() {

  if (scores.gameOn === false) {

    init();
  }
});


init();