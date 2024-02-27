import { game } from "./modules/gameEngine.js";

(() => {
    const $btnStart = document.getElementById("startGame")
    const $btnAgain = document.getElementById("again")
    
    $btnStart.addEventListener(`click`, game);
    $btnAgain.addEventListener(`click`, game);

})();
