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

// Function to get computers choice between rock, paper and scissors
function getComputerChoice()
{
    if (Math.random() <= 0.33333333)
    {
        console.log("Computer: Rock");
        return "Rock";
    }
    else if (Math.random() <= 0.66666666)
    {
        console.log("Computer: Paper");
        return "Paper";
    }
    else if (Math.random() <= 0.99999999)
    {
        console.log("Computer: Scissors");
        return "Scissors";
    }
}

// Function to get human choice between rock, paper, and scissors
function getUserChoice()
{
    return console.log(prompt("Enter rock, paper, or scissors: "));
}

// Variables to store user and computer choices
let userChoice = getUserChoice();
let computerChoice = getComputerChoice();

// Score tracking
let userScore = 0; 
let computerScore = 0;

// Play a round
function playRound(userChoice,  computerChoice)
{
    // compare user choice to computer choice
    if (userChoice.toLowerCase() === computerChoice.toLowerCase())
    {
        console.log("It's a tie!");
    }
}