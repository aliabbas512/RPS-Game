function getComputerChoice(){
    let arr = ["Rock", "Paper", "Scissors"];
    let arr2 = arr[Math.floor(Math.random() * arr.length)];
    return arr2;
}

getComputerChoice();