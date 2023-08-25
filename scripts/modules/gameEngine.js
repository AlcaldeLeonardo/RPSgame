import { getComputerChoice } from "./computerAccions.js";
import { getPlayerChoice } from "./playerAccions.js";

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);

    while (playerSelection === computerSelection) {
        alert("Hubo un empate, vuelve a elegir")
        computerSelection = getComputerChoice();
        console.log(`la computadora eligio: ${computerSelection}`);
        playerSelection = getPlayerChoice();
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
//funcion que lanza el round


//PROGRAMA PRINCIPAL
export function game() {
    let playerSelection;
    let scoreComputer = 0;
    let scorePlayer = 0;
    let roundResult;
    let round = 1;

    while (round <= 5) {
        alert(`Round - ${round}`)
        playerSelection = getPlayerChoice();

        console.log(round);
        roundResult = playRound(
            playerSelection,
            getComputerChoice()
        );
        if (roundResult == `win`) scorePlayer += 1;
        else scoreComputer += 1;

        console.log(scorePlayer, scoreComputer);
        round += 1;
    }
    if(scorePlayer > scoreComputer) console.log(`YOU WIN!!!!!`)
    else console.log(`SORRY, YOU LOSE`)
}