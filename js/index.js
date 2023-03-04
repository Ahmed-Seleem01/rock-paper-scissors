// Declare a module to store values that computer can choose form
const computerChoices = (() => {
  // Define an array to store string values of choices
  const choices = ["rock", "paper", "scissors"];
  return { choices };
})();

const winCounter = (() => {
  // Define variables to track the win count
  let playerWinCount = 0;
  let computerWinCount = 0;
  const getPlayerWinCount = () => playerWinCount;
  const getComputerWinCount = () => computerWinCount;
  const playerWinIncrement = () => (playerWinCount += 1);
  const computerWinIncrement = () => (computerWinCount += 1);
  const resetPlayerWinCount = () => {
    playerWinCount = 0;
  };
  const resetComputerWinCount = () => {
    computerWinCount = 0;
  };
  return {
    getPlayerWinCount,
    getComputerWinCount,
    playerWinIncrement,
    computerWinIncrement,
    resetPlayerWinCount,
    resetComputerWinCount
  };
})();
// Get the input from the computer by random method and store it in the variable
function getComputerChoice() {
  // Define a variable to store random choice
  let computerInput = computerChoices.choices[Math.floor(Math.random() * 3)];
  // Return a random choice
  return computerInput;
}

// Define a function for playing one round
function playRound(playerSelection, computerSelection) {
  // Make sure the choices is case-insensitive
  let playerChoice = playerSelection.toLowerCase();
  let computerChoice = computerSelection.toLowerCase();
  // Make a condition to check if the player wins or loses against the computer
  if (playerChoice === "paper" && computerChoice === "rock") {
    // If the player wins increase his win count
    winCounter.playerWinIncrement();
    return "You Win! Rock beats Scissors";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    // If the computer wins increase its win count
    winCounter.computerWinIncrement();
    return "You Lose! Scissors beats Paper";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    // If the player wins increase his win count
    winCounter.playerWinIncrement();
    return "You Win! Rock beats Scissors";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    // If the computer wins increase its win count
    winCounter.computerWinIncrement();
    return "You Lose! Paper beats Rock";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    // If the player wins increase his win count
    winCounter.playerWinIncrement();
    return "You Win! Scissors beats Paper";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    // If the computer wins increase its win count
    winCounter.computerWinIncrement();
    return "You Lose! Rock beats Scissors";
  } else {
    return "Draw";
  }
}

// Define a function to play the game

const screenController = () => {
  const resultDiv = document.querySelector(".result");
  const buttons = document.querySelectorAll(".word");

  function playGame() {
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let result = playRound(e.target.textContent, getComputerChoice());
        // console.log(winCounter.getPlayerWinCount())
        // console.log(winCounter.getComputerWinCount())
        resultDiv.innerText = `${result}`;
        if (winCounter.getPlayerWinCount() === 5) {
          resultDiv.innerText = "Final result: You Win!";
          winCounter.resetComputerWinCount();
          winCounter.resetPlayerWinCount();
        } else if (winCounter.getComputerWinCount() === 5) {
          resultDiv.innerText = "Final result: You Lose!";
          winCounter.resetComputerWinCount();
          winCounter.resetPlayerWinCount();
        }
      });
    });
  }

  const start = document.querySelector(".start");
  start.addEventListener("click", playGame);
};

screenController();