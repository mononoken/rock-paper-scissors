const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

player = 'Player';
computer = 'Computer';

let playerScore = 0;
let computerScore = 0;

// Get random computer selection.
function computerPlay() {
  // Get random number: 0, 1, or 2.
  function getRandomTriNumber() {
    randomTriNumber = Math.floor(Math.random() * 3);
    return randomTriNumber;
  }
  randomTriNumber = getRandomTriNumber();

  let randomSelection;
    switch (randomTriNumber) {
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

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let result;
  // TODO: Consider if result statement was a function itself instead of repeated.
  if ( playerSelection === computerSelection ) {
    result = 'Draw.';
  } else if ( playerSelection === rock && computerSelection === scissors ) {
    result = `${player} wins round. ${playerSelection} beats ${computerSelection}.`;
    ++playerScore;
  } else if ( playerSelection === paper && computerSelection === rock ) {
    result = `${player} wins round. ${playerSelection} beats ${computerSelection}.`;
    ++playerScore;
  } else if ( playerSelection === scissors && computerSelection === paper ) {
    result = `${player} wins round. ${playerSelection} beats ${computerSelection}.`;
    ++playerScore;
  } else {
    result = `${computer} wins round. ${computerSelection} beats ${playerSelection}.`;
    ++computerScore;
  }
  resultPara.textContent = `${result}`;
  playerScorePara.textContent = `${playerScore}`;
  computerScorePara.textContent = `${computerScore}`;
  return result;
}

// Game setup to declare winner when player or computer score equals 3.
function playGame() {
  if ( playerScore == 3 ) {
    console.log(`Player wins! Player: ${playerScore}. Computer: ${computerScore}.`)
  }
  
  if ( computerScore == 3 ) {
    console.log(`Computer wins. Player: ${playerScore}. Computer: ${computerScore}.`)
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
}

const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

const resultPara = document.getElementById('round-result');
const playerScorePara = document.getElementById('player-score');
const computerScorePara = document.getElementById('computer-score');

rockBtn.addEventListener('click', () => {
  let playerSelection = rock;
  playRound(playerSelection);
  playGame();
});

paperBtn.addEventListener('click', () => {
  let playerSelection = paper;
  playRound(playerSelection);
  playGame();
});

scissorsBtn.addEventListener('click', () => {
  let playerSelection = scissors;
  playRound(playerSelection);
  playGame();
});