let compScore = 0;
let playerScore = 0;

game();

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

function game() {
    while (Math.max(playerScore, compScore) < 5) {
        let compChoice = computerPlay();
        let playerChoice = prompt('Choose your weapon').toLowerCase();
        console.log(playRound(playerChoice, compChoice));
    }

    console.log(
        `Game over! ${playerScore === 5 ? 'You win!' : 'You Lose!'} \n` +
        `Score: Player: ${playerScore} | Computer: ${compScore}`);
}