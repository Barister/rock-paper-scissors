//to make variables
let playerChoice;
let computerChoice;

let paper = "paper";
let rock = "rock";
let scissors = "scissors";

let elements = [paper, rock, scissors];
 
// to getPlayerChoice and start playSingleRound

getPlayerChoice = document.querySelectorAll('button');

getPlayerChoice.forEach(element => element.addEventListener('click', function() { 
    if (playerChoice != 'blocked') {
        
        playerChoice = element.id;
    
        // to add image of playerChoice
        let playerChoiceImage = document.querySelector('div.player > img');
        
        playerChoiceImage.setAttribute('src', `img/${playerChoice}.jpg`);
        playerChoiceImage.setAttribute('alt', `${playerChoice}`);
        
        playSingleRound();

    }
    
}));


//old feat - to make function for get PlayerChoice and validate choise

/*

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

*/

//to make function for get computerChoice randomly

function getComputerChoice() {
    computerChoice = elements[Math.floor(Math.random() * 3)];

    //to add image of computerChoice
    let computerChoiceImage = document.querySelector('div.computer > img');
    
    computerChoiceImage.setAttribute('src', `img/${computerChoice}.jpg`);
    computerChoiceImage.setAttribute('alt', `${computerChoice}`);
    

}

// to determine selectors

let compare = document.querySelector('.vs p');
let playerResult = document.querySelector('.player__result');
let computerResult = document.querySelector('.computer__result');
let title = document.querySelector('.title h1');


// to determine actions after result of round

function draw() {
    compare.innerText = 'Draw';
    
}

function playerWin() {
    compare.innerHTML = `<p>You win</p><p>round</p>`;
    playerResult.innerText = playerResult.innerText / 1 + 1;
    if (playerResult.innerText == 5) {
        title.innerHTML = `<p>Congratulations!</p><p>You won the game!</p>`;
        playerChoice = 'blocked';
        
    }
}

function computerWin() {
    compare.innerHTML = `<p>You lose</p><p>round</p>`;
    computerResult.innerText = computerResult.innerText / 1 + 1;
    if (computerResult.innerText == 5) {
        title.innerHTML = `<p>Game over!</p><p>Computer won the game!</p>`;
        playerChoice = 'blocked';
        
    }
}
    

//to make a function to play one game: 

function playSingleRound() {
    
    getComputerChoice();    
    
    if (playerChoice == computerChoice) {
        
        draw();
    }
    else if ((playerChoice == paper && computerChoice == rock) || (playerChoice == rock && computerChoice == scissors) || (playerChoice == scissors && computerChoice == paper)) {
        
        playerWin();
    }
    else {
        
        computerWin();
    }
    
    if (playerResult.innerText < 5 && computerResult.innerText < 5 ) {
        title.innerHTML = `<p>Another round</p><p>Chose your weapon!</p>`;
    }
    
    
    
}

//old func - to make a func to play 5 times;

/*
function game(times){
    for (let i = 0; i < times; i++) {
        playSingleRound();
        console.log("i:", i);
    }
    
    
}
*/

//execution of func to play a game 5 times

// game(5);
