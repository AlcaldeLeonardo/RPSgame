import { getComputerChoice } from "./computerAccions.js";

const startMenu = document.querySelector("#startMenu");
const gamingMenu = document.querySelector("#gamingMenu");
const displayCom = document.querySelector("#scoreComputer")
const displayPlayer = document.querySelector("#scorePlayer")
const displayRound = document.querySelector("#roundCount")
const resultScreen = document.querySelector("#resultScreen")
const resultGame = document.querySelector("#result")

let btnRock = document.querySelector("#btnRock");
let btnPaper = document.querySelector("#btnPaper");
let btnScissors = document.querySelector("#btnScissors");

function cleanEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
}

export function SwitchMenu(oldMenu, newMenu) {
    [oldMenu.className, newMenu.className] = [
        newMenu.className.replace(`visible`, `nonVisible`),
        oldMenu.className.replace(`nonVisible`, `visible`),
    ];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("There was a tie, choose again:");
        return `tie`;
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
}

export function game() {
    let scoreComputer = 0;
    let scorePlayer = 0;
    let round = 1;

    displayCom.textContent = 0;
    displayPlayer.textContent = 0;
    displayRound.textContent = 1;

    function ScoreCount(result) {

        if (result === `win`) {
            scorePlayer = scorePlayer + 1;
        } else if (result === `lose`) scoreComputer = scoreComputer + 1;

        if (result !== `tie`) round += 1;

        displayCom.textContent = scoreComputer;
        displayPlayer.textContent = scorePlayer;
        displayRound.textContent = round;

    }

    function ShowResultScreen () {
        if(round > 5) {
            SwitchMenu(gamingMenu, resultScreen);
            if(scoreComputer > scorePlayer) {
                resultGame.textContent = "You Lose!"
            }else resultGame.textContent = "You Win"
        }
    }


    SwitchMenu(startMenu, gamingMenu);
    SwitchMenu(resultScreen, gamingMenu);

    btnRock = cleanEventListeners(btnRock);
    btnPaper = cleanEventListeners(btnPaper);
    btnScissors = cleanEventListeners(btnScissors);

    btnRock.addEventListener(`click`, () => {
        ScoreCount(playRound(`rock`, getComputerChoice()));
        ShowResultScreen();
    });
    btnPaper.addEventListener(`click`, () => {
        ScoreCount(playRound(`paper`, getComputerChoice()));
        ShowResultScreen();
    });
    btnScissors.addEventListener(`click`, () => {
        ScoreCount(playRound(`scissors`, getComputerChoice()));
        ShowResultScreen();
    });
}
