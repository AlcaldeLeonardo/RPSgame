function validatePlayerChoice(playerSelection) {
    return (
        playerSelection != `rock` &&
        playerSelection != `paper` &&
        playerSelection != `scissors`
    );
}
export function getPlayerChoice() {
    let playerSelection = prompt("Choose a valid option (rock, paper or scissors): ").toLocaleLowerCase();
    while (validatePlayerChoice(playerSelection)) {//It is necessary to validate the player's choice before even continuing with the process
        playerSelection = prompt(
            "Invalid entry, choose again (rock, paper or scissors): "
        );
    }
    return playerSelection;
}