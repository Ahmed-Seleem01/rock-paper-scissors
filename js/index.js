// Get the input from the computer by random method and store it in the variable
function getComputerChoice(){
  // define an array to store string values of choices
  const gameWords = ['rock', 'paper', 'scissors']
  //define a variable to store random choice
  let computerInput = gameWords[Math.floor(Math.random()*3)]
  console.log(computerInput);
  // return a random choice
  return computerInput;
}


// Get the input form the player by prompt method and store it in the variable
function getPlayerChoice(){
  let choice = prompt("Enter paper, rock or scissors");
  return choice;
}
