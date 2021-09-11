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

// Create function to get player selection including checks for proper input.
function playerPlay() {
    // Get player selection from input.
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

    return playerSelection;
}

// Create function that picks computer selection randomly using the getRandomNumber function.
function computerPlay() {
    // Setup a function to get a random number from the Math functions between 0 and 3.
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

// Create variables representing player and computer scores.
let playerScore = 0;
let computerScore = 0;

// Play one round of the game. Increment the winner's score and return the result of the round.
function playRound() {
    // Create variable for computer selection.
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    let result;
    // Check for winner based on if conditions and report the winner and increment winner score.
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

// Game setup to play 5 rounds maximum.
function game() {
    // Play game until one score reaches 3 (for a maximum of 5 rounds).
    while ( playerScore !== 3 && computerScore !== 3 ) {
        // Report results of the round to console.
        console.log(playRound());
    }
    // Report results of the game to console.
    ( playerScore === 3 ) ? console.log(`Player wins! Player: ${playerScore}. Computer: ${computerScore}.`) : console.log(`Computer wins. ${playerScore}. Computer: ${computerScore}.`);
}

// Initiate game.
game();