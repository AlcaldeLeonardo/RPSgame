console.log("Hola! soy la consola")


//FUNCIONES

    //Funcion que da un numero random
function getRandomNumber() {
    return Math.floor(Math.random()*3)
}


    //funcion que toma la desicion de la computadora
function getComputerChoice(){
    let choice = getRandomNumber();

    if(choice == 0) return `Rock`
    else if(choice == 1) return `Paper`
    else return `Scissors`
}


    //funcion que lanza el round
    function playRound(playerSelection, computerSelection) {
        console.log(playerSelection, computerSelection);
    
        
        while(playerSelection === computerSelection){
            computerSelection = getComputerChoice().toLocaleLowerCase();
            console.log(`la computadora eligio: ${computerSelection}`)
            playerSelection = prompt("Tied game, pick again").toLocaleLowerCase();
            while(validatePlayerChoice(playerSelection)){
                playerSelection = prompt("elige opcion valida: ")
                console.log(playerSelection);
            }
        }
    
        if (playerSelection == `rock` && computerSelection == `scissors`) {
            console.log(`You Win!! ${playerSelection} beat ${computerSelection}`)
            return `win`
        } else if (playerSelection == `rock` && computerSelection == `paper`) {
            console.log(`You Lose!! ${playerSelection} beat ${computerSelection}`)
            return `lose`
        } else if (playerSelection == `paper` && computerSelection == `rock`) {
            console.log(`You Win!! ${playerSelection} beat ${computerSelection}`)
            return `win`
        } else if (playerSelection == `paper` && computerSelection == `scissors`) {
            console.log(`You Lose!! ${playerSelection} beat ${computerSelection}`)
            return `lose`
        } else if (playerSelection == `scissors` && computerSelection == `paper`) {
            console.log(`You Win!! ${playerSelection} beat ${computerSelection}`)
            return `win`
        } else if (playerSelection == `scissors` && computerSelection == `rock`) {
            console.log(`You Lose!! ${playerSelection} beat ${computerSelection}`)
            return `lose`
        }
    }
    
    function validatePlayerChoice(playerSelection){
        return (playerSelection != `rock` && playerSelection != `paper` && playerSelection != `scissors`);
    }
    
    
    
    
    //PROGRAMA PRINCIPAL
    function game(){
    
    }
    
    let playerSelection;
    
    do{
        playerSelection = prompt("elige opcion valida: ")
        console.log(playerSelection);
    }while(validatePlayerChoice(playerSelection));
    
    playRound(playerSelection,getComputerChoice().toLowerCase())