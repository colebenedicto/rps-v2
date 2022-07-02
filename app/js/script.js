
const playerTally = document.querySelector('.player-score');
const computerTally = document.querySelector('.comp-score');
const buttons = document.querySelectorAll('.buttons .choice');
const message = document.querySelector('.message');
const restart = document.querySelector('.restart');

let compScore = 0;
let playerScore = 0;
let para;
let playerChoice;

function game() {
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            playerChoice = btn.id;
            let compChoice = computerPlay();
            para = playRound(playerChoice, compChoice);
            playerTally.textContent = `You: ${playerScore}`;
            computerTally.textContent = `Computer: ${compScore}`;
            message.textContent = para;

            if (Math.max(playerScore, compScore) === 5) {
                let endMessage = document.createElement('p');
                endMessage.textContent = `Game over! ${playerScore > compScore ? 'You win!' : 'Computer wins!'}`;
                message.appendChild(endMessage);
                restart.addEventListener('click', reset());
            }
        });
    });
}

function reset() {
    compScore = 0;
    playerScore = 0;
    playerTally.textContent = 'You: ';
    computerTally.textContent = 'Computer: ';
    message.innerHTML = 'Start';
    game();
}

restart.addEventListener('click', () => {
    playerTally.textContent = 'You: ';
    computerTally.textContent = 'Computer: ';
    message.innerHTML = 'Start!';
    game();
});

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
        return 'You win!';
            ;
    } else if ((compSelection === 'rock' && playerSelection === 'scissors') ||
        (compSelection === 'paper' && playerSelection === 'rock') ||
        (compSelection === 'scissors' && playerSelection === 'paper')) {
        compScore++;
        return 'You Lose.';
    } else {
        return 'It\'s a tie!';
    } 
}

game();

/* 
Functionalities to add in the next version/update:
 -- startGame() - runs only every time the website is opened or refreshed
 -- endGame() - ends game; disables buttons until 'New Game' button is clicked;
 -- "New Game" modal 
*/