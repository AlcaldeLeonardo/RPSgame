function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

export function getComputerChoice() {
    let choice = getRandomNumber();

    if (choice == 0) return `rock`;
    else if (choice == 1) return `paper`;
    else return `scissors`;
}

//getComputerChoice convert de getRandomNumber()'s return to a string