const gameIntro = `This is a game of rock, paper, scissors.`;
alert(gameIntro);

const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

player = 'Player';
computer = 'Computer';

// Get player selection and check it is a valid selection.
function playerPlay() {
  let playerSelection = prompt("Pick 'Rock', 'Paper', or 'Scissors': ");

  function convertSelection(selection) {
    convertedSelection = selection.slice(0,1).toUpperCase() +
        selection.slice(1,).toLowerCase();
    return convertedSelection;
  }

  playerSelection = convertSelection(playerSelection);

  function checkSelection(selection) {
    while ( selection !== rock && selection !== paper && selection !== scissors ) {
      selection = prompt(
        "Selection not recognized. Pick 'Rock', 'Paper', or 'Scissors': ");
      selection = convertSelection(selection);
    }
    return selection;
  }

  playerSelection = checkSelection(playerSelection);

  return playerSelection;
}

// Get random computer selection.
function computerPlay() {
  // Get random number: 0, 1, or 2.
  function getRandomNumber() {
    randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
  }
  randomNumber = getRandomNumber();

  let randomSelection;
    switch (randomNumber) {
      case 0:
        randomSelection = rock;
        break;
      case 1:
        randomSelection = paper;
        break;
      case 2:
        randomSelection = scissors;
    }
  return randomSelection;
}

let playerScore = 0;
let computerScore = 0;

function playRound() {
  let playerSelection = playerPlay();
  let computerSelection = computerPlay();
  let result;

  if ( playerSelection === computerSelection ) {
    result = 'Draw.';
  } else if ( playerSelection === rock && computerSelection === scissors ) {
    result = `${player} wins round. ${playerSelection} beats ${computerSelection}.`;
    ++playerScore;
  } else if ( playerSelection === paper && computerSelection === rock ) {
    result = `${player} wins round. ${playerSelection} beats ${computerSelection}.`;
  } else if ( playerSelection === scissors && computerSelection === paper ) {
    result = `${player} wins round. ${playerSelection} beats ${computerSelection}.`;
    ++playerScore;
  } else {
    result = `${computer} wins round. ${computerSelection} beats ${playerSelection}.`;
    ++computerScore;
  }

  return result;
}

// Game setup to play best of 5 by ending at first score of 3.
function game() {
  while ( playerScore !== 3 && computerScore !== 3 ) {
    console.log(playRound());
  }
  ( playerScore === 3 ) ? 
    console.log(`Player wins! Player: ${playerScore}. Computer: ${computerScore}.`) :
    console.log(`Computer wins. Player: ${playerScore}. Computer: ${computerScore}.`);
}

game();