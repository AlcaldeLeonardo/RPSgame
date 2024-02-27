import { getComputerChoice } from "./computerAccions.js";
import { getPlayerChoice } from "./playerAccions.js";

const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");


function SwitchMenu(oldMenu, newMenu) {
    [oldMenu.className, newMenu.className] = [
        newMenu.className.replace(`visible`, `nonVisible`),
        oldMenu.className.replace(`nonVisible`, `visible`),
    ];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("There was a tie, choose again:");
        return `tie`
    }

    if (
        (playerSelection == `rock` && computerSelection == `scissors`) ||
        (playerSelection == `scissors` && computerSelection == `paper`) ||
        (playerSelection == `paper` && computerSelection == `rock`)
    ) {
        alert(`You Win!! ${playerSelection} beat ${computerSelection}`);
        return `win`;
    } else {
        alert(`You Lose!! ${computerSelection} beat ${playerSelection}`);
        return `lose`;
    }
    //I am sure that there is a better way to do this logic but it is the one that occurred to me for now
}

export function game() {
    let scoreComputer = 0;
    let scorePlayer = 0;
    let roundResult;
    let round = 1;

    const startMenu = document.querySelector("#startMenu");
    const gamingMenu = document.querySelector("#gamingMenu");

    SwitchMenu(startMenu, gamingMenu);


    btnRock.addEventListener(`click`, ()=> {
        playRound(`rock`, getComputerChoice())
    })
    btnPaper.addEventListener(`click`, ()=> {
        playRound(`paper`, getComputerChoice())
    })
    btnScissors.addEventListener(`click`, ()=> {
        playRound(`scissors`, getComputerChoice())
    })

    // while (scorePlayer < 3 && scoreComputer < 3) {
    //     alert(
    //         `Round - ${round}\n\n PLAYER ${scorePlayer} - ${scoreComputer} COMPUTER`
    //     );

    //     roundResult = playRound(getPlayerChoice(), getComputerChoice());
    //     if (roundResult == `win`) scorePlayer += 1;
    //     else scoreComputer += 1;

    //     round += 1;
    // }
    // alert(`PLAYER ${scorePlayer} - ${scoreComputer} COMPUTER`);
    // if (scorePlayer > scoreComputer) alert(`YOU WIN!!!!!`);
    // else alert(`SORRY, YOU LOSE`);
}
