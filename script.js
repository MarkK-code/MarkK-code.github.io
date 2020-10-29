// Rock paper scissors game

// options of rock paper scissors for pc
const choices = ["Rock", "Paper", "Scissors"];

var playerChoice = "xxx";
var pcScore = 0;
var playerScore = 0;
var tie = 0;

//geting elements from dom
const buttonRock = document.getElementById('rock');
const buttonPaper = document.getElementById('paper');
const buttonScissors = document.getElementById ('scissors');

const clickScore = document.getElementById('playerScore');
const compScore = document.getElementById('pcScore');

const winning = document.getElementById('winning');


function scoring(){
    clickScore.innerText = pcScore;
    compScore.innerText = playerScore;
}

// const prChoice = prompt("Please enter your choice: ").toLowerCase();

function computerPlay() {
    // random selection for computer of options rock paper scissors
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
};

function play(playerChoice, computerChoice){
    // checking if player or computer choice won and returning message to user
    if (playerChoice == computerChoice){
        tie += 1;
        return("There is a tie.");
    } else if (playerChoice == "Rock" && computerChoice == "Paper" || playerChoice == "Paper" && computerChoice == "Scissors" || playerChoice == "Scissors" && computerChoice == "Rock") {
        playerScore += 1;
        return("You Lose! " + computerChoice + " beats " + playerChoice);
    } else if (playerChoice == "Rock" && computerChoice == "Scissors" || playerChoice == "Paper" && computerChoice == "Rock" || playerChoice == "Scissors" && computerChoice == "Paper") {
        pcScore += 1;
        return("You Won! " + playerChoice + " beats " + computerChoice);
    }
};

//changes playerChoice to clicked button on web
buttonRock.addEventListener('click', () =>{
    const result = play("Rock", computerPlay());
    winning.innerText = result;
    scoring();
    });   
buttonPaper.addEventListener('click', () =>{
    const result = play("Paper", computerPlay());
    winning.innerText = result;
    scoring();
    });
buttonScissors.addEventListener('click', () =>{
    const result = play("Scissors", computerPlay());
    winning.innerText = result;
    scoring();
    });
