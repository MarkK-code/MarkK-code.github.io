// Rock paper scissors
  
const choices = ["rock", "paper", "scissors"];
const prChoice = prompt("Please enter your choice: ").toLowerCase();

function computerPlay() {
    // random selection for computer of rock paper scissors
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
};

function play(playerChoice, computerChoice){
    // checking if player or computer choice won and returning message to user
    if (playerChoice == computerChoice){
        return("There is a tie.");
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        return("You Lose! Paper beats Rock");
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        return("You Won! Rock beats Scissors");
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        return("You Lose! Scissors beats Paper");
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        return("You Won! Paper beats Rock");
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        return("You Lose! Rock beats Scissors");
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        return("You Won! Scissors beats Paper");
    };
};

const pcChoice = computerPlay()

console.log(play(pcChoice, prChoice));
