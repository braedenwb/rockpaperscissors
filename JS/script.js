/*
    Pseudocode for DOM

    Add 3 buttons listeners to listen for user input
    Store the score element in a variable
    When a button is pressed log that button as the users choice (ex. "rock")

    Repeat 5 times
    Start a round using the users choice and a randomly generated computer choice
    The winner is added to the scoring section

    Figure out winner and append to a text that says result (ex. "You Won!")
*/




const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

function getUserChoice()
{
    // return prompt("Enter rock, paper, or scissors: ");
}

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
    else
    {
        return "Scissors";
    }
}

function playRound(userChoice,  computerChoice, userScore, computerScore)
{
    console.log(`You: ${userChoice.replace(userChoice[0], userChoice[0].toUpperCase())}`);
    console.log(`Computer: ${computerChoice}`);

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

    let userScore = 0; 
    let computerScore = 0;

    for (let round = 1; round <= 5; round++)
    {
        console.log(`Round ${round}`);

        let result = playRound(getUserChoice(), getComputerChoice(), userScore, computerScore);

        userScore = result.userScore;
        computerScore = result.computerScore;

        console.log(`Your score: ${userScore}`);
        console.log(`Computer score: ${computerScore}`);

        console.log("");
    }

    if (userScore > computerScore)
    {
        console.log("You won!");
    }
    else if (userScore < computerScore)
    {
        console.log("You lost!");
    }
    else
    {
        console.log("It's a tie!");
    }
}

playGame();
