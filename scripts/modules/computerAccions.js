function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

//funcion que toma la desicion de la computadora
export function getComputerChoice() {
    let choice = getRandomNumber();

    if (choice == 0) return `rock`;
    else if (choice == 1) return `paper`;
    else return `scissors`;
}