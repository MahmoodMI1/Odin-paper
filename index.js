const options = ["rock", "paper", "scissor"]

function getComputerChoice(){
    // A function that randomly chooses an option from the options list
    // Using the math libary get a random num from 0-1 then multiply it by the
    // number of options then round it up with the floor method                         
    const choise = options[Math.floor(Math.random() * options.length)];
    return choise
}



function checkWinner(playerSelection, computerSelection){
    // A function thet compair both the player and computer selection to decide the winner
    // returns the winner of the comparition or a Tie
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissor")||
        (playerSelection == "scissor" && computerSelection == "paper")||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else{
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    // a function that returns the the winner or the looser of the round
    // gets the result from the checkWinner function
    const result = checkWinner(playerSelection,computerSelection)

    if(result == "Tie"){
        return "It's a tie!"
    }
    else if(result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if(result == "Computer"){
        return `You Loose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoise(){
    let validatedInput = false;
    while (validatedInput == false){
        const choice = prompt("Rock Paper Scissor");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }      
}
function game(){
    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome!")
    for(let i =0; i<5; i++){
        const playerSelection = getPlayerChoise();
        const computerSelection = getComputerChoice();
        //
        console.log(playRound(playerSelection, computerSelection));
        console.log("___________________")
        // adds score to the winner
        if (checkWinner(playerSelection, computerSelection) == "Player"){
            playerScore++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer"){
            computerScore++
        }
    }
    console.log("GameOver")
    //
    if(playerScore>computerScore){
        console.log("player was the winner!")  
    }
    else if(playerScore<computerScore){
        console.log("Computer was the winner!")
    }
    else{
        console.log("Tie")
    }
    

}
game()