// Rules: Rock beats scissors, scissors beats paper, paper beats rock.

//ПРописать правила игры и переменные.
 //   КОнстанты: игрок, компьютер; камень, ножницы, бумага, и кто кого бьет
    let player;
    let computer;

// Перменные: выбор игрока, выбор компьютера
    let playerChoice;
    let computerChoice;
 
//Получить от игрока выбор предмета, которым он будет играть. Предложить варианты, проверить что выбор соответствует вариантам
//ПОлучить от компьютера выбор предмета, которым он будет играть. Сгенерировть случайный выбор из трех предметов.
    computerChoice = function getComputerChoice() {
        let choice;
        return choice;
    }

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
            result = "Oh, no! Compurer win!!!"
        }
        console.log(result);
    }
    
