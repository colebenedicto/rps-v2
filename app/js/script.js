const playerTally = document.querySelector('.player-score');
const computerTally = document.querySelector('.comp-score');
const buttons = document.querySelectorAll('.buttons .choice');
const message = document.querySelector('.message');
const restart = document.querySelector('.restart');
const rock = document.querySelector('.rock-btn');
const paper = document.querySelector('.paper-btn');
const scissors = document.querySelector('.sci-btn');
const playerIcon = document.querySelector('.player-icon');
const compIcon = document.querySelector('.comp-icon');

let playerScore = 0;
let compScore = 0;
let para;
let playerChoice;
let compChoice;
let endMessage;
let roundWinner;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;

        compChoice = computerPlay();
        roundWinner = playRound(playerChoice, compChoice); 
        updateScoreAndMessage();
        updateRPSIcons(playerChoice, compChoice);

        if (Math.max(playerScore, compScore) === 5) {
            endGame();
        }
    });
});

restart.addEventListener('click', () => {
    playerTally.textContent = 'You: ';
    computerTally.textContent = 'Computer: ';
    message.innerHTML = 'Start!';
    buttonsDisabled(false);
    playerScore = 0;
    compScore = 0;
    playerIcon.src = 'images/rock-player.png';
    compIcon.src = 'images/rock-comp.png';
}); 

function updateScoreAndMessage() {
  if (roundWinner === 'tie') {
    message.textContent = `It's a tie! ${capitalizeFirstLetter(playerChoice)} ties with ${compChoice}.`;
  } else if (roundWinner === 'player') {
    message.textContent = `You win! ${capitalizeFirstLetter(playerChoice)} beats ${compChoice}.`;
  } else if (roundWinner === 'computer') {
    message.textContent = `You lose! ${capitalizeFirstLetter(compChoice)} beats ${playerChoice}.`;
  }

  playerTally.textContent = `You: ${playerScore}`;
  computerTally.textContent = `Computer: ${compScore}`
}

function updateRPSIcons(player, comp) {
    switch(player) {
        case 'rock':
            playerIcon.src = 'images/rock-player.png';
            break;
        case 'paper':
            playerIcon.src = 'images/paper-player.png';
            break;
        case 'scissors':
            playerIcon.src = 'images/scissors-player.png';
            break;
    }

    switch(comp) {
        case 'rock':
            compIcon.src = 'images/rock-comp.png';
            break;
        case 'paper':
            compIcon.src = 'images/paper-comp.png';
            break;
        case 'scissors':
            compIcon.src = 'images/scissors-comp.png';
    }
}

function buttonsDisabled(isFalse) {
    buttons.forEach(button => {
        button.disabled = isFalse;
    });
}

function capitalizeFirstLetter(word) {
    return word[0].toUpperCase() + word.slice(1);
}


function endGame() {
    buttonsDisabled(true);
    endMessage = document.createElement('p');
    endMessage.textContent = `Game over! ${playerScore > compScore ? 'You win!' : 'Computer wins!'}`;
    message.textContent = endMessage.textContent;
    playerScore = 0;
    compScore = 0;
}

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    let num = Math.floor(Math.random() * 3);
    return choices[num];
}

function playRound(playerSelection, compSelection) {
    if ((playerSelection === 'rock' && compSelection === 'scissors') ||
        (playerSelection === 'paper' && compSelection === 'rock') ||
        (playerSelection === 'scissors' && compSelection === 'paper')) {
        playerScore++;
        return 'player';
            ;
    } else if ((compSelection === 'rock' && playerSelection === 'scissors') ||
        (compSelection === 'paper' && playerSelection === 'rock') ||
        (compSelection === 'scissors' && playerSelection === 'paper')) {
        compScore++;
        return 'computer';
    } else {
        return 'tie';
    } 
}

/* 
Functionalities to add in the next version/update:
 updateRoundMessage function that does: _ beats _, _ is beaten by _, _ ties with _.
*/

// eventListener for message, playerTall, compTally, playerIcon, and compIcon to add a class that animates them every time they're updated


// Animations

// message.addEventListener('change', () => {
//     // get all the classes and exchange the 
// });