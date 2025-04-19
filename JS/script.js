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

const rockButton = document.querySelector(".button-rock");
const paperButton = document.querySelector(".button-paper");
const scissorsButton = document.querySelector(".button-scissors");
const score = document.querySelector(".score");
const roundStatus = document.querySelector(".round-status");

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let userScore = 0; 
let computerScore = 0;

function getComputerChoice()
{
    if (Math.random() <= 0.33333333)
    {
        return ROCK;
    }
    else if (Math.random() <= 0.66666666)
    {
        return PAPER;
    }
    else
    {
        return SCISSORS;
    }
}

function playRound(userChoice)
{
    let computerChoice = getComputerChoice();

    console.log(userChoice);
    console.log(computerChoice);

    if (userChoice === computerChoice)
    {
        roundStatus.textContent = "It's a tie!";
    }
    else if (userChoice === ROCK && computerChoice === PAPER || userChoice === PAPER && computerChoice === SCISSORS || userChoice === SCISSORS && computerChoice === ROCK)
    {
        computerScore++;
        console.log("User: " + userScore);
        console.log("Computer: " + computerScore)
        roundStatus.textContent = "You lost!";
    }
    else
    {
        userScore++;
        console.log("User: " + userScore);
        console.log("Computer: " + computerScore)
        roundStatus.textContent = "You won!";
    }
}

function playGame()
{
    rockButton.addEventListener("click", () => {
        if (userScore < 3 && computerScore < 3)
        {
            playRound(ROCK);
        }
        else
        {
            return;
        }
    });
    paperButton.addEventListener("click", () => {
        if (userScore < 3 && computerScore < 3)
        {
            playRound(PAPER);
        }
        else
        {
            return;
        }
    });
    scissorsButton.addEventListener("click", () => {
        if (userScore < 3 && computerScore < 3)
        {
            playRound(SCISSORS);
        }
        else
        {
            return;
        }
    });
}

playGame();



// function playRound(userChoice, computerChoice, userScore, computerScore)
// {
//     console.log(userChoice);
//     console.log(computerChoice);

//     if (userChoice.toLowerCase() === computerChoice.toLowerCase())
//     {
//         console.log("It's a tie!");
//     }
//     else if (userChoice.toLowerCase() === ROCK && computerChoice.toLowerCase() === PAPER || userChoice.toLowerCase() === PAPER && computerChoice.toLowerCase() === SCISSORS || userChoice.toLowerCase() === SCISSORS && computerChoice.toLowerCase() === ROCK)
//     {
//         console.log("You lost!");
//         computerScore++;
//     }
//     else if (userChoice.toLowerCase() === ROCK && computerChoice.toLowerCase() === SCISSORS || userChoice.toLowerCase() === PAPER && computerChoice.toLowerCase() === ROCK || userChoice.toLowerCase() === SCISSORS && computerChoice.toLowerCase() === PAPER)
//     {
//         console.log("You won!");
//         userScore++;
//     }
//     else
//     {
//         console.log("Error, check spelling.");
//     }

//     return{
//         userScore,
//         computerScore
//     };
// }

// function playGame(userChoice){

//     for (let round = 1; round <= 5; round++)
//     {
//         console.log(`Round ${round}`);

//         let result = playRound(userChoice, getComputerChoice(), userScore, computerScore);

//         userScore = result.userScore;
//         computerScore = result.computerScore;

//         console.log(`Your score: ${userScore}`);
//         console.log(`Computer score: ${computerScore}`);

//         console.log("");
//     }

//     if (userScore > computerScore)
//     {
//         console.log("You won!");
//     }
//     else if (userScore < computerScore)
//     {
//         console.log("You lost!");
//     }
//     else
//     {
//         console.log("It's a tie!");
//     }
// }

// getUserChoice();