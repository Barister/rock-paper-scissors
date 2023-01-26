//to make variables
let playerChoice;
let computerChoice;

let paper = "Paper";
let rock = "Rock";
let scissors = "Scissors";

let elements = [paper, rock, scissors];
 
//to make function for get PlayerChoice and validate choise

function getPlayerChoice() {
    playerChoice = window.prompt("Please choose your weapon! Paper, rock or scissors?");
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.substring(1);
    while (!elements.includes(playerChoice)) {
        console.log("wrongChoice: ", playerChoice);
        playerChoice = window.prompt("You chose the wrong weapon! Please paper, rock or scissors?");
        playerChoice = playerChoice[0].toUpperCase() + playerChoice.substring(1);
    }
    return playerChoice;
}

//to to make function for get computerChoice randomly

function getComputerChoice() {
    computerChoice = elements[Math.floor(Math.random() * 3)];
}


//to make a function to play one game: 

function playSingleRound() {
    let result;
    //execution to get rivals choices; 
    getPlayerChoice();
    console.log("playerChoice: ", playerChoice);

    getComputerChoice();    
    console.log("computerChoice: ", computerChoice);
    //  to compare competitor choices
    if (playerChoice == computerChoice) {
        result = "Draw!!!";
    }
    else if ((playerChoice == paper && computerChoice == rock) || (playerChoice == rock && computerChoice == scissors) || (playerChoice == scissors && computerChoice == paper)) {
        result = `Congratulations!  ${playerChoice} beats ${computerChoice}. You win!!!`;
    }
    else {
        result = `Oh, no! ${computerChoice} beats ${playerChoice}. Computer win!!! `;
    }
    console.log(result);
    return result;
}

//to make a func to play 5 times;

function game(times){
    for (let i = 0; i < times; i++) {
        playSingleRound();
        console.log("i:", i);
    }
    
    
}

//execution of func to play a game 5 times

game(5);
