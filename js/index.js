// Get the input from the computer by random method and store it in the variable
function getComputerChoice(){
  // Define an array to store string values of choices
  const gameWords = ['rock', 'paper', 'scissors'];
  // Define a variable to store random choice
  let computerInput = gameWords[Math.floor(Math.random()*3)];
  console.log(computerInput);
  // Return a random choice
  return computerInput;
}


// Get the input form the player by prompt method and store it in the variable
// Define variables to track the win count 
let playerWinCount = 0;
let computerWinCount = 0;
const resultDiv = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
  btn.addEventListener('click', (e)=>{
    playGame(e);
    if(playerWinCount ===5){
      resultDiv.innerText = 'You Win!';
      playerWinCount = 0;
    }
    else if(computerWinCount === 5){
      resultDiv.innerText = 'You Lose!';
      computerWinCount = 0;
    }
  });
});
// Define a function for playing one round
function playRound(playerSelection, computerSelection){
  // Make sure the playerSelection parameter is case-insensitive
  playerSelection = playerSelection.toLowerCase();
  console.log(playerSelection)
  // Make a condition to check if the player wins or loses against the computer
  switch(playerSelection){
    // If the selection is rock
    case 'rock':
      if(computerSelection === 'paper'){
        return "You Lose! Paper beats Rock";
      } 
      else if(computerSelection === 'scissors'){
        return "You Win! Rock beats Scissors";
      }else{
        return "Draw";
      }
    // If the selection is paper  
    case 'paper':
      if(computerSelection === 'rock'){
        return "You Win! Paper beats Rock";
      } 
      else if(computerSelection === 'scissors'){
        return "You Lose! Scissors beats Paper";
      }else{
        return "Draw";
      }
    // If the selection is scissors  
    case 'scissors':
      if(computerSelection === 'rock'){
        return "You Lose! Rock beats Scissors";
      } 
      else if(computerSelection === 'paper'){
        return "You Win! Scissors beats Paper";
      }else{
        return "Draw";
      }
    // If the selection is not defined 
    default:
      return "You must enter paper, rock or scissors"
  }
}

// Define a function to play the game
function playGame(e){
  
  let result = playRound(e.target.textContent, getComputerChoice());
  
  // If the player wins increase his win count
  if(result.includes("You Win")){
    playerWinCount++;
  }
  // If the computer wins increase its win count
  else if(result.includes("You Lose")){
    computerWinCount++;
  }  

  resultDiv.innerText = `${result}
  Player win count: ${playerWinCount}
  Computer win count: ${computerWinCount}`;
};