// Rules: Rock beats scissors, scissors beats paper, paper beats rock.

//ПРописать правила игры и переменные.
 //   КОнстанты: игрок, компьютер; камень, ножницы, бумага, и кто кого бьет

// Перменные: выбор игрока, выбор компьютера
    let playerChoice;
    let computerChoice;

    let paper = "paper";
    let rock = "rock";
    let scissors = "scissors";

    let elements = [paper, rock, scissors];
 
//Получить от игрока выбор предмета, которым он будет играть. Предложить варианты, проверить что выбор соответствует вариантам
    function getPlayerChoice() {
        playerChoice = scissors;
        
    }
//ПОлучить от компьютера выбор предмета, которым он будет играть. Сгенерировть случайный выбор из трех предметов.
    function getComputerChoice() {
        computerChoice = elements[Math.floor(Math.random() * 3)];
    }

    getPlayerChoice();
    console.log("playerChoice: ", playerChoice);

    getComputerChoice();    
    console.log("computerChoice: ", computerChoice);

// Сравнить предметы игрока и компьютера. Объявить победителя либо объявить ничью.
    function playSingleRound(playerChoice, computerChoice) {
        let result;
        if (playerChoice == computerChoice) {
            result = "Ничья!!!";
        }
        else if ((playerChoice == paper && computerChoice == rock) || (playerChoice == rock && computerChoice == scissors) || (playerChoice == scissors && computerChoice == paper)) {
            result = "Congratulations! You win!!!"
        }
        else {
            result = "Oh, no! Computer win!!!"
        }
        console.log(result);
    }

    playSingleRound(playerChoice, computerChoice);
    
