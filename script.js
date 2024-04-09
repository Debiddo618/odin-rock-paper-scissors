let computerChoice;
let result;
const options = ["rock","paper","scissors"];


function getRandomChoice(){
    return options[Math.floor(Math.random()*options.length)];
}

function evaluateChoices(playerChoice, computerChoice){
    if(playerChoice.toLowerCase() === "rock"){
        if(computerChoice.toLowerCase() === "rock"){
            return "It is a tie!";
        }else if(computerChoice.toLowerCase() === "scissors"){
            return "You win! Rock beats Scissors";
        }else if(computerChoice.toLowerCase() === "paper"){
            return "You lose! Paper beats Rock";
        }else{
            return "Invalid Input";
        }
    }else if(playerChoice.toLowerCase() === "paper"){
        if(computerChoice.toLowerCase() === "paper"){
            return "It is a tie!";
        }else if(computerChoice.toLowerCase() === "scissors"){
            return "You lose! Scissors beats Paper";
        }else if(computerChoice.toLowerCase() === "rock"){
            return "You win! Paper beats Rock";
        }else{
            return "Invalid Input";
        }
    }else if(playerChoice.toLowerCase() === "scissors"){
        if(computerChoice.toLowerCase() === "scissors"){
            return "It is a tie!";
        }else if(computerChoice.toLowerCase() === "paper"){
            return "You win! Scissors beats Paper";
        }else if(computerChoice.toLowerCase() === "rock"){
            return "You lose! Rock beats Scissors";
        }else{
            return "Invalid Input";
        }
    }else{
        return "Invalid Input";
    }
}

function playGame(number){
    while(number){
        let playerChoice=prompt("Please enter Rock, Paper, or Scissors: ");
        playerChoice = playerChoice.toLowerCase();
        
        while(!options.includes(playerChoice)){
            playerChoice=prompt("Invalid Input! Please enter Rock, Paper, or Scissors: ");
            playerChoice = playerChoice.toLowerCase();
        }
        computerChoice=getRandomChoice();
        result=evaluateChoices(playerChoice,computerChoice);
        console.log(playerChoice,computerChoice,result);
        number--;
    }
}

playGame(5);