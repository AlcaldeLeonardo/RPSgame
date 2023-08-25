console.log("Hola! soy la consola");

//FUNCIONES

//Funcion que da un numero random
function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

//funcion que toma la desicion de la computadora
function getComputerChoice() {
    let choice = getRandomNumber();

    if (choice == 0) return `pock`;
    else if (choice == 1) return `paper`;
    else return `scissors`;
}

function getPlayerChoice() {
    let playerSelection = prompt("elige opcion valida: ").toLocaleLowerCase();
    while (validatePlayerChoice(playerSelection)) {
        playerSelection = prompt(
            "Entrada no valida, elige entre rock, paper, scissors: "
        );
        console.log(playerSelection);
    }
    return playerSelection;
}

//funcion que lanza el round
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);

    while (playerSelection === computerSelection) {
        alert("Hubo un empate, vuelve a elegir")
        computerSelection = getComputerChoice().toLocaleLowerCase();
        console.log(`la computadora eligio: ${computerSelection}`);
        playerSelection = getPlayerChoice().toLocaleLowerCase;
    }

    if (playerSelection == `rock` && computerSelection == `scissors`) {
        console.log(`You Win!! ${playerSelection} beat ${computerSelection}`);
        return `win`;
    } else if (playerSelection == `rock` && computerSelection == `paper`) {
        console.log(`You Lose!! ${playerSelection} beat ${computerSelection}`);
        return `lose`;
    } else if (playerSelection == `paper` && computerSelection == `rock`) {
        console.log(`You Win!! ${playerSelection} beat ${computerSelection}`);
        return `win`;
    } else if (playerSelection == `paper` && computerSelection == `scissors`) {
        console.log(`You Lose!! ${playerSelection} beat ${computerSelection}`);
        return `lose`;
    } else if (playerSelection == `scissors` && computerSelection == `paper`) {
        console.log(`You Win!! ${playerSelection} beat ${computerSelection}`);
        return `win`;
    } else if (playerSelection == `scissors` && computerSelection == `rock`) {
        console.log(`You Lose!! ${playerSelection} beat ${computerSelection}`);
        return `lose`;
    }
}

function validatePlayerChoice(playerSelection) {
    return (
        playerSelection != `rock` &&
        playerSelection != `paper` &&
        playerSelection != `scissors`
    );
}

//PROGRAMA PRINCIPAL
function game() {
    let playerSelection;
    let scoreComputer = 0;
    let scorePlayer = 0;
    let roundResult;
    let round = 1;

    while (round <= 5) {
        alert(`Round - ${round}`)
        let playerSelection = getPlayerChoice();

        console.log(round);
        roundResult = playRound(
            playerSelection,
            getComputerChoice().toLowerCase()
        );
        if (roundResult == `win`) scorePlayer += 1;
        else scoreComputer += 1;

        console.log(scorePlayer, scoreComputer);
        round += 1;
    }
}

const $btnStart =  document.getElementById("startGame");

$btnStart.addEventListener(`click`, game);