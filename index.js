// Rock-Paper-Scissors Game

const choices = ['rock', 'paper', 'scissors'];

// Generate a computer choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

// Play a single round
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    return { result: 'Tie', computerChoice };
  }

  switch (playerChoice) {
    case 'rock':
      return computerChoice === 'scissors' ? { result: 'You Win', computerChoice } : { result: 'You Lose', computerChoice };
    case 'paper':
      return computerChoice === 'rock' ? { result: 'You Win', computerChoice } : { result: 'You Lose', computerChoice };
    case 'scissors':
      return computerChoice === 'paper' ? { result: 'You Win', computerChoice } : { result: 'You Lose', computerChoice };
    default:
      return { result: 'Invalid choice', computerChoice };
  }
}

// Add event listeners to buttons
window.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn');
  const resultDiv = document.getElementById('result');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const playerChoice = button.getAttribute('data-choice');
      const { result, computerChoice } = playRound(playerChoice);
      resultDiv.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
    });
  });
});
