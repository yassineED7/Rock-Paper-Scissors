
// console.log("Hello word")

// Write the logic to get the computer choice
function getComputerChoice() {
    // Create a random number * 3 = (0, 1, 2)
    const randomNumber = Math.floor(Math.random() * 3);
    // Map the random number to rock, paper, or scissors
    if (randomNumber === 0) {
        return "rock";
    } if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
// Test the function using 
//console.log(getComputerChoice())

// Write the logic to get the human choice
function getHumanChoice() {
    // User input 
    const humanChoice = prompt("Rock, Paper, Scissors! What is your move?");
    // Return value 
    return humanChoice;
}
//Test the function using 
//console.log(getHumanChoice())

// Declare the players score variables
let  humanScore = 0;
let computerScore = 0;
let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round
function playRound(humanChoice, computerChoice) {
    // Make humanChoice Case-insensitivity
    humanChoice = humanChoice.toLowerCase()

    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            if (humanChoice === "rock"){ return ["User WIN: Rock beats Scissors!", ++humanScore, computerScore]}
            else if (humanChoice === "paper"){ return ["User WIN: Paper beats Rock!", ++humanScore, computerScore]}
            else{return ["User WIN: Scissors beats Paper!", ++humanScore, computerScore]}
    }else if ((humanChoice === "rock" && computerChoice === "paper") ||
             (humanChoice === "paper" && computerChoice === "scissors") ||
             (humanChoice === "scissors" && computerChoice === "rock")){
                if (humanChoice === "rock"){ return ["Computer WIN: Rock loses to Paper!", humanScore, ++computerScore]}
                else if (humanChoice === "paper"){ return ["Computer WIN: Paper loses to Scissors!", humanScore, ++computerScore]}
                else{return ["Computer WIN: Scissors loses to Rock!", humanScore, ++computerScore]}
    }else{
        return ["It's a Draw !!!", humanScore, computerScore]
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(`User choice: ${humanSelection}`);
console.log(`Computer choice: ${computerSelection}`);

const result = playRound(humanSelection, computerSelection);
console.log(`R: ${result[0]} | humanScore: ${result[1]} computerScore: ${result[2]}`);
