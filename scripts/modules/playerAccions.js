function validatePlayerChoice(playerSelection) {
    return (
        playerSelection != `rock` &&
        playerSelection != `paper` &&
        playerSelection != `scissors`
    );
}
export function getPlayerChoice() {
    let playerSelection = prompt("elige opcion valida: ").toLocaleLowerCase();
    while (validatePlayerChoice(playerSelection)) {
        playerSelection = prompt(
            "Entrada no valida, elige entre rock, paper, scissors: "
        );
        console.log(playerSelection);
    }
    return playerSelection;
}
