// Game will be played in the console only initially.
// First, program one singular round of RPS.

// Introduce game.
const gameIntro = `This is a game of rock, paper, scissors.`;
alert(gameIntro);

// Create variables to represent selections: Rock, Paper, or Scissors.
const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

// Create variables representing the player and computer.
player = 'Player';
computer = 'Computer';

// Get player selection
let playerSelection = prompt("Pick 'Rock', 'Paper', or 'Scissors': ");

// Convert player selection to case format to check selection criteria.
function convertSelection(selection) {
    convertedSelection = selection.slice(0,1).toUpperCase() + selection.slice(1,).toLowerCase();
    return convertedSelection;
}

playerSelection = convertSelection(playerSelection);

// Check player selection matches one of the three selections.
function checkSelection(selection) {
    while ( selection !== rock && selection !== paper && selection !== scissors ) {
        // Request player selection again until player selection matches criteria.
        selection = prompt("Selection not recognized. Pick 'Rock', 'Paper', or 'Scissors': ");
        selection = convertSelection(selection);
    }
    return selection;
}

// Create variable for player selection.
playerSelection = checkSelection(playerSelection);

// Setup a function to get a random number from the Math functions between 0 and 3.
function getRandomNumber() {
    randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}

// Create function that picks computer selection randomly using the getRandomNumber function.
function computerPlay() {
    let randomSelection;
    randomNumber = getRandomNumber();
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

// Create variable for computer selection.
let computerSelection = computerPlay();

// Create variables representing player and computer scores.
let playerScore = 0;
let computerScore = 0;

// Play one round of the game. Increment
function playRound(playerSelection, computerSelection) {
    let result;
    // Check for winner based on if conditions and report the winner and increment winner score.
    if ( playerSelection === computerSelection ) {
        result = 'Draw.';
        ++playerScore;
    } else if ( playerSelection === rock && computerSelection === scissors ) {
        result = `${player} wins. ${playerSelection} beats ${computerSelection}.`;
        ++playerScore;
    } else if ( playerSelection === paper && computerSelection === rock ) {
        result = `${player} wins. ${playerSelection} beats ${computerSelection}.`;
    } else if ( playerSelection === scissors && computerSelection === paper ) {
        result = `${player} wins. ${playerSelection} beats ${computerSelection}.`;
        ++playerScore;
    } else {
        result = `${computer} wins. ${computerSelection} beats ${playerSelection}.`;
        ++computerScore;
    }
    return result;
}

// Display the results of the round.
console.log(playRound(playerSelection, computerSelection));

// Game setup to play 5 rounds.
function game() {
    while ( playerScore !== 5 & computerScore !== 5 ) {
        playRound(playerSelection, computerSelection);
    }
}