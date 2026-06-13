
console.log("Hello word")

// Write the logic to get the computer choice
function getComputerChoice (){
    // Create a random number * 3 = (0, 1, 2)
    const randomNumber = Math.floor(Math.random() * 3);
    // Map the random number to rock, paper, or scissors
    if (randomNumber === 0){
        return "rock";
    }if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
// Test the function using 
console.log(getComputerChoice())

// Write the logic to get the human choice
function getHumanChoice (){
    // User input 
    const humanChoice = prompt("Rock, Paper, Scissors! What is your move?");
    // Return value 
    return humanChoice;
}
//Test the function using 
console.log(getHumanChoice())

// Declare the players score variables
const humanScore = 0;
const computerScore = 0;
