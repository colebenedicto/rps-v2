/* 
ROCK, PAPER SCISSORS

Players
  Computer
    Randomize between rock, paper, and scissors
  User
    Get input from user through form field (use the .toLowerCase() or .toHigherCase())

Round
  -evaluates the winner and loser between the computer choice and player for each round

Game
  -evaluates a winner and loser after n number of rounds (n === 5)
*/

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    let num = Math.floor(Math.random() * 3);
    return choices[num];
}

let compScore = 0;
let playerScore = 0;

function playRound(playerSelection, compSelection) {

    if ((playerSelection === 'rock' && compSelection === 'scissors') ||
        (playerSelection === 'paper' && compSelection === 'rock') ||
        (playerSelection === 'scissors' && compSelection === 'paper')) {
        playerScore++;
        return 'player wins!';
    } else if ((compSelection === 'rock' && playerSelection === 'scissors') ||
        (compSelection === 'paper' && playerSelection === 'rock') ||
        (compSelection === 'scissors' && playerSelection === 'paper')) {
        compScore++;
        return 'computer wins!';
    } else {
        return 'it\'s a tie!'
    } 
}

function game() {
    while (Math.max(playerScore, compScore) < 5) {
        let compChoice = computerPlay();
        let playerChoice = prompt('Choose your weapon').toLowerCase();
        console.log(playRound(playerChoice, compChoice));
    }

    console.log(
        `Game over! ${playerScore === 5 ? 'Player' : 'Computer'} wins! \n
        Score: Player: ${playerScore} | Computer: ${compScore}`
    );

}

game();