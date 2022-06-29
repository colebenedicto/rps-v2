
const playerTally = document.querySelector('.player-score');
const computerTally = document.querySelector('.comp-score');
const buttons = document.querySelectorAll('.buttons .choice');
const message = document.querySelector('.message div');

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
                reset();
            }
        });
    });
}

function reset() {
    const newGame = document.createElement('button');
    newGame.textContent = 'New Game';
    message.appendChild(newGame);
    newGame.addEventListener('click', () => {
        playerTally.textContent = 'You: ';
        computerTally.textContent = 'Computer: ';
        message.innerHTML = '';
        game();
    });
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
        return 'You win!';
            ;
    } else if ((compSelection === 'rock' && playerSelection === 'scissors') ||
        (compSelection === 'paper' && playerSelection === 'rock') ||
        (compSelection === 'scissors' && playerSelection === 'paper')) {
        compScore++;
        return 'Computer wins!';
    } else {
        return 'it\'s a tie !';
    } 
}

game();