/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var game = {

  // player 1 elements
  playerOne: document.getElementById("name-0"),
  playerOneScore: document.getElementById("score-0"),
  playerOneCurrentScore: document.getElementById("current-0"),
  playerOnePanel: document.getElementsByClassName("player-0-panel")[0],
  
  // player 1 elements
  playerTwo: document.getElementById("name-1"),
  playerTwoScore: document.getElementById("score-1"),
  playerTwoCurrentScore: document.getElementById("current-1"),
  playerTwoPanel: document.getElementsByClassName("player-1-panel")[0],
  
  // button elements
  buttonNewGame: document.getElementsByClassName("btn-new")[0],
  buttonRollDice: document.getElementsByClassName("btn-roll")[0],
  buttonHold: document.getElementsByClassName("btn-hold")[0],
  
  // dice image
  diceImage: document.getElementsByClassName("dice")[0]
}




function updateDiceImage(count) {

  if (count == 1) {
    game.diceImage.src = "dice-1.png"
  } else if (count == 2) {
    game.diceImage.src = "dice-2.png"
  } else if (count == 3) {
    game.diceImage.src = "dice-3.png"
  } else if (count == 4) {
    game.diceImage.src = "dice-4.png"
  } else if (count == 5) {
    game.diceImage.src = "dice-5.png"
  } else if (count == 6) {
    game.diceImage.src = "dice-6.png"
  }
}

// console.log("diceImage: ", diceImage);
// updateDiceImage(1);



function rollDice() {

  return Math.floor(Math.random() * 6) + 1;
}

// console.log(rollDice());





// window.onload = function() {

  

// }