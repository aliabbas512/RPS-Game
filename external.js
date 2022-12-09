let arr = ["rock", "paper", "scissors"];
let computerSelection = getComputerChoice();

function getComputerChoice(){
    let arr2 = arr[Math.floor(Math.random() * arr.length)];
    return arr2;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper Beats Rock";
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "You Win! Scissors Beats Paper";
    } else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "You Win! Rock Beats Scissors";
    } else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You Win! Paper Beats Rock";
    } else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "You Lose! Scissors Beats Paper";
    } else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "You Lose! Rock Beats Scissors";
    } else if(playerSelection === computerSelection) {
        return "Match Draw! Try Again";
    } else {
        return "ERROR 404";
    }
}

let playerScore = 0;
let computerScore = 0;
let draw = 0;

function game(){
    let playerSelection = prompt("Enter Yours Choice").toLowerCase();
    
    for (let i = 0; i < 5; i++){
        return playRound(playerSelection, computerSelection);
    }
    if(playerScore > computerScore){
        return "WINNER";
    } else if(playerScore === computerScore){
        return "DRAW";
    } else {
        return "LOSER";
    }
}

game();