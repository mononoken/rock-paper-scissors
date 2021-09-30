const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

player = 'Player';
computer = 'Computer';

let playerScore = 0;
let computerScore = 0;
let result;

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
  refreshContent();
  return result;
}

// Game setup to declare winner when player or computer score equals 3.
function playGame() {
  if ( playerScore == 3 ) {
    result = `Player wins game!`
    resultPara.textContent = `${result}`;
    promptReset();
  }
  
  if ( computerScore == 3 ) {
    result = `Computer wins game.`
    resultPara.textContent = `${result}`;
    promptReset();
  }
}

function resetGame() {
  result = '';
  playerScore = 0;
  computerScore = 0;
  refreshContent();

  resetDiv.removeChild(resetBtn);
}

function promptReset() {
  resetBtn.textContent = 'Play again?';
  resetDiv.appendChild(resetBtn);

  resetBtn.addEventListener('click', () => {
    resetGame();
  });
}

function refreshContent() {
  resultPara.textContent = `${result}`;
  playerScorePara.textContent = `${playerScore}`;
  computerScorePara.textContent = `${computerScore}`;  
}

const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

const resultPara = document.getElementById('round-result');
const playerScorePara = document.getElementById('player-score');
const computerScorePara = document.getElementById('computer-score');

const resetDiv = document.getElementById('reset-div');
const resetBtn = document.createElement('button')

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