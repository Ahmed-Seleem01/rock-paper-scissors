// Declare a module to store values that computer can choose form
const computerChoices = (()=>{
  // Define an array to store string values of choices
  const choices = ["rock", "paper", "scissors"];
  return {choices};
})();

// Get the input from the computer by random method and store it in the variable
function getComputerChoice() {
  // Define a variable to store random choice
  let computerInput = computerChoices.choices[Math.floor(Math.random() * 3)];
  // Return a random choice
  return computerInput;
}

// Get the input form the player by prompt method and store it in the variable
// Define variables to track the win count
let playerWinCount = 0;
let computerWinCount = 0;
const resultDiv = document.querySelector(".result");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    playGame(e);
    if (playerWinCount === 5) {
      resultDiv.innerText = "Final result: You Win!";
      playerWinCount = 0;
      computerWinCount = 0;
    } else if (computerWinCount === 5) {
      resultDiv.innerText = "Final result: You Lose!";
      computerWinCount = 0;
      playerWinCount = 0;
    }
  });
});
// Define a function for playing one round
function playRound(playerSelection, computerSelection) {
  // Make sure the choices is case-insensitive
  let playerChoice = playerSelection.toLowerCase();
  let computerChoice = computerSelection.toLowerCase();
  // Make a condition to check if the player wins or loses against the computer
  if(playerChoice === "paper" && computerChoice === "rock") return "You Win! Rock beats Scissors";
  else if(playerChoice === "paper" && computerChoice === "scissors") return "You Lose! Scissors beats Paper";
  else if(playerChoice === "rock" && computerChoice === "scissors") return "You Win! Rock beats Scissors";
  else if(playerChoice === "rock" && computerChoice === "paper") return "You Lose! Paper beats Rock";
  else if(playerChoice === "scissors" && computerChoice === "paper") return "You Win! Scissors beats Paper";
  else if(playerChoice === "scissors" && computerChoice === "rock") return "You Lose! Rock beats Scissors";
  else return "Draw"; 
}

// Define a function to play the game
function playGame(e) {
  let result = playRound(e.target.textContent, getComputerChoice());

  // If the player wins increase his win count
  if (result.includes("You Win")) {
    playerWinCount++;
  }
  // If the computer wins increase its win count
  else if (result.includes("You Lose")) {
    computerWinCount++;
  }

  resultDiv.innerText = `${result}
  Player win count: ${playerWinCount}
  Computer win count: ${computerWinCount}`;
}
