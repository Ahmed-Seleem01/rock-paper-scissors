// Get the input from the computer by random method and store it in the variable
function getComputerChoice(){
  // Define an array to store string values of choices
  const gameWords = ['rock', 'paper', 'scissors']
  // Define a variable to store random choice
  let computerInput = gameWords[Math.floor(Math.random()*3)]
  console.log(computerInput);
  // Return a random choice
  return computerInput;
}


// Get the input form the player by prompt method and store it in the variable
function getPlayerChoice(e){
  let choice = 'e.target.textContent';
  console.log(this);
  return choice;
}
const buttons = document.querySelectorAll('button');
console.log(buttons)
buttons.forEach(btn => {
  btn.addEventListener('click', getPlayerChoice);
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

// Define a function to play the game and it is IIFE (immediately invoked function expression)
function game(){
  // Define variables to track the win count 
  let playerWinCount = 0;
  let computerWinCount = 0;
  // Make a loop to play five times
  for (let i =0; i< 5; i++){
    let result = playRound(getPlayerChoice(), getComputerChoice());
    console.log(result);
    // If the player wins increase his win count
    if(result.includes("You Win")){
      playerWinCount++;
    }
    // If the computer wins increase its win count
    else if(result.includes("You Lose")){
      computerWinCount++;
    }
  }
  // Make a check if the player wins
  if(playerWinCount > computerWinCount){
    console.log("You Win the game")
  }
  // Make a check if the computer wins
  else if(playerWinCount < computerWinCount){
    console.log("You Lose the game")
  }else{
    console.log("Draw")
  }
};