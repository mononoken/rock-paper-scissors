// Game will be played in the console only initially
// First, program one singular round of RPS

// Introduce game
const gameIntro = `This is a game of rock, paper, scissors.`;
alert(gameIntro);

// Create variables to represent selections: Rock, Paper, or Scissors
const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

// Get player selection
let playerSelection = prompt("Pick 'Rock', 'Paper', or 'Scissors': ");

// Convert player selection to case format to check selection criteria
function convertSelection(selection) {
    convertedSelection = selection.slice(0,1).toUpperCase() + selection.slice(1,).toLowerCase();
    return convertedSelection;
}

playerSelection = convertSelection(playerSelection);

// Check player selection matches one of the three selections
function checkSelection(selection) {
    while ( selection !== rock && selection !== paper && selection !== scissors ) {
        // Request player selection again until player selection matches criteria
        selection = prompt("Selection not recognized. Pick 'Rock', 'Paper', or 'Scissors': ");
        selection = convertSelection(selection);
    }
    return selection;
}

// Create variable for player selection
playerSelection = checkSelection(playerSelection);

// Get a random number from the Math functions between 0 and 3.
function getRandomNumber() {
    randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}

// create function that picks computer selection randomly
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

// create variable for computer selection
let computerSelection = computerPlay();

// Play one round of the game.
function playRound(playerSelection, computerSelection) {
    
}

// display selection of player and selection of computer
// display who won the round