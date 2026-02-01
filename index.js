let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];
const choiceEmojis = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️'
};

const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const resultTextEl = document.getElementById('result-text');
const playerChoiceEl = document.getElementById('player-choice');
const computerChoiceEl = document.getElementById('computer-choice');

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resetBtn = document.getElementById('reset-btn');

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    }
    
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    }
    
    return 'computer';
}

function updateDisplay(playerChoice, computerChoice, result) {
    playerChoiceEl.textContent = choiceEmojis[playerChoice];
    computerChoiceEl.textContent = choiceEmojis[computerChoice];
    
    if (result === 'tie') {
        resultTextEl.textContent = "It's a tie!";
        resultTextEl.style.color = '#f39c12';
    } else if (result === 'player') {
        resultTextEl.textContent = 'You win!';
        resultTextEl.style.color = '#27ae60';
        playerScore++;
        playerScoreEl.textContent = playerScore;
    } else {
        resultTextEl.textContent = 'Computer wins!';
        resultTextEl.style.color = '#e74c3c';
        computerScore++;
        computerScoreEl.textContent = computerScore;
    }
}


function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    updateDisplay(playerChoice, computerChoice, result);
}
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    resultTextEl.textContent = 'Make your choice!';
    resultTextEl.style.color = '#333';
    playerChoiceEl.textContent = '❓';
    computerChoiceEl.textContent = '❓';
}

rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));
resetBtn.addEventListener('click', resetGame);