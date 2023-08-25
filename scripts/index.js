import { game } from "./modules/gameEngine.js";


(()=>{
    const $btnStart =  document.getElementById("startGame");
    
    $btnStart.addEventListener(`click`, game);
})();