
const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const sciBtn = document.querySelector('.sci-btn');
const buttons = document.querySelectorAll('.buttons button');

let compScore = 0;
let playerScore = 0;

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
        return 'Player wins! \n' +
            `Score: You: ${playerScore} | Computer: ${compScore}`;
    } else if ((compSelection === 'rock' && playerSelection === 'scissors') ||
        (compSelection === 'paper' && playerSelection === 'rock') ||
        (compSelection === 'scissors' && playerSelection === 'paper')) {
        compScore++;
        return 'Computer wins! \n' +
            `Score: You: ${playerScore} | Computer: ${compScore}`;
    } else {
        return 'it\'s a tie! \n' +
            `Score: You: ${playerScore} | Computer: ${compScore}`;
    } 
}

    let playerPick;

    // rockBtn.addEventListener('click', () => {
    //     playerPick = 'rock';
    // });

    // paperBtn.addEventListener('click', () => {
    //     playerPick = 'paper';
    // });

    // sciBtn.addEventListener('click', () => {
    //     playerPick = 'scissors';
    // });



function game() {
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            playerPick = btn.id;
            let compChoice = computerPlay();
            console.log(playRound(playerPick, compChoice));
        });
    });
   

    console.log(
        `Game over! ${playerScore === 5 ? 'You win!' : 'You Lose!'} \n` +
        `Score: You: ${playerScore} | Computer: ${compScore}`);
}

game();