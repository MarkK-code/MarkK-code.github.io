let choices = ["rock", "paper", "scissors"];
let playerChoice = prompt("Please enter your choice: ").toLowerCase();
let computerChoice

function computerPlay() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length())];
}

console.log(playerChoice)
console.log(computerChoice)

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
getRandomInt(3)