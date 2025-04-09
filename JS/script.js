/*
 * Rock Paper Scissors
 * Choose option (rock, paper, or scissors)
 * Run user option against randomly generated one
 * If rock v. paper: paper wins
 * If rock v. scissors: rock wins
 * if rock v. rock: tie
 * etc.
 */

/*
 * Math.random() returns 0 < 1
 * 0 <= 0.33 will return rock
 * 0.34 < = 0.66 will return paper
 * 0.67 will return scissors
 */

// CONSTANTS
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

// Function to get human choice between rock, paper, and scissors
function getUserChoice()
{
    return prompt("Enter rock, paper, or scissors: ");
}

// Function to get computers choice between rock, paper and scissors
function getComputerChoice()
{
    if (Math.random() <= 0.33333333)
    {
        return "Rock";
    }
    else if (Math.random() <= 0.66666666)
    {
        return "Paper";
    }
    else if (Math.random() <= 0.99999999)
    {
        return "Scissors";
    }
}

// Play a round
function playRound(userChoice,  computerChoice, userScore, computerScore)
{
    console.log(`You: ${userChoice.replace(userChoice[0], userChoice[0].toUpperCase())}`);
    console.log(`Computer: ${computerChoice}`);

    // compare user choice to computer choice
    if (userChoice.toLowerCase() === computerChoice.toLowerCase())
    {
        console.log("It's a tie!");
    }
    else if (userChoice.toLowerCase() === ROCK && computerChoice.toLowerCase() === PAPER || userChoice.toLowerCase() === PAPER && computerChoice.toLowerCase() === SCISSORS || userChoice.toLowerCase() === SCISSORS && computerChoice.toLowerCase() === ROCK)
    {
        console.log("You lost!");
        computerScore++;
    }
    else if (userChoice.toLowerCase() === ROCK && computerChoice.toLowerCase() === SCISSORS || userChoice.toLowerCase() === PAPER && computerChoice.toLowerCase() === ROCK || userChoice.toLowerCase() === SCISSORS && computerChoice.toLowerCase() === PAPER)
    {
        console.log("You won!");
        userScore++;
    }
    else
    {
        console.log("Error, check spelling.");
    }

    return{
        userScore,
        computerScore
    };
}

function playGame(){
    // Score tracking
    let userScore = 0; 
    let computerScore = 0;

    for (let round = 1; round <= 5; round++)
    {
        // Indicate what round the loop is on
        console.log(`Round ${round}`);

        // Initiate round
        let result = playRound(getUserChoice(), getComputerChoice(), userScore, computerScore);

        // Increments user and computers score
        userScore = result.userScore;
        computerScore = result.computerScore;

        // Display scores
        console.log(`Your score: ${userScore}`);
        console.log(`Computer score: ${computerScore}`);

        // Empty space to increase readability
        console.log("");
    }
}

playGame();
