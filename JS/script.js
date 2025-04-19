// ROCK PAPER SCISSORS

const rockButton = document.querySelector(".button-rock");
const paperButton = document.querySelector(".button-paper");
const scissorsButton = document.querySelector(".button-scissors");
const scoreTitle = document.querySelector(".score-title");
const score = document.querySelector(".score");
const roundStatus = document.querySelector(".round-status");
const gameWinner = document.querySelector(".game-winner");

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
    scoreTitle.textContent = "Score";

    let computerChoice = getComputerChoice();

    if (userChoice === computerChoice)
    {
        score.textContent = userScore + " - " + computerScore;
        roundStatus.textContent = "It's a tie!";
    }
    else if (userChoice === ROCK && computerChoice === PAPER || userChoice === PAPER && computerChoice === SCISSORS || userChoice === SCISSORS && computerChoice === ROCK)
    {
        computerScore++;
        score.textContent = userScore + " - " + computerScore;
        roundStatus.textContent = "You lost!";
    }
    else
    {
        userScore++;
        score.textContent = userScore + " - " + computerScore;
        roundStatus.textContent = "You won!";
    }

    if (userScore === 3)
    {
        roundStatus.textContent = "";
        gameWinner.textContent = "You won!";
    }
    else if (computerScore === 3)
    {
        roundStatus.textContent = "";
        gameWinner.textContent = "You lost!";
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