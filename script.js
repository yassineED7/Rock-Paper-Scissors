
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

//Write the logic to play the entire game
function playGame() {
    // Declare the players score variables
        let humanScore = 0;
        let computerScore = 0;
    // Write the logic to play a single round
    function playRound(humanChoice, computerChoice) {
        // Make humanChoice Case-insensitivity
        humanChoice = humanChoice.toLowerCase()

        if (humanChoice === computerChoice){
            return ["It's a Draw !!!", humanScore, computerScore]
        }

        const condition = (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper"));

        // Check if human wins
        if (condition) {
            // Check specific human choice to return the exact message
            return ["User WIN", ++humanScore, computerScore];
            // Check if computer wins
        } else {
            // Check specific human choice to show how it lost
            return ["Computer WIN", humanScore, ++computerScore];
        } 

    }

    console.log("---Game start ---");

    for (let i = 0; i < 5; i++) {
        console.log("Game: " + (i + 1));
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        // Print the choices in console
        console.log(`User choice: ${humanSelection}`);
        console.log(`Computer choice: ${computerSelection}`);

        const result = playRound(humanSelection, computerSelection);

        console.log(`R: ${result[0]} | humanScore: ${result[1]} computerScore: ${result[2]}`);
    }
    console.log("\n--- FINAL RESULT ---");
    if (humanScore > computerScore) {
        console.log(`🏆 You WIN the game! Final Score: ${humanScore} - ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`💻 Computer WINS the game! Final Score: ${humanScore} - ${computerScore}`);
    } else {
        console.log(`🤝 The entire game is a DRAW! Final Score: ${humanScore} - ${computerScore}`);
    }
}

playGame();