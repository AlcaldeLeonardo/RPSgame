import { getComputerChoice } from "./computerAccions.js";
import { getPlayerChoice } from "./playerAccions.js";

function playRound(playerSelection, computerSelection) {

    while (playerSelection === computerSelection) {
        alert("There was a tie, choose again:")
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();//getPlayerChoice() return a validate value
    }

    if (playerSelection == `rock` && computerSelection == `scissors`) {
        alert(`You Win!! ${playerSelection} beat ${computerSelection}`);
        return `win`;
    } else if (playerSelection == `rock` && computerSelection == `paper`) {
        alert(`You Lose!! ${playerSelection} beat ${computerSelection}`);
        return `lose`;
    } else if (playerSelection == `paper` && computerSelection == `rock`) {
        alert(`You Win!! ${playerSelection} beat ${computerSelection}`);
        return `win`;
    } else if (playerSelection == `paper` && computerSelection == `scissors`) {
        alert(`You Lose!! ${playerSelection} beat ${computerSelection}`);
        return `lose`;
    } else if (playerSelection == `scissors` && computerSelection == `paper`) {
        alert(`You Win!! ${playerSelection} beat ${computerSelection}`);
        return `win`;
    } else if (playerSelection == `scissors` && computerSelection == `rock`) {
        alert(`You Lose!! ${playerSelection} beat ${computerSelection}`);
        return `lose`;
    }
    //I am sure that there is a better way to do this logic but it is the one that occurred to me for now
}

export function game() {
    let playerSelection;
    let scoreComputer = 0;
    let scorePlayer = 0;
    let roundResult;
    let round = 1;

    while (round <= 5) {
        alert(`Round - ${round}\n\n PLAYER ${scorePlayer}- ${scoreComputer} COMPUTER`)
        playerSelection = getPlayerChoice();

        roundResult = playRound(
            playerSelection,
            getComputerChoice()
        );
        if (roundResult == `win`) scorePlayer += 1;
        else scoreComputer += 1;

        round += 1;
    }
    if(scorePlayer > scoreComputer) alert(`YOU WIN!!!!!`)
    else alert(`SORRY, YOU LOSE`)
}