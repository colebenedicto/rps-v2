let playerPick;

const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const sciBtn = document.querySelector('.sci-btn');

rockBtn.addEventListener('click', () => {
    playerPick = 'rock';
    console.log(playRound(playerPick, computerPlay()));
});

paperBtn.addEventListener('click', () => {
    playerPick = 'paper';
    console.log(playRound(playerPick, computerPlay()));
});

sciBtn.addEventListener('click', () => {
    playerPick = 'scissors';
    console.log(playRound(playerPick, computerPlay()));
});

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



// game();

// function game() {
//     while (Math.max(playerScore, compScore) < 5) {
//         let compChoice = computerPlay();
//         let playerChoice = prompt('Choose your weapon').toLowerCase();
//         console.log(playRound(playerChoice, compChoice));
//     }

//     console.log(
//         `Game over! ${playerScore === 5 ? 'You win!' : 'You Lose!'} \n` +
//         `Score: You: ${playerScore} | Computer: ${compScore}`);
// }