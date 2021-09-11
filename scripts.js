// Game will be played in the console only initially
// First, program one singular round of RPS

// Introduce game
const gameIntro = `This is a game of rock, paper, scissors.`;
alert(gameIntro);

// Create variables to represent choices: Rock, Paper, or Scissors
const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

// Get player choice
let playerChoice = prompt("Pick 'Rock', 'Paper', or 'Scissors': ");

// Convert player choice to case format to check choice criteria
function convertChoice(choice) {
    convertedChoice = choice.slice(0,1).toUpperCase() + choice.slice(1,).toLowerCase();
    return convertedChoice;
}

playerChoice = convertChoice(playerChoice);

// Check player choice matches one of the three choices
function checkChoice(choice) {
    while ( choice !== rock && choice !== paper && choice !== scissors ) {
        // Request player choice again until player choice matches criteria
        choice = prompt("Choice not recognized. Pick 'Rock', 'Paper', or 'Scissors': ");
        choice = convertChoice(choice);
    }
    return choice;
}

playerChoice = checkChoice(playerChoice);

// Get a random number from the Math functions between 0 and 3.
function getRandomNumber() {
    randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}

// create function that picks computer choice randomly
function computerPlay() {
    let randomChoice;
    randomNumber = getRandomNumber();
    switch (randomNumber) {
        case 0:
            randomChoice = rock;
            break;
        case 1:
            randomChoice = paper;
            break;
        case 2:
            randomChoice = scissors;
    }
    return randomChoice;
}

// create variable for computer choice
let computerChoice = computerPlay();

console.log(`Player choice is ${playerChoice}.`)
console.log(`Computer choice is ${computerChoice}.`)

// display choice of player and choice of computer
// display who won the round